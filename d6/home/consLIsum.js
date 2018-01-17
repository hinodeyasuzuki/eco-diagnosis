﻿/*  2017/12/15  version 1.0
 * coding: utf-8, Tab as 4 spaces
 * 
 * Home Energy Diagnosis System Ver.6
 * consLIsum.js 
 * 
 * calculate consumption and measures related to light
 * 
 * License: http://creativecommons.org/licenses/LGPL/2.1/
 * 
 * @author Yasufumi Suzuki, Hinodeya Institute for Ecolife co.ltd.
 *								2011/01/21 original PHP version
 *								2011/05/06 ported to ActionScript3
 * 								2016/04/12 ported to JavaScript
 * 
 * init()			initialize, set parameters when construction
 * precalc()		called just before calc(), input data treatment and clear consumption data
 * calc()			main formula to calculate consumption
 * calc2nd()		called just after calc(), in case of need to use other consumption data
 * calcMeasure()	main formula to calculate measures
 * 
 */
 
//Inherited class of D6.ConsBase
D6.consLIsum = D6.object( D6.ConsBase );

D6.consLIsum.init =function() {
	this.lightTime = 6;					//standard light time hour/day

	this.performanceLED = 140;			//LED  lm/W
	this.performanceHF = 100;			//HF  lm/W
	this.performanceFlueciend = 70;		//fluorescent light  lm/W
	this.preformanceBulb = 15;			//bulb lm/W

	this.wattLivingBulb = 300;			//watt to use bulb in living
	this.wattLivingFlue = 70;			//watt to use fluorescent light in living
	this.wattLivingLED = 40;			//watt to use LED in living
	
	this.outdoorWatt = 150;				//sensor light (W)
	this.outdoorTime = 0.5;				//sensor light time hour
	this.sensorWatt = 2;				//sensor standby（W)
	
	//reduce rate to change bulb to fluorescent light
	this.reduceRateBulb = 1 - this.preformanceBulb/this.performanceFlueciend;

	//reduce rate to change fluorescent light to LED
	this.reduceRateCeiling = 1 - this.performanceFlueciend/this.performanceLED;	

	//reduce rate to change bulb to LED
	this.reduceRateLED = 1 - this.preformanceBulb/this.performanceLED;

	//construction setting
	this.consName = "consLIsum";   		//code name of this consumption 
	this.consCode = "";            		//short code to access consumption, only set main consumption user for itemize
    this.title = "照明";				//consumption title name
	this.orgCopyNum = 1;                //original copy number in case of countable consumption, other case set 0
	this.addable = "照明する部屋";		//add message
	this.groupID = "6";					//number code in items
	this.color = "#ffff00";				//color definition in graph
	this.countCall = "部屋目";			//how to point n-th equipment
	this.residueCalc = "sumup";			//calculate method	no/sumup/yes

    this.sumConsName = "consTotal";		//code name of consumption sum up include this
	this.sumCons2Name = "";				//code name of consumption related to this

	//guide message in input page
	this.inputGuide = "家全体での照明の使い方について";

};
D6.consLIsum.init();


D6.consLIsum.precalc = function(){
	this.clear();

	this.person =this.input( "i001", 3 );			//person
	this.lightType =this.input( "i501", 2 );		//living light　1bulb 2fluorescent 3LED
	this.otherRate =this.input( "i502", 3 );		//other room light use
	this.houseSize =D6.consShow["TO"].houseSize;	//floor size
};

D6.consLIsum.calc = function( ) {
	//living consumption　kWh/month
	if( this.lightType == 1 ) {
		this.sumWatt = this.wattLivingBulb;
	} else if ( this.lightType == 3 ) {
		this.sumWatt = this.wattLivingLED;
	} else {
		this.sumWatt = this.wattLivingFlue;
	}
	this.electricity =  this.sumWatt * this.lightTime / 1000 * 30;

	//other than living room, 0.2 times of living
	this.electricity *= ( Math.max( this.houseSize - 20, 0 ) / 20 * 0.2  + 1 );
	
	//consumption used in no person room, assume half time to living
	this.electricity *= ( Math.max( this.houseSize - 20, 0 ) / 20 * 0.5 * (this.otherRate / 10)  + 1 );

};


D6.consLIsum.calc2nd = function() {
	var electricity = this.electricity;	 //backup
	this.clear();

	//sum up all room
	for( var id in this.partCons ) {
		this.add( this.partCons[id] );
	}
	//maximum of total consumption and sum of rooms
	if ( electricity > this.electricity ){
		this.electricity = electricity;
	}
};

D6.consLIsum.calcMeasure = function() {
};

