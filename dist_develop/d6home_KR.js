/*  2017/12/16  version 1.0
 * coding: utf-8, Tab as 4 spaces
 * 
 * Home Energy Diagnosis System Ver.6
 * acadd.js for override
 * 
 * AreaParameters acadd: additional heat load cannot supply with  air conditioner
 * 
 * License: http://creativecommons.org/licenses/LGPL/2.1/
 * 
 * @author Yasufumi Suzuki, Hinodeya Institute for Ecolife co.ltd.
 *								2011/01/21 original PHP version
 *								2011/05/06 ported to ActionScript3
 * 								2016/04/12 ported to JavaScript
 * 								2017/12/16 ver.1.0 set functions
 * 								2018/03/14 			global setting fix
 */

D6.patch( D6.acadd, {
// getArray(param)  return paramArray
//		param: prefecture(original)
//
//  return acadd[time_slot_index][heat_month_index]
//
//		time_slot_index:
//				0:morning
//				1:noon
//				2:evening
//				3:night
//		heat_month_index
//				0:use heat for a half month
//				1:use heat for one month
//				2:use heat for 2 months
//				3:use heat for 3 months
//				4:use heat for 4 months
//				5:use heat for 6 months
//				6:use heat for 8 months
//
// this data is transformed by AMEDAS ( meteorological data ) in Japan
//
// factorPrefTimeMonth[Prefecture Code][Time Code][Month Code]
//
// used in Unit.setArea() function and set Unit.plusHeatFactor_mon
//
factorPrefTimeMonth : [

	[ [ 0.17, 0.16, 0.14, 0.12, 0.09, 0.06, 0.05],   //hokkaido
	  [ 0.06, 0.05, 0.04, 0.04, 0.03, 0.02, 0.01], 
	  [ 0.09, 0.09, 0.07, 0.06, 0.04, 0.03, 0.02], 
	  [ 0.16, 0.15, 0.13, 0.11, 0.09, 0.06, 0.04] ], 

	[ [ 0.17, 0.16, 0.14, 0.12, 0.09, 0.06, 0.05],   //hokkaido
	  [ 0.06, 0.05, 0.04, 0.04, 0.03, 0.02, 0.01], 
	  [ 0.09, 0.09, 0.07, 0.06, 0.04, 0.03, 0.02], 
	  [ 0.16, 0.15, 0.13, 0.11, 0.09, 0.06, 0.04] ], 
	  
    [ [ 0, 0, 0, 0, 0, 0, 0],   //tokyo
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ] 
	  
]

});

/*  2017/12/16  version 1.0
 * coding: utf-8, Tab as 4 spaces
 * 
 * Home Energy Diagnosis System Ver.6
 * accons.js  for override
 * 
 * AreaParameters  accons: electricity consumption rate of air conditioner used as heater
 * 
 * License: http://creativecommons.org/licenses/LGPL/2.1/
 * 
 * @author Yasufumi Suzuki, Hinodeya Institute for Ecolife co.ltd.
 *								2011/01/21 original PHP version
 *								2011/05/06 ported to ActionScript3
 * 								2016/04/12 ported to JavaScript
 * 								2017/12/16 ver.1.0 set functions
 * 								2018/03/14 			global setting fix
 */
 
D6.patch( D6.accons, {
// getArray(param)  return paramArray
//		param: prefecture(original)
//
//  return accons[time_slot_index][heat_month_index]
//
//		time_slot_index:
//				0:morning
//				1:noon
//				2:evening
//				3:night
//		heat_month_index
//				0:use heat for a half month
//				1:use heat for one month
//				2:use heat for 2 months
//				3:use heat for 3 months
//				4:use heat for 4 months
//				5:use heat for 6 months
//				6:use heat for 8 months
//

factorPrefTimeMonth : [

[ [ 1.24, 1.22, 1.21, 1.18, 1.13, 0.94, 0.77, 0.06, 0.05, 0.03, 0.02, 0.02],   //sapporo
  [ 1.14, 1.13, 1.1, 1.05, 0.98, 0.8, 0.67, 0.2, 0.17, 0.13, 0.1, 0.08], 
  [ 1.2, 1.19, 1.16, 1.13, 1.06, 0.88, 0.72, 0.1, 0.08, 0.05, 0.04, 0.03], 
  [ 1.24, 1.22, 1.21, 1.18, 1.13, 0.95, 0.79, 0.03, 0.02, 0.01, 0.01, 0.01] ], 
  
[ [ 1.24, 1.22, 1.21, 1.18, 1.13, 0.94, 0.77, 0.06, 0.05, 0.03, 0.02, 0.02],   //sapporo
  [ 1.14, 1.13, 1.1, 1.05, 0.98, 0.8, 0.67, 0.2, 0.17, 0.13, 0.1, 0.08], 
  [ 1.2, 1.19, 1.16, 1.13, 1.06, 0.88, 0.72, 0.1, 0.08, 0.05, 0.04, 0.03], 
  [ 1.24, 1.22, 1.21, 1.18, 1.13, 0.95, 0.79, 0.03, 0.02, 0.01, 0.01, 0.01] ], 
  
[ [ 0.64, 0.63, 0.6, 0.55, 0.5, 0.41, 0.37, 0.31, 0.28, 0.25, 0.21, 0.16],   //tokyo
  [ 0.39, 0.37, 0.35, 0.32, 0.29, 0.26, 0.25, 0.62, 0.57, 0.52, 0.45, 0.37], 
  [ 0.42, 0.4, 0.39, 0.36, 0.33, 0.28, 0.26, 0.43, 0.4, 0.37, 0.32, 0.26], 
  [ 0.58, 0.56, 0.54, 0.5, 0.46, 0.38, 0.34, 0.25, 0.23, 0.21, 0.17, 0.13] ]
  ]
  
});

 
/*  2017/12/16  version 1.0
 * coding: utf-8, Tab as 4 spaces
 * 
 * Home Energy Diagnosis System Ver.6
 * accons.js  for override
 * 
 * AreaParameters  acload: heat load of house 
 * 
 * License: http://creativecommons.org/licenses/LGPL/2.1/
 * 
 * @author Yasufumi Suzuki, Hinodeya Institute for Ecolife co.ltd.
 *								2011/01/21 original PHP version
 *								2011/05/06 ported to ActionScript3
 * 								2016/04/12 ported to JavaScript
 * 								2017/12/16 ver.1.0 set functions
 * 								2018/03/14 			global setting fix
 */
 
D6.patch( D6.acload, {
// getArray(param)  return paramArray
//		param: prefecture(original)
//
//  return acloat[time_slot_index][heat_month_index]
//
//		time_slot_index:
//				0:morning
//				1:noon
//				2:evening
//				3:night
//		heat_month_index
//				0:use heat for a half month
//				1:use heat for one month
//				2:use heat for 2 months
//				3:use heat for 3 months
//				4:use heat for 4 months
//				5:use heat for 6 months
//				6:use heat for 8 months
//
//

factorPrefTimeMonth: [
[ [ 1.06, 1.05, 1.03, 1, 0.95, 0.95, 0.82, 0.09, 0.09, 0.05, 0.03, 0.02],   //sapporo
  [ 0.93, 0.92, 0.9, 0.87, 0.83, 0.7, 0.59, 0.27, 0.23, 0.18, 0.14, 0.11], 
  [ 0.99, 0.98, 0.96, 0.93, 0.88, 0.76, 0.64, 0.14, 0.11, 0.07, 0.05, 0.04], 
  [ 1.05, 1.04, 1.02, 0.99, 0.95, 0.83, 0.7, 0.04, 0.03, 0.02, 0.01, 0.01] ], 
  
[ [ 1.06, 1.05, 1.03, 1, 0.95, 0.95, 0.82, 0.09, 0.09, 0.05, 0.03, 0.02],   //sapporo
  [ 0.93, 0.92, 0.9, 0.87, 0.83, 0.7, 0.59, 0.27, 0.23, 0.18, 0.14, 0.11], 
  [ 0.99, 0.98, 0.96, 0.93, 0.88, 0.76, 0.64, 0.14, 0.11, 0.07, 0.05, 0.04], 
  [ 1.05, 1.04, 1.02, 0.99, 0.95, 0.83, 0.7, 0.04, 0.03, 0.02, 0.01, 0.01] ], 


[ [ 0.63, 0.62, 0.6, 0.57, 0.53, 0.53, 0.44, 0.43, 0.43, 0.35, 0.28, 0.23],   //tokyo
  [ 0.44, 0.42, 0.4, 0.37, 0.34, 0.3, 0.29, 0.75, 0.7, 0.63, 0.56, 0.47], 
  [ 0.48, 0.45, 0.44, 0.41, 0.37, 0.32, 0.3, 0.58, 0.54, 0.5, 0.43, 0.35], 
  [ 0.6, 0.58, 0.56, 0.53, 0.5, 0.41, 0.37, 0.36, 0.33, 0.3, 0.24, 0.19] ]
]



} );

/**
* Home-Eco Diagnosis for JavaScript
* AreaParameters area: parameters by prefecture for home
* 
* @author Yasufumi SUZUKI  2011/04/15 Diagnosis5
*								2011/05/06 actionscript3
* 								2016/04/12 js
*/

D6.patch( D6.area , {

	//name of prefecture/city
	//	prefName[prefectureid/cityid]
	//
	//都道府県名
	prefName : [ 
		'서울',	//ソウル　：　札幌
		'서울',	//ソウル　：　札幌
		"부산"	//釜山　　：　東京
	],

	prefDefault : 1,	//not selected

	// heat category with prefecture
	//	prefHeatingLevel[prefecture]
	//
	//	return code
	//		1:cold area in Japan(Hokkaido)
	//			.
	//			.
	//		6:hot area in Japan(Okinawa)
	//
	//
	prefHeatingLevel : [ 
		2, //2,-10,31,22"서울",			//2	札幌 -1,-7, 27,19
		2, //2,-10,31,22"서울",			//2	札幌 -1,-7, 27,19
		5, //8,1,32,25	'부산'			//5 東京 10, 1, 31, 23
 	],

								
	// CO2 emittion factor
	//	co2ElectCompanyUnit[elec_company]
	//
	//	elec_company
	//		1:hokkaido electric power company.
	//			.
	//			.
	//		9:okinawa electric power company.
	//
	co2ElectCompanyUnit : [ 0.55, 0.55, 0.55, 0.55, 0.55, 0.55
										, 0.55, 0.55, 0.55, 0.55, 0.55 ],

	//	electricity company code by prefecture
	//
	//	prefToEleArea[prefecture]
	//
	//都道府県の電力会社コード
	// 0:北海道、1:東北電力 2:東京電力 3:中部電力 4:北陸電力 5:関西電力
	// 6:中国電力 7:四国電力 8:九州電力 9:沖縄電力
	prefToEleArea : [ 2,
				2, 2, 2, 2, 2, 2, 2,
				2, 2, 2, 2, 2, 2, 2,
				1, 4, 4, 4, 2, 3, 3, 3, 3,
				3, 5, 5, 5, 5, 5, 5,
				6, 6, 6, 6, 6, 7, 7, 7, 7,
				8, 8, 8, 8, 8, 8, 8, 9 ],

	//electricity supply company price ratio
	electCompanyPrice : [
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1
	],


	//	electricity charge unit table
	//
	//	elecPrice[electicity_type][calc_type]
	//
	//	electicity_type
	//		1:depend on consumption type A
	//		2:depend on consumption type B
	//		3:demand pricing 
	//		4:low voltage 
	//		5:integrated low voltage 
	//		6:high voltage 
	//	calc_type
	//		1:peak time unit
	//		2:average unit
	//		3:price down unit
	//		4:cut off
	//		5:base charge to contract kW
	//
	//	
	elecPrice : {
		// 1:従量電灯A, 2:従量電灯B、3:時間帯別、4:低圧、5:低圧総合、6:高圧
		// ピーク単価,標準単価,割引単価,切片,kW契約単価
		1: [ 33.32, 33.32, 33.32, -1500, 0 ],
		2: [ 33.32, 33.32, 33.32, -1500, 280 ],
		3: [ 38.89, 27.32, 13.10, 2160, 0 ],
		4: [ 17.98, 16.53, 16.53, 0, 1054 ],
		5: [ 20.22, 18.56, 18.56, 64800, 0 ],
		6: [ 22.58, 17.36, 13.08, 0, 1733 ]
	},

	//electricity supply company price
	elecCompanyPrice : {
	},


	// meteorological annal average templature C
	//
	//		prefTemplature( prefecture )
	//
	//
	//気象庁｢気象庁年報｣ 平成19年　各都道府県の平均気温
	//数値は各都道府県の県庁所在地の気象官署の観測値。
	//  （ただし、埼玉県は熊谷市、滋賀県は彦根市の気象官署の観測値)
	// Unit.setArea()で　該当する地域について　averageTemplature　にコピーをして利用
	//
	prefTemplature : [

	 9.4	,	//北海道
	 9.4	,	//北海道
	17.0	,	//東京
	],

	// solar factor
	//
	//		prefPVElectricity( prefecture )
	//
	// ex. JWA　monsola05
	//  annual solar energy input at most provable direction kWh/m2/day
	prefPVElectricity : [
		4,4,4,4,4,4,4,4,4,4,4,4,4,4
	],

	// convert energy name to energy_type id
	//
	//	energyCode2id[energy_name]	: get energy code
	//
	energyCode2id : {
		"electricity" : 0,
		"gas" : 1,
		"kerosene" : 2,
		"coal" : 4,
		"hotwater" : 5,
		"car" : 3 
	},

	//convert season name to season id.
	//
	//	seasonCode2id[season_name]	: get season code
	//
	seasonCode2id : {
		"winter" : 0,
		"spring" : 1,
		"summer" : 2
	},

	// months include to each season
	//	seasonMonth[seasonName]
	//	
	//	seasonName
	//		winter/spring/summer  , autumn include to spring
	//
	seasonMonth : { winter:4, spring:5, summer:3 },



	// home original function/data set ==================================

	// average energy fee per month
	//		prefKakeiEnergy[prefecture][energy_type]
	//
	//		prefecture(0-47 in Japan)
	//		energy_type
	//			0:electicity
	//			1:gas
	//			2:kerosene
	//			3:gasoline
	//
	//地域別平均光熱費 2人以上世帯（補正後）
	prefKakeiEnergy : [ 
		[ 20000, 30000, 0, 20000 ],  //札幌市
		[ 20000, 30000, 0, 20000 ],  //札幌市
		[ 20000, 30000, 0, 20000 ]  //東京都区部
	],

	// seasonal energy fee factor to average
	//
	//	prefSeasonFactorArray[prefecture][season][energy_type]
	//
	//	prefecture:
	//	season:
	//		0:wihter
	//		1:spring
	//		2:summer
	//	energy_type
	//		0:electicity
	//		1:gas
	//		2:kerosene
	//		3:gasoline
	//
	//季節別負荷係数
	prefSeasonFactorArray : [

	[ [ 1.149, 1.1094, 1.8254, 0.9243 ], [ 0.9482, 0.9876, 0.8169, 1.0159 ], [ 0.8876, 0.8749, 0.2047, 1.0743 ] ],   //sapporo
	[ [ 1.149, 1.1094, 1.8254, 0.9243 ], [ 0.9482, 0.9876, 0.8169, 1.0159 ], [ 0.8876, 0.8749, 0.2047, 1.0743 ] ],   //sapporo
	[ [ 1.1218, 1.3846, 2.4812, 1.0011 ], [ 0.8666, 0.9201, 0.393, 0.8726 ], [ 1.0599, 0.6203, 0.0368, 1.2109 ] ]   //tokyo

	],



	//	factor to average fee
	//		kakeiNumCoefficent[person_in_home][energy_type]
	//
	//		pserson_in_home
	//			0: single home
	//			1: 2 person in home
	//			2: 3 person in home
	//			3: 4 person in home
	//			4: 5 person in home
	//			5: more than 6 person in home
	//		energy_type
	//			0:electicity
	//			1:gas
	//			2:kerosene
	//			3:gasoline
	//
	//世帯人数別の支出金額比率（標準値に対する割合:家計調査より）
	//	[電気、ガス、灯油、ガソリン]
	//	[1人世帯、2人世帯、3人世帯、4人世帯、5人世帯、6人以上世帯]
	//　　出典について複数の環境家計簿からの集計値（確認：評価基礎情報ではない）
	kakeiNumCoefficent:
			  [ [ 0.47, 0.52,  0.37, 0.45 ],
				[ 0.86, 0.83,  0.90, 0.79 ],
				[ 0.99, 1.00,  0.90, 0.98 ],
				[ 1.07, 1.10,  0.85, 1.16 ],
				[ 1.24, 1.17,  1.10, 1.26 ],
				[ 1.55, 1.19,  1.67, 1.33  ]
	],

	//	urban / ural area fee per month
	//		urbanCostCoefficient[energy_type][area_type]
	//
	//		energy_type
	//			0:electicity
	//			1:gas
	//			2:kerosene
	//			3:gasoline
	//		area_type
	//			0:urban
	//			1:ural
	//
	//郊外の場合の比率　家計調査より 2001～2007年
	//　都市部：大都市と中都市の平均
	//　郊外：小都市A、小都市B、町村の平均 
	urbanCostCoefficient :
			[ [ 8762, 9618 ],
			  [ 6100, 5133 ],
			  [ 828,  1898 ],
			  [ 3415, 6228 ],
			  [ 3,  20 ],
			  [ 24,  5 ]
	],
} );



/*  2017/12/16  version 1.0
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
 * 								2018/05/07 for korea
 */

//fix D6.Unit

	// unit price   won(in Korea)/each unit
D6.Unit.price = {
		electricity:1,			// override in D6.area.setPersonArea by supplyer
		nightelectricity:100,
		sellelectricity:150,
		nagas:1000,
		lpgas:3000,
		kerosene:700,
		gasoline:800,
		lightoil:700,
		heavyoil:600,
		coal:300,
		biomass:0,
		hotwater:3.6,
		waste:0,
		water:0,
		gas:1000,
		car:800
	};

	// intercept price when consumption is zero
D6.Unit.priceBase = {
		electricity:0,
		nightelectricity:0,
		sellelectricity:0,
		nagas:0,
		lpgas:0,
		kerosene:0,
		gasoline:0,
		lightoil:0,
		heavyoil:0,
		coal:0,
		biomass:0,
		hotwater:5000,
		waste:0,
		water:0,
		gas:0,
		car:0
	};
	
	// names ( dataset is now witten in Japanse )
D6.Unit.name = {
		electricity:"전기",
		nightelectricity:"전기",
		sellelectricity:"売電",
		nagas:"도시가스",
		lpgas:"LP 가스",
		kerosene:"등유",
		gasoline:"가솔린",
		lightoil:"경유",
		heavyoil:"중유",
		coal:"연탄",
		biomass:0,
		hotwater:"지역 열",
		waste:0,
		water:0,
		gas:"가스",
		car:"가솔린"
	};
	
	// unit discription text
D6.Unit.unitChar = {
		electricity:"kWh",
		nightelectricity:"kWh",
		sellelectricity:"kWh",
		nagas:"m3",
		lpgas:"m3",
		kerosene:"L",
		gasoline:"L",
		lightoil:"L",
		heavyoil:"L",
		coal:"kg",
		biomass:0,
		hotwater:"MJ",
		waste:0,
		water:0,
		gas:"m3",
		car:"L"
	};
	
	// second energy(end-use)  kcal/each unit
D6.Unit.calorie = {
		electricity:860,
		nightelectricity:860,
		sellelectricity:860,
		nagas:11000,
		lpgas:36000,
		kerosene:8759,
		gasoline:8258,
		lightoil:9117,
		heavyoil:9000,
		coal:8000,
		biomass:0,
		hotwater:225,
		waste:0,
		water:0,
		gas:11000,
		car:8258
	};

	// primary energy  MJ/each unit
D6.Unit.jules = {
		electricity:9.6,
		nightelectricity:9.6,
		sellelectricity:9.6,
		nagas:46,
		lpgas:60,
		kerosene:38,
		gasoline:38,
		lightoil:38,
		heavyoil:38,
		coal:32,
		biomass:0,
		hotwater:1,
		waste:0,
		water:0,
		gas:45,
		car:38
	};
	
	
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
D6.Unit.costToCons = function( cost, energy_name, elecType, kw )
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
	};
	
	
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
D6.Unit.consToCost = function( cons, energy_name, elecType, kw )
	{
		var ret;

		if ( cons == -1 || cons == "" ) {
			ret = "";
		}
//		if ( energy_name != "electricity" || typeof(D6.area.elecPrice) == undefined  ) {
			// this is rough method, multify only unit price
			// it will better to fix regionally
			ret = cons * D6.Unit.price[energy_name];
/*
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
*/
		return ret;
	};
	
	// consToEnergy( cons, energy_name ) --------------------------------
	//		calculate energy from energy consumption 
	// parameters
	//		cons: energy consumption per month
	//		energy_name: energy code
	// return
	//		ret: energy MJ per month
	consToEnergy = function( cons, energy_name )
	{
		var ret;

		if ( cons == -1 || cons == "" ) {
			ret = "";
		}
		//static function
		ret = cons * D6.Unit.jules[energy_name]/1000000;

		return ret;
	};


/*  2017/12/16  version 1.0
 * coding: utf-8, Tab as 4 spaces
 * 
 * Home Energy Diagnosis System Ver.6
 * scenariofix.js 
 * 
 * fix area function and data between home and office
 * fix scenario.js
 * fix logic definition
 * 
 * License: http://creativecommons.org/licenses/LGPL/2.1/
 * 
 * @author Yasufumi Suzuki, Hinodeya Institute for Ecolife co.ltd.
 * 								2016/04/12 ported to JavaScript
 * 
 * 
 */

// D6.scenario.areafix  fix area set by home/office
// called by diagnosis.js  just after create scenario
D6.scenario.areafix = function() {
	//set area and person to calculate average, heat load etc.
	D6.area.setCalcBaseParams = function(){
		D6.area.setPersonArea( D6.doc.data.i001, D6.doc.data.i021, D6.doc.data.i023);		
	};
	
	//get seasonal parameters
	D6.area.getSeasonParamCommon = function(){
		return D6.area.getSeasonParam(  D6.area.area  );
	};

D6.consAC.title = "객실 에어컨";
D6.consAC.countCall = "방 번째";

D6.consACcool.title = "객실 냉방";
D6.consACcool.addable = "냉난방하는 방";
D6.consACcool.countCall = "방 번째";
D6.consACcool.inputGuide = "객실당 냉방 사용에 대한";

D6.consACheat.title = "객실 난방";
D6.consACheat.addable = "냉난방하는 방";
D6.consACheat.countCall = "방 번째";
D6.consACheat.inputGuide = "객실당 난방을 사용하는 방법";

D6.consCKcook.title = "조리";
D6.consCKcook.inputGuide = "스토브를 중심으로 한 요리 사용에 대한";

D6.consCKpot.title = "보온";
D6.consCKpot.inputGuide = "보온기구를 사용하는 방법";

D6.consCKrice.title = "밥솥";
D6.consCKrice.inputGuide = "밥솥을 사용하는 방법";

D6.consCKsum.title = "조리";
D6.consCKsum.inputGuide = "조리 관련 사용에 대한";

D6.consCOsum.title = "냉각";
D6.consCOsum.inputGuide = "집 전체의 냉방 사용에 대한";

D6.consCR.title = "차량";
D6.consCR.addable = "차량";
D6.consCR.countCall = "대 눈";
D6.consCR.inputGuide = "보유 차량 당 성능 · 사용에 대한";

D6.consCRsum.title = "자동차";
D6.consCRsum.inputGuide = "자동차 · 오토바이의 사용 방법";

D6.consCRtrip.title = "이동";
D6.consCRtrip.countCall = "개 눈";
D6.consCRtrip.addable = "대상";
D6.consCRtrip.inputGuide = "대상마다 자동차 등의 사용 방법";

D6.consDRsum.title = "청소 세탁";
D6.consDRsum.inputGuide = "진공 청소기, 세탁기와 의류 건조기를 사용하는 방법";

D6.consEnergy.title = "일반 에너지 설정";
D6.consEnergy.inputGuide = "집 전체의 에너지 사용과 한달 유틸리티 비용에 대해";

D6.consHTcold.title = "한랭지";
D6.consHTcold.inputGuide = "한랭지에서 난방을 사용하는 방법";

D6.consHTsum.title = "난방";
D6.consHTsum.inputGuide = "집 전체의 난방을 사용하는 방법";

D6.consHWdishwash.title = "식기";
D6.consHWdishwash.inputGuide = "식기를 사용하는 방법";

D6.consHWdresser.title = "세면";
D6.consHWdresser.inputGuide = "세면대에서 물을 사용하는 방법";

D6.consHWshower.title = "샤워";
D6.consHWshower.inputGuide = "샤워를 사용하는 방법";

D6.consHWsum.title = "온수";
D6.consHWsum.inputGuide = "온수 일반 사용에 대한";

D6.consHWtoilet.title = "화장실";
D6.consHWtoilet.inputGuide = "화장실의 물과 보온의 사용 방법";

D6.consHWtub.title = "욕조";
D6.consHWtub.inputGuide = "욕조의 물을 사용하는 방법";

D6.consLI.title = "조명";
D6.consLI.addable = "조명하는 방";
D6.consLI.countCall = "방 번째";
D6.consLI.inputGuide = "개별 실내 조명의 사용 방법";

D6.consLIsum.title = "조명";
D6.consLIsum.inputGuide = "집 전체 조명 사용에 대한";

D6.consRF.title = "냉장고";
D6.consRF.addable = "냉장고";
D6.consRF.countCall = "대 눈";
D6.consRF.inputGuide = "개별 냉장고를 사용하는 방법";

D6.consRFsum.title = "냉장고";
D6.consRFsum.inputGuide = "집 전체의 냉장고를 사용하는 방법";

D6.consSeason.inputGuide = "계절별 1 개월 당 광열비 대해. 대략적인 값으로 기입 해주십시오.";

D6.consTotal.title = "전체";
D6.consTotal.inputGuide = "지역 및 주택의 기본 정보";

D6.consTV.title = "텔레비전";
D6.consTV.addable = "텔레비전";
D6.consTV.countCall = "대 눈";
D6.consTV.inputGuide = "개별 텔레비전의 사용 방법";

D6.consTVsum.title = "텔레비전";
D6.consTVsum.inputGuide = "집 전체 텔레비전의 사용 방법";

D6.consSeason.titleList[1] = "겨울";
D6.consSeason.titleList[2] = "춘추";
D6.consSeason.titleList[3] = "여름";

	
	D6.scenario.defMeasures['mTOsolar'] = { mid:"1",  name:"mTOsolar",  title:"태양 광 발전을 설치하는",  easyness:"0.5",  refCons:"consTotal",  titleShort:"태양 광 발전", level:"",  figNum:"25",  lifeTime:"20",  price:"4000000",  roanShow:"",  standardType:"",  subsidy :"",  advice:"발전 남은 전기는 전력 회사에 높게 매입 해받을 수 있습니다. 2018 년도는 1kWh 당 28 엔 (도쿄 전력, 중부 전력, 간사이 전력의 경우) 또는 30 엔 (그렇지 전력 회사는 높지만 태양이 잉여가 된 때 매입을 중단하는 장치의 설치 가 필요합니다). 패널을 설치하는 것만으로 발전이되고, 모터 등 가동 부분이 없기 때문에 수명이 길고 유지 관리도 비교적 적습니다. 교류로 변환하는 「컨디셔너 '라는 장치는 10 년 정도마다 교체해야합니다. <br> 또한 태양 광 발전 장치를 도입하면 전기를 판매 모습이 표시되는 장치가 설치됩니다. 전기를 얼마나 발전 할 수 있었는지, 집에서 얼마나 소비했는지가 표시되며, 모델에 따라 시간대별로 표시되는 것도 있습니다. 판매 할 수있는 금액도 표시되고 더 판매하기 위해 자연과 전기 사용량이 줄어드는 효과도 나옵니다.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mTOhems'] = { mid:"2",  name:"mTOhems",  title:"HEMS 장치를 설치하는",  easyness:"1",  refCons:"consTotal",  titleShort:"HEMS 장치", level:"",  figNum:"3",  lifeTime:"20",  price:"2000000",  roanShow:"",  standardType:"",  subsidy :"",  advice:"HEMS는 가정에서 사용하는 전기를 시간마다 세세하게 파악하고, 에어컨 등의 가전 제품을 에너지 절약을 위해 자동 제어 할 수있는 시스템입니다. 전기 사용 등의 특징을 체크하면 어떤 일을하면 에너지 절약으로 이어질지 포인트가 보입니다. 표시되는 그래프를 바탕으로 언제 전기 소비가 많은 것인지, 무엇이 원인인지 생각해보십시오.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mTOsolarSmall'] = { mid:"3",  name:"mTOsolarSmall",  title:"베란다에 태양 광 패널을 넣어",  easyness:"2",  refCons:"consTotal",  titleShort:"베란다 태양", level:"",  figNum:"25",  lifeTime:"10",  price:"500000",  roanShow:"",  standardType:"",  subsidy :"",  advice:"태양해도 지붕에 설치하는 것이 아니라 휴대 할 수있는 소형 패널을 베란다 등에 두는 것으로, 조명 등 작은 용도로 사용할 수 있습니다. 기성품으로 판매되는 것도 있지만, 스스로 만들 수 재료는 인터넷 쇼핑몰과 홈 센터에서 조달 할 수 있습니다. <br> 맑은 날에는 이불을 널 같은 감각으로 햇빛에 대고 배터리를 충전시켜 충전 된 분으로 활용할 수 있습니다. 흐린 날 등은 전기를 사용할 수없는 경우가 있습니다.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHWecocute'] = { mid:"101",  name:"mHWecocute",  title:"온수기 에코 큐트에 교체하는",  easyness:"2",  refCons:"consHWsum",  titleShort:"에코 큐트", level:"",  figNum:"8",  lifeTime:"10",  price:"4000000",  roanShow:"1",  standardType:"電気温水器",  subsidy :"",  advice:"에코 큐트 (자연 냉매 히트 펌프 온수기)는 에어컨의 실외기와 같은 장치가 붙어있어 외기의 열을 이용하여 물을 끓여야 전기 온수기보다 3 배 이상 효율이 좋아집니다. 저 탕조에 모아 둔 물을 사용할 수 있도록 같은 가족 수가 많고, 매일 빠뜨리지 않고 목욕 가정에 좋습니다. <br> 또한 보통의 물 사용을 고려하여 신중하게 끓인다 설정을하면 더 에너지 절약에 도움이됩니다.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHWecojoze'] = { mid:"102",  name:"mHWecojoze",  title:"온수기 에코 조스 (잠열 회수 형)에 교체하는",  easyness:"2",  refCons:"consHWsum",  titleShort:"에코 죠즈", level:"",  figNum:"10",  lifeTime:"10",  price:"2000000",  roanShow:"",  standardType:"既存型",  subsidy :"",  advice:"에코 조스 (잠열 회수 형)은 수증기로 도망 열을 회수하는 구조 때문에 기존의 가스 온수기에 비해 효율이 10 % 이상 향상하고 있습니다. 기존의 가스 온수기와 비슷한 형태이지만, 열 회수를 위해 약간 대형되어 있으며 열을 회수 할 때 발생하는 물을 흘려 드레인도 붙어 있습니다. 가스 회사에 따라서는 에코 조스 요금에 따라 유가가 할인되는 경우도 있습니다.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHWecofeel'] = { mid:"103",  name:"mHWecofeel",  title:"온수기 에코 필 (잠열 회수 형)에 교체하는",  easyness:"1",  refCons:"consHWsum",  titleShort:"에코 필", level:"",  figNum:"10",  lifeTime:"10",  price:"2500000",  roanShow:"",  standardType:"既存型",  subsidy :"",  advice:"에코 필 (잠열 회수 형)은 수증기로 도망 열을 회수하는 구조 때문에 효율이 10 % 이상 향상하고 있습니다. 기존의 등유 보일러와 비슷한 형태이지만, 열 회수를 위해 약간 대형되어 있으며 열을 회수 할 때 발생하는 물을 흘려 드레인도 붙어 있습니다. 등유가 아닌 가스의 종류는 '에코죠스'라고합니다.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHWenefarm'] = { mid:"105",  name:"mHWenefarm",  title:"온수기를 네팜 (연료 전지)에 교체하는",  easyness:"0.5",  refCons:"consHWsum",  titleShort:"네팜", level:"5",  figNum:"10",  lifeTime:"10",  price:"12000000",  roanShow:"1",  standardType:"エコジョーズ",  subsidy :"",  advice:"네팜는 연료 전지로 발전을하면서 물을 끓이는 효율이 좋은 장치입니다. 가정에서 소비하는 전기만큼 발전하고, 발생한 열을 온수로 모아 사용할 수 있습니다. 전기와 물을 많이 사용하는 가정에서 큰 에너지 절약 효과를 기대할 수 있습니다.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHWsolarHeater'] = { mid:"106",  name:"mHWsolarHeater",  title:"태양열 온수기 (자연 순환 식)를 설치하여 이용하는",  easyness:"1",  refCons:"consHWsum",  titleShort:"태양열 온수기", level:"",  figNum:"9",  lifeTime:"10",  price:"4000000",  roanShow:"",  standardType:"",  subsidy :"",  advice:"따뜻한 날씨 맑은 날이면 태양의 열기에 끓인 물을 그냥 목욕 수 있습니다. 겨울에도 가온하여 사용할 수 있으며, 물 에너지 소비를 크게 줄일 수 있습니다. 비교적 간단한 구조로 물을 끓이는 수 유효한 온난화 대책으로서 전 세계적으로 사용이 확대되고 있습니다.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHWsolarSystem'] = { mid:"107",  name:"mHWsolarSystem",  title:"태양열 시스템 (강제 순환 식)를 설치하여 이용하는",  easyness:"1",  refCons:"consHWsum",  titleShort:"태양열 시스템", level:"",  figNum:"9",  lifeTime:"10",  price:"6000000",  roanShow:"",  standardType:"",  subsidy :"",  advice:"저탕 탱크를 지상에두고 이용하는 태양열 온수기입니다. 지붕에 탱크가 없기 때문에 부하가 걸리지 않습니다. 따뜻한 날씨 맑은 날이면 태양의 열기에 끓인 물을 그냥 목욕 수 있습니다. 겨울에도 가온하여 사용할 수 있으며, 물 에너지 소비를 크게 줄일 수 있습니다. 비교적 간단한 구조로 물을 끓이는 수 유효한 온난화 대책으로서 전 세계적으로 사용이 확대되고 있습니다.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHWshowerHead'] = { mid:"108",  name:"mHWshowerHead",  title:"절수 샤워 헤드를 장착하여 사용하는",  easyness:"5",  refCons:"consHWshower",  titleShort:"절수 샤워 헤드", level:"",  figNum:"11",  lifeTime:"10",  price:"20000",  roanShow:"",  standardType:"",  subsidy :"",  advice:"샤워 손잡이 (헤드) 부분을 대체 할 수있게되어 있습니다. 뜨거운 물이 나오는 구멍을 작게하고 있으며, 힘차게 물이 나올 수밖에 수중에 지수있는 것도 있고, 30 % 정도 물 사용을 줄일 수 있습니다. 인테리어 및 가전 양판점 등에서 구입할 수 있습니다.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHWshowerTime'] = { mid:"109",  name:"mHWshowerTime",  title:"샤워의 이용을 1 인 1 일 1 분 단축",  easyness:"4",  refCons:"consHWshower",  titleShort:"샤워 1 인 1 분 단축", level:"",  figNum:"11",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"샤워 에너지 소비는 매우 크고, 물을 내고있는 상태에서, TV 300 대분의 에너지가 소비됩니다. 조금 멈추는 것만으로도 큰 절감됩니다. 몸을 씻고있는 경우에는 중지 등 이용 시간을 줄 이도록 조심합시다.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHWshowerTime30'] = { mid:"110",  name:"mHWshowerTime30",  title:"샤워 이용 시간을 30 % 단축",  easyness:"3",  refCons:"consHWshower",  titleShort:"샤워 30 % 단축", level:"",  figNum:"11",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"샤워 에너지 소비는 매우 크고, 물을 내고있는 상태에서, TV 300 대분의 에너지가 소비됩니다. 조금 멈추는 것만으로도 큰 절감됩니다. 몸을 씻고있는 경우에는 중지 등 이용 시간을 줄 이도록 조심합시다.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHWkeep'] = { mid:"111",  name:"mHWkeep",  title:"욕실에 가족이 계속 들어 목욕물을 재가열을하지",  easyness:"3",  refCons:"consHWtub",  titleShort:"목욕 보온을하지", level:"",  figNum:"12",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"목욕물을 재가열는 욕실의 온수를 한번 밖에 내고 온수기까지 보내야합니다. 얼마전에 식어 버려, 여분의 에너지가 소요됩니다. 목욕물을 재가열 기능을 사용하지 않고, 계속이있는 것이 큰 절감됩니다. 또한 욕조에 뚜껑을하여도 식지 어렵게 할 수 있습니다.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHWsaveMode'] = { mid:"112",  name:"mHWsaveMode",  title:"에코 큐트을 '절약 모드'로 설정",  easyness:"3",  refCons:"consHWsum",  titleShort:"온수 절약 모드", level:"",  figNum:"8",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"에코 큐트는 야간에 비등 수량을 설정할 수있게되어 있습니다. 물 부족이 없도록 여유 비등하면 보온시의 손실이 커집니다. 일반적으로 사용하는 일, 특히 물 부족 등없는 경우는 절약 모드로 설정하면 에너지 절약이됩니다.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHWstopAutoKeep'] = { mid:"113",  name:"mHWstopAutoKeep",  title:"자동 보온을 계속 아니라 다음 사람이 들어가기 직전에 끓여 다시",  easyness:"3",  refCons:"consHWtub",  titleShort:"자동 보온을하지", level:"",  figNum:"12",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"자동 보온에서는 자주 목욕 물을 야외 온수기까지 배웅하고 따뜻하게 배관 부분의 열 낭비가 커집니다. 계속 들어가기에 보온 않아도되지만 시간이 뚫려 식어 버리는 경우에는 자동 보온을하지 않고 나중에 들어가기 직전에 다시 데울 수에서 에너지 절약됩니다.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHWinsulation'] = { mid:"114",  name:"mHWinsulation",  title:"절연 형 욕조 리폼하기",  easyness:"1",  refCons:"consHWtub",  titleShort:"단열 욕조", level:"",  figNum:"12",  lifeTime:"10",  price:"6000000",  roanShow:"",  standardType:"普及型",  subsidy :"",  advice:"욕조가 스티로폼 등의 단열재로 덮여있어 물이 식지 어렵게되어있는 타입이 늘고 있습니다. 욕조 리모델링 공사가 필요하지만, 식지 않는 분, 목욕물을 재가열을하지 않아도됩니다. 아울러, 욕실도 욕실하면 욕실 전체에서 열이 달아나 어렵습니다.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHWonlyShower'] = { mid:"115",  name:"mHWonlyShower",  title:"여름에는 샤워만으로 끝내 욕조에 물을 깔 않음",  easyness:"3",  refCons:"consHWtub",  titleShort:"여름에 욕조의 물을 모아 않는다", level:"",  figNum:"11",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"욕조 물의 양이 샤워를 사용하는 시간으로 환산하면 10 ~ 20 분에 해당합니다. 자동 온수 바닥을하지 않고 욕조의 물만을 사용하여 몸을 씻는 방법에서는 오히려 에너지 소비가 증가하는 경우도 있습니다 만, 샤워를 병용하는 경우에는 욕조 순간이 절감됩니다.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHWdishTank'] = { mid:"116",  name:"mHWdishTank",  title:"식기에 뜨거운 물을 틀어하지",  easyness:"2",  refCons:"consHWdishwash",  titleShort:"식기 흘려 씻어", level:"",  figNum:"13",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"세제로 씻어 경우에는 물을 멈추는 등 가급적 물을내는 시간을 단축 궁리하십시오. 기름때는 헌 등으로 먼저 닦아두면 너무도 빨리 끝납니다.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHWdishWater'] = { mid:"117",  name:"mHWdishWater",  title:"물이 차가워 않은시기에는 물로 설거지",  easyness:"2",  refCons:"consHWdishwash",  titleShort:"식기 세척", level:"",  figNum:"13",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"따뜻한 계절에는 물을 사용하지 않아도 충분히 씻어 수 있습니다. 예를 들어 설거지하는데 물을 10 분 사용하는 경우 약 50 리터의 물이 소비됩니다. 기름때는 헌 등으로 닦아 두는 등 궁리하는 것으로, 너무도 빨리하면됩니다.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mCKdishWasher'] = { mid:"118",  name:"mCKdishWasher",  title:"식기 세척기를 사용",  easyness:"2",  refCons:"consHWdishwash",  titleShort:"식기 세척기", level:"",  figNum:"15",  lifeTime:"10",  price:"800000",  roanShow:"",  standardType:"",  subsidy :"",  advice:"식기를 물에 흘려 씻어하는 데 비해, 물을 모아 세척하고 있기 때문에, 식기 세척 건조기 쪽이 에너지 절약이됩니다.なおお湯가 아닌 물로 씻는 경우는 식기 세척기보다 에너지 절약이됩니다. 화장실에서 연구하는 것도 효과적인 방법입니다.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHWtap'] = { mid:"119",  name:"mHWtap",  title:"부엌 · 화장실에 절 탕수 마개를 설치하는",  easyness:"2",  refCons:"consHWsum",  titleShort:"절 탕수 마개", level:"",  figNum:"13",  lifeTime:"20",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"수중에 즉시 중지 할 수 있도록하고, 단일 레버를 왼쪽으로 향한 않으면 물이 아니다 구조로하는 등, 쓰기는 같아도 물 소비량을 20 % 이상 줄일 수있는 장치가 있습니다.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHWreplaceToilet5'] = { mid:"120",  name:"mHWreplaceToilet5",  title:"절수 화장실을 설치하는",  easyness:"1",  refCons:"consHWtoilet",  titleShort:"절수 화장실", level:"",  figNum:"19",  lifeTime:"10",  price:"300000",  roanShow:"",  standardType:"既存型",  subsidy :"",  advice:"화장실 본체를 건설하고 교체해야하지만, 물의 양을 이전보다 절반 이하로 줄일 수 있습니다. 이전 13 리터 정도 필요했던 것이, 4-6 리터 정도에서 사용할 수 있도록되어 있으며, 수도 요금을 크게 줄일 수 있습니다.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHWreplaceToilet'] = { mid:"121",  name:"mHWreplaceToilet",  title:"순간 식 온수 세정 변기에 사서 바꾸는",  easyness:"1",  refCons:"consHWtoilet",  titleShort:"순간 식 변기", level:"",  figNum:"19",  lifeTime:"10",  price:"300000",  roanShow:"",  standardType:"既存型",  subsidy :"",  advice:"신제품은 에너지 절약 기능이있어 뚜껑을 연 순간에 따뜻하게 타입 등 소비 전력이 줄어 듭니다. 카탈로그에 표시되는 연간 소비 전력량을 참고로 에너지 절약을 선택하십시오.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHWtemplatureToilet'] = { mid:"122",  name:"mHWtemplatureToilet",  title:"보온 변기의 온도를 낮추는",  easyness:"3",  refCons:"consHWtoilet",  titleShort:"변기 온도 조절", level:"",  figNum:"19",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"춥지 않은시기는 보온을 끄거나 온도를 낮게 설정하여 에너지 절약 있습니다. 변기 커버를 걸면 차가움을 느끼고 어려워집니다.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHWcoverTilet'] = { mid:"123",  name:"mHWcoverTilet",  title:"보온 세정 변기 뚜껑을 차지하는",  easyness:"3",  refCons:"consHWtoilet",  titleShort:"변기 뚜껑을 닫는다", level:"",  figNum:"19",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"변기 뚜껑을 올린 상태로두면 보온 열이 도비 소비 전력이 증가합니다. 용을 마친 후에는 뚜껑을 닫을 것으로 에너지 절약이됩니다. 춥지 않으면 보온을하지 않도록하는 것도 에너지 절약에 도움이됩니다.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mACreplace'] = { mid:"201",  name:"mACreplace",  title:"에어컨을 에너지 절약형으로 사서 바꾸는",  easyness:"1",  refCons:"consAC",  titleShort:"에너지 절약 에어컨", level:"",  figNum:"1",  lifeTime:"10",  price:"1600000",  roanShow:"",  standardType:"",  subsidy :"",  advice:"같은 단지 냉난방을해도 15 년에 비해 절반 정도의 전력으로 사는 에너지 절약 성능이 높은 에어컨이 있습니다. 선택할 때에는 통일 절약 라벨의 ★ 마크의 수가 많은 것이나 연간 전기 요금 표시를 참고로 에너지 절약을 선택하십시오. 난방 성능도 높아지고 있으며, 가스 나 등유 난방에 비해 CO2를 줄일 수 있습니다.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mACreplaceHeat'] = { mid:"202",  name:"mACreplaceHeat",  title:"에어컨을 에너지 절약형으로 교체, 에어컨와 발열",  easyness:"2",  refCons:"consAC",  titleShort:"에너지 절약 에어컨 + 난방", level:"",  figNum:"1",  lifeTime:"10",  price:"1600000",  roanShow:"",  standardType:"",  subsidy :"",  advice:"같은 단지 냉난방을하여 15 년에 비해 절반 정도의 전력으로 사는 에너지 절약 성능이 높은 에어컨이 있습니다. 에어컨 실외기의 열을 이용하기 위해 가스 나 등유 등 난방과 비교해도 CO2 배출량이 줄어 듭니다. 선택할 때에는 통일 절약 라벨의 ★ 마크의 수가 많은 것이나 연간 전기 요금 표시를 참고로 에너지 절약을 선택하십시오.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mACchangeHeat'] = { mid:"203",  name:"mACchangeHeat",  title:"난방 에어컨으로하는",  easyness:"2",  refCons:"consACheat",  titleShort:"에어컨 난방", level:"",  figNum:"1",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"에어컨에서 난방을하면 외기의 열을 이용하기 위해 가스 나 등유 난방에 비해 크게 CO2를 줄일 수 있으며, 광열비 절감 할 수 있습니다. 또한, 따뜻한 공기는 가벼워 천장에 모여 쉽고 바닥까지 안전하게 도착하도록 강풍 설정 몰고, 부채 등을 활용하기도합니다. 또한 최근의 에어컨은 바닥까지 따뜻하게 기능을 갖추고 있습니다.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHTchangeHeat'] = { mid:"204",  name:"mHTchangeHeat",  title:"집의 난방을 에어컨으로하는",  easyness:"1",  refCons:"consHTsum",  titleShort:"에어컨 난방", level:"",  figNum:"1",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"에어컨에서 난방을하면 외기의 열을 이용하기 위해 가스 나 등유 난방에 비해 크게 CO2를 줄일 수 있으며, 광열비 절감 할 수 있습니다. 또한, 따뜻한 공기는 가벼워 천장에 모여 쉽고 바닥까지 안전하게 도착하도록 강풍 설정 몰고, 부채 등을 활용하기도합니다. 또한 최근의 에어컨은 바닥까지 따뜻하게 기능을 갖추고 있습니다.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mCOsunCut'] = { mid:"205",  name:"mCOsunCut",  title:"냉방, 발 등을 사용 일사를 차단하는",  easyness:"4",  refCons:"consCOsum",  titleShort:"냉방 일사 컷", level:"",  figNum:"1",  lifeTime:"5",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"냉방시에 일사가 들어가는 창문에 난로를두고있는 것 같다. 일사를 차단하면 에너지 절약되고 방이 시원합니다. 커튼도 일사를 방지 할 수 있지만, 방 안에있는 커튼을 데우고 방이 더워집니다. 따라서 창밖에 발 · 葦簾을하는 것이 시원합니다. 또한 5 월부터 고야 · 나팔꽃 · 수세미 등을 심어 키우면 여름에는 훌륭한 「초록의 커텐」이 완성 일사를 막아줍니다.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mCOtemplature'] = { mid:"206",  name:"mCOtemplature",  title:"냉방 온도 설정을 겸손 (28 ℃)한다",  easyness:"3",  refCons:"consACcool",  titleShort:"냉방 설정 온도", level:"",  figNum:"1",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"에너지 절약을 생각 냉방 설정 온도 기준은 28 ℃ 이상입니다. '시원 느끼게하는'것이 아니라 '덥지 않도록한다'정도로 생각하십시오. 더위의 사고 방식에는 개인차가 있기 때문에 무리 할 필요는 없지만, 선풍기를 활용하거나 엷게 입기를하는 등 궁리를 해보십시오. 창문을 열어 바람이 들어가면 시원하고, 풍경 소리도 시원 느끼게 해줍니다. 설정 온도를 1 ℃ 약하게하여 CO2 배출량과 에너지 비용을 약 10 % 절감 할 수 있습니다. 또한 계절의 끝은 빨리 냉방기구를 사용하지 않도록하는 것이 효과적입니다.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHTtemplature'] = { mid:"207",  name:"mHTtemplature",  title:"옷을 두껍게 입고 난방 온도 설정을 겸손 (20 ℃)한다",  easyness:"3",  refCons:"consACheat",  titleShort:"난방 설정 온도", level:"",  figNum:"3",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"에너지 절약을 생각 난방 설정 온도 기준은 20 ℃ 이하입니다. '따뜻하고 느끼게하는'것이 아니라 '춥지 않도록하겠다'정도로 생각하십시오. 추위의 사고 방식에는 개인차가 있기 때문에 무리 할 필요는 없지만 옷을 두껍게하거나 데우는 식사 등, 궁리를 해보십시오. 설정 온도를 1 ℃ 약하게하여 CO2 배출량과 에너지 비용을 약 10 % 절감 할 수 있습니다. 또한 계절의 끝은 빨리 냉난방기구를 사용하는 것을 막을 수도 효과적입니다.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHTwindowSheet'] = { mid:"208",  name:"mHTwindowSheet",  title:"난방시 창문 용 단열 시트를 붙이는",  easyness:"3",  refCons:"consACheat",  titleShort:"창문 단열 시트", level:"",  figNum:"4",  lifeTime:"3",  price:"30000",  roanShow:"",  standardType:"",  subsidy :"",  advice:"창문 용 단열 시트 (소위 프티 시트 같은 건 액션 타입의 것)는 홈 센터 등에서 판매되고 있습니다. 창문을 깨끗이 닦고 분무기를 걸어 그 물만 창에 붙여 넣을 수 있습니다. 단열 효과가있을뿐만 아니라 결로도 억제 할 수 있습니다. 창문에서 불어 내려 오는 차가운 바람도 누그러 져 편안함을 향상시킵니다.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHTdouble'] = { mid:"209",  name:"mHTdouble",  title:"창문 샷시를 복층 유리하기",  easyness:"1",  refCons:"consACheat",  titleShort:"복층 유리", level:"5",  figNum:"4",  lifeTime:"30",  price:"1000000",  roanShow:"",  standardType:"",  subsidy :"家の窓全体の断熱工事をする場合、工事にかかった費用に応じて、固定資産税の控除や、ローン残高に応じた所得税控除の制度があります。",  advice:"난방시 창문과 창틀에서 도망 열 비율이 많은 일반 싱글 유리를 복층 유리로 대체하는 것은 열이 빠져 나가기 방법을 절반 정도로 줄일 수 있습니다. 에너지 절약뿐만 아니라 결로가 세우시고된다는 장점도 있습니다. 창문에서 불어 내려 오는 차가운 바람도 누그러 져 편안함을 향상시킵니다. 가옥에 따라 방법이 있으므로 공무점와 상담하십시오.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHTlowe'] = { mid:"210",  name:"mHTlowe",  title:"창문 샷시를 수지 프레임 low-E 유리하기",  easyness:"1",  refCons:"consACheat",  titleShort:"수지 프레임 low-E 유리", level:"",  figNum:"4",  lifeTime:"30",  price:"1500000",  roanShow:"",  standardType:"",  subsidy :"家の窓全体の断熱工事をする場合、工事にかかった費用に応じて、固定資産税の控除や、ローン残高に応じた所得税控除の制度があります。",  advice:"난방시 창문과 창틀에서 도망 열 비율이 많은 일반 싱글 유리를 복층 유리로 대체하는 것은 열이 빠져 나가기 방법을 절반 정도로 줄일 수 있습니다. 에너지 절약뿐만 아니라 결로가 세우시고된다는 장점도 있습니다. 창문에서 불어 내려 오는 차가운 바람도 누그러 져 편안함을 향상시킵니다. 가옥에 따라 방법이 있으므로 공무점와 상담하십시오.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHTuchimado'] = { mid:"211",  name:"mHTuchimado",  title:"내 창 설치",  easyness:"2",  refCons:"consACheat",  titleShort:"내창", level:"5",  figNum:"4",  lifeTime:"30",  price:"600000",  roanShow:"",  standardType:"",  subsidy :"家の窓全体の断熱工事をする場合、工事にかかった費用に応じて、固定資産税の控除や、ローン残高に応じた所得税控除の制度があります。",  advice:"난방시 창문과 창틀에서 도망 열 비율이 많은 현재의 창문과 창틀 안쪽에 추가하고 '내창」을 붙이는 것으로 더 열이 도망 어렵습니다. 내창은 상대적으로 공사비가 저렴하고 약 1 시간 공사도 완료, 결로 방지 및 방범에도 효과가 있습니다. 자세한 내용은 공무점와 상담하십시오.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHTdoubleGlassAll'] = { mid:"212",  name:"mHTdoubleGlassAll",  title:"모든 객실의 창문 유리를 복층 유리로 대체",  easyness:"1",  refCons:"consHTsum",  titleShort:"전체 거실을 복층 유리에", level:"",  figNum:"4",  lifeTime:"30",  price:"1000000",  roanShow:"",  standardType:"",  subsidy :"家の窓全体の断熱工事をする場合、工事にかかった費用に応じて、固定資産税の控除や、ローン残高に応じた所得税控除の制度があります。",  advice:"난방시 창문과 창틀에서 도망 열 비율이 많은 일반 싱글 유리를 복층 유리로 대체하는 것은 열이 빠져 나가기 방법을 절반 정도로 줄일 수 있습니다. 에너지 절약뿐만 아니라 결로가 세우시고된다는 장점도 있습니다. 창문에서 불어 내려 오는 차가운 바람도 누그러거나 겨울 이른 아침 추위가 개선되거나 같은 편안함을 향상시킵니다. 가옥에 따라 방법이 있으므로 공무점와 상담하십시오.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHTuchimadoAll'] = { mid:"213",  name:"mHTuchimadoAll",  title:"모든 방에 内窓를 설치",  easyness:"1",  refCons:"consHTsum",  titleShort:"전체 거실을 내창에", level:"",  figNum:"4",  lifeTime:"30",  price:"1000000",  roanShow:"",  standardType:"",  subsidy :"家の窓全体の断熱工事をする場合、工事にかかった費用に応じて、固定資産税の控除や、ローン残高に応じた所得税控除の制度があります。",  advice:"난방시 창문과 창틀에서 도망 열 비율이 많은 현재의 창문과 창틀 안쪽에 추가하고 '내창」을 붙이는 것으로 더 열이 도망 어렵습니다. 내창은 상대적으로 공사비가 저렴하고 약 1 시간 공사도 완료, 결로 방지 및 방범에도 효과가 있습니다. 창문에서 불어 내려 오는 차가운 바람도 일본에서 겨울 이른 아침 추위가 개선되거나 같은 편안함을 향상시킵니다. 자세한 내용은 공무점와 상담하십시오.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHTloweAll'] = { mid:"214",  name:"mHTloweAll",  title:"모든 객실의 창문 샷시를 수지 프레임 low-E 유리하기",  easyness:"1",  refCons:"consHTsum",  titleShort:"전체 거실을 수지 프레임 low-E 유리에", level:"",  figNum:"4",  lifeTime:"30",  price:"1500000",  roanShow:"",  standardType:"",  subsidy :"家の窓全体の断熱工事をする場合、工事にかかった費用に応じて、固定資産税の控除や、ローン残高に応じた所得税控除の制度があります。",  advice:"난방시 창문과 창틀에서 도망 열 비율이 많은 일반 싱글 유리를 복층 유리로 대체하는 것은 열이 빠져 나가기 방법을 절반 정도로 줄일 수 있습니다. 에너지 절약뿐만 아니라 결로가 세우시고된다는 장점도 있습니다. 창문에서 불어 내려 오는 차가운 바람도 누그러거나 겨울 이른 아침 추위가 개선되거나 같은 편안함을 향상시킵니다. 가옥에 따라 방법이 있으므로 공무점와 상담하십시오.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mACfilter'] = { mid:"215",  name:"mACfilter",  title:"에어컨 필터 청소",  easyness:"2",  refCons:"consACheat",  titleShort:"필터 청소", level:"5",  figNum:"1",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"에어컨은 1 개월 사용 할 때마다 필터 청소하는 것이 바람직합니다. 필터의 눈이 막히면 돌풍이 약해지고 특히 난방의 효율이 크게 떨어집니다. 특히 주방을 포함한 객실에서는 그을음이 붙기 쉬우므로 자주 청소하십시오. 최근 에어컨은 자동으로 필터를 청소하는 기종도 있습니다.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHTtime'] = { mid:"216",  name:"mHTtime",  title:"난방의 사용 시간을 1 시간 단축",  easyness:"3",  refCons:"consACheat",  titleShort:"난방 1 시간 단축", level:"",  figNum:"3",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"난방은 붙어 오랜 시간 틀어 경향이 있습니다. 따뜻해지면 중지하도록합시다. 취침 전이나 외출시 등은 30 분 전에 멈추는 것도 하나의 방법입니다. 또한 사람이없는 방을 난방하는 것은 낭비이므로 가급적 끄도록합시다.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHTpartialHeating'] = { mid:"217",  name:"mHTpartialHeating",  title:"난로와 전기 장판을 활용하여 방 난방 자제",  easyness:"2",  refCons:"consACheat",  titleShort:"난로 카페트", level:"",  figNum:"3",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"난로와 전기 장판 등 부분 난방은 신체의 근처 만 따뜻하게 때문에 에너지 소비가 적어지고 있습니다. 방 난방 설정 온도를 크게 낮춰도 같은 쾌적 성을 유지할 수 있습니다. 특히 불어 구조이거나, 난방 방에서 계단이 위층에 이어 구조의 경우, 모처럼 따뜻한 공기가 천장에 빠지게 방을 따뜻하게하는데 비효율적 일 수 있습니다. 이러한 경우에는 발을 따뜻하게 난방도 고려 해보세요. 양말을 신고하거나 옷을 두껍게하는 것도 효과적입니다. <br> 난로와 전기 장판을 사용하는 경우에는 바닥 사이에 단열 시트를 깔거나 난로 이불도 두껍게하면보다 소비 전력을 줄일 수 있습니다.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHTceiling'] = { mid:"218",  name:"mHTceiling",  title:"난방시 천장의 온기를 저어",  easyness:"2",  refCons:"consACheat",  titleShort:"순환", level:"",  figNum:"3",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"방 난방을하고, 바닥에 비해 천장 쪽이 5 ~ 10 ℃ 가까이 온도가 높아지고있는 것이 많습니다. 부채 등으로 저어하거나 순환이나 선풍기를 위로 향하게하여 저어하여 따뜻한 공기를 바닥까지 전달할 수, 쾌적하게 보낼 수 있습니다. 양말을 신고하거나 옷을 두껍게하는 것도 효과적입니다.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHTareaLimit'] = { mid:"219",  name:"mHTareaLimit",  title:"난방시 방 문이나 밀기울을 닫고 난방 범위를 작게",  easyness:"2",  refCons:"consACheat",  titleShort:"난방 범위", level:"5",  figNum:"3",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"넓은 방을 난방하는 데 많은 에너지가 필요합니다. 밀기울이나 문 등으로 방을 구분하면 작은 난방기구에서도 잘 데우고 있습니다. 반대로 불어 구조 등 천장이 높은 경우는 많은 난방이 필요합니다.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHTdanran'] = { mid:"220",  name:"mHTdanran",  title:"가족 단란의 한 방에서 지내게하기",  easyness:"3",  refCons:"consHTsum",  titleShort:"가족 단란", level:"",  figNum:"3",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"가족이 별도의 방에서 보내고, 각 난방과 조명을 붙일 필요가 있습니다. 함께 방에 보내는 것으로, 난방도 조명도 줄일 수 있습니다. 꼭 단란의 시간을 즐기면서 에너지 절약을보십시오.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHTbiomass'] = { mid:"221",  name:"mHTbiomass",  title:"장작 난로 (펠렛 스토브)를 도입하는",  easyness:"1",  refCons:"consACheat",  titleShort:"장작 펠렛 스토브", level:"",  figNum:"3",  lifeTime:"20",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"나무 난로 또는 펠렛 스토브를 사용하면 석유와 가스 등의 화석 연료를 사용하지 않기 때문에 이산화탄소 배출량을 줄일 수 있습니다. 옛날부터 난방 연료이지만, 오히려 벽난로 등 세련된 제작, 도시 지역에서도 도입하는 사례가 늘고 있습니다. 펠렛 스토브는 연료를 자동으로 공급하기 위해 시간이 걸리지 않는 것도 장점입니다. 설치는 굴뚝의 설치 등 공사가 필요합니다.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHTcentralNotUse'] = { mid:"222",  name:"mHTcentralNotUse",  title:"중앙 난방에서 사용하지 않는 방의 설정 온도를 낮추는",  easyness:"2",  refCons:"consHTsum",  titleShort:"사용하지 않는 방의 난방 온도", level:"5",  figNum:"3",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"중앙 난방을하는 경우에는 사용하지 않는 방까지 따뜻하게하는 것입니다. 사용하지 않는 방의 난방을 중지 버리면 결로 · 동결 등의 문제가있는 경우에는 그렇게되지 않을 정도로 난방 설정을 절제합니다. 사람이있는 방에서 난방 설정의 기준은 20 ℃입니다.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHTkanki'] = { mid:"223",  name:"mHTkanki",  title:"전열 교환 환기 장치를 설치하는",  easyness:"1",  refCons:"consHTsum",  titleShort:"전열 교환 환기", level:"",  figNum:"3",  lifeTime:"20",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"새로운 집에서는 환기 설비의 도입이 의무화되어 있지만, 난방을하고있는 경우에는 따뜻한 공기를 버리는 것에도됩니다. 열을 회수하여 도망 양을 줄일 수 환기 시스템하면 크게 열 손실을 줄일 수 있습니다.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mPTstopPot'] = { mid:"301",  name:"mPTstopPot",  title:"전기 주전자 보온을하지",  easyness:"2",  refCons:"consCKpot",  titleShort:"냄비 보온하지", level:"",  figNum:"17",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"전기 주전자는 보온을 위해 많은 전기가 소비되고 있습니다. 필요에 따라 물을 끓인다 수 있는지, 보온병을 활용 해보세요.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mPTstopPotNight'] = { mid:"302",  name:"mPTstopPotNight",  title:"외출시나 야간에 전기 주전자 보온 중지",  easyness:"3",  refCons:"consCKpot",  titleShort:"야간 보온 정지", level:"",  figNum:"17",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"외출시나 야간 등 장시간 물을 사용하지 않는 경우에는 중지하는 것이 보온 전력을 줄일 수 있습니다. 밥솥과 변기의 보온 등도 마찬가지로 멈추어 두는 것이 에너지 절약됩니다.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mPTstopRiceCooker'] = { mid:"303",  name:"mPTstopRiceCooker",  title:"밥솥의 보온 종료",  easyness:"3",  refCons:"consCKrice",  titleShort:"저 보온", level:"",  figNum:"18",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"밥솥의 보온을 중지하고 먹을 때 전자 레인지에 따뜻하게 다시 더 절약됩니다. 장시간 보온을하면 밥이 변색 수 있으며, 상온 보온 쪽이 맛있게 없습니다.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mPTreplacePot'] = { mid:"304",  name:"mPTreplacePot",  title:"에너지 절약형 전기 포트에 사서 바꾸는",  easyness:"2",  refCons:"consCKpot",  titleShort:"에너지 절약 전기 주전자", level:"",  figNum:"17",  lifeTime:"",  price:"",  roanShow:"",  standardType:"既存型",  subsidy :"",  advice:"보온병과 같은 단열이되어있는 전기 포트가있어, 보온 전기 소비가 줄어 듭니다. 매장에서는 보온 소비 전력이 표시되어있을 수 있습니다이를 참고하십시오.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mCKflame'] = { mid:"305",  name:"mCKflame",  title:"냄비에서 불꽃이 나오지 않도록하기",  easyness:"2",  refCons:"consCKcook",  titleShort:"조리 불꽃 조정", level:"",  figNum:"14",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"냄비 바닥에서 불꽃이 잘릴는 가스가 낭비 될뿐만 조리 시간의 단축이되지 않습니다. 과저에서 벗어나지 않을 정도로 조절하여 사용합시다. 이 밖에도 셋업 잘 요리를 고안하여 가스 소비를 줄일 수 있습니다.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mDRsolar'] = { mid:"401",  name:"mDRsolar",  title:"맑은 날은 의류 건조기 및 건조 기능을 사용하지 않고 천일 건조",  easyness:"2",  refCons:"consDRsum",  titleShort:"천일", level:"",  figNum:"16",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"건조 기능은 유용하지만 세탁 10 배 이상의 에너지가 소요됩니다. 가급적 천일 말려하여 건조 기능을 사용하지 않는 것이 효과적입니다.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mDRheatPump'] = { mid:"402",  name:"mDRheatPump",  title:"히트 펌프 식 의류 건조기가있는 세탁기에 사서 바꾸는",  easyness:"1",  refCons:"consDRsum",  titleShort:"히트 펌프 건조", level:"",  figNum:"16",  lifeTime:"10",  price:"1400000",  roanShow:"",  standardType:"",  subsidy :"",  advice:"의류 건조기 및 건조 기능 세탁기에서 히트 펌프 식의 것은 일반 건조기에 비해 에너지 소비가 절반 정도하면됩니다. 잘 건조 기능을 이용하는 경우에는 광열비 절감 금액도 크게 효과가 있습니다. 그러나 건조 기능 자체가 많은 에너지를 사용하기 때문에 가능한 건조 기능을 사용하지 않는 것이 바람직합니다.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mLIceilingLED'] = { mid:"501",  name:"mLIceilingLED",  title:"형광등을 LED 천장 조명에 바꿔",  easyness:"4",  refCons:"consLI",  titleShort:"LED 조명", level:"",  figNum:"6",  lifeTime:"20",  price:"",  roanShow:"",  standardType:"蛍光灯",  subsidy :"",  advice:"LED 에너지 절약 성능은 높고, 오래갑니다. 커버 안에 벌레가 들어 가지 않기 때문에 청소의 수고도 덜 수 있습니다. 조명기구에서 대체하지만, 소켓이 있으므로, 일반적으로 전기 제품 가게 요청없이 교체 할 수 있습니다. 색상도 조정하거나 잘게 밝기를 조정할 수 있습니다.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mLILED'] = { mid:"502",  name:"mLILED",  title:"LED로 바꿔",  easyness:"2",  refCons:"consLI",  titleShort:"LED 전구", level:"",  figNum:"5",  lifeTime:"40000h",  price:"20000",  roanShow:"",  standardType:"電球",  subsidy :"",  advice:"전구와 같은 소켓을 사용하고 전구가 만료 될 때 그대로 바꿔 수 있습니다. 전기 소비를 80 % 줄일 수 있으며, 수명은 40 배 이상입니다.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mLIsensor'] = { mid:"503",  name:"mLIsensor",  title:"인체 감지 센서 식으로 바꿔",  easyness:"2",  refCons:"consLI",  titleShort:"센서 조명", level:"",  figNum:"5",  lifeTime:"10",  price:"",  roanShow:"",  standardType:"電球",  subsidy :"",  advice:"현관의 조명은 계속 불이 켜져있는보다 사람이 가까워지면 켜지 때문에 방범 성능도 높은 것으로되어 있습니다. 켜져있는 시간이 짧은만큼 대폭적인 에너지 절약을 할 수 있습니다. 같은 인체 감지 센서로는 복도 등에 설치하고, 사람이 통과 할 때만 조명 유형도 실용적이고 효과적입니다.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mLItime'] = { mid:"504",  name:"mLItime",  title:"조명을 쓰는 시간을 1 시간 단축",  easyness:"3",  refCons:"consLI",  titleShort:"조명 단축", level:"",  figNum:"6",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"켤 때 많은 전기가 흐르지 만, 순간이기 때문에 결과적으로 자주 끄는 것이 에너지 절약됩니다. 방을 떠날 때 지우는 습관이 중요합니다. 또한 밤에 밝은 빛을 받기도하면 수면주기가 미쳐 버려, 신체에 좋지 않은 것입니다.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mLIoff'] = { mid:"505",  name:"mLIoff",  title:"방을 나갈 때 조명을 끈다",  easyness:"4",  refCons:"consLI",  titleShort:"조명 소등", level:"",  figNum:"6",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"방을 떠날 때 자주 조명을 사라지게합시다. 곧 돌아올 예정도 켤 때 많은 전기가 흐르지 만, 순간이기 때문에 결과적으로 자주 끄는 것이 에너지 절약됩니다.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mTVreplace'] = { mid:"601",  name:"mTVreplace",  title:"에너지 절약 성능이 높은 TV에 사서 바꾸는",  easyness:"2",  refCons:"consTV",  titleShort:"절약 에네테레비 구매", level:"",  figNum:"7",  lifeTime:"10",  price:"400000",  roanShow:"",  standardType:"普及型",  subsidy :"",  advice:"에너지 절약 성능이 높아지고 있기 때문에 같은 크기이면 절반 이하의 소비 전력이 될 텔레비전이 판매되고 있습니다. 매장에서는 가급적 연간 전기 요금이 싼 것을 선택하도록하십시오.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mTVradio'] = { mid:"602",  name:"mTVradio",  title:"텔레비전 시간의 절반을 라디오로",  easyness:"1",  refCons:"consTVsum",  titleShort:"라디오", level:"",  figNum:"7",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"라디오는 텔레비전의 10 ~ 100 분의 1의 전력하면됩니다. 외로운 위해 텔레비전을 켜고있는 경우에는 절반 정도의 시간은 라디오 나 CD 등을 대신하여보십시오.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mTVtime'] = { mid:"603",  name:"mTVtime",  title:"TV를 켠다 시간을 1 일 1 시간 단축",  easyness:"3",  refCons:"consTV",  titleShort:"텔레비전 단축", level:"",  figNum:"7",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"미리 보는 프로그램을 결정하고보고 끝나면 사라지게합시다. 켜지 당하게하고, 바로 다음 프로그램 본 버릴 수도 있습니다. 또한 비디오 게임의 경우에도 장시간 경향이므로 사용 시간을 짧게하도록합시다.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mTVbright'] = { mid:"604",  name:"mTVbright",  title:"TV 화면을 밝기 초과하지 않도록 조정",  easyness:"2",  refCons:"consTV",  titleShort:"텔레비전 밝기 조절", level:"",  figNum:"7",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"TV 화면의 밝기를 조절할 수있게되어 있습니다. 판매시에는 밝게 설정되어 있으며,이 상태로는 집에서 섬광 너무 소비 전력도 많아집니다. 밝기를 줄여 설정하여 2 ~ 4 % 정도 소비 전력이 절감됩니다. 새로운 TV에서는 센서 자동 조절하는 타입도 있습니다.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mRFreplace'] = { mid:"701",  name:"mRFreplace",  title:"냉장고를 에너지 절약형으로 사서 바꾸는",  easyness:"2",  refCons:"consRF",  titleShort:"에너지 절약 냉장고", level:"",  figNum:"2",  lifeTime:"10",  price:"1500000",  roanShow:"",  standardType:"普及型",  subsidy :"",  advice:"이전 모델에 비해 절반 정도의 전기에서 사는 에너지 절약형 냉장고가 있습니다. 선택할 때에는 통일 절약 라벨의 ★ 마크의 수가 많은 것이나 연간 전기 요금 표시를 참고로 에너지 절약을 선택하십시오.買換 때 오래된 냉장고는 가전 재활용 제도에서 물러 받도록합시다.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mRFstop'] = { mid:"702",  name:"mRFstop",  title:"냉장고 중 하나를 중지",  easyness:"2",  refCons:"consRF",  titleShort:"냉장고 정지", level:"",  figNum:"2",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"2 대 이상 사용하는 경우에는 1 대를 중지하십시오. 소형 냉장고에서 대형만큼 많은 전기를 소모합니다 사용하지 않고두면 '아깝다'라고 느낄지도 모르지만, 전기를 넣고있는 것만으로 큰 환경 부하가 발생할 수 있으므로 사용하지 않는 것이 바람직하다 입니다.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mRFwall'] = { mid:"703",  name:"mRFwall",  title:"냉장고를 벽에서 떼어 놓는다",  easyness:"4",  refCons:"consRF",  titleShort:"냉장고 위치", level:"",  figNum:"2",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"냉장고는 벽에서 5cm 정도 떼어 놓는 것이 기준입니다. 냉장고는 측면과 천장 표면에서 열을 없애하지만 벽에 닿아 있으면 열이 달아나 어려워지고 소비 전력이 10 % 정도 늘어납니다.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mRFtemplature'] = { mid:"704",  name:"mRFtemplature",  title:"냉장고의 온도 설정을 절제하는",  easyness:"4",  refCons:"consRF",  titleShort:"냉장 온도", level:"",  figNum:"2",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"냉장고는 온도 조절이 가능합니다. 강부터 속으로, 속에서 약점으로하면 각각 10 % 정도 절약 할 수 있습니다. 식품의 부패가 약간 빨라집니다 때문에 지장이 없는지 확인하면서 시도하십시오.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mCRreplace'] = { mid:"801",  name:"mCRreplace",  title:"친환경 자동차에 사서 바꾸는",  easyness:"2",  refCons:"consCR",  titleShort:"차량 교체", level:"",  figNum:"21",  lifeTime:"8",  price:"18000000",  roanShow:"",  standardType:"普及型",  subsidy :"エコカーの導入にあたっては、「減税」のメリットが得られます。",  advice:"하이브리드 및 전기 자동차 이외에도 기술 개선으로 기존의 연료 소비가 절반 정도에서 끝나는 저연비 자동차가 개발되어 판매되고 있습니다. 구입시에는 연비를 고려하여 선택하십시오.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mCRreplaceElec'] = { mid:"802",  name:"mCRreplaceElec",  title:"전기 자동차를 도입하는",  easyness:"1",  refCons:"consCR",  titleShort:"전기 자동차", level:"",  figNum:"21",  lifeTime:"7",  price:"30000000",  roanShow:"",  standardType:"",  subsidy :"",  advice:"가솔린 대신 충전식 배터리에 전기를위한 엔진 대신 모터를 돌려 달립니다. 엔진에 비해 효율이 높고, 충분히 실용적인 차량으로 판매되고 있습니다. 그러나 충전 스탠드는 아직 적고, 충전에 시간이 걸리기 때문에 야간에 충전 해두면 편리합니다.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mCRecoDrive'] = { mid:"803",  name:"mCRecoDrive",  title:"아이들링 스톱 등 에코 드라이브에 유의",  easyness:"3",  refCons:"consCRsum",  titleShort:"에코 드라이브", level:"",  figNum:"21",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"아이들링 스톱 외에도 발진시에 부드럽게 시작하여 연비를 10 % 정도 향상시킬 수 있습니다.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mCRtrain'] = { mid:"804",  name:"mCRtrain",  title:"철도 나 버스 등 대중 교통을 이용하기",  easyness:"2",  refCons:"consCRtrip",  titleShort:"대중 교통", level:"",  figNum:"22",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"2km 정도의 인근 경우 기후가 좋은 경우에는 자동차를 사용하지 않고 자전거를 사용하거나, 걷거나합시다. 건강을 위해서도됩니다.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mCR20percent'] = { mid:"805",  name:"mCR20percent",  title:"자동차의 이용을 20 % 중지",  easyness:"1",  refCons:"consCRtrip",  titleShort:"차량 이용 20 % 감소", level:"",  figNum:"22",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"자동차 이용은 많은 에너지를 소비합니다. 필요 얇은 용도에는 사용하지 않는 등의 노력이 중요합니다.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mCRwalk'] = { mid:"806",  name:"mCRwalk",  title:"근처의 경우에는 자동차가 아니라 자전거 나 도보로 이동",  easyness:"2",  refCons:"consCRtrip",  titleShort:"자전거 나 도보", level:"",  figNum:"22",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"2km 정도의 인근 경우 기후가 좋은 경우에는 자동차를 사용하지 않고 자전거를 사용하거나, 걷거나합시다. 건강을 위해서도됩니다.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mPTstopPlug'] = { mid:"901",  name:"mPTstopPlug",  title:"콘센트에서 플러그를 뽑고 대기 전력을 줄이기",  easyness:"3",  refCons:"consTotal",  titleShort:"대기 전력", level:"",  figNum:"20",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"TV 나 비디오, 에어컨 등 사용하지 않는 경우에도 전기가 소비되어있을 수 있습니다. 장시간 사용하지 않을 경우에는 콘센트에서 플러그를 뽑기로 줄일 수 있습니다. 최근의 기종은 대기 전력을 절감 할 수 있으며, 5 년 전 기종에서 사용할 수 있습니다. 또한 에어컨은 직접 콘센트를 뽑는 것이 아니라 먼저 리모콘으로 장악하여 날개의 움직임이 멈추고 나서 뽑으십시오.",   lifestyle:"1",   season:"wss"};

	
	D6.scenario.defInput["i010"] = {  cons:"consTotal",  title:"대책으로서 중시하는 관점",  unit:"",  text:"어떤 대책을 우선적으로 표시하고 있습니까", inputType:"sel010", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"3",d21p:"0",d22t:"2",d22p:"1",d23t:"1",d23p:"2",d2w:"2",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel010"]= [ "선택하세요", "CO2 삭감 우선", "광열비 삭감 우선", "대처의 용이성 고려", "대처의 용이성 우선", "" ];			D6.scenario.defSelectData['sel010']= [ '-1', '1', '2', '3', '4' ];
	D6.scenario.defInput["i001"] = {  cons:"consTotal",  title:"가족 인원수",  unit:"사람",  text:"당신을 포함하여 함께 살고있는 사람을 선택하세요.", inputType:"sel001", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"3",d11p:"2",d12t:"2",d12p:"1",d13t:"1",d13p:"0",d1w:"2",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel001"]= [ "선택하세요", "1 명", "2 명", "3 명", "4 명", "5 명", "6 명", "7 명", "8 명", "9 명 이상", "" ];			D6.scenario.defSelectData['sel001']= [ '-1', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];
	D6.scenario.defInput["i002"] = {  cons:"consTotal",  title:"집합 매물",  unit:"",  text:"お住い는 매물입니까 공동 주택입니까", inputType:"sel002", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"2",d11p:"2",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"2",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel002"]= [ "선택하세요", "매물", "집합", "" ];			D6.scenario.defSelectData['sel002']= [ '-1', '1', '2' ];
	D6.scenario.defInput["i003"] = {  cons:"consTotal",  title:"집의 넓이",  unit:"m2",  text:"집의 연면적에서 가장 가까운 값을 선택하십시오.", inputType:"sel003", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"150",d11p:"0",d12t:"100",d12p:"1",d13t:"0",d13p:"2",d1w:"3",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel003"]= [ "선택하세요", "15m2", "30m2", "50m2", "70m2", "100m2", "120m2", "150m2", "200m2 이상", "" ];			D6.scenario.defSelectData['sel003']= [ '-1', '15', '30', '50', '70', '100', '120', '150', '220' ];
	D6.scenario.defInput["i004"] = {  cons:"consTotal",  title:"집의 소유",  unit:"",  text:"주택 소유입니까, 임대입니까", inputType:"sel004", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel004"]= [ "선택하세요", "주택 소유", "임대", "" ];			D6.scenario.defSelectData['sel004']= [ '-1', '1', '2' ];
	D6.scenario.defInput["i005"] = {  cons:"consTotal",  title:"집의 층수",  unit:"",  text:"무엇 층입니까 공동 주택의 경우 몇 층입니까", inputType:"sel005", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel005"]= [ "선택하세요", "단층집", "2 층", "3 층 이상", "" ];			D6.scenario.defSelectData['sel005']= [ '-1', '1', '2', '3' ];
	D6.scenario.defInput["i006"] = {  cons:"consTotal",  title:"천정이 지붕면 (최상층) 또는",  unit:"",  text:"천정이 지붕면 (최상층)입니까", inputType:"sel006", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel006"]= [ "선택하세요", "최상층 (위 지붕)", "최상층이 아닌 (위에 방이있다)", "" ];			D6.scenario.defSelectData['sel006']= [ '-1', '1', '2' ];
	D6.scenario.defInput["i007"] = {  cons:"consTotal",  title:"지붕의 하루",  unit:"",  text:"지붕의 햇볕 좋은가요", inputType:"sel007", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"3",d11p:"0",d12t:"2",d12p:"1",d13t:"1",d13p:"2",d1w:"3",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel007"]= [ "선택하세요", "우수함", "좋은", "가끔 그들 진", "좋지 않아", "" ];			D6.scenario.defSelectData['sel007']= [ '-1', '1', '2', '3', '4' ];
	D6.scenario.defInput["i008"] = {  cons:"consTotal",  title:"거실 수",  unit:"방",  text:"집에있는 방의 수는", inputType:"sel008", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"8",d11p:"0",d12t:"5",d12p:"1",d13t:"1",d13p:"2",d1w:"2",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel008"]= [ "선택하세요", "1 방", "2 방", "3 방", "4 방", "5 방", "6 방", "7 방", "8 개 이상의 객실", "" ];			D6.scenario.defSelectData['sel008']= [ '-1', '1', '2', '3', '4', '5', '6', '7', '8' ];
	D6.scenario.defInput["i009"] = {  cons:"consTotal",  title:"축년",  unit:"년",  text:"집을 나서 몇 년입니까", inputType:"sel009", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel009"]= [ "선택하세요", "5 년 미만", "5 - 10 년 미만", "10 - 20 년 미만", "20 년 이상", "모르는", "" ];			D6.scenario.defSelectData['sel009']= [ '-1', '3', '7', '13', '30' ];
	D6.scenario.defInput["i021"] = {  cons:"consTotal",  title:"도도부 현",  unit:"",  text:"해당 도시를 선택해주세요.", inputType:"sel021", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue[""]= [ "", "", "" ];			D6.scenario.defSelectData['']= [ '', '', '' ];
	D6.scenario.defInput["i022"] = {  cons:"consTotal",  title:"상세 지역",  unit:"",  text:"도도부 현의 기후가 다른 경우 지역", inputType:"sel022", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue[""]= [ "", "", "" ];			D6.scenario.defSelectData['']= [ '', '', '' ];
	D6.scenario.defInput["i023"] = {  cons:"consTotal",  title:"대중 교통의 편리함",  unit:"",  text:"お住い 대중 교통편이 좋은 지역인가", inputType:"sel023", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel023"]= [ "선택하세요", "편리", "어느 쪽 일까하고 말하면 편리", "어느 쪽 일까하고 말하면 불편", "불편", "" ];			D6.scenario.defSelectData['sel023']= [ '-1', '1', '2', '3', '4' ];
	D6.scenario.defInput["i041"] = {  cons:"consTotal",  title:"창문의 단열 성능",  unit:"",  text:"창문의 단열 성능", inputType:"sel041", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"5",d21p:"0",d22t:"4",d22p:"1",d23t:"0",d23p:"2",d2w:"2",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel041"]= [ "선택하세요", "수지 프레임 삼중 유리", "수지 프레임 low-E 유리", "수지 알루미늄 복합 / 수지 창 이중 유리", "알루미늄 프레임 이중 유리", "알루미늄 프레임 단판 유리", "모르는", "" ];			D6.scenario.defSelectData['sel041']= [ '-1', '1', '2', '3', '4', '5', '6' ];
	D6.scenario.defInput["i042"] = {  cons:"consTotal",  title:"벽면 단열재의 두께",  unit:"",  text:"단열재의 두께는 어느 정도입니까", inputType:"sel042", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"100",d11p:"2",d12t:"50",d12p:"1",d13t:"",d13p:"",d1w:"2",d1d:"1", d21t:"100",d21p:"2",d22t:"50",d22p:"1",d23t:"",d23p:"",d2w:"3",d2d:"1", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel042"]= [ "선택하세요", "그라스울 200mm 상당", "그라스울 150mm 상당", "그라스울 100mm 상당", "유리 섬유 50mm 상당", "유리 섬유 30mm 상당", "들어 있지 않은", "모르는", "" ];			D6.scenario.defSelectData['sel042']= [ '-1', '200', '150', '100', '50', '30', '10', '-1' ];
	D6.scenario.defInput["i043"] = {  cons:"consTotal",  title:"창문의 단열 리폼",  unit:"",  text:"창문의 단열 리모델링을하였습니다 편인가", inputType:"sel043", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"1",d21p:"2",d22t:"2",d22p:"1",d23t:"",d23p:"",d2w:"2",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel043"]= [ "선택하세요", "전체적으로 한", "일부 한", "하지", "" ];			D6.scenario.defSelectData['sel043']= [ '-1', '1', '2', '3' ];
	D6.scenario.defInput["i044"] = {  cons:"consTotal",  title:"벽 천장 단열 리폼",  unit:"",  text:"벽 · 천장 · 바닥의 단열 리모델링을 했습니까?", inputType:"sel044", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"1",d21p:"2",d22t:"2",d22p:"1",d23t:"",d23p:"",d2w:"1",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel044"]= [ "선택하세요", "전체적으로 한", "일부 한", "하지", "" ];			D6.scenario.defSelectData['sel044']= [ '-1', '1', '2', '3' ];
	D6.scenario.defInput["i051"] = {  cons:"consEnergy",  title:"태양 광 발전의 설치",  unit:"",  text:"태양 광 발전 장치를 설치하고 있습니까?", inputType:"sel051", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"1",d11p:"2",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"4",d1d:"0", d21t:"1",d21p:"2",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"4",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel051"]= [ "선택하세요", "하지", "하는", "" ];			D6.scenario.defSelectData['sel051']= [ '-1', '0', '1' ];
	D6.scenario.defInput["i052"] = {  cons:"consEnergy",  title:"태양 광 발전의 크기",  unit:"kW",  text:"설치하는 태양 광 발전 장치의 크기를 선택하십시오.", inputType:"sel052", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"5",d11p:"2",d12t:"2",d12p:"1",d13t:"",d13p:"",d1w:"2",d1d:"0", d21t:"5",d21p:"2",d22t:"2",d22p:"1",d23t:"",d23p:"",d2w:"2",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel052"]= [ "선택하세요", "하지", "하고있다 (~ 3kW)", "하고있다 (4kW)", "하고있다 (5kW)", "하고있다 (6 ~ 10kW)", "하고있다 (10kW 이상)", "" ];			D6.scenario.defSelectData['sel052']= [ '-1', '0', '3', '4', '5', '8', '11' ];
	D6.scenario.defInput["i053"] = {  cons:"consEnergy",  title:"태양 광 발전의 설치 연도",  unit:"",  text:"태양 광 발전을 설치 년도는 언제입니까", inputType:"sel053", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel053"]= [ "선택하세요", "2010 년 이전", "2011 - 2012 년", "2013 년도", "2014 년", "2015 년", "2016 년도", "2017 년 이후", "설치하지", "" ];			D6.scenario.defSelectData['sel053']= [ '-1', '2010', '2011', '2013', '2014', '2015', '2016', '2017', '9999' ];
	D6.scenario.defInput["i054"] = {  cons:"consEnergy",  title:"등유를 사용하고 있습니까?",  unit:"",  text:"등유를 사용하고 있습니까?", inputType:"sel054", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel054"]= [ "선택하세요", "예", "아니오", "" ];			D6.scenario.defSelectData['sel054']= [ '-1', '1', '2' ];
	D6.scenario.defInput["i061"] = {  cons:"consEnergy",  title:"전기 요금",  unit:"원형",  text:"1 개월의 대략적인 전기료를 선택하십시오.", inputType:"sel061", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"15000",d11p:"0",d12t:"10000",d12p:"1",d13t:"0",d13p:"2",d1w:"3",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel061"]= [ "선택하세요", "5천원", "1만원", "1만5천 원", "2만원", "3만원", "5만원", "7만원", "10만원", "15만원", "20만원", "이상", "" ];			D6.scenario.defSelectData['sel061']= [ '-1', '5000', '10000', '15000', '20000', '30000', '50000', '70000', '100000', '150000', '200000', '300000' ];
	D6.scenario.defInput["i062"] = {  cons:"consEnergy",  title:"매전 금액",  unit:"원형",  text:"태양 광 발전으로 한달에 얼마나 전기를 팔 수 있습니까?", inputType:"sel062", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel062"]= [ "선택하세요", "5천원", "1만원", "1만5천 원", "2만원", "3만원", "5만원", "7만원", "10만원", "15만원", "20만원", "이상", "" ];			D6.scenario.defSelectData['sel062']= [ '-1', '5000', '10000', '15000', '20000', '30000', '50000', '70000', '100000', '150000', '200000', '300000' ];
	D6.scenario.defInput["i063"] = {  cons:"consEnergy",  title:"유가",  unit:"원형",  text:"1 개월의 대략적인 유가를 선택하십시오.", inputType:"sel063", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"10000",d11p:"0",d12t:"6000",d12p:"1",d13t:"0",d13p:"2",d1w:"2",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel063"]= [ "선택하세요", "올 전화 (사용하지 않는)", "5천원", "1만원", "1만5천 원", "2만원", "3만원", "5만원", "7만원", "10만원", "15만원", "20만원FALSE" ];			D6.scenario.defSelectData['sel063']= [ '-1', '0', '5000', '10000', '15000', '20000', '30000', '50000', '70000', '100000', '150000', '200000', '300000' ];
	D6.scenario.defInput["i064"] = {  cons:"consEnergy",  title:"등유 구입량",  unit:"원형",  text:"달 당 대략 등유 사용량을 선택하십시오.", inputType:"sel064", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"10000",d11p:"0",d12t:"6000",d12p:"1",d13t:"0",d13p:"2",d1w:"2",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel064"]= [ "선택하세요", "사용하지", "2 개월에 1 캔 (9L)", "월 1 캔 (18L)", "월 2 캔 (36L)", "월 3 캔 (54L)", "주 1 캔 (72L)", "5 일 1 캔 (108L)", "주 2 캔 (144L)", "주 3 캔 (216L)", "이상", "" ];			D6.scenario.defSelectData['sel064']= [ '-1', '0', '9000', '18000', '36000', '54000', '72000', '108000', '144000', '216000', '300000' ];
	D6.scenario.defInput["i065"] = {  cons:"consEnergy",  title:"연탄 구입량",  unit:"원형",  text:"1 개월 당 대략 연탄 구입량을 선택하십시오.", inputType:"sel065", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"10000",d11p:"0",d12t:"6000",d12p:"1",d13t:"0",d13p:"2",d1w:"2",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel065"]= [ "선택하세요", "사용하지", "5천원", "1만원", "1만5천 원", "2만원", "3만원", "5만원", "7만원", "10만원", "15만원", "20만원FALSE" ];			D6.scenario.defSelectData['sel065']= [ '-1', '0', '5000', '10000', '15000', '20000', '30000', '50000', '70000', '100000', '150000', '200000', '300000' ];
	D6.scenario.defInput["i066"] = {  cons:"consEnergy",  title:"지역 열공급",  unit:"원형",  text:"난방의 지역 열공급이 있나요", inputType:"sel066", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"10000",d11p:"0",d12t:"6000",d12p:"1",d13t:"0",d13p:"2",d1w:"2",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel066"]= [ "선택하세요", "사용하지", "사용하는", "" ];			D6.scenario.defSelectData['sel066']= [ '-1', '1', '2' ];
	D6.scenario.defInput["i072"] = {  cons:"consEnergy",  title:"홈 탱크의 용량",  unit:"",  text:"홈 탱크가 설치되어있는 경우는 그 용량을 선택하십시오", inputType:"sel072", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel072"]= [ "선택하세요", "100L", "200L", "300L", "400L", "" ];			D6.scenario.defSelectData['sel072']= [ '-1', '100', '200', '300', '400' ];
	D6.scenario.defInput["i073"] = {  cons:"consEnergy",  title:"등유 홈 탱크 횟수",  unit:"",  text:"등유의 홈 탱크에 연간에 넣는 횟수를 선택하십시오", inputType:"sel073", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel073"]= [ "선택하세요", "연 3 회 이하", "년 4-6 회", "년 7-10 회", "년 11-15 회", "년 16-20 회", "년 21 회 이상", "" ];			D6.scenario.defSelectData['sel073']= [ '-1', '3', '5', '8', '12', '18', '24' ];
	D6.scenario.defInput["i074"] = {  cons:"consEnergy",  title:"상하수도 요금",  unit:"원형",  text:"달 당 대략 상하수도 요금을 선택하십시오.", inputType:"sel074", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel074"]= [ "선택하세요", "5천원", "7천원", "1만원", "1만5천 원", "2만원", "3만원", "5만원", "7만원", "10만원", "15만원", "이상", "" ];			D6.scenario.defSelectData['sel074']= [ '-1', '5000', '7000', '10000', '15000', '20000', '30000', '50000', '70000', '100000', '150000', '200000' ];
	D6.scenario.defInput["i075"] = {  cons:"consEnergy",  title:"차량 연료비",  unit:"원형",  text:"대략 한 달 기름 값 (기름 값)을 선택하십시오. 가족 분입니다.", inputType:"sel075", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"10000",d11p:"0",d12t:"6000",d12p:"1",d13t:"0",d13p:"2",d1w:"2",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel075"]= [ "선택하세요", "사용하지", "5천원", "1만원", "1만5천 원", "2만원", "3만원", "5만원", "7만원", "10만원", "15만원", "20만원FALSE" ];			D6.scenario.defSelectData['sel075']= [ '-1', '0', '5000', '10000', '15000', '20000', '30000', '50000', '70000', '100000', '150000', '200000', '300000' ];
	D6.scenario.defInput["i081"] = {  cons:"consEnergy",  title:"전력 회사",  unit:"",  text:"전력 회사를 선택하십시오", inputType:"sel081", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel081"]= [ "선택하세요", "홋카이도 전력", "도호쿠", "도쿄 전력", "주부 전력", "호쿠리쿠 전력", "간사이 전력", "주부 전력", "시코쿠 전력", "큐슈 전력", "오키나와 전력", "그 외", "" ];			D6.scenario.defSelectData['sel081']= [ '-1', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11' ];
	D6.scenario.defInput["i082"] = {  cons:"consEnergy",  title:"전기 계약",  unit:"",  text:"전기 계약 종류를 선택하십시오", inputType:"sel082", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel082"]= [ "선택하세요", "일반 가정용 (사용량)", "시간 대별 계약", "" ];			D6.scenario.defSelectData['sel082']= [ '-1', '1', '2' ];
	D6.scenario.defInput["i083"] = {  cons:"consEnergy",  title:"가스 종류",  unit:"",  text:"가스의 종류를 선택하십시오", inputType:"sel083", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel083"]= [ "선택하세요", "도시 가스", "LP 가스", "가스를 사용하지", "" ];			D6.scenario.defSelectData['sel083']= [ '-1', '1', '2', '3' ];
	D6.scenario.defInput["i091"] = {  cons:"consSeason",  title:"전기 요금",  unit:"원형",  text:"1 개월의 대략적인 전기료를 선택하십시오.", inputType:"sel091", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel091"]= [ "선택하세요", "5천원", "1만원", "1만5천 원", "2만원", "3만원", "5만원", "7만원", "10만원", "15만원", "20만원", "이상", "" ];			D6.scenario.defSelectData['sel091']= [ '-1', '5000', '10000', '15000', '20000', '30000', '50000', '70000', '100000', '150000', '200000', '300000' ];
	D6.scenario.defInput["i092"] = {  cons:"consSeason",  title:"매전 금액",  unit:"원형",  text:"태양 광 발전으로 한달에 얼마나 전기를 팔 수 있습니까?", inputType:"sel092", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel092"]= [ "선택하세요", "5천원", "1만원", "1만5천 원", "2만원", "3만원", "5만원", "7만원", "10만원", "15만원", "20만원", "이상", "" ];			D6.scenario.defSelectData['sel092']= [ '-1', '5000', '10000', '15000', '20000', '30000', '50000', '70000', '100000', '150000', '200000', '300000' ];
	D6.scenario.defInput["i093"] = {  cons:"consSeason",  title:"유가",  unit:"원형",  text:"1 개월의 대략적인 유가를 선택하십시오.", inputType:"sel093", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel093"]= [ "선택하세요", "올 전화 (사용하지 않는)", "5천원", "1만원", "1만5천 원", "2만원", "3만원", "5만원", "7만원", "10만원", "15만원", "20만원FALSE" ];			D6.scenario.defSelectData['sel093']= [ '-1', '0', '5000', '10000', '15000', '20000', '30000', '50000', '70000', '100000', '150000', '200000', '300000' ];
	D6.scenario.defInput["i094"] = {  cons:"consSeason",  title:"등유 구입량",  unit:"원형",  text:"달 당 대략 등유 사용량을 선택하십시오.", inputType:"sel094", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel094"]= [ "선택하세요", "사용하지", "2 개월에 1 캔 (9L)", "월 1 캔 (18L)", "월 2 캔 (36L)", "월 3 캔 (54L)", "주 1 캔 (72L)", "5 일 1 캔 (108L)", "주 2 캔 (144L)", "주 3 캔 (216L)", "이상", "" ];			D6.scenario.defSelectData['sel094']= [ '-1', '0', '9000', '18000', '36000', '54000', '72000', '108000', '144000', '216000', '300000' ];
	D6.scenario.defInput["i101"] = {  cons:"consHWsum",  title:"온수기의 종류",  unit:"",  text:"목욕물을 끓이는 온수기는 어떤 기기인가요?", inputType:"sel101", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"6",d21p:"2",d22t:"3",d22p:"0",d23t:"2",d23p:"1",d2w:"2",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel101"]= [ "선택하세요", "가스 온수기", "에코 죠즈 (가스 잠열 회수 형)", "등유 온수기", "에코 필 (등유 잠열 회수 형)", "전기 온수기", "에코 큐트 (전기)", "에코 윌 (열병합)", "네팜 (연료 전지)", "장작", "" ];			D6.scenario.defSelectData['sel101']= [ '-1', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];
	D6.scenario.defInput["i102"] = {  cons:"consHWsum",  title:"태양열 온수기",  unit:"",  text:"태양열 온수기를 사용하고 있습니까?", inputType:"sel102", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"3",d11p:"0",d12t:"1",d12p:"2",d13t:"",d13p:"",d1w:"2",d1d:"0", d21t:"3",d21p:"0",d22t:"1",d22p:"2",d23t:"",d23p:"",d2w:"2",d2d:"0", d31t:"3",d31p:"0",d32t:"1",d32p:"2",d33t:"",d33p:"",d3w:"2",d3d:"0"}; 			D6.scenario.defSelectValue["sel102"]= [ "선택하세요", "이용하고있는", "가끔 이용하고있다", "사용하지 않는", "" ];			D6.scenario.defSelectData['sel102']= [ '-1', '1', '2', '3' ];
	D6.scenario.defInput["i103"] = {  cons:"consHWtub",  title:"목욕 끓인 기간 (여름 비)",  unit:"일 / 주",  text:"목욕을 끓이는은 일주일에 며칠 정도입니까?", inputType:"sel103", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"5",d31p:"0",d32t:"2",d32p:"1",d33t:"0",d33p:"2",d3w:"2",d3d:"0"}; 			D6.scenario.defSelectValue["sel103"]= [ "선택하세요", "물을 모아 않는다", "주 1 일", "주 2 일", "2 일에 1 회 정도", "주 5 ~ 6 일", "매일", "" ];			D6.scenario.defSelectData['sel103']= [ '-1', '0', '1', '2', '3.5', '5.5', '7' ];
	D6.scenario.defInput["i104"] = {  cons:"consHWtub",  title:"목욕 끓인 기간 (여름)",  unit:"일 / 주",  text:"여름철에 목욕을 끓이는은 일주일에 며칠 정도입니까?", inputType:"sel104", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"5",d31p:"0",d32t:"2",d32p:"1",d33t:"0",d33p:"2",d3w:"2",d3d:"0"}; 			D6.scenario.defSelectValue["sel104"]= [ "선택하세요", "물을 모아 않는다", "주 1 일", "주 2 일", "2 일에 1 회 정도", "주 5 ~ 6 일", "매일", "" ];			D6.scenario.defSelectData['sel104']= [ '-1', '0', '1', '2', '3.5', '5.5', '7' ];
	D6.scenario.defInput["i105"] = {  cons:"consHWshower",  title:"샤워 시간 (여름 비)",  unit:"분 / 일",  text:"온 가족이 샤워를 쓰는 시간은 하루에 몇 분 정도입니까. 평균적으로는 1 명 5 분 정도입니다.", inputType:"sel105", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"40",d11p:"0",d12t:"20",d12p:"1",d13t:"0",d13p:"2",d1w:"2",d1d:"0", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"40",d31p:"0",d32t:"20",d32p:"1",d33t:"0",d33p:"2",d3w:"2",d3d:"0"}; 			D6.scenario.defSelectValue["sel105"]= [ "선택하세요", "사용하지", "5 분", "10 분", "15 분", "20 분", "30 분", "40 분", "60 분", "90 분", "120 분", "" ];			D6.scenario.defSelectData['sel105']= [ '-1', '0', '5', '10', '15', '20', '30', '40', '60', '90', '120' ];
	D6.scenario.defInput["i106"] = {  cons:"consHWshower",  title:"샤워 시간 (여름)",  unit:"분 / 일",  text:"여름철에 가족이 샤워를 쓰는 시간은 하루에 몇 분 정도입니까.", inputType:"sel106", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"40",d11p:"0",d12t:"20",d12p:"1",d13t:"0",d13p:"2",d1w:"2",d1d:"0", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"40",d31p:"0",d32t:"20",d32p:"1",d33t:"0",d33p:"2",d3w:"2",d3d:"0"}; 			D6.scenario.defSelectValue["sel106"]= [ "선택하세요", "사용하지", "5 분", "10 분", "15 분", "20 분", "30 분", "40 분", "60 분", "90 분", "120 분", "" ];			D6.scenario.defSelectData['sel106']= [ '-1', '0', '5', '10', '15', '20', '30', '40', '60', '90', '120' ];
	D6.scenario.defInput["i107"] = {  cons:"consHWtub",  title:"뜨거운 물 높이",  unit:"",  text:"욕조에 어느 높이까지 물을 모아 있습니까", inputType:"sel107", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"8",d31p:"0",d32t:"0",d32p:"2",d33t:"",d33p:"",d3w:"2",d3d:"0"}; 			D6.scenario.defSelectValue["sel107"]= [ "선택하세요", "어깨까지 익는 정도", "반신욕", "물을하라 없다", "" ];			D6.scenario.defSelectData['sel107']= [ '-1', '8', '4', '0' ];
	D6.scenario.defInput["i108"] = {  cons:"consHWtub",  title:"욕조 보온 시간",  unit:"시간",  text:"목욕 보온을 1 일 몇 시간하고 있습니까?", inputType:"sel108", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"10",d31p:"0",d32t:"4",d32p:"1",d33t:"0",d33p:"2",d3w:"1",d3d:"0"}; 			D6.scenario.defSelectValue["sel108"]= [ "선택하세요", "하지", "3 시간", "6 시간", "10 시간", "16 시간", "24 시간", "" ];			D6.scenario.defSelectData['sel108']= [ '-1', '0', '3', '6', '10', '16', '24' ];
	D6.scenario.defInput["i109"] = {  cons:"consHWtub",  title:"욕조의 뜨거운 물에 몸을 씻고",  unit:"",  text:"욕조에 모아 일 때 욕조의 물을 사용합니까?", inputType:"sel109", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel109"]= [ "선택하세요", "욕조의 뜨거운 물을 사용", "반반 정도", "샤워를 사용", "모르는", "" ];			D6.scenario.defSelectData['sel109']= [ '-1', '10', '5', '2', '0' ];
	D6.scenario.defInput["i110"] = {  cons:"consHWtub",  title:"욕실의 온수를 다시 데울 방법",  unit:"할인",  text:"목욕물을 재가열은 어떻게합니까?", inputType:"sel110", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"10",d31p:"0",d32t:"0",d32p:"2",d33t:"",d33p:"",d3w:"1",d3d:"0"}; 			D6.scenario.defSelectValue["sel110"]= [ "선택하세요", "항상 자동으로 목욕물을 재가열을하고있다", "필요에 따라 목욕물을 재가열을", "필요에 따라 붓고 물을", "모르는", "" ];			D6.scenario.defSelectData['sel110']= [ '-1', '10', '5', '5', '0' ];
	D6.scenario.defInput["i111"] = {  cons:"consHWtub",  title:"욕실의 온수가 부족할 때",  unit:"할인",  text:"욕조의 물이 부족할 때 어떻게합니까", inputType:"sel111", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel111"]= [ "선택하세요", "항상 자동으로 타시 온수된다", "필요에 따라 붓고 물을", "적은 상태로 들어간다", "그 가끔씩에서 해당", "모르는", "" ];			D6.scenario.defSelectData['sel111']= [ '-1', '10', '5', '0', '5', '5' ];
	D6.scenario.defInput["i112"] = {  cons:"consHWshower",  title:"샤워 물이 나올 때까지",  unit:"초",  text:"먼저 물이 나올 때까지 시간은 얼마나됩니까", inputType:"sel112", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"20",d21p:"0",d22t:"10",d22p:"1",d23t:"0",d23p:"2",d2w:"1",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel112"]= [ "선택하세요", "곧 물이 나오는", "5 초 정도 기다린다", "10 초 정도 기다린다", "20 초 정도 기다린다", "1 분 미만 기다리는", "모르는", "" ];			D6.scenario.defSelectData['sel112']= [ '-1', '3', '5', '10', '20', '50', '20' ];
	D6.scenario.defInput["i113"] = {  cons:"consHWdishwash",  title:"식기의 물 사용",  unit:"",  text:"식기에 뜨거운 물을 사용하지 않고 물을 사용하도록하고 있습니까?", inputType:"sel113", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel113"]= [ "선택하세요", "항상하고있다", "대체로하고있다", "때때로하고있다", "하지", "" ];			D6.scenario.defSelectData['sel113']= [ '-1', '1', '2', '3', '4' ];
	D6.scenario.defInput["i114"] = {  cons:"consHWdresser",  title:"세면대에서 물 사용 기간",  unit:"개월",  text:"세면대에서 물이 아니라 물을 끓여서 사용시기는 몇 개월인가", inputType:"sel114", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"5",d31p:"0",d32t:"0",d32p:"2",d33t:"",d33p:"",d3w:"1",d3d:"0"}; 			D6.scenario.defSelectValue["sel114"]= [ "선택하세요", "물을 사용하지", "2 개월", "4 개월", "6 개월", "8 개월", "10 개월", "12 개월", "" ];			D6.scenario.defSelectData['sel114']= [ '-1', '0', '2', '4', '6', '8', '10', '12' ];
	D6.scenario.defInput["i115"] = {  cons:"consHWdishwash",  title:"식기의 물 사용 기간",  unit:"개월",  text:"설거지하는데 물이 아니라 물을 끓여서 사용시기는 몇 개월인가", inputType:"sel115", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel115"]= [ "선택하세요", "물을 사용하지", "식기 세척기 사용", "2 개월", "4 개월", "6 개월", "8 개월", "10 개월", "12 개월", "" ];			D6.scenario.defSelectData['sel115']= [ '-1', '0', '99', '2', '4', '6', '8', '10', '12' ];
	D6.scenario.defInput["i116"] = {  cons:"consHWshower",  title:"절수 샤워 헤드",  unit:"",  text:"절수 샤워 헤드를 사용하고 있습니까?", inputType:"sel116", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"2",d21p:"0",d22t:"1",d22p:"2",d23t:"",d23p:"",d2w:"2",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel116"]= [ "선택하세요", "사용하는", "사용하지 않는", "모르는", "" ];			D6.scenario.defSelectData['sel116']= [ '-1', '1', '2', '3' ];
	D6.scenario.defInput["i117"] = {  cons:"consHWtub",  title:"욕조 · 욕실",  unit:"",  text:"욕실입니까? 또한 욕조는 절연 형입니까", inputType:"sel117", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"3",d21p:"0",d22t:"2",d22p:"1",d23t:"1",d23p:"0",d2w:"1",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel117"]= [ "선택하세요", "단열 욕조의 욕실", "욕실", "욕실 아니다", "" ];			D6.scenario.defSelectData['sel117']= [ '-1', '1', '2', '3' ];
	D6.scenario.defInput["i131"] = {  cons:"consHWtoilet",  title:"변기의 보온",  unit:"",  text:"변기의 보온을하고 있습니까?", inputType:"sel131", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"4",d31p:"2",d32t:"2",d32p:"1",d33t:"1",d33p:"0",d3w:"1",d3d:"0"}; 			D6.scenario.defSelectValue["sel131"]= [ "선택하세요", "연중하고있는", "여름 비하고있다", "겨울 만하고있다", "하지", "" ];			D6.scenario.defSelectData['sel131']= [ '-1', '1', '2', '3', '4' ];
	D6.scenario.defInput["i132"] = {  cons:"consHWtoilet",  title:"변기의 온도 설정",  unit:"",  text:"변기의 온도 설정은 어떻게합니까?", inputType:"sel132", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"4",d31p:"0",d32t:"3",d32p:"1",d33t:"2",d33p:"2",d3w:"1",d3d:"0"}; 			D6.scenario.defSelectValue["sel132"]= [ "선택하세요", "강화", "보통", "낮은", "모르는", "" ];			D6.scenario.defSelectData['sel132']= [ '-1', '1', '2', '3', '4' ];
	D6.scenario.defInput["i133"] = {  cons:"consHWtoilet",  title:"순간 식 보온 변기",  unit:"",  text:"순간 식 보온 변기입니까", inputType:"sel133", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel133"]= [ "선택하세요", "예", "아니오", "" ];			D6.scenario.defSelectData['sel133']= [ '-1', '1', '2' ];
	D6.scenario.defInput["i134"] = {  cons:"consHWtoilet",  title:"변기 뚜껑을 닫는다",  unit:"",  text:"사용 후 변기 뚜껑을 닫아 있습니까", inputType:"sel134", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"2",d31p:"0",d32t:"1",d32p:"2",d33t:"",d33p:"1",d3w:"1",d3d:""}; 			D6.scenario.defSelectValue["sel134"]= [ "선택하세요", "예", "아니오", "" ];			D6.scenario.defSelectData['sel134']= [ '-1', '1', '2' ];
	D6.scenario.defInput["i201"] = {  cons:"consHTsum",  title:"난방 범위",  unit:"",  text:"잘 난방을하는 범위는 집 전체의 얼마나됩니까?", inputType:"sel201", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"1",d11p:"0",d12t:"0.5",d12p:"1",d13t:"0",d13p:"2",d1w:"1",d1d:"0", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel201"]= [ "선택하세요", "집 전체", "집의 절반 정도", "집의 일부", "1 객실 만", "방의 난방을하지", "" ];			D6.scenario.defSelectData['sel201']= [ '-1', '1', '0.5', '0.25', '0.1', '0.02' ];
	D6.scenario.defInput["i202"] = {  cons:"consHTsum",  title:"주로 사용하는 난방기구",  unit:"",  text:"방을 데우기 위하여 가장 자주 사용하는 난방기구의 에너지 원은 무엇입니까? 바닥 난방의 경우는 열원에서 뽑아주십시오.", inputType:"sel202", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"6",d11p:"0",d12t:"5",d12p:"2",d13t:"",d13p:"",d1w:"2",d1d:"0", d21t:"6",d21p:"0",d22t:"5",d22p:"2",d23t:"",d23p:"",d2w:"2",d2d:"0", d31t:"5",d31p:"2",d32t:"2",d32p:"0",d33t:"1",d33p:"1",d3w:"2",d3d:"0"}; 			D6.scenario.defSelectValue["sel202"]= [ "선택하세요", "에어컨", "전열 난방", "가스", "등유", "장작 펠렛 스토브", "난로와 전기 장판 만", "" ];			D6.scenario.defSelectData['sel202']= [ '-1', '1', '2', '3', '4', '5', '6' ];
	D6.scenario.defInput["i203"] = {  cons:"consHTsum",  title:"보조적으로 사용 난방기구",  unit:"",  text:"보조적으로 사용 난방기구가 있나요", inputType:"sel203", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel203"]= [ "선택하세요", "에어컨", "전열 난방", "가스", "등유", "장작 펠렛 스토브", "난로와 전기 장판 만", "" ];			D6.scenario.defSelectData['sel203']= [ '-1', '0', '18', '19', '20', '21', '22', '23', '24', '25', '26' ];
	D6.scenario.defInput["i204"] = {  cons:"consHTsum",  title:"난방 시간",  unit:"시간",  text:"겨울에 난방은 하루에 몇 시간 정도 사용합니까?", inputType:"sel204", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"24",d11p:"0",d12t:"0",d12p:"2",d13t:"",d13p:"",d1w:"2",d1d:"0", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel204"]= [ "선택하세요", "사용하지", "1 시간", "2 시간", "3 시간", "4 시간", "6 시간", "8 시간", "12 시간", "16 시간", "24 시간", "" ];			D6.scenario.defSelectData['sel204']= [ '-1', '0', '1', '2', '3', '4', '6', '8', '12', '16', '24' ];
	D6.scenario.defInput["i205"] = {  cons:"consHTsum",  title:"난방 설정 온도",  unit:"℃",  text:"난방을 할 때 무엇 ℃로 설정 하시겠습니까? 설정할 수없는 경우는 약 몇 ​​℃가되어 있습니까?", inputType:"sel205", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"23",d11p:"0",d12t:"21",d12p:"1",d13t:"0",d13p:"2",d1w:"3",d1d:"0", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"23",d31p:"0",d32t:"21",d32p:"1",d33t:"0",d33p:"2",d3w:"3",d3d:"0"}; 			D6.scenario.defSelectValue["sel205"]= [ "선택하세요", "사용하지", "18 ℃", "19 ℃", "20 ℃", "21 ℃", "22 ℃", "23 ℃", "24 ℃", "25 ℃", "26 ℃ 이상", "" ];			D6.scenario.defSelectData['sel205']= [ '-1', '0', '18', '19', '20', '21', '22', '23', '24', '25', '26' ];
	D6.scenario.defInput["i206"] = {  cons:"consHTsum",  title:"난방 기간",  unit:"개월",  text:"방을 난방하는 기간은 1 년에 몇 달 정도입니까", inputType:"sel206", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel206"]= [ "선택하세요", "난방을하지", "1 개월", "2 개월", "3 개월", "4 개월", "5 개월", "6 개월", "8 개월", "10 개월", "" ];			D6.scenario.defSelectData['sel206']= [ '-1', '0', '1', '2', '3', '4', '5', '6', '8', '10' ];
	D6.scenario.defInput["i211"] = {  cons:"consACheat",  title:"방 이름",  unit:"",  text:"방 이름", inputType:"", right:"", postfix:"", nodata:"", varType:"String", min:"", max:"", defaultValue:"", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue[""]= [ "", "", "" ];			D6.scenario.defSelectData['']= [ '', '', '' ];
	D6.scenario.defInput["i212"] = {  cons:"consACheat",  title:"방의 넓이",  unit:"m2",  text:"냉난방하는 방의 넓이를 대답했다. 불어가있는 경우에는 그 분을 2 배하십시오.", inputType:"sel212", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel212"]= [ "선택하세요", "4 조 반", "6 조", "8 조", "10 조", "12 조", "15 조", "20 조", "25 조", "30 조", "40 조", "" ];			D6.scenario.defSelectData['sel212']= [ '-1', '7.3', '10', '13', '16', '19.5', '24', '33', '41', '49', '65' ];
	D6.scenario.defInput["i213"] = {  cons:"consACheat",  title:"유리창의 크기",  unit:"m2",  text:"샷시와 유리 창 크기를 그 방 전체로 대답했다.", inputType:"sel213", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel213"]= [ "선택하세요", "작은 창 (90 × 120)", "腰窓 (120 × 180)", "2 장 쓸어 창 (180 × 180)", "4 장 쓸어 창 (180 × 360)", "쓸어 6 장 상당 (180 × 540)", "쓸어 8 장 상당 (180 × 720)", "" ];			D6.scenario.defSelectData['sel213']= [ '-1', '1.1', '2.2', '3.3', '6.5', '9.7', '13' ];
	D6.scenario.defInput["i214"] = {  cons:"consACheat",  title:"유리창의 종류",  unit:"w / m2K",  text:"유리창의 종류", inputType:"sel214", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"4",d21p:"2",d22t:"3",d22p:"1",d23t:"",d23p:"",d2w:"1",d2d:"1", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel214"]= [ "선택하세요", "1 장 유리", "알루미늄 복층 유리", "알루미늄 이외 테두리 복층 유리", "이중창", "low-e 복층 유리", "" ];			D6.scenario.defSelectData['sel214']= [ '-1', '6', '3.5', '2.5', '2.5', '1.5' ];
	D6.scenario.defInput["i215"] = {  cons:"consACcool",  title:"에어컨의 사용 기간",  unit:"년",  text:"에어컨의 사용 기간", inputType:"sel215", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel215"]= [ "선택하세요", "없어", "1 년 미만", "3 년 미만", "5 년 미만", "7 년 미만", "10 년 미만", "15 년 미만", "20 년 미만", "20 년 이상", "" ];			D6.scenario.defSelectData['sel215']= [ '-1', '0', '1', '2', '4', '6', '9', '13', '18', '25' ];
	D6.scenario.defInput["i216"] = {  cons:"consACcool",  title:"에어컨 성능",  unit:"",  text:"에어컨을 구입 한 경우에는 에너지 절약을 선택 했습니까?", inputType:"sel216", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"2",d11p:"0",d12t:"1",d12p:"2",d13t:"",d13p:"",d1w:"2",d1d:"0", d21t:"2",d21p:"0",d22t:"1",d22p:"2",d23t:"",d23p:"",d2w:"2",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel216"]= [ "선택하세요", "예", "아니오", "모르는", "" ];			D6.scenario.defSelectData['sel216']= [ '-1', '1', '2', '3' ];
	D6.scenario.defInput["i217"] = {  cons:"consACcool",  title:"에어컨 필터 청소",  unit:"",  text:"에어컨 필터 청소를하고 있습니까?", inputType:"sel217", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"2",d31p:"0",d32t:"1",d32p:"2",d33t:"",d33p:"",d3w:"1",d3d:"0"}; 			D6.scenario.defSelectValue["sel217"]= [ "선택하세요", "하는", "하지", "모르는", "" ];			D6.scenario.defSelectData['sel217']= [ '-1', '1', '2', '3' ];
	D6.scenario.defInput["i231"] = {  cons:"consACheat",  title:"주로 사용하는 난방기구",  unit:"",  text:"방을 데우기 위하여 가장 자주 사용하는 난방기구의 에너지 원은 무엇입니까? 바닥 난방의 경우는 열원에서 뽑아주십시오.", inputType:"sel231", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel231"]= [ "선택하세요", "에어컨", "전열 난방", "가스", "등유", "장작 펠렛 스토브", "난로와 전기 장판 만", "" ];			D6.scenario.defSelectData['sel231']= [ '-1', '1', '2', '3', '4', '5', '6' ];
	D6.scenario.defInput["i232"] = {  cons:"consACheat",  title:"보조적으로 사용 난방기구",  unit:"",  text:"보조적으로 사용 난방기구가 있나요", inputType:"sel232", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel232"]= [ "선택하세요", "에어컨", "전열 난방", "가스", "등유", "장작 펠렛 스토브", "난로와 전기 장판 만", "" ];			D6.scenario.defSelectData['sel232']= [ '-1', '0', '18', '19', '20', '21', '22', '23', '24', '25', '26' ];
	D6.scenario.defInput["i233"] = {  cons:"consACheat",  title:"난방 시간",  unit:"시간",  text:"겨울에 난방은 하루에 몇 시간 정도 사용합니까?", inputType:"sel233", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel233"]= [ "선택하세요", "사용하지", "1 시간", "2 시간", "3 시간", "4 시간", "6 시간", "8 시간", "12 시간", "16 시간", "24 시간", "" ];			D6.scenario.defSelectData['sel233']= [ '-1', '0', '1', '2', '3', '4', '6', '8', '12', '16', '24' ];
	D6.scenario.defInput["i234"] = {  cons:"consACheat",  title:"난방 설정 온도",  unit:"℃",  text:"난방을 할 때 무엇 ℃로 설정 하시겠습니까? 설정할 수없는 경우는 약 몇 ​​℃가되어 있습니까?", inputType:"sel234", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel234"]= [ "선택하세요", "사용하지", "18 ℃", "19 ℃", "20 ℃", "21 ℃", "22 ℃", "23 ℃", "24 ℃", "25 ℃", "26 ℃ 이상", "" ];			D6.scenario.defSelectData['sel234']= [ '-1', '0', '18', '19', '20', '21', '22', '23', '24', '25', '26' ];
	D6.scenario.defInput["i235"] = {  cons:"consACheat",  title:"난방 기간",  unit:"개월",  text:"방을 난방하는 기간은 1 년에 몇 달 정도입니까", inputType:"sel235", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel235"]= [ "선택하세요", "난방을하지", "1 개월", "2 개월", "3 개월", "4 개월", "5 개월", "6 개월", "8 개월", "10 개월", "" ];			D6.scenario.defSelectData['sel235']= [ '-1', '0', '1', '2', '3', '4', '5', '6', '8', '10' ];
	D6.scenario.defInput["i236"] = {  cons:"consACheat",  title:"가습기의 사용 기간",  unit:"개월",  text:"가습기를 사용 기간은 1 년에 몇 달 정도입니까", inputType:"sel236", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel236"]= [ "선택하세요", "가습을하지", "1 개월", "2 개월", "3 개월", "4 개월", "5 개월", "6 개월", "" ];			D6.scenario.defSelectData['sel236']= [ '-1', '0', '1', '2', '3', '4', '5', '6' ];
	D6.scenario.defInput["i237"] = {  cons:"consACheat",  title:"단열 시트 설치",  unit:"",  text:"겨울철 두꺼운 커튼 단열 시트 설치", inputType:"sel237", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel237"]= [ "선택하세요", "하는", "하지", "" ];			D6.scenario.defSelectData['sel237']= [ '-1', '1', '2' ];
	D6.scenario.defInput["i238"] = {  cons:"consACheat",  title:"방 문에 締め切れ 있습니까",  unit:"",  text:"방 문에 締め切れ 있습니까", inputType:"sel238", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel238"]= [ "선택하세요", "수", "수 없다", "" ];			D6.scenario.defSelectData['sel238']= [ '-1', '1', '2' ];
	D6.scenario.defInput["i239"] = {  cons:"consACheat",  title:"불어",  unit:"",  text:"불어 또는 방에서 계단에 위층에 올라가면 있습니까", inputType:"sel239", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel239"]= [ "선택하세요", "있는", "없는", "" ];			D6.scenario.defSelectData['sel239']= [ '-1', '1', '2' ];
	D6.scenario.defInput["i240"] = {  cons:"consACheat",  title:"방 분할에 의한 난방 면적 감소",  unit:"",  text:"방 분할에 의한 난방 면적 감소", inputType:"sel240", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel240"]= [ "선택하세요", "수 없다", "2 % 감소", "30 ~ 40 % 감소", "반감", "60 ~ 70 % 감소", "" ];			D6.scenario.defSelectData['sel240']= [ '-1', '0', '2', '3', '5', '7' ];
	D6.scenario.defInput["i241"] = {  cons:"consACheat",  title:"전기 난로의 사용 시간",  unit:"",  text:"전기 히터 오일 히터 사용 시간", inputType:"sel241", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel241"]= [ "선택하세요", "사용하지", "1 시간", "2 시간", "3 시간", "4 시간", "6 시간", "8 시간", "12 시간", "16 시간", "24 시간", "" ];			D6.scenario.defSelectData['sel241']= [ '-1', '0', '1', '2', '3', '4', '6', '8', '12', '16', '24' ];
	D6.scenario.defInput["i242"] = {  cons:"consACheat",  title:"방 추위",  unit:"",  text:"그 방은 난방은 효과가 있나요", inputType:"sel242", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel242"]= [ "선택하세요", "난방하면 추위는 느끼지 않는다", "다소 추운", "좀처럼 暖まら 않는", "난방도 추운", "난방은하지", "" ];			D6.scenario.defSelectData['sel242']= [ '-1', '1', '2', '3', '4', '5' ];
	D6.scenario.defInput["i243"] = {  cons:"consHTsum",  title:"창문의 결로의 유무",  unit:"",  text:"창문의 결로가 있나요", inputType:"sel243", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel243"]= [ "선택하세요", "잘 응결", "조금 결로", "대부분 비 응축", "비 응축", "모르는", "" ];			D6.scenario.defSelectData['sel243']= [ '-1', '1', '2', '3', '4', '5' ];
	D6.scenario.defInput["i244"] = {  cons:"consHTsum",  title:"벽장 등의 벽면의 결로",  unit:"",  text:"벽장 등의 벽면에 결로가 있나요", inputType:"sel244", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel244"]= [ "선택하세요", "잘 응결", "조금 결로", "대부분 비 응축", "비 응축", "모르는", "" ];			D6.scenario.defSelectData['sel244']= [ '-1', '1', '2', '3', '4', '5' ];
	D6.scenario.defInput["i245"] = {  cons:"consHTsum",  title:"아침 추위를 느낄 수",  unit:"개월",  text:"가장 실감 추위를 선택해주세요", inputType:"sel245", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel245"]= [ "선택하세요", "추위로 아침에 일어나기가 힘든", "손발이 찬", "창문에 서리가 붙는", "방에서 숨이 하얗게 흐리게", "" ];			D6.scenario.defSelectData['sel245']= [ '-1', '1', '2', '3', '4', '5' ];
	D6.scenario.defInput["i246"] = {  cons:"consHTsum",  title:"이른 아침 추위가 시작시기",  unit:"",  text:"이른 아침 추위는 언제부터입니까", inputType:"sel246", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel246"]= [ "선택하세요", "10 월 상순", "10 월 하순", "11 월 상순", "11 월 하순", "12 월 상순", "12 월 하순", "1 월 상순", "1 월 하순", "" ];			D6.scenario.defSelectData['sel246']= [ '-1', '1', '2', '3', '4', '5', '6', '7', '8' ];
	D6.scenario.defInput["i247"] = {  cons:"consHTsum",  title:"이른 아침 추위가 끝나는시기",  unit:"",  text:"이른 아침 추위는 언제입니까", inputType:"sel247", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel247"]= [ "선택하세요", "2 월 상순", "2 월 하순", "3 월 상순", "3 월 하순", "4 월 상순", "4 월 하순", "5 월 상순", "5 월 하순", "" ];			D6.scenario.defSelectData['sel247']= [ '-1', '1', '2', '3', '4', '5', '6', '7', '8' ];
	D6.scenario.defInput["i248"] = {  cons:"consHTsum",  title:"두꺼운 옷의 연구",  unit:"",  text:"난방을 켤 때는 우선 옷을 두껍게하도록 노력하고 있습니까?", inputType:"sel248", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"3",d11p:"0",d12t:"2",d12p:"1",d13t:"1",d13p:"2",d1w:"1",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"3",d31p:"0",d32t:"2",d32p:"1",d33t:"1",d33p:"2",d3w:"1",d3d:"1"}; 			D6.scenario.defSelectValue["sel248"]= [ "선택하세요", "항상하고있다", "대체로하고있다", "때때로하고있다", "하지", "" ];			D6.scenario.defSelectData['sel248']= [ '-1', '1', '2', '3', '4' ];
	D6.scenario.defInput["i249"] = {  cons:"consHTsum",  title:"부재 방 난방",  unit:"",  text:"사람이없는 방을 난방하지 않도록하고 있습니까?", inputType:"sel249", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"4",d11p:"2",d12t:"3",d12p:"1",d13t:"",d13p:"",d1w:"1",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"4",d31p:"2",d32t:"3",d32p:"1",d33t:"",d33p:"",d3w:"2",d3d:"1"}; 			D6.scenario.defSelectValue["sel249"]= [ "선택하세요", "항상하고있다", "대체로하고있다", "때때로하고있다", "하지", "" ];			D6.scenario.defSelectData['sel249']= [ '-1', '1', '2', '3', '4' ];
	D6.scenario.defInput["i261"] = {  cons:"consCOsum",  title:"냉각 시간",  unit:"시간",  text:"여름에 냉방은 하루에 몇 시간 정도 사용합니까?", inputType:"sel261", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"24",d31p:"0",d32t:"8",d32p:"1",d33t:"",d33p:"",d3w:"1",d3d:"1"}; 			D6.scenario.defSelectValue["sel261"]= [ "선택하세요", "사용하지", "1 시간", "2 시간", "3 시간", "4 시간", "6 시간", "8 시간", "12 시간", "16 시간", "24 시간", "" ];			D6.scenario.defSelectData['sel261']= [ '-1', '0', '1', '2', '3', '4', '6', '8', '12', '16', '24' ];
	D6.scenario.defInput["i262"] = {  cons:"consCOsum",  title:"냉각 시간",  unit:"",  text:"주로 어느 시간대에 냉방을 사용합니까?", inputType:"sel262", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel262"]= [ "선택하세요", "사용하지", "아침", "낮", "저녁", "밤", "" ];			D6.scenario.defSelectData['sel262']= [ '-1', '0', '1', '2', '3', '4' ];
	D6.scenario.defInput["i263"] = {  cons:"consCOsum",  title:"냉방 설정 온도",  unit:"℃",  text:"냉방을 할 때 무엇 ℃로 설정 하시겠습니까?", inputType:"sel263", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"28",d11p:"2",d12t:"25",d12p:"1",d13t:"",d13p:"",d1w:"1",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"28",d31p:"2",d32t:"25",d32p:"1",d33t:"",d33p:"",d3w:"1",d3d:"1"}; 			D6.scenario.defSelectValue["sel263"]= [ "선택하세요", "24 ℃ 이하", "25 ℃", "26 ℃", "27 ℃", "28 ℃", "29 ℃", "30 ℃", "사용하지", "" ];			D6.scenario.defSelectData['sel263']= [ '-1', '24', '25', '26', '27', '28', '29', '30', '0' ];
	D6.scenario.defInput["i264"] = {  cons:"consCOsum",  title:"냉방 기간 (제습 포함)",  unit:"개월",  text:"냉방 기간 (제습 포함)", inputType:"sel264", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel264"]= [ "선택하세요", "냉방을하지", "1 개월", "2 개월", "3 개월", "4 개월", "5 개월", "6 개월", "" ];			D6.scenario.defSelectData['sel264']= [ '-1', '0', '1', '2', '3', '4', '5', '6' ];
	D6.scenario.defInput["i265"] = {  cons:"consCOsum",  title:"방 더위",  unit:"",  text:"그 방은 더운가요", inputType:"sel265", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel265"]= [ "선택하세요", "냉각하면 더위는 느끼지 않는다", "다소 더운", "좀처럼 시원 안", "냉방도 ​​더운", "냉방은하지", "" ];			D6.scenario.defSelectData['sel265']= [ '-1', '1', '2', '3', '4', '5' ];
	D6.scenario.defInput["i266"] = {  cons:"consCOsum",  title:"일사 유입 여부",  unit:"",  text:"여름 아침과 저녁에 햇빛이 방에 들어가나요", inputType:"sel266", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel266"]= [ "선택하세요", "잘 들어", "조금 들어간다", "들어 가지 않는다", "모르는", "" ];			D6.scenario.defSelectData['sel266']= [ '-1', '1', '2', '3', '4' ];
	D6.scenario.defInput["i267"] = {  cons:"consCOsum",  title:"일사 컷",  unit:"",  text:"석양이나 아침 해가 들어가면 방이 더워집니다. 일사가 들어 가지 않도록 고안되어 있습니까?", inputType:"sel267", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"4",d11p:"0",d12t:"2",d12p:"1",d13t:"1",d13p:"2",d1w:"1",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"4",d31p:"0",d32t:"2",d32p:"1",d33t:"1",d33p:"2",d3w:"1",d3d:"1"}; 			D6.scenario.defSelectValue["sel267"]= [ "선택하세요", "항상하고있다", "대체로하고있다", "때때로하고있다", "하지", "" ];			D6.scenario.defSelectData['sel267']= [ '-1', '1', '2', '3', '4' ];
	D6.scenario.defInput["i268"] = {  cons:"consCOsum",  title:"선풍기 이용",  unit:"",  text:"선풍기를 활용하는 등 에어컨을 가급적 사용하지 않도록하고 있습니까", inputType:"sel268", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"4",d31p:"0",d32t:"2",d32p:"1",d33t:"1",d33p:"2",d3w:"1",d3d:"1"}; 			D6.scenario.defSelectValue["sel268"]= [ "선택하세요", "항상하고있다", "대체로하고있다", "때때로하고있다", "하지", "" ];			D6.scenario.defSelectData['sel268']= [ '-1', '1', '2', '3', '4' ];
	D6.scenario.defInput["i271"] = {  cons:"consACcool",  title:"냉각 시간",  unit:"시간",  text:"여름에 냉방은 하루에 몇 시간 정도 사용합니까?", inputType:"sel271", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"10",d31p:"0",d32t:"4",d32p:"1",d33t:"0",d33p:"2",d3w:"1",d3d:"1"}; 			D6.scenario.defSelectValue["sel271"]= [ "선택하세요", "사용하지", "1 시간", "2 시간", "3 시간", "4 시간", "6 시간", "8 시간", "12 시간", "16 시간", "24 시간", "" ];			D6.scenario.defSelectData['sel271']= [ '-1', '0', '1', '2', '3', '4', '6', '8', '12', '16', '24' ];
	D6.scenario.defInput["i272"] = {  cons:"consACcool",  title:"냉각 시간",  unit:"",  text:"주로 어느 시간대에 냉방을 사용합니까?", inputType:"sel272", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel272"]= [ "선택하세요", "사용하지", "아침", "낮", "저녁", "밤", "" ];			D6.scenario.defSelectData['sel272']= [ '-1', '0', '1', '2', '3', '4' ];
	D6.scenario.defInput["i273"] = {  cons:"consACcool",  title:"냉방 설정 온도",  unit:"℃",  text:"냉방을 할 때 무엇 ℃로 설정 하시겠습니까?", inputType:"sel273", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel273"]= [ "선택하세요", "24 ℃ 이하", "25 ℃", "26 ℃", "27 ℃", "28 ℃", "29 ℃", "30 ℃", "사용하지", "" ];			D6.scenario.defSelectData['sel273']= [ '-1', '24', '25', '26', '27', '28', '29', '30', '0' ];
	D6.scenario.defInput["i274"] = {  cons:"consACcool",  title:"냉방 기간 (제습 포함)",  unit:"개월",  text:"냉방 기간 (제습 포함)", inputType:"sel274", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel274"]= [ "선택하세요", "냉방을하지", "1 개월", "2 개월", "3 개월", "4 개월", "5 개월", "6 개월", "" ];			D6.scenario.defSelectData['sel274']= [ '-1', '0', '1', '2', '3', '4', '5', '6' ];
	D6.scenario.defInput["i275"] = {  cons:"consACcool",  title:"방 더위",  unit:"",  text:"그 방은 더운가요", inputType:"sel275", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel275"]= [ "선택하세요", "냉각하면 더위는 느끼지 않는다", "다소 더운", "좀처럼 시원라면 더욱", "냉방도 ​​더운", "냉방은하지", "" ];			D6.scenario.defSelectData['sel275']= [ '-1', '1', '2', '3', '4', '5' ];
	D6.scenario.defInput["i276"] = {  cons:"consACcool",  title:"일사 유입 여부",  unit:"",  text:"여름 아침과 저녁에 햇빛이 방에 들어가나요", inputType:"sel276", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel276"]= [ "선택하세요", "잘 들어", "조금 들어간다", "들어 가지 않는다", "모르는", "" ];			D6.scenario.defSelectData['sel276']= [ '-1', '1', '2', '3', '4' ];
	D6.scenario.defInput["i277"] = {  cons:"consACcool",  title:"일사 컷",  unit:"",  text:"석양이나 아침 해가 들어가면 방이 더워집니다. 일사가 들어 가지 않도록 고안되어 있습니까?", inputType:"sel277", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel277"]= [ "선택하세요", "항상하고있다", "대체로하고있다", "때때로하고있다", "하지", "" ];			D6.scenario.defSelectData['sel277']= [ '-1', '1', '2', '3', '4' ];
	D6.scenario.defInput["i278"] = {  cons:"consACcool",  title:"선풍기 이용",  unit:"",  text:"선풍기를 활용하는 등 에어컨을 가급적 사용하지 않도록하고 있습니까", inputType:"sel278", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel278"]= [ "선택하세요", "항상하고있다", "대체로하고있다", "때때로하고있다", "하지", "" ];			D6.scenario.defSelectData['sel278']= [ '-1', '1', '2', '3', '4' ];
	D6.scenario.defInput["i281"] = {  cons:"consHTcold",  title:"중앙 난방",  unit:"",  text:"중앙 난방입니까", inputType:"sel281", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel281"]= [ "선택하세요", "예", "아니오", "" ];			D6.scenario.defSelectData['sel281']= [ '-1', '1', '2' ];
	D6.scenario.defInput["i282"] = {  cons:"consHTcold",  title:"중앙 열원",  unit:"",  text:"중앙 난방 열원", inputType:"sel282", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel282"]= [ "선택하세요", "등유", "전기", "전기 (히트 펌프)", "가스", "하이브리드 (히트 펌프 + 가스)", "지역 열공급", "" ];			D6.scenario.defSelectData['sel282']= [ '-1', '1', '2', '3', '4', '5', '6' ];
	D6.scenario.defInput["i283"] = {  cons:"consHTcold",  title:"중앙 전용 열원",  unit:"",  text:"중앙의 열원 기기와 목욕 열원은 다른입니까", inputType:"sel283", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel283"]= [ "선택하세요", "중앙 전용", "목욕과 공유", "" ];			D6.scenario.defSelectData['sel283']= [ '-1', '1', '2' ];
	D6.scenario.defInput["i284"] = {  cons:"consHTcold",  title:"중앙 난방 기간",  unit:"",  text:"중앙 난방을 사용하는 기간은", inputType:"sel284", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel284"]= [ "선택하세요", "사용하지", "1 개월", "2 개월", "3 개월", "4 개월", "5 개월", "6 개월", "8 개월", "" ];			D6.scenario.defSelectData['sel284']= [ '-1', '0', '1', '2', '3', '4', '5', '6', '8' ];
	D6.scenario.defInput["i285"] = {  cons:"consHTsum",  title:"열교환 환기",  unit:"",  text:"열교환 식 환기입니까", inputType:"sel285", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"2",d11p:"0",d12t:"1",d12p:"2",d13t:"",d13p:"",d1w:"1",d1d:"0", d21t:"2",d21p:"0",d22t:"1",d22p:"2",d23t:"",d23p:"",d2w:"1",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel285"]= [ "선택하세요", "예", "아니오", "" ];			D6.scenario.defSelectData['sel285']= [ '-1', '1', '2' ];
	D6.scenario.defInput["i286"] = {  cons:"consHTcold",  title:"로드 히팅",  unit:"",  text:"로드 히팅을 사용하고 있습니까?", inputType:"sel286", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel286"]= [ "선택하세요", "예", "아니오", "" ];			D6.scenario.defSelectData['sel286']= [ '-1', '1', '2' ];
	D6.scenario.defInput["i287"] = {  cons:"consHTcold",  title:"로드 난방 열원",  unit:"",  text:"로드 난방용 열원", inputType:"sel287", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel287"]= [ "선택하세요", "등유", "전기", "전기 (히트 펌프)", "가스", "하이브리드 (히트 펌프 + 가스)", "지역 열공급", "" ];			D6.scenario.defSelectData['sel287']= [ '-1', '1', '2', '3', '4', '5', '6' ];
	D6.scenario.defInput["i288"] = {  cons:"consHTcold",  title:"로드 난방 면적",  unit:"",  text:"로드 난방 면적", inputType:"sel288", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel288"]= [ "선택하세요", "1 평 (3m2)", "2 평 (7m2)", "3 평 (10m2)", "5 평 (15m2)", "10 평 (30m2)", "15 평 (50m2)", "20 평 (65m2)", "30 평 (100m2)", "" ];			D6.scenario.defSelectData['sel288']= [ '-1', '3', '7', '10', '15', '30', '50', '65', '100' ];
	D6.scenario.defInput["i289"] = {  cons:"consHTcold",  title:"로드 히팅 이용 빈도",  unit:"",  text:"로드 히팅 이용 빈도", inputType:"sel289", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel289"]= [ "선택하세요", "올해 2-3 일", "달에 1 일 정도", "한달에 2 ~ 3 일", "일주일에 2 ~ 3 일", "센서에서 상시 ON", "센서없이 상시 ON", "" ];			D6.scenario.defSelectData['sel289']= [ '-1', '2', '6', '12', '30', '50', '100' ];
	D6.scenario.defInput["i290"] = {  cons:"consHTcold",  title:"지붕 난방의 이용",  unit:"",  text:"지붕 난방을 사용하고 있습니까?", inputType:"sel290", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel290"]= [ "선택하세요", "예", "아니오", "" ];			D6.scenario.defSelectData['sel290']= [ '-1', '1', '2' ];
	D6.scenario.defInput["i291"] = {  cons:"consHTcold",  title:"지붕 난방의 대상 면적",  unit:"",  text:"지붕 난방의 대상 면적", inputType:"sel291", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel291"]= [ "선택하세요", ": 거터 주위 만", "지붕면 전체", "" ];			D6.scenario.defSelectData['sel291']= [ '-1', '10', '30' ];
	D6.scenario.defInput["i292"] = {  cons:"consHTcold",  title:"지붕 난방 열원",  unit:"",  text:"지붕 난방 열원", inputType:"sel292", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel292"]= [ "선택하세요", "등유", "전기", "전기 (히트 펌프)", "가스", "코 제너레이션 (가스)", "코 제너레이션 (등유)", "지역 열공급", "" ];			D6.scenario.defSelectData['sel292']= [ '-1', '1', '2', '3', '4', '5', '6' ];
	D6.scenario.defInput["i293"] = {  cons:"consHTcold",  title:"지붕 난방의 이용 빈도",  unit:"",  text:"지붕 난방을 사용하는 빈도는", inputType:"sel293", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel293"]= [ "선택하세요", "올해 2-3 일", "달에 1 일 정도", "한달에 2 ~ 3 일", "일주일에 2 ~ 3 일", "센서에서 상시 ON", "센서없이 상시 ON", "" ];			D6.scenario.defSelectData['sel293']= [ '-1', '2', '6', '15', '30', '50', '100' ];
	D6.scenario.defInput["i294"] = {  cons:"consHTcold",  title:"해설 조의 이용",  unit:"",  text:"해설 조의 이용", inputType:"sel294", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel294"]= [ "선택하세요", "예", "아니오", "모르는", "" ];			D6.scenario.defSelectData['sel294']= [ '-1', '1', '2', '3' ];
	D6.scenario.defInput["i295"] = {  cons:"consHTcold",  title:"해설 조 열원",  unit:"",  text:"해설 조 열원", inputType:"sel295", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel295"]= [ "선택하세요", "등유", "전기", "전기 (히트 펌프)", "가스", "코 제너레이션 (가스)", "코 제너레이션 (등유)", "지역 열공급", "" ];			D6.scenario.defSelectData['sel295']= [ '-1', '1', '2', '3', '4', '5', '6' ];
	D6.scenario.defInput["i401"] = {  cons:"consDRsum",  title:"의류 건조기의 이용 빈도",  unit:"",  text:"세탁 건조기 및 건조 기능을 사용하고 있습니까? 사용하는 경우에는 어느 정도 사용하는지 선택해주세요.", inputType:"sel401", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"5",d11p:"0",d12t:"3",d12p:"1",d13t:"0",d13p:"2",d1w:"2",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel401"]= [ "선택하세요", "사용하지", "월 1 ~ 3 회", "주 1 ~ 2 회", "2 일에 1 회", "매일", "" ];			D6.scenario.defSelectData['sel401']= [ '-1', '5', '4', '3', '2', '1' ];
	D6.scenario.defInput["i402"] = {  cons:"consDRsum",  title:"건조기의 종류",  unit:"",  text:"건조기의 종류", inputType:"sel402", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel402"]= [ "선택하세요", "전기 (히트 펌프 식)", "전기", "가스", "모르는", "없어", "" ];			D6.scenario.defSelectData['sel402']= [ '-1', '1', '2', '3', '4', '5' ];
	D6.scenario.defInput["i403"] = {  cons:"consDRsum",  title:"세탁 빈도",  unit:"",  text:"세탁기 사용은 어떻습니까", inputType:"sel403", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel403"]= [ "선택하세요", "매일 여러 번 세탁기를 돌리는", "매일 2 회 정도 세탁기를 돌릴", "매일 1 회 세탁기를 돌릴", "오물이 쌓이면 세탁기를 돌릴", "모르는", "" ];			D6.scenario.defSelectData['sel403']= [ '-1', '4', '2', '1', '0.5', '1' ];
	D6.scenario.defInput["i411"] = {  cons:"consDRsum",  title:"진공 청소기의 강약",  unit:"",  text:"진공 청소기의 강약 설정은 어떻게합니까?", inputType:"sel411", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel411"]= [ "선택하세요", "대부분 힘으로 사용하는", "장소에 따라 구분하는", "기본 약점에서 사용하고있는", "설정이 없다", "모르는", "" ];			D6.scenario.defSelectData['sel411']= [ '-1', '1', '2', '3', '4', '5', '6' ];
	D6.scenario.defInput["i412"] = {  cons:"consDRsum",  title:"진공 청소기 이용",  unit:"분 / 일",  text:"진공 청소기를 하루에 얼마나 사용합니까?", inputType:"sel412", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel412"]= [ "선택하세요", "거의 사용하지 않는", "5 분", "10 분", "15 분", "30 분", "1 시간", "로봇 청소기를 사용", "모르는", "" ];			D6.scenario.defSelectData['sel412']= [ '-1', '0', '5', '10', '15', '30', '60', '11', '12' ];
	D6.scenario.defInput["i501"] = {  cons:"consLIsum",  title:"거실 조명",  unit:"W",  text:"거실의 조명기구에는 주로 무엇을 사용하고 있습니까?", inputType:"sel501", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"3",d21p:"2",d22t:"2",d22p:"1",d23t:"",d23p:"",d2w:"1",d2d:"1", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel501"]= [ "선택하세요", "백열전", "형광등", "LED", "" ];			D6.scenario.defSelectData['sel501']= [ '-1', '1', '2', '3' ];
	D6.scenario.defInput["i502"] = {  cons:"consLIsum",  title:"부재 실내 조명",  unit:"",  text:"사람이없는 방의 조명을 어둡게하고 있습니까?", inputType:"sel502", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"3",d11p:"2",d12t:"2",d12p:"1",d13t:"",d13p:"",d1w:"1",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"3",d31p:"2",d32t:"2",d32p:"1",d33t:"",d33p:"",d3w:"1",d3d:"1"}; 			D6.scenario.defSelectValue["sel502"]= [ "선택하세요", "모든 낸다", "틀어 장소도", "거의 감추고있다", "감추고있다", "" ];			D6.scenario.defSelectData['sel502']= [ '-1', '10', '6', '2', '0' ];
	D6.scenario.defInput["i511"] = {  cons:"consLI",  title:"조명의 위치",  unit:"",  text:"", inputType:"sel511", right:"1", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel511"]= [ "선택하세요", "현관", "門灯", "복도", "화장실", "탈의실", "목욕", "거실", "" ];			D6.scenario.defSelectData['sel511']= [ '-1', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10' ];
	D6.scenario.defInput["i512"] = {  cons:"consLI",  title:"조명의 종류",  unit:"",  text:"", inputType:"sel512", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel512"]= [ "선택하세요", "백열전", "전 구형 형광등", "형광등", "세관 형광등", "LED", "센 서식 라이트", "" ];			D6.scenario.defSelectData['sel512']= [ '-1', '1', '2', '3', '4', '5', '6' ];
	D6.scenario.defInput["i513"] = {  cons:"consLI",  title:"1 구 (책)의 소비 전력",  unit:"W",  text:"", inputType:"sel513", right:"1", postfix:"Number", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel513"]= [ "선택하세요", "5W", "10W", "15W", "20W", "30W", "40W", "60W", "80W", "100W", "" ];			D6.scenario.defSelectData['sel513']= [ '-1', '5', '10', '15', '20', '30', '40', '60', '80', '100' ];
	D6.scenario.defInput["i514"] = {  cons:"consLI",  title:"투구 수 편수",  unit:"공 · 본",  text:"중 다수있는 경우, 어떤 공 · 몇개인가", inputType:"sel514", right:"1", postfix:"Number", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel514"]= [ "선택하세요", "1 구 · 본", "2 구 · 본", "3 공 · 본", "4 구 · 본", "6 구 · 본", "8 공 · 본", "10 공 · 본", "15 공 · 본", "20 공 · 본", "30 구 · 본", "" ];			D6.scenario.defSelectData['sel514']= [ '-1', '1', '2', '3', '4', '6', '8', '10', '15', '20', '30' ];
	D6.scenario.defInput["i515"] = {  cons:"consLI",  title:"조명의 사용 시간",  unit:"시간 / 일",  text:"하루에 몇 시간 사용합니까?", inputType:"sel515", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel515"]= [ "선택하세요", "사용하지", "1 시간", "2 시간", "3 시간", "4 시간", "6 시간", "8 시간", "12 시간", "16 시간", "24 시간", "" ];			D6.scenario.defSelectData['sel515']= [ '-1', '0', '1', '2', '3', '4', '6', '8', '12', '16', '24' ];
	D6.scenario.defInput["i601"] = {  cons:"consTVsum",  title:"텔레비전의 시간",  unit:"시간",  text:"집에있는 모든 TV 계에서 하루에 몇 시간 켜지 있습니까? 비디오 게임의 시간도 포함 해주세요.", inputType:"sel601", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel601"]= [ "선택하세요", "사용하지", "2 시간", "4 시간", "6 시간", "8 시간", "12 시간", "16 시간", "24 시간", "32 시간", "40 시간", "" ];			D6.scenario.defSelectData['sel601']= [ '-1', '0', '2', '4', '6', '8', '12', '16', '24', '32', '40' ];
	D6.scenario.defInput["i631"] = {  cons:"consTV",  title:"텔레비전의 크기",  unit:"인치",  text:"텔레비전의 크기", inputType:"sel631", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel631"]= [ "선택하세요", "없어", "20 인치 미만", "20 ~ 30 인치", "30 ~ 40 인치", "40 ~ 50 인치", "50 ~ 65 인치", "65 인치 이상", "" ];			D6.scenario.defSelectData['sel631']= [ '-1', '0', '18', '25', '35', '45', '60', '70' ];
	D6.scenario.defInput["i632"] = {  cons:"consTV",  title:"TV 사용 기간",  unit:"년",  text:"TV 사용 기간", inputType:"sel632", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel632"]= [ "선택하세요", "없어", "1 년 미만", "3 년 미만", "5 년 미만", "7 년 미만", "10 년 미만", "15 년 미만", "20 년 미만", "20 년 이상", "" ];			D6.scenario.defSelectData['sel632']= [ '-1', '0', '1', '2', '4', '6', '9', '13', '18', '25' ];
	D6.scenario.defInput["i633"] = {  cons:"consTV",  title:"텔레비전의 시간",  unit:"년",  text:"TV 사용 기간", inputType:"sel633", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel633"]= [ "선택하세요", "사용하지", "2 시간", "4 시간", "6 시간", "8 시간", "12 시간", "16 시간", "24 시간", "" ];			D6.scenario.defSelectData['sel633']= [ '-1', '0', '2', '4', '6', '8', '12', '16', '24' ];
	D6.scenario.defInput["i701"] = {  cons:"consRFsum",  title:"냉장고 대수",  unit:"대",  text:"냉장고를 여러 대 사용하고 있습니까? 스토커 (냉동고)도 1 대를 세어주세요.", inputType:"sel701", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"2",d11p:"0",d12t:"0",d12p:"2",d13t:"",d13p:"",d1w:"1",d1d:"2", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"2",d31p:"0",d32t:"0",d32p:"2",d33t:"",d33p:"",d3w:"1",d3d:"2"}; 			D6.scenario.defSelectValue["sel701"]= [ "선택하세요", "없어", "1 대", "2 대", "3 대", "4 대", "5 개", "" ];			D6.scenario.defSelectData['sel701']= [ '-1', '0', '1', '2', '3', '4', '5' ];
	D6.scenario.defInput["i711"] = {  cons:"consRF",  title:"냉장고의 사용 기간",  unit:"년",  text:"냉장고의 사용 기간", inputType:"sel711", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel711"]= [ "선택하세요", "없어", "1 년 미만", "3 년 미만", "5 년 미만", "7 년 미만", "10 년 미만", "15 년 미만", "20 년 미만", "20 년 이상", "" ];			D6.scenario.defSelectData['sel711']= [ '-1', '0', '0', '2', '4', '6', '8', '12', '17', '25' ];
	D6.scenario.defInput["i712"] = {  cons:"consRF",  title:"냉장고의 종류",  unit:"",  text:"냉장고의 종류", inputType:"sel712", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel712"]= [ "선택하세요", "냉동 냉장고", "냉동고 (스토커)", "" ];			D6.scenario.defSelectData['sel712']= [ '-1', '1', '2' ];
	D6.scenario.defInput["i713"] = {  cons:"consRF",  title:"정격 내용량",  unit:"",  text:"정격 내용량", inputType:"sel713", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel713"]= [ "선택하세요", "100L 미만", "101-200 리터", "201-300 리터", "301-400 리터", "401-500 리터", "501 리터 이상", "" ];			D6.scenario.defSelectData['sel713']= [ '-1', '80', '150', '250', '350', '450', '550' ];
	D6.scenario.defInput["i714"] = {  cons:"consRF",  title:"냉장고 온도 설정",  unit:"",  text:"온도 설정은 어떻게합니까?", inputType:"sel714", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"4",d31p:"1",d32t:"3",d32p:"2",d33t:"0",d33p:"1",d3w:"1",d3d:"1"}; 			D6.scenario.defSelectValue["sel714"]= [ "선택하세요", "강도", "중", "약점", "모르는", "" ];			D6.scenario.defSelectData['sel714']= [ '-1', '1', '2', '3', '4' ];
	D6.scenario.defInput["i715"] = {  cons:"consRF",  title:"내용의 つめすぎ",  unit:"",  text:"손톱 초과하지 않도록 유의하고 있습니까", inputType:"sel715", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel715"]= [ "선택하세요", "조심하는", "별로하지 못하고", "하지 못하고", "모르는", "" ];			D6.scenario.defSelectData['sel715']= [ '-1', '1', '2', '3', '4' ];
	D6.scenario.defInput["i716"] = {  cons:"consRF",  title:"벽에서 틈새를 열었다 설치",  unit:"",  text:"측면과 뒷면에 5cm 정도의 간격을두고 있습니까?", inputType:"sel716", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel716"]= [ "선택하세요", "수있다", "하지 못하고", "모르는", "" ];			D6.scenario.defSelectData['sel716']= [ '-1', '1', '2', '3' ];
	D6.scenario.defInput["i801"] = {  cons:"consCKcook",  title:"스토브 열원",  unit:"",  text:"스토브 열원", inputType:"sel801", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel801"]= [ "선택하세요", "가스", "전기 (IH 등)", "모르는", "" ];			D6.scenario.defSelectData['sel801']= [ '-1', '1', '2', '3' ];
	D6.scenario.defInput["i802"] = {  cons:"consCKcook",  title:"요리 빈도",  unit:"할인",  text:"요리 빈도", inputType:"sel802", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel802"]= [ "선택하세요", "하지", "주 1 식 다음", "일주일에 2-3 끼", "1 일 1 식", "1 일 2 식", "1 일 3 식", "" ];			D6.scenario.defSelectData['sel802']= [ '-1', '0', '1', '2', '4', '7', '10' ];
	D6.scenario.defInput["i811"] = {  cons:"consCKrice",  title:"저 보온",  unit:"",  text:"밥솥의 보온을하고 있습니까?", inputType:"sel811", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel811"]= [ "선택하세요", "하지", "6 시간 정도하고", "12 시간 정도하고", "거의 24 시간하고있다", "" ];			D6.scenario.defSelectData['sel811']= [ '-1', '0', '6', '12', '24' ];
	D6.scenario.defInput["i821"] = {  cons:"consCKpot",  title:"냄비 보온",  unit:"",  text:"냄비 보온을하고 있습니까?", inputType:"sel821", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"10",d11p:"0",d12t:"4",d12p:"1",d13t:"0",d13p:"2",d1w:"1",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"10",d31p:"0",d32t:"4",d32p:"1",d33t:"0",d33p:"2",d3w:"1",d3d:"1"}; 			D6.scenario.defSelectValue["sel821"]= [ "선택하세요", "하지", "6 시간 정도하고", "12 시간 정도하고", "거의 24 시간하고있다", "" ];			D6.scenario.defSelectData['sel821']= [ '-1', '0', '6', '12', '24' ];
	D6.scenario.defInput["i822"] = {  cons:"consCKpot",  title:"전기 주전자의 에너지 절약",  unit:"",  text:"전기 주전자는 에너지 절약형입니까", inputType:"sel822", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel822"]= [ "선택하세요", "예", "아니오", "모르는", "" ];			D6.scenario.defSelectData['sel822']= [ '-1', '1', '2', '3' ];
	D6.scenario.defInput["i901"] = {  cons:"consCRsum",  title:"자동차 보유 대수",  unit:"",  text:"자동차 보유 대수", inputType:"sel901", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"4",d11p:"0",d12t:"2",d12p:"1",d13t:"0",d13p:"2",d1w:"2",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel901"]= [ "선택하세요", "없어", "1 대", "2 대", "3 대", "4 대", "5 대 이상", "" ];			D6.scenario.defSelectData['sel901']= [ '-1', '0', '1', '2', '3', '4', '5' ];
	D6.scenario.defInput["i902"] = {  cons:"consCRsum",  title:"스쿠터 자전거 보유 대수",  unit:"",  text:"스쿠터 자전거 보유 대수", inputType:"sel902", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel902"]= [ "선택하세요", "없어", "1 대", "2 대", "3 대", "4 대", "5 대 이상", "" ];			D6.scenario.defSelectData['sel902']= [ '-1', '0', '1', '2', '3', '4', '5' ];
	D6.scenario.defInput["i911"] = {  cons:"consCR",  title:"자동차의 종류",  unit:"",  text:"자동차의 종류", inputType:"sel911", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel911"]= [ "선택하세요", "경차", "소형차", "반", "3 번호", "전기 자동차", "자전거 · 스쿠터", "대형 오토바이", "" ];			D6.scenario.defSelectData['sel911']= [ '-1', '1', '2', '3', '4', '5', '6', '7' ];
	D6.scenario.defInput["i912"] = {  cons:"consCR",  title:"자동차 연비",  unit:"",  text:"자동차 연비", inputType:"sel912", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"30",d11p:"2",d12t:"15",d12p:"1",d13t:"",d13p:"",d1w:"2",d1d:"1", d21t:"30",d21p:"2",d22t:"15",d22p:"1",d23t:"",d23p:"",d2w:"2",d2d:"1", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel912"]= [ "선택하세요", "6km / L 이하", "7-9km / L", "10-12km / L", "13-15km / L", "16-20km / L", "21-26km / L", "27-35km / L", "36km / L 이상", "" ];			D6.scenario.defSelectData['sel912']= [ '-1', '6', '8', '11', '14', '18', '23', '30', '40' ];
	D6.scenario.defInput["i913"] = {  cons:"consCR",  title:"차의 이용자",  unit:"",  text:"누구의 자동차입니까? 또는 호칭이 있으면 기입하십시오.", inputType:"", right:"", postfix:"", nodata:"", varType:"String", min:"", max:"", defaultValue:"", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue[""]= [ "", "", "" ];			D6.scenario.defSelectData['']= [ '', '', '' ];
	D6.scenario.defInput["i914"] = {  cons:"consCR",  title:"친환경 타이어의 사용",  unit:"",  text:"친환경 타이어를 사용하고 있습니까?", inputType:"sel914", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel914"]= [ "선택하세요", "예", "아니오", "모르는", "" ];			D6.scenario.defSelectData['sel914']= [ '-1', '1', '2', '3' ];
	D6.scenario.defInput["i921"] = {  cons:"consCRtrip",  title:"목적지",  unit:"",  text:"잘 나가는 목적지", inputType:"", right:"", postfix:"", nodata:"", varType:"String", min:"", max:"", defaultValue:"", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue[""]= [ "", "", "" ];			D6.scenario.defSelectData['']= [ '', '', '' ];
	D6.scenario.defInput["i922"] = {  cons:"consCRtrip",  title:"빈도",  unit:"",  text:"어느 정도 차에 갑니까?", inputType:"sel922", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel922"]= [ "선택하세요", "매일", "주 5 회", "주 2 ~ 3 회", "주 1 회", "월 2 회", "월 1 회", "2 개월에 1 회", "년 2-3 회", "연 1 회", "" ];			D6.scenario.defSelectData['sel922']= [ '-1', '365', '250', '120', '50', '25', '12', '6', '2', '1' ];
	D6.scenario.defInput["i923"] = {  cons:"consCRtrip",  title:"편도 거리",  unit:"km",  text:"편도 거리", inputType:"sel923", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel923"]= [ "선택하세요", "1km", "2km", "3km", "5km", "10km", "20km", "30km", "50km", "100km", "200km", "400kmFALSE" ];			D6.scenario.defSelectData['sel923']= [ '-1', '1', '2', '3', '5', '10', '20', '30', '50', '100', '200', '400', '700' ];
	D6.scenario.defInput["i924"] = {  cons:"consCRtrip",  title:"사용하는 자동차",  unit:"",  text:"어떤 차를 주로 사용합니까?", inputType:"sel924", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel924"]= [ "선택하세요", "첫 번째", "두 번째", "세 번째", "4 번째", "다섯 번째", "" ];			D6.scenario.defSelectData['sel924']= [ '-1', '1', '2', '3', '4', '5' ];
	D6.scenario.defInput["i931"] = {  cons:"consCRsum",  title:"아이들링 스톱",  unit:"",  text:"장시간 정차로 공회전을하고 있습니까?", inputType:"sel931", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"3",d11p:"0",d12t:"2",d12p:"1",d13t:"1",d13p:"2",d1w:"1",d1d:"0", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"3",d31p:"0",d32t:"2",d32p:"1",d33t:"1",d33p:"2",d3w:"1",d3d:"0"}; 			D6.scenario.defSelectValue["sel931"]= [ "선택하세요", "항상하고있다", "때때로하고있다", "하지", "" ];			D6.scenario.defSelectData['sel931']= [ '-1', '1', '2', '3' ];
	D6.scenario.defInput["i932"] = {  cons:"consCRsum",  title:"급 가속이나 급발진",  unit:"",  text:"급 가속이나 급출발을하지 않도록하고 있습니까?", inputType:"sel932", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"3",d31p:"0",d32t:"2",d32p:"1",d33t:"1",d33p:"2",d3w:"1",d3d:"0"}; 			D6.scenario.defSelectValue["sel932"]= [ "선택하세요", "항상하고있다", "때때로하고있다", "하지", "" ];			D6.scenario.defSelectData['sel932']= [ '-1', '1', '2', '3' ];
	D6.scenario.defInput["i933"] = {  cons:"consCRsum",  title:"가감 속 적은 운전",  unit:"",  text:"가감 속 적은 운전", inputType:"sel933", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"3",d31p:"0",d32t:"2",d32p:"1",d33t:"1",d33p:"2",d3w:"1",d3d:"0"}; 			D6.scenario.defSelectValue["sel933"]= [ "선택하세요", "항상하고있다", "때때로하고있다", "하지", "" ];			D6.scenario.defSelectData['sel933']= [ '-1', '1', '2', '3' ];
	D6.scenario.defInput["i934"] = {  cons:"consCRsum",  title:"빠른 액셀 오프",  unit:"",  text:"빠른 액셀 오프", inputType:"sel934", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel934"]= [ "선택하세요", "항상하고있다", "때때로하고있다", "하지", "" ];			D6.scenario.defSelectData['sel934']= [ '-1', '1', '2', '3' ];
	D6.scenario.defInput["i935"] = {  cons:"consCRsum",  title:"도로 교통 정보의 활용",  unit:"",  text:"도로 교통 정보의 활용", inputType:"sel935", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"3",d31p:"0",d32t:"2",d32p:"1",d33t:"1",d33p:"2",d3w:"1",d3d:"0"}; 			D6.scenario.defSelectValue["sel935"]= [ "선택하세요", "항상하고있다", "때때로하고있다", "하지", "" ];			D6.scenario.defSelectData['sel935']= [ '-1', '1', '2', '3' ];
	D6.scenario.defInput["i936"] = {  cons:"consCRsum",  title:"불필요한 짐을 쌓지",  unit:"",  text:"불필요한 짐은 쌓지 않고 주행", inputType:"sel936", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel936"]= [ "선택하세요", "항상하고있다", "때때로하고있다", "하지", "" ];			D6.scenario.defSelectData['sel936']= [ '-1', '1', '2', '3' ];
	D6.scenario.defInput["i937"] = {  cons:"consCRsum",  title:"자동차 에어컨의 온도 조절",  unit:"",  text:"자동차 에어컨의 온도 · 풍량을 세세하게 조절하고 있습니까", inputType:"sel937", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"3",d31p:"0",d32t:"2",d32p:"1",d33t:"1",d33p:"2",d3w:"1",d3d:"0"}; 			D6.scenario.defSelectValue["sel937"]= [ "선택하세요", "항상하고있다", "때때로하고있다", "하지", "" ];			D6.scenario.defSelectData['sel937']= [ '-1', '1', '2', '3' ];
	D6.scenario.defInput["i938"] = {  cons:"consCRsum",  title:"워밍업없이 주행하는",  unit:"",  text:"추운 날 워밍업을하고 있습니까?", inputType:"sel938", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"3",d31p:"0",d32t:"2",d32p:"1",d33t:"1",d33p:"2",d3w:"1",d3d:"0"}; 			D6.scenario.defSelectValue["sel938"]= [ "선택하세요", "항상하고있다", "때때로하고있다", "하지", "" ];			D6.scenario.defSelectData['sel938']= [ '-1', '1', '2', '3' ];
	D6.scenario.defInput["i939"] = {  cons:"consCRsum",  title:"타이어 공기압 체크",  unit:"",  text:"타이어의 공기압을 적절히 유지하도록 노력하고 있습니까?", inputType:"sel939", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel939"]= [ "선택하세요", "항상하고있다", "때때로하고있다", "하지", "" ];			D6.scenario.defSelectData['sel939']= [ '-1', '1', '2', '3' ];
	D6.scenario.defInput["i221"] = {  cons:"consCOsum",  title:"에어컨의 성능",  unit:"",  text:"에어컨의 에너지 절약 성능이 좋은가요 (1 급입니까)", inputType:"sel221", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"3",d11p:"0",d12t:"2",d12p:"1",d13t:"1",d13p:"2",d1w:"1",d1d:"0", d21t:"3",d21p:"0",d22t:"2",d22p:"1",d23t:"1",d23p:"2",d2w:"1",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel221"]= [ "선택하세요", "우수함", "보통", "좋지 않은", "모르는", "" ];			D6.scenario.defSelectData['sel221']= [ '-1', '1', '2', '3', '4' ];
	D6.scenario.defInput["i121"] = {  cons:"consHWsum",  title:"온수기의 성능",  unit:"",  text:"온수기의 에너지 절약 성능이 좋은가요. (1 급입니까)", inputType:"sel121", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"3",d11p:"0",d12t:"2",d12p:"1",d13t:"1",d13p:"2",d1w:"1",d1d:"0", d21t:"3",d21p:"0",d22t:"2",d22p:"1",d23t:"1",d23p:"2",d2w:"1",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel121"]= [ "선택하세요", "우수함", "보통", "좋지 않은", "모르는", "" ];			D6.scenario.defSelectData['sel121']= [ '-1', '1', '2', '3', '4' ];
	D6.scenario.defInput["i621"] = {  cons:"consTVsum",  title:"텔레비전의 성능",  unit:"",  text:"텔레비전의 에너지 절약 성능이 좋은가요. (1 급입니까)", inputType:"sel621", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"3",d11p:"0",d12t:"2",d12p:"1",d13t:"1",d13p:"2",d1w:"1",d1d:"0", d21t:"3",d21p:"0",d22t:"2",d22p:"1",d23t:"1",d23p:"2",d2w:"1",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel621"]= [ "선택하세요", "우수함", "보통", "좋지 않은", "모르는", "" ];			D6.scenario.defSelectData['sel621']= [ '-1', '1', '2', '3', '4' ];
	D6.scenario.defInput["i421"] = {  cons:"consDRsum",  title:"세탁기의 성능",  unit:"",  text:"세탁기의 에너지 절약 성능이 좋은가요. (1 급입니까)", inputType:"sel421", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"3",d11p:"0",d12t:"2",d12p:"1",d13t:"1",d13p:"2",d1w:"1",d1d:"0", d21t:"3",d21p:"0",d22t:"2",d22p:"1",d23t:"1",d23p:"2",d2w:"1",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel421"]= [ "선택하세요", "우수함", "보통", "좋지 않은", "모르는", "" ];			D6.scenario.defSelectData['sel421']= [ '-1', '1', '2', '3', '4' ];
	D6.scenario.defInput["i721"] = {  cons:"consRFsum",  title:"냉장고의 성능",  unit:"",  text:"냉장고의 에너지 절약 성능이 좋은가요. (1 급입니까)", inputType:"sel721", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"3",d11p:"0",d12t:"2",d12p:"1",d13t:"1",d13p:"2",d1w:"1",d1d:"0", d21t:"3",d21p:"0",d22t:"2",d22p:"1",d23t:"1",d23p:"2",d2w:"1",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel721"]= [ "선택하세요", "우수함", "보통", "좋지 않은", "모르는", "" ];			D6.scenario.defSelectData['sel721']= [ '-1', '1', '2', '3', '4' ];

	// prefecture definition ----------------------------------------------------
	D6.scenario.defSelectValue['sel021'] = [ "선택하세요", 
			"서울",	
			"서울",
			"부산"
			 ];
	D6.scenario.defSelectData['sel021']= [ '-1', '1', '2' ]; 
	D6.scenario.defSelectValue['sel022'] = [ "선택하세요", "북부", "남부"];
	D6.scenario.defSelectData['sel022'] = [ "-1", "1", "2"];

	//easy input
	D6.scenario.defEasyQues[0].title = "간이 입력";
	D6.scenario.defEasyQues[1].title = "행동 체크 입력";

};




