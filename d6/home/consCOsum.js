/*  2017/12/14  version 1.0
 * coding: utf-8, Tab as 4 spaces
 * 
 * Home Energy Diagnosis System Ver.6
 * consCOsum.js 
 * 
 * calculate consumption and measures related to cooling of total home
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
D6.consCOsum = D6.object( D6.ConsBase );

D6.consCOsum.init = function() {
	this.coolLoadUnit_Wood = 220;			//standard wood house cool load（W/m2）
	this.coolLoadUnit_Steel = 145;			//standard steel house cool load（W/m2）
	this.apf = 4;							//APF Annual performance factor

	this.reduceRateSunCut = 0.1;			//reduce rate by sun cut

	//construction setting
	this.consName = "consCOsum";    	//code name of this consumption 
	this.consCode = "CO";            	//short code to access consumption, only set main consumption user for itemize
    this.title = "冷房";				//consumption title name
	this.orgCopyNum = 0;                //original copy number in case of countable consumption, other case set 0
	this.groupID = "2";					//number code in items
	this.color = "#0000ff";				//color definition in graph
	this.countCall = "";				//how to point n-th equipment

    this.sumConsName = "consTotal";		//code name of consumption sum up include this
	this.sumCons2Name = "";				//code name of consumption related to this

	//guide message in input page
	this.inputGuide = "家全体での冷房の使い方について";

};
D6.consCOsum.init();

D6.consCOsum.precalc = function() {
	this.clear();

	this.person =this.input( "i001", 3 );			//person number
	this.houseSize =this.input( "i003", 
			( this.person == 1 ? 60 : (80 + this.person * 10) ) );
													//space of house
	this.houseType = this.input( "i002", 1 );		//standalone / collective
	this.coolArea  = this.input( "i201", 0.5 );		//rate by space of cooling
	this.coolTime  = this.input( "i261", 4 );		//time
	this.coolTemp  = this.input( "i263", 27 );		//temperature
};
	
D6.consCOsum.calc = function() {
	var coolKcal = this.calcCoolLoad();

	//calc year average from seasonal average
	coolKcal *= D6.area.seasonMonth.summer / 12;

	//monthly electricity
	this.electricity =  coolKcal / this.apf / D6.Unit.calorie.electricity;
};


D6.consCOsum.calcMeasure = function() {
	//mCOsunCut
	this.measures["mCOsunCut"].calcReduceRate( this.reduceRateSunCut );

};


//cool load calculation kcal/month
//
//		cons.houseType : type of structure
//		cons.houseSize : floor size(m2)
//		cons.heatArea : area rate of heating(-)
D6.consCOsum.calcCoolLoad = function()
{
	var energyLoad = 0;

	var coolLoadUnit = 0;				//cool load kcal/m2/hr
	if ( this.houseType == 1 ) 
	{
		coolLoadUnit = this.coolLoadUnit_Wood;
	} else {
		coolLoadUnit = this.coolLoadUnit_Steel;
	}

	var coolArea_m2;				//area of cooling m2
	coolArea_m2 = this.houseSize * this.coolArea;
	if ( this.coolArea > 0.05 ) {
		coolArea_m2 = Math.max( coolArea_m2, 13 );		//minimun 13m2
	}

	var coolTime;					//time of cooling
	coolTime = this.coolTime;

	//coefficient of cooling
	var coolMonth = D6.area.seasonMonth.summer;
	var coolFactor = D6.area.getCoolFactor( coolMonth, coolTime );

	var coefTemp;					//difference by temperature
	coefTemp = ( 27 - this.coolTemp ) / 10 + 1;

	energyLoad = coolLoadUnit * coolFactor[0] *  coolArea_m2 * coolTime * 30 * coefTemp;

	return energyLoad;

};

