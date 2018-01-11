﻿/*  2017/12/14  version 1.0
 * coding: utf-8, Tab as 4 spaces
 * 
 * Home Energy Diagnosis System Ver.6
 * consCR.js 
 * 
 * calculate consumption and measures related to each car
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

//Inherited class of D6.consCRsum
D6.consCR = D6.object( D6.consCRsum );


D6.consCR.init = function() {
	//construction setting
	this.consName = "consCR";    		//code name of this consumption 
	this.consCode = "";            		//short code to access consumption, only set main consumption user for itemize
    this.title = "車両";				//consumption title name
	this.orgCopyNum = 1;                //original copy number in case of countable consumption, other case set 0
	this.groupID = "8";					//number code in items
	this.color = "#ee82ee";				//color definition in graph
	this.countCall = "台目";			//how to point n-th equipment

	//consCR is sub aggrigation, consCRtrip is connected to  consCRsum
    this.sumConsName = "";				//code name of consumption sum up include this
	this.sumCons2Name = "consCRsum";	//code name of consumption related to this

	//guide message in input page
	this.inputGuide = "保有する車ごとの性能・使い方について";
};
D6.consCR.init();

D6.consCR.precalc = function() {
	this.clear();
	
	this.carType = 		this.input( "i911"　+ this.subID , 1 );	//type of car
	this.performance = 	this.input( "i912"　+ this.subID , 12 );//performance km/L

	// car user
	this.user = 		this.input( "i913"　+ this.subID , this.subID　+ this.countCall );	
	this.ecoTier = 		this.input( "i914"　+ this.subID , 3 );	//eco tier

};

D6.consCR.calc = function() {
};

D6.consCR.calc2nd = function( ) {
	//calc by trip
	var trsum = 0;	
	var carnum = D6.consListByName["consCR"].length;
	var tripnum = D6.consListByName["consCRtrip"].length;
	for ( i=1 ; i<tripnum ; i++ ){
		trsum += D6.consListByName["consCRtrip"][i].car;
	}
	if ( trsum == 0 ){
		if ( this.subID == 0 ){
			//residure
			this.car = this.sumCons2.car;
		} else {
			//in case of no residue
			this.car *= Math.pow( 0.5, this.subID );
			if ( this.subID == carnum-1 ) {
				this.car *= 2;
			}
		}
	} else {
		//recalculate by rate of destination consumption, and calculated by gasoline
		this.car *= this.sumCons2.car / trsum;
	}
};


D6.consCR.calcMeasure = function() {
	//mCRreplace
	this.measures["mCRreplace"].calcReduceRate( (this.performanceNew - this.performanceNow ) / this.performanceNew );

	//mCRreplaceElec
	this.measures["mCRreplaceElec"].clear();
	this.measures["mCRreplaceElec"].electricity = this.performanceNow * this.car / this.performanceElec;

};

