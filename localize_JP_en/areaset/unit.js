﻿/*  2017/12/16  version 1.0
 * coding: utf-8, Tab as 4 spaces
 * 
 * Home Energy Diagnosis System Ver.6
 * unit.js 
 * 
 * any kind of unit related to energy type is defined here, change here
 * 
 * License: http://creativecommons.org/licenses/LGPL/2.1/
 * 
 * @author Yasufumi Suzuki, Hinodeya Institute for Ecolife co.ltd.
 *								2011/01/21 original PHP version
 *								2011/05/06 ported to ActionScript3
 * 								2016/04/12 ported to JavaScript
 */

D6.Unit = D6.Unit | {
	
	// co2 emission factor  kg-CO2/each unit
	co2 : {
		electricity:0.55,
		nightelectricity:0.55,
		sellelectricity:0.55,
		nagas:2.23,
		lpgas:5.98,
		kerosene:2.49,
		gasoline:2.32,
		lightoil:2.62,
		heavyoil:3,
		coal:0,
		biomass:0,
		hotwater:0,
		waste:0,
		water:0,
		gas:2.23,
		car:2.32
	},

	defaultPriceElectricity : 27,

	// unit price   yen(in Japan)/each unit
	price : {
		electricity:27,				// override in D6.area.setPersonArea by supplyer
		nightelectricity:10,
		sellelectricity:30,
		nagas:150,
		lpgas:500,
		kerosene:80,
		gasoline:130,
		lightoil:100,
		heavyoil:80,
		coal:0,
		biomass:0,
		hotwater:0,
		waste:0,
		water:0,
		gas:120,
		car:130
	},

	// intercept price when consumption is zero 	yen(in Japan)
	priceBase : {
		electricity:0,
		nightelectricity:2100,
		sellelectricity:0,
		nagas:1000,
		lpgas:1000,
		kerosene:0,
		gasoline:0,
		lightoil:0,
		heavyoil:0,
		coal:0,
		biomass:0,
		hotwater:0,
		waste:0,
		water:0,
		gas:800,
		car:0
	},
	
	// names ( dataset is now witten in Japanse )
	name : {
		electricity:"electricity",
		nightelectricity:"nightelectricity",
		sellelectricity:"sellelectricity",
		nagas:"nagas",
		lpgas:"lpgas",
		kerosene:"kerosene",
		gasoline:"gasoline",
		lightoil:"lightoil",
		heavyoil:"heavyoil",
		coal:0,
		biomass:0,
		hotwater:0,
		waste:0,
		water:0,
		gas:"都市gas",
		car:"car"
	},
	
	// unit discription text
	unitChar : {
		electricity:"kWh",
		nightelectricity:"kWh",
		sellelectricity:"kWh",
		nagas:"m3",
		lpgas:"m3",
		kerosene:"L",
		gasoline:"L",
		lightoil:"L",
		heavyoil:"L",
		coal:0,
		biomass:0,
		hotwater:0,
		waste:0,
		water:0,
		gas:"m3",
		car:"L"
	},
	
	// second energy(end-use)  kcal/each unit
	calorie : {
		electricity:860,
		nightelectricity:860,
		sellelectricity:860,
		nagas:11000,
		lpgas:36000,
		kerosene:8759,
		gasoline:8258,
		lightoil:9117,
		heavyoil:9000,
		coal:0,
		biomass:0,
		hotwater:0,
		waste:0,
		water:0,
		gas:11000,
		car:8258
	},

	// primary energy  MJ/each unit
	jules : {
		electricity:9.6,
		nightelectricity:9.6,
		sellelectricity:9.6,
		nagas:46,
		lpgas:60,
		kerosene:38,
		gasoline:38,
		lightoil:38,
		heavyoil:38,
		coal:0,
		biomass:0,
		hotwater:0,
		waste:0,
		water:0,
		gas:45,
		car:38
	},
	
	
	// costToCons( cost, energy_name, elecType, kw ) -----------------------------
	//		estimate consumption from cost, per month
	// parameters
	//		cost: energy fee/cost per month
	//		energy_name: energy code
	//		elecType: type of electricity supply
	//			1:従量電灯A, 2:従量電灯B、3:時間帯別、4:低圧、5:低圧総合、6:高圧 in Japan
	//		kw:	contract demand
	// return
	//		cons: energy consumption per month
	costToCons : function( cost, energy_name, elecType, kw )
	{
		var ret;
		if ( cost == -1 || cost == "" ) {
			ret = "";
		}
		if (energy_name != "electricity" || typeof(D6.area.elecPrice) == undefined ) {
			// not electricity or no regional parameters
			if ( cost < D6.Unit.priceBase[energy_name] * 2 ) {
				// estimation in case of nealy intercept price
				ret = cost / D6.Unit.price[energy_name] / 2;
			} else {
				// ordinal estimation
				ret = ( cost - D6.Unit.priceBase[energy_name] ) / D6.Unit.price[energy_name];
			}

		} else {
			//regional electricity
			if ( elecType < 0 || !elecType ) {
				if ( D6.consShow["TO"].allDenka ) {
					elecType = 3;
				} else {
					elecType = 1;
				}
			}
			var def = D6.area.elecPrice[elecType];
			ret = ( cost - kw * def[4] - def[3] ) / (( def[1] + def[2] ) / 2);
		}
		return ret;
	},
	
	
	//consToCost( cons, energy_name, elecType, kw ) -----------------------
	//		estimate cost from energy consumption
	// parameters
	//		cons: energy consumption per month
	//		energy_name: energy code
	//		elecType: type of electricity supply
	//			1:従量電灯A, 2:従量電灯B、3:時間帯別、4:低圧、5:低圧総合、6:高圧 in Japan
	//		kw:	contract demand
	// return
	//		cost: energy fee/cost per month, not include intercept price
	consToCost : function( cons, energy_name, elecType, kw )
	{
		var ret;

		if ( cons == -1 || cons == "" ) {
			ret = "";
		}
		if ( energy_name != "electricity" || typeof(D6.area.elecPrice) == undefined  ) {
			// this is rough method, multify only unit price
			// it will better to fix regionally
			ret = cons * D6.Unit.price[energy_name];

		} else {
			// electricity
			if ( elecType < 0 || !elecType ) {
				if ( D6.consShow["TO"].allDenka ) {
					elecType = 3;
				} else {
					elecType = 1;
				}
			}
			var def = D6.area.elecPrice[elecType];
			ret  = kw * def[4] + cons * ( def[1] + def[2] ) / 2;
			if( ret > def[3] * 2 ) {
				ret -= def[3];
			} else {
				ret /= 2;
			}
		}
		return ret;
	},
	
	// consToEnergy( cons, energy_name ) --------------------------------
	//		calculate energy from energy consumption 
	// parameters
	//		cons: energy consumption per month
	//		energy_name: energy code
	// return
	//		ret: energy MJ per month
	consToEnergy : function( cons, energy_name )
	{
		var ret;

		if ( cons == -1 || cons == "" ) {
			ret = "";
		}
		ret = cons * D6.Unit.jules[energy_name]/1000000;

		return ret;
	},
};

