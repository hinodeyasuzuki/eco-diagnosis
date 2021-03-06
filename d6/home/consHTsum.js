﻿/* 2017/12/14  version 1.0
 * coding: utf-8, Tab as 4 spaces
 * 
 * Home Energy Diagnosis System Ver.6
 * consHTsum.js 
 * 
 * calculate consumption and measures related to heating in cold area
 * 
 * License: http://creativecommons.org/licenses/LGPL/2.1/
 * 
 * @author Yasufumi Suzuki, Hinodeya Institute for Ecolife co.ltd.
 *								2011/01/21 original PHP version
 *								2011/05/06 ported to ActionScript3
 * 								2016/04/12 ported to JavaScript
 * 								2017/12/14 ver.1.0 set functions
 * 								2018/03/14 			global setting fix
 * 
 * init()			initialize, set parameters when construction
 * precalc()		called just before calc(), input data treatment and clear consumption data
 * calc()			main formula to calculate consumption
 * calc2nd()		called just after calc(), in case of need to use other consumption data
 * calcMeasure()	main formula to calculate measures
 * 
 */
 
//Inherited class of D6.ConsBase
D6.consHTsum = D6.object( D6.ConsBase );

D6.consHTsum.init = function() {
	//construction setting
	this.consName = "consHTsum";    	//code name of this consumption 
	this.consCode = "HT";            	//short code to access consumption, only set main consumption user for itemize
    this.title = "heating";				//consumption title name
	this.orgCopyNum = 0;                //original copy number in case of countable consumption, other case set 0
	this.groupID = "2";					//number code in items
	this.color = "#ff0000";				//color definition in graph
	this.countCall = "";			//how to point n-th equipment

    this.sumConsName = "consTotal";		//code name of consumption sum up include this
	this.sumCons2Name = "";				//code name of consumption related to this

	//guide message in input page
	this.inputGuide = "how to use the whole house heating";

	//common parameters related to heating
	this.heatMcal;						//heating energy (Mcal/month)
	this.heatACCalcMcal;				//in case of heated by air conditioner consumption

	this.heatLoadUnit_Wood = 220 * 1.25 * 0.82;		//average heat load in wood house (W/m2)
	this.heatLoadUnit_Steel = 145 * 1.25 * 0.82;	//average heat load in concrete house (W/m2)
	this.apf = 3;									//APF annual performance factor
	this.apfMax = 4.5;								//max performance

	this.reduceRateInsulation = 0.082;				//reduce rate by wall inslation
	this.reduceRateDouble = 0.124;					//reduce rate by double glasses
	this.reduceRateUchimado = 0.14;					//reduce rate by set inner grass
	this.reduceRateLowe = 0.16;						//reduce rate by Low-e grass
	this.reduceRateFilterCool= 0.05;				//reduce rate of cooling by 

	this.reduceRateFilter= 0.12;					//reduce rate by clean filter
	this.reduceRateDanran= 0.303;					//reduce rate by gathering family
};
D6.consHTsum.init();


//change Input data to local value 
D6.consHTsum.precalc = function() {
	this.clear();

	this.prefecture =this.input( "i021", 13 );		//prefecture
	this.heatArea = D6.area.getHeatingLevel(this.prefecture);

	this.person =this.input( "i001", 3 );			//person number
	this.houseType =this.input( "i002", 1 );		//standalone / collective
	this.houseSize =D6.consShow["TO"].houseSize;	//floor size

	this.heatSpace  =this.input( "i201",
			this.heatArea <= 2 ? 0.6 :
			this.heatArea == 3 ? 0.25 : 0.2
		);											//heating area m2
		
	this.heatEquip =this.input( "i202", -1 );		//heagin equipment
	this.heatTime  =this.input( "i204", 
			this.heatArea == 1 ? 24 :
			this.heatArea == 2 ? 10 :
			this.heatArea == 3 ? 6 : 6
		);											//heating time
	this.heatTemp  =this.input( "i205", 21 );		//heating templature setting
	this.priceEleSpring =this.input( "i0912", -1 );	//electricity charge in spring/fall
	this.priceEleWinter =this.input( "i0911", -1 );	//elecuricity charge in winter
	this.priceGasSpring =this.input( "i0922", -1 );	//gas chage in spring/fall
	this.priceGasWinter =this.input( "i0921", -1 );	//gas chage in winter
	this.consKeros =this.input( "i064", -1 );		//consumption of kerosene
	this.hotwaterEquipType = this.input( "i101", -1 );	//hot water templature

	this.performanceWindow =this.input( "i041", -1 );	//performance of window
	this.performanceWall =this.input( "i042", -1 );	//performance of wall insulation
	this.reformWindow =this.input( "i043", -1 );	//reform to change window
	this.reformfloor =this.input( "i044", -1 );		//reform to change floor

};

D6.consHTsum.calc = function() {
	//calculate heat energy
	var heatKcal = this.calcHeatLoad();

	//covert to montly by seasonal data
	heatKcal *= D6.area.seasonMonth.winter / 12;
	this.endEnergy = heatKcal;

	//guess of heat source
	if ( this.heatEquip <= 0 ) {
		if ( this.consKeros > 0 
			||D6.area.averageCostEnergy.kerosene > 1000 
		) {
			//kersene 
			this.heatEquip = 4;
		} else if ( this.priceGasWinter < 0 
				|| this.priceGasWinter > 4000 
		) {
			//gas
			this.heatEquip = 3;
		} else {
			//electricity
			this.heatEquip = 1;
		}
	}

	//calc residue
	var elecOver = 0;
	var coef = ( this.heatEquip == 1 ? this.apf : 1 );
	if ( this.heatEquip == 1 || this.heatEquip == 2 ) {
		if ( this.priceEleWinter > 0  ) {
			var priceMaxCons = this.priceEleWinter * 0.7
					/ D6.Unit.price.electricity 
					* D6.Unit.seasonMonth.winter / 12;
			if ( heatKcal / coef /D6.Unit.calorie.electricity > priceMaxCons ) {
				//in case that calculated electricity is more than fee
				var elecOver = heatKcal - priceMaxCons * coef *D6.Unit.calorie.electricity;
				heatKcal -= elecOver;
			}
		}
	}


	//estimate of heat source
	if ( this.heatEquip == 1 || this.heatEquip == 2 ) {
		//electricity / air conditioner
		this.mainSource = "electricity";
	} else if ( this.heatEquip == 3 ) {
		//gas
		this.mainSource = "gas";
	} else if ( this.heatEquip == 4 ) {
		//kerosene
		this.mainSource = "kerosene";
	} else {
		this.mainSource = this.sumCons.mainSource;
	}

	//calculate as air conditioner, calculate this value for change heat method
	this.calcACkwh = heatKcal / this.apf /D6.Unit.calorie.electricity;
	if ( this.mainSource == "electricity" && this.heatEquip != 2) {
		//set air conditioner
		this[this.mainSource] =  this.calcACkwh;
	} else {
		//other than air conditioner
		this[this.mainSource] =  heatKcal /D6.Unit.calorie[this.mainSource];
	}
	
	//estimate from fee
	var consbyprice = -1;
	
	//electricity
	consbyprice = ( this.priceEleWinter -this.priceEleSpring ) / D6.Unit.price.electricity;
	if ( this.priceEleSpring != -1 && this.priceEleWinter != -1) {
		if( this.hotwaterEquipType !=5 && this.hotwaterEquipType !=6 ) {
			this.electricity = ( this.electricity*2 + consbyprice ) / 3;
		}
	} else {
		this.electricity = ( this.electricity*4 + consbyprice ) / 5;		
	}

	//gas
	consbyprice = ( this.priceGasWinter -this.priceGasSpring ) / D6.Unit.price.gas;
	var gasover = 0;
	if ( this.priceGasSpring != -1 && this.priceGasWinter != -1) {
		if( this.hotwaterEquipType >=3 && this.hotwaterEquipType <=6 ) {	//not gas
			this.gas = ( this.gas*3 + consbyprice ) / 4;
		} else {
			this.gas = ( this.gas*2 + consbyprice ) / 3;
		}
	} else {
		this.gas = ( this.gas*4 + consbyprice ) / 5;
	}
	gasover = Math.max( 0,  this.gas - consbyprice );

	//kerosene
	var keroseneover = 0;
	if (this.consKeros != -1 && this.hotwaterEquipType != 3 && this.hotwaterEquipType != 4){
		consbyprice = this.consKeros / D6.Unit.price.kerosene;
		keroseneover = Math.max( 0,  this.kerosene - consbyprice );
		this.kerosene = consbyprice;
	}
	
	//fix electricity estimate is more than that of by fee
	if ( elecOver > 0 ) {
		//kerosene fix
		if (D6.Unit.areaHeating <= 4 && this.priceKeros > 0 ) {
			this.kerosene +=  elecOver *  D6.Unit.calorie.electricity /D6.Unit.calorie.kerosene;
		} else {
			this.gas +=  elecOver *  D6.Unit.calorie.electricity /D6.Unit.calorie.gas;
		}
	}
	//gas fix
	if (gasover>0){
		if( this.priceKeros > 0 ) {
			this.kerosene = Math.min( gasover * D6.Unit.calorie.gas / D6.Unit.calorie.kerosene, this.consKeros / D6.Unit.price.kerosene );
		} else {
			this.electricity +=  gasover * D6.Unit.calorie.gas / D6.Unit.calorie.electricity;
		}
	}
	//kerosene use estimate is more than fee
	if (keroseneover>0){
		this.electricity +=  keroseneover * D6.Unit.calorie.kerosene / D6.Unit.calorie.electricity;
	}
	
	//recalc after fix
	this.calcACkwh = heatKcal / this.apf /D6.Unit.calorie.electricity;
	if ( this.mainSource == "electricity" && this.heatEquip != 2) {
		//air conditioner
		this[this.mainSource] =  this.calcACkwh;
	} else {
		//other than air conditioner
		this[this.mainSource] =  heatKcal /D6.Unit.calorie[this.mainSource];
	}
};


D6.consHTsum.calc2nd = function( ) {
	var spaceK;
	var spaceG;
	var consHW = D6.consShow["HW"];
	var consTotal = D6.consShow["TO"];
	var consCK = D6.consShow["CK"];

	//amount of not fixed kerosene
	spaceK = Math.max( 0, consTotal.kerosene - consHW.kerosene );
	
	//amount of not fixed gas
	spaceG = Math.max( 0, 
			consTotal.gas - consHW.gas - consCK.gas );

	//in case of use kerosene for heat, check electricity usage
	if ( this.heatEquip == 4 ) {
		//in case kerosene estimate is more than fee
		if ( this.kerosene > spaceK ) {
			//heat consumption is over gas residue
			if ( this.kerosene - spaceK 
				> spaceG *D6.Unit.calorie.gas /D6.Unit.calorie.kerosene
			) {
				//estimate heat is supplied by electricity
				this.electricity = 
						( this.kerosene - spaceK ) 
						*D6.Unit.calorie.kerosene
						/D6.Unit.calorie.electricity;
				//not over 70% of winter electricity
				this.electricity = Math.min( this.electricity,
						D6.consShow["TO"].electricity
							* D6.consShow["TO"].seasonPrice["electricity"][0]	//winter
							/ D6.consShow["TO"].priceEle
							* D6.area.seasonMonth.winter / 12
							*0.7
					);
				this.kerosene = spaceK;
				this.gas = spaceG;
			} else {
				//in case to use gas residure
				this.gas = 
					( this.kerosene - spaceK ) 
					*D6.Unit.calorie.kerosene
					/D6.Unit.calorie.gas;
			this.kerosene = spaceK;
			}
		}
	}

	//kerosene cannot find suitable usage
	if ( spaceK > 0 ) {
		this.kerosene = spaceK;
	}

	//in case of use gas hetar
	if ( this.heatEquip == 3 ) {
		if ( this.gas > spaceG ) {
			this.electricity = 
						( this.gas - spaceG ) 
						*D6.Unit.calorie.gas
						/D6.Unit.calorie.electricity;
			this.gas = spaceG;
		}
	}

	//add electricity use in toilet
	this.electricity += D6.consListByName["consHWtoilet"][
	0].electricity;
};

//calculate heat load kcal/month
//
//		cons.houseType : type of house
//		cons.houseSize : floor size(m2)
//		cons.heatSpace : heat area rate(-)   room size(m2)
D6.consHTsum.calcHeatLoad = function(){
	var energyLoad = 0;

	// heat loss when templature difference between house and outside is 20 degree-C  kcal/h/m2
	var heatLoadUnit = this.heatLoadUnit_Wood;
	
	// cold area insulation standard
	if ( this.heatArea == 1 ){
		heatLoadUnit *= 0.3;
	} else if ( this.heatArea <= 2 ){
		heatLoadUnit *= 0.6;
	}

	//thickness of insulation
	if ( this.performanceWall >= 200 ){
		heatLoadUnit = this.heatLoadUnit_Wood * 0.2;
	} else if ( this.performanceWall >= 100 ){
		heatLoadUnit = this.heatLoadUnit_Wood * 0.4;
	} else if ( this.performanceWall >= 50 ){
		heatLoadUnit = this.heatLoadUnit_Wood * 0.7;
	} else if ( this.performanceWall >= 30 ){
		heatLoadUnit = this.heatLoadUnit_Wood;
	}

	// collective house heat load adjust
	if ( this.houseType == 2 ) 
	{
		heatLoadUnit *= this.heatLoadUnit_Steel / this.heatLoadUnit_Wood;
	}

	//heat floor/room size m2
	var heatArea_m2	= this.houseSize * this.heatSpace;
	if ( this.heatSpace > 0.05 ) {
		heatArea_m2 = Math.max( heatArea_m2, 13 );		//minimum 13m2
	}

	//heat factor by month and hours
	var heatMonth = D6.area.seasonMonth.winter;
	var heatFactor = D6.area.getHeatFactor( heatMonth, this.heatTime );

	//heat time adjust for long time use
	var heatTimeFactor = Math.min( this.heatTime, (this.heatTime - 8 ) * 0.3 + 8) / this.heatTime;

	//coefficient by templature
	var coefTemp = ( this.heatTemp - 20 ) / 10 + 1;

	energyLoad = heatLoadUnit * heatFactor[1] * heatArea_m2 * this.heatTime * heatTimeFactor * 30 * coefTemp;

	return energyLoad;
};

//calculate heat load by fee
D6.consHTsum.calcHeatLoadbyPrice = function(){
	var energyLoad = 0;
	return energyLoad;
};

//adjust heat load 
D6.consHTsum.calcAdjustStrategy = function( energyAdj ){
	this.calcACkwh *= energyAdj[this.mainSource];
	this.endEnergy *= energyAdj[this.mainSource];
};

D6.consHTsum.calcMeasure = function() {
	//mHTdoubleGlassAll
	if ( !this.isSelected( "mHTuchimadoAll" ) && 
		!this.isSelected( "mHTloweAll" ) && 
		this.houseType != 2
	){
		this.measures["mHTdoubleGlassAll"].calcReduceRate( this.reduceRateDouble );
	}
	//mHTuchimadoAll
	if (  !this.isSelected( "mHTloweAll" ) ){
		this.measures["mHTuchimadoAll"].calcReduceRate( this.reduceRateUchimado );
	}
	//mHTloweAll
	if (  this.houseType != 2){
		this.measures["mHTloweAll"].calcReduceRate( this.reduceRateLowe );
	}
};



