/*  2017/12/16  version 1.0
 * coding: utf-8, Tab as 2 spaces
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

D6.patch(D6.acadd, {
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
	factorPrefTimeMonth: [
		[
			[0, 0, 0, 0, 0, 0, 0], //那覇
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0]
		],
		[
			[0, 0, 0, 0, 0, 0, 0], //那覇
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0]
		],
		[
			[0, 0, 0, 0, 0, 0, 0], //那覇
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0]
		],
		[
			[0, 0, 0, 0, 0, 0, 0], //那覇
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0]
		]
	]
});

/*  2017/12/16  version 1.0
 * coding: utf-8, Tab as 2 spaces
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

D6.patch(D6.accons, {
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
	//アメダス10分間データを元に算出:エアコン消費電力量
	//
	//	配列は　  [朝、昼、夕、夜]の係数で、
	//	それぞれ　[暖房半月、暖房1ヶ月、暖房2ヶ月、暖房3ヶ月、暖房4ヶ月、暖房6ヶ月、暖房8ヶ月、
	//				冷房半月、冷房1ヶ月、冷房2ヶ月、冷房3ヶ月、冷房4ヶ月]
	//	の規定温度における消費量に対する割合を示す。
	//
	// Unit.setArea()で　該当する地域について　airconFactor_mon　にコピーをして利用
	//

	factorPrefTimeMonth: [
		[
			[0.11, 0.07, 0.06, 0.05, 0.04, 0.08, 0.08, 0.39, 0.38, 0.38, 0.36, 0.33], //那覇
			[0.08, 0.03, 0.02, 0.02, 0.02, 0.06, 0.06, 0.61, 0.59, 0.58, 0.56, 0.51],
			[0.09, 0.05, 0.03, 0.03, 0.02, 0.06, 0.06, 0.46, 0.45, 0.44, 0.43, 0.39],
			[0.11, 0.07, 0.06, 0.05, 0.04, 0.08, 0.08, 0.35, 0.35, 0.34, 0.33, 0.3]
		],
		[
			[0.11, 0.07, 0.06, 0.05, 0.04, 0.08, 0.08, 0.39, 0.38, 0.38, 0.36, 0.33], //那覇
			[0.08, 0.03, 0.02, 0.02, 0.02, 0.06, 0.06, 0.61, 0.59, 0.58, 0.56, 0.51],
			[0.09, 0.05, 0.03, 0.03, 0.02, 0.06, 0.06, 0.46, 0.45, 0.44, 0.43, 0.39],
			[0.11, 0.07, 0.06, 0.05, 0.04, 0.08, 0.08, 0.35, 0.35, 0.34, 0.33, 0.3]
		],
		[
			[0.11, 0.07, 0.06, 0.05, 0.04, 0.08, 0.08, 0.39, 0.38, 0.38, 0.36, 0.33], //那覇
			[0.08, 0.03, 0.02, 0.02, 0.02, 0.06, 0.06, 0.61, 0.59, 0.58, 0.56, 0.51],
			[0.09, 0.05, 0.03, 0.03, 0.02, 0.06, 0.06, 0.46, 0.45, 0.44, 0.43, 0.39],
			[0.11, 0.07, 0.06, 0.05, 0.04, 0.08, 0.08, 0.35, 0.35, 0.34, 0.33, 0.3]
		],
		[
			[0.11, 0.07, 0.06, 0.05, 0.04, 0.08, 0.08, 0.39, 0.38, 0.38, 0.36, 0.33], //那覇
			[0.08, 0.03, 0.02, 0.02, 0.02, 0.06, 0.06, 0.61, 0.59, 0.58, 0.56, 0.51],
			[0.09, 0.05, 0.03, 0.03, 0.02, 0.06, 0.06, 0.46, 0.45, 0.44, 0.43, 0.39],
			[0.11, 0.07, 0.06, 0.05, 0.04, 0.08, 0.08, 0.35, 0.35, 0.34, 0.33, 0.3]
		]
	]
});

/*  2017/12/16  version 1.0
 * coding: utf-8, Tab as 2 spaces
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

D6.patch(D6.acload, {
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
	//アメダス10分間データを元に算出:暖房負荷
	//
	//	配列は　  [朝、昼、夕、夜]の係数で、
	//	それぞれ　[暖房半月、暖房1ヶ月、暖房2ヶ月、暖房3ヶ月、暖房4ヶ月、暖房6ヶ月、暖房8ヶ月、
	//				冷房半月、冷房1ヶ月、冷房2ヶ月、冷房3ヶ月、冷房4ヶ月]
	//	の規定温度における消費量に対する割合を示す。
	//
	// Unit.setArea()で　該当する地域について　heatFactor_mon　にコピーをして利用
	//

	factorPrefTimeMonth: [
		[
			[0.12, 0.08, 0.07, 0.06, 0.05, 0.05, 0.09, 0.55, 0.55, 0.53, 0.52, 0.47], //那覇
			[0.09, 0.04, 0.03, 0.02, 0.02, 0.06, 0.06, 0.76, 0.75, 0.74, 0.72, 0.67],
			[0.1, 0.05, 0.04, 0.03, 0.03, 0.07, 0.07, 0.64, 0.62, 0.62, 0.6, 0.54],
			[0.12, 0.08, 0.06, 0.06, 0.04, 0.08, 0.08, 0.51, 0.5, 0.49, 0.48, 0.43]
		],
		[
			[0.12, 0.08, 0.07, 0.06, 0.05, 0.05, 0.09, 0.55, 0.55, 0.53, 0.52, 0.47], //那覇
			[0.09, 0.04, 0.03, 0.02, 0.02, 0.06, 0.06, 0.76, 0.75, 0.74, 0.72, 0.67],
			[0.1, 0.05, 0.04, 0.03, 0.03, 0.07, 0.07, 0.64, 0.62, 0.62, 0.6, 0.54],
			[0.12, 0.08, 0.06, 0.06, 0.04, 0.08, 0.08, 0.51, 0.5, 0.49, 0.48, 0.43]
		],
		[
			[0.12, 0.08, 0.07, 0.06, 0.05, 0.05, 0.09, 0.55, 0.55, 0.53, 0.52, 0.47], //那覇
			[0.09, 0.04, 0.03, 0.02, 0.02, 0.06, 0.06, 0.76, 0.75, 0.74, 0.72, 0.67],
			[0.1, 0.05, 0.04, 0.03, 0.03, 0.07, 0.07, 0.64, 0.62, 0.62, 0.6, 0.54],
			[0.12, 0.08, 0.06, 0.06, 0.04, 0.08, 0.08, 0.51, 0.5, 0.49, 0.48, 0.43]
		],
		[
			[0.12, 0.08, 0.07, 0.06, 0.05, 0.05, 0.09, 0.55, 0.55, 0.53, 0.52, 0.47], //那覇
			[0.09, 0.04, 0.03, 0.02, 0.02, 0.06, 0.06, 0.76, 0.75, 0.74, 0.72, 0.67],
			[0.1, 0.05, 0.04, 0.03, 0.03, 0.07, 0.07, 0.64, 0.62, 0.62, 0.6, 0.54],
			[0.12, 0.08, 0.06, 0.06, 0.04, 0.08, 0.08, 0.51, 0.5, 0.49, 0.48, 0.43]
		]
	]
});

/**
 * Home-Eco Diagnosis for JavaScript
 * AreaParameters area: parameters by prefecture for home
 *
 * @author Yasufumi SUZUKI  2011/04/15 Diagnosis5
 *								2011/05/06 actionscript3
 * 								2016/04/12 js
 */

D6.patch(D6.area, {
	//name of prefecture/city
	//	prefName[prefectureid/cityid]
	//
	//都道府県名
	prefName: [
		"Hồ Chí Minh",
		"Hà Nội", //1
		"Đà Nẵng",
		"Hồ Chí Minh"
	],

	prefDefault: 2, //not selected

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
	prefHeatingLevel: [
		7, //18,10,33,25 "広州",				//7 那覇 20, 15, 32, 27
		7, //18,10,33,25 "広州",				//7 那覇 20, 15, 32, 27
		7, //18,10,33,25 "広州",				//7 那覇 20, 15, 32, 27
		7 //21,15,33,25 "海口"					//7
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
	co2ElectCompanyUnit: [
		0.55,
		0.55,
		0.55,
		0.55,
		0.55,
		0.55,
		0.55,
		0.55,
		0.55,
		0.55,
		0.55
	],

	//	electricity company code by prefecture
	//
	//	prefToEleArea[prefecture]
	//
	//都道府県の電力会社コード
	// 0:北海道、1:東北電力 2:東京電力 3:中部電力 4:北陸電力 5:関西電力
	// 6:中国電力 7:四国電力 8:九州電力 9:沖縄電力
	prefToEleArea: [
		2,
		2,
		2,
		2,
		2,
		2,
		2,
		2,
		2,
		2,
		2,
		2,
		2,
		2,
		2,
		1,
		4,
		4,
		4,
		2,
		3,
		3,
		3,
		3,
		3,
		5,
		5,
		5,
		5,
		5,
		5,
		6,
		6,
		6,
		6,
		6,
		7,
		7,
		7,
		7,
		8,
		8,
		8,
		8,
		8,
		8,
		8,
		9
	],

	//electricity supply company price ratio
	electCompanyPrice: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

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
	elecPrice: {
		// 1:従量電灯A, 2:従量電灯B、3:時間帯別、4:低圧、5:低圧総合、6:高圧
		// ピーク単価,標準単価,割引単価,切片,kW契約単価
		1: [33.32, 33.32, 33.32, -1500, 0],
		2: [33.32, 33.32, 33.32, -1500, 280],
		3: [38.89, 27.32, 13.1, 2160, 0],
		4: [17.98, 16.53, 16.53, 0, 1054],
		5: [20.22, 18.56, 18.56, 64800, 0],
		6: [22.58, 17.36, 13.08, 0, 1733]
	},

	//electricity supply company price
	elecCompanyPrice: {},

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
	prefTemplature: [
		26, //18,10,33,25 "広州",
		26, //18,10,33,25 "広州",
		26, //18,10,33,25 "広州",
		30 //21,15,33,25 "海口"
	],

	// solar factor
	//
	//		prefPVElectricity( prefecture )
	//
	// ex. JWA　monsola05
	//  annual solar energy input at most provable direction kWh/m2/day
	prefPVElectricity: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],

	// convert energy name to energy_type id
	//
	//	energyCode2id[energy_name]	: get energy code
	//
	energyCode2id: {
		electricity: 0,
		gas: 1,
		kerosene: 2,
		coal: 4,
		hotwater: 5,
		car: 3
	},

	//convert season name to season id.
	//
	//	seasonCode2id[season_name]	: get season code
	//
	seasonCode2id: {
		winter: 0,
		spring: 1,
		summer: 2
	},

	// months include to each season
	//	seasonMonth[seasonName]
	//
	//	seasonName
	//		winter/spring/summer  , autumn include to spring
	//
	seasonMonth: { winter: 2, spring: 4, summer: 6 },

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
	//　中国の電力消費 2011年 413kWh/年・人　http://www.chinaero.com.cn/zxdt/djxx/ycwz/2014/05/146440.shtml
	//　413×1元/kWh×3人÷12
	// おおむね3000kWh/年世帯程度か？
	prefKakeiEnergy: [
		[250, 80, 0, 50, 5, 0], //那覇市
		[250, 80, 0, 50, 5, 0], //那覇市
		[250, 80, 0, 50, 5, 0], //那覇市
		[250, 80, 0, 50, 5, 0] //那覇市
	],

	// Hot Water Supply by local government per m2 in Season
	//
	prefHotWaterPrice: [
		0, //18,10,33,25 "広州",
		0, //18,10,33,25 "広州",
		0, //18,10,33,25 "広州",
		0, //18,10,33,25 "広州",
		0 //21,15,33,25 "海口"
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
	prefSeasonFactorArray: [

		[
			[0.8457, 1.1222, 1.5081, 0.9201],
			[0.9351, 0.9941, 0.8528, 0.9802],
			[1.3139, 0.847, 0.5678, 1.1395]
		], //naha
		[
			[0.8457, 1.1222, 1.5081, 0.9201],
			[0.9351, 0.9941, 0.8528, 0.9802],
			[1.3139, 0.847, 0.5678, 1.1395]
		], //naha
		[
			[0.8457, 1.1222, 1.5081, 0.9201],
			[0.9351, 0.9941, 0.8528, 0.9802],
			[1.3139, 0.847, 0.5678, 1.1395]
		], //naha
		[
			[0.8457, 1.1222, 1.5081, 0.9201],
			[0.9351, 0.9941, 0.8528, 0.9802],
			[1.3139, 0.847, 0.5678, 1.1395]
		] //naha
	],

	// get seasonal fee factor table
	//
	//	ret[energy_name][season]
	//
	//	energy_name: electricity, gas, kerosene
	//  season:
	//		0:winter
	//		1:spring
	//		2:summer
	//
	getSeasonParam: function(pref) {
		var param = this.getSeasonFactor(pref);

		ret = Array();
		ret["electricity"] = [param[0][0], param[1][0], param[2][0]];
		ret["gas"] = [param[0][1], param[1][1], param[2][1]];
		ret["kerosene"] = [param[0][2], param[1][2], param[2][2]];
		ret["hotwater"] = [1, 0, 0]; //original

		return ret;
	},

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
	kakeiNumCoefficent: [
		[0.47, 0.52, 0.37, 0.45, 0.4, 0.4],
		[0.86, 0.83, 0.9, 0.79, 0.8, 0.8],
		[0.99, 1.0, 0.9, 0.98, 1.0, 1.0],
		[1.07, 1.1, 0.85, 1.16, 1.1, 1.1],
		[1.24, 1.17, 1.1, 1.26, 1.3, 1.3],
		[1.55, 1.19, 1.67, 1.33, 1.4, 1.4]
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
	urbanCostCoefficient: [
		[8762, 9618],
		[6100, 5133],
		[828, 1898],
		[3415, 6228],
		[3, 20],
		[24, 5]
	]
});

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
 */

//fix D6.Unit

// unit price   元(in China)/each unit
D6.Unit.price = {
	electricity: 1, // override in D6.area.setPersonArea by supplyer
	nightelectricity: 0.3,
	sellelectricity: 1,
	nagas: 10,
	lpgas: 30,
	kerosene: 7,
	gasoline: 8,
	lightoil: 7,
	heavyoil: 6,
	coal: 3,
	biomass: 0,
	hotwater: 0.1, // 元/MJ
	waste: 0,
	water: 0,
	gas: 10,
	car: 8
};

D6.Unit.defaultPriceElectricity = D6.Unit.price.electricity;

// intercept price when consumption is zero
D6.Unit.priceBase = {
	electricity: 0,
	nightelectricity: 0,
	sellelectricity: 0,
	nagas: 0,
	lpgas: 0,
	kerosene: 0,
	gasoline: 0,
	lightoil: 0,
	heavyoil: 0,
	coal: 0,
	biomass: 0,
	hotwater: 50,
	waste: 0,
	water: 0,
	gas: 0,
	car: 0
};

// names ( dataset is now witten in Japanse )
D6.Unit.name = {
	electricity: "电力",
	nightelectricity: "电力",
	sellelectricity: "売電",
	nagas: "都市ガス",
	lpgas: "LPガス",
	kerosene: "灯油",
	gasoline: "ガソリン",
	lightoil: "軽油",
	heavyoil: "重油",
	coal: "煤球",
	biomass: 0,
	hotwater: "区供热",
	waste: 0,
	water: 0,
	gas: "气",
	car: "汽油"
};

// unit discription text
D6.Unit.unitChar = {
	electricity: "kWh",
	nightelectricity: "kWh",
	sellelectricity: "kWh",
	nagas: "m3",
	lpgas: "m3",
	kerosene: "L",
	gasoline: "L",
	lightoil: "L",
	heavyoil: "L",
	coal: "kg",
	biomass: 0,
	hotwater: "MJ",
	waste: 0,
	water: 0,
	gas: "m3",
	car: "L"
};

// second energy(end-use)  kcal/each unit
D6.Unit.calorie = {
	electricity: 860,
	nightelectricity: 860,
	sellelectricity: 860,
	nagas: 11000,
	lpgas: 36000,
	kerosene: 8759,
	gasoline: 8258,
	lightoil: 9117,
	heavyoil: 9000,
	coal: 8000,
	biomass: 0,
	hotwater: 225, //kcal/MJ
	waste: 0,
	water: 0,
	gas: 11000,
	car: 8258
};

// primary energy  MJ/each unit
D6.Unit.jules = {
	electricity: 9.6,
	nightelectricity: 9.6,
	sellelectricity: 9.6,
	nagas: 46,
	lpgas: 60,
	kerosene: 38,
	gasoline: 38,
	lightoil: 38,
	heavyoil: 38,
	coal: 32,
	biomass: 0,
	hotwater: 1,
	waste: 0,
	water: 0,
	gas: 45,
	car: 38
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
D6.Unit.costToCons = function(cost, energy_name, elecType, kw) {
	var ret;
	if (cost == -1 || cost == "") {
		ret = "";
	}
	if (energy_name != "electricity" || typeof D6.area.elecPrice == undefined) {
		// not electricity or no regional parameters
		if (cost < D6.Unit.priceBase[energy_name] * 2) {
			// estimation in case of nealy intercept price
			ret = cost / D6.Unit.price[energy_name] / 2;
		} else {
			// ordinal estimation
			ret =
				(cost - D6.Unit.priceBase[energy_name]) / D6.Unit.price[energy_name];
		}
	} else {
		//regional electricity
		if (elecType < 0 || !elecType) {
			if (D6.consShow["TO"].allDenka) {
				elecType = 3;
			} else {
				elecType = 1;
			}
		}
		var def = D6.area.elecPrice[elecType];
		ret = (cost - kw * def[4] - def[3]) / ((def[1] + def[2]) / 2);
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
D6.Unit.consToCost = function(cons, energy_name, elecType, kw) {
	var ret;

	if (cons == -1 || cons == "") {
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
consToEnergy = function(cons, energy_name) {
	var ret;

	if (cons == -1 || cons == "") {
		ret = "";
	}
	//static function
	ret = (cons * D6.Unit.jules[energy_name]) / 1000000;

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
	/*
	//set area and person to calculate average, heat load etc.
	D6.area.setCalcBaseParams = function(){
		D6.area.setPersonArea( D6.doc.data.i001, D6.doc.data.i021, D6.doc.data.i023);		
	};
	
	//get seasonal parameters
	D6.area.getSeasonParamCommon = function(){
		return D6.area.getSeasonParam(  D6.area.area  );
	};
*/

D6.scenario.defSelectValue [ "sel022"] = [ "Hãy chọn", "miền Bắc", "miền nam"];
D6.scenario.defSelectData [ "sel022"] = [ "-1", "1", "2"];

// đầu vào dễ dàng
D6.scenario.defEasyQues [0] .title = "Fast Entry";
D6.scenario.defEasyQues [1] .title = "kiểm tra hành động đầu vào";

// khuyết điểm nét
D6.consAC.title = "điều hòa không khí phòng";
D6.consAC.countCall = "mắt phòng";

D6.consACcool.title = "phòng làm mát";
D6.consACcool.addable = "làm nóng và làm mát vào phòng";
D6.consACcool.countCall = "mắt phòng";
D6.consACcool.inputGuide = "làm thế nào để sử dụng điều hòa không khí của từng phòng";

D6.consACheat.title = "sưởi ấm phòng";
D6.consACheat.addable = "làm nóng và làm mát vào phòng";
D6.consACheat.countCall = "mắt phòng";
D6.consACheat.inputGuide = "làm thế nào để sử dụng sưởi ấm của mỗi phòng";

D6.consCKcook.title = "nấu ăn";
D6.consCKcook.inputGuide = "làm thế nào để sử dụng nấu ăn xung quanh bếp";

D6.consCKpot.title = "ấm";
D6.consCKpot.inputGuide ="Làm thế nào để sử dụng các thiết bị ấm áp như nồi" ;

D6.consCKrice.title = "lúa";
D6.consCKrice.inputGuide ="Làm thế nào để sử dụng bếp," ;

D6.consCKsum.title = "nấu ăn";
D6.consCKsum.inputGuide = "làm thế nào để sử dụng nấu ăn liên quan đến";

D6.consCOsum.title = "làm mát";
D6.consCOsum.inputGuide = "làm thế nào để sử dụng điều hòa không khí trong toàn bộ ngôi nhà";

D6.consCR.title = "xe hơi";
D6.consCR.addable = "xe hơi";
D6.consCR.countCall = "đứng mắt";
D6.consCR.inputGuide = "về hiệu suất và cách sử dụng của từng xe để giữ lại";

D6.consCRsum.title = "xe hơi";
D6.consCRsum.inputGuide = "làm thế nào để sử dụng xe-xe đạp";

D6.consCRtrip.title = "di chuyển";
D6.consCRtrip.countCall = "nơi đôi mắt";
D6.consCRtrip.addable = "điểm đến";
D6.consCRtrip.inputGuide = "làm thế nào để sử dụng xe hơi hoặc các loại tương tự của mỗi điểm đến";

D6.consDRsum.title = "giặt sạch";
D6.consDRsum.inputGuide = "máy hút bụi, làm thế nào để sử dụng máy giặt và máy sấy quần áo";

D6.consEnergy.title = "thiết lập năng lượng chung";
D6.consEnergy.inputGuide = "và sử dụng năng lượng trong toàn bộ ngôi nhà, cho hóa đơn tiện ích mỗi tháng";


D6.consHTcold.title = "vùng lạnh";
D6.consHTcold.inputGuide ="Làm thế nào để sử dụng sưởi ấm trong thời tiết lạnh" ;

D6.consHTsum.title = "nóng";
D6.consHTsum.inputGuide = "làm thế nào để sử dụng nhiệt của toàn bộ ngôi nhà";

D6.consHWdishwash.title = "rửa chén";
D6.consHWdishwash.inputGuide ="Làm thế nào để sử dụng máy rửa chén" ;

D6.consHWdresser.title = "lưu vực";
D6.consHWdresser.inputGuide ="Việc sử dụng nước nóng trong lưu vực" ;

D6.consHWshower.title = "tắm";
D6.consHWshower.inputGuide = "làm thế nào để sử dụng khi tắm";

D6.consHWsum.title = "cung cấp nước nóng"; // tiêu đề tiêu thụ cho người
D6.consHWsum.inputGuide = "làm thế nào để sử dụng cung cấp nước nóng nói chung"; // hướng dẫn trong câu hỏi

D6.consHWtoilet.title = "nhà vệ sinh";
D6.consHWtoilet.inputGuide = "làm thế nào để sử dụng nước vệ sinh và ấm áp";

D6.consHWtub.title = "bồn tắm";
D6.consHWtub.inputGuide = "làm thế nào để sử dụng bồn tắm nước nóng";

D6.consLI.title = "chiếu sáng";
D6.consLI.addable = "chiếu sáng vào phòng";
D6.consLI.countCall = "mắt phòng";
D6.consLI.inputGuide = "làm thế nào để sử dụng ánh sáng của căn phòng cá nhân";

D6.consLIsum.title = "chiếu sáng";
D6.consLIsum.inputGuide = "làm thế nào để sử dụng ánh sáng trong toàn bộ ngôi nhà";

D6.consRF.title = "tủ lạnh";
D6.consRF.addable = "tủ lạnh";
D6.consRF.countCall = "đứng mắt";
D6.consRF.inputGuide = "làm thế nào để sử dụng tủ lạnh cá nhân";

D6.consRFsum.title = "tủ lạnh";
D6.consRFsum.inputGuide = "cho tủ lạnh của việc sử dụng trong toàn bộ ngôi nhà";

D6.consSeason.titleList = [ "", "mùa đông", "Mùa xuân và mùa thu", "Mùa hè"]; // tên mùa
D6.consSeason.inputGuide = "chi phí tiện ích cho mỗi tháng cho mỗi mùa vui lòng điền vào giá trị xấp xỉ..";


D6.consTotal.title = "toàn bộ";
D6.consTotal.inputGuide = "Để biết thông tin cơ bản về khu vực và các nhà";

D6.consTV.title = "truyền hình";
D6.consTV.addable = "truyền hình";
D6.consTV.countCall = "đứng mắt";
D6.consTV.inputGuide = "làm thế nào để sử dụng TV cá nhân";

D6.consTVsum.title = "truyền hình";
D6.consTVsum.inputGuide = "làm thế nào để sử dụng toàn bộ ngôi nhà của truyền hình";

D6.Unit.name = {
electricity: "Điện",
nightelectricity: "Ban đêm điện",
sellelectricity: "Sức mạnh bán",
nagas: "Thành phố khí",
lpgas: "LP khí",
kerosene: "Dầu lửa",
gasoline: "Xăng",
lightoil: "Dầu nhẹ",
heavyoil: "Dầu nặng",
coal: 0,
biomass: 0,
hotwater: 0,
waste: 0,
water: 0,
gas: "Thành phố khí",
car: "Xăng"
};



		D6.scenario.defMeasures['mTOsolar'] = { mid:"1",  name:"mTOsolar",  title:"Để cài đặt một năng lượng mặt trời",  easyness:"0.5",  refCons:"consTotal",  titleShort:"năng lượng mặt trời", level:"",  figNum:"25",  lifeTime:"20",  price:"400000",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Thặng dư trong điện phát điện, bạn có thể đã mua cao để các công ty điện lực. 2018 FY 28 yen mỗi 1kWh (Công ty Điện lực Tokyo, Chubu Electric Power, trường hợp của Kansai Electric Power), hoặc 30 yen (nó là cao trong khác của công ty điện lực, việc lắp đặt một thiết bị để ngăn chặn việc mua khi ánh sáng mặt trời đã trở thành thặng dư bạn sẽ cần). Bảng điều chỉnh chỉ trong sản xuất điện để cài đặt, tuổi thọ cao vì không có phần chạy như một động cơ, cũng đòi hỏi tương đối ít bảo trì. Chuyển đổi sang một thiết bị AC được gọi là một 'điều hòa' sẽ cần phải được thay thế mỗi 10 năm. <br> Bên cạnh đó, sự ra đời của bộ máy phát điện năng lượng mặt trời, thiết bị nhà nước để điện bán được hiển thị sẽ được cài đặt. Điều gì có thể bao nhiêu năng lượng điện, cho dù tiêu thụ nhiều ở nhà sẽ được hiển thị, đó cũng là một điều rằng tùy thuộc vào mô hình được hiển thị trong mỗi múi giờ. Số tiền mà có thể được bán cũng được hiển thị, bạn cũng có ra hiệu quả của việc giảm việc sử dụng tự nhiên và điện để bán được nhiều.",   lifestyle:"",   season:"wss"};
		D6.scenario.defMeasures['mTOhems'] = { mid:"2",  name:"mTOhems",  title:"Cài đặt thiết bị HEMS",  easyness:"1",  refCons:"consTotal",  titleShort:"thiết bị HEMS", level:"",  figNum:"3",  lifeTime:"20",  price:"200000",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Các HEMS (Home Energy Management sysytem), hoặc mịn nắm bắt mỗi khi điện bạn đang sử dụng ở nhà, là một hệ thống các đồ gia dụng như điều hòa không khí, có thể hoặc tự động kiểm soát để tiết kiệm năng lượng. Nếu bạn kiểm tra các tính năng, chẳng hạn như sử dụng điện, hoặc dẫn đến tiết kiệm năng lượng nếu những gì, điểm mấu chốt là bạn sẽ thấy. Dựa trên biểu đồ sẽ được hiển thị, khi mức tiêu thụ điện lớn, nguyên nhân của là gì, hãy xem xét.",   lifestyle:"",   season:"wss"};
		D6.scenario.defMeasures['mTOsolarSmall'] = { mid:"3",  name:"mTOsolarSmall",  title:"Đặt tấm pin mặt trời trên ban công",  easyness:"2",  refCons:"consTotal",  titleShort:"Veranda ánh sáng mặt trời", level:"",  figNum:"25",  lifeTime:"10",  price:"50000",  roanShow:"",  standardType:"",  subsidy :"",  advice:"tấm pin mặt trời thay vì cài đặt trên mái nhà, bằng cách đặt một điều nhỏ, chẳng hạn như trên ban công, có thể được sử dụng trong các ứng dụng như một phần của sự chiếu sáng. Ngoài ra còn có là nó được bán dưới dạng làm sẵn, nhưng bạn có thể làm của riêng bạn. Vật liệu có thể được mua sắm, chẳng hạn như đặt hàng qua thư Internet và cải thiện nhà. Để <br> một ngày nắng đẹp theo nghĩa là đi chơi futon, dành cho mặt trời để sạc pin, bạn có thể tận dụng trong vài phút mà đã bị buộc tội. Là một ngày mây như vậy, nó có thể không có khả năng sử dụng điện.",   lifestyle:"",   season:"wss"};
		D6.scenario.defMeasures['mHWecocute'] = { mid:"101",  name:"mHWecocute",  title:"Nhận một máy nước nóng mới cho Eco dễ thương",  easyness:"2",  refCons:"consHWsum",  titleShort:"dễ thương", level:"",  figNum:"8",  lifeTime:"10",  price:"400000",  roanShow:"1",  standardType:"電気温水器",  subsidy :"",  advice:"Eco dễ thương (R) (chất làm lạnh bơm nhiệt nước nóng thiên nhiên) được trang bị một thiết bị, chẳng hạn như một đơn vị ngoài trời điều hòa không khí, để đun sôi nước bằng cách sử dụng không khí xung quanh nhiệt, hiệu quả là tốt hơn nhiều hơn ba lần so với máy nước nóng điện. Chẳng hạn như chạy ra khỏi nước nóng đã được lưu trữ trong các bể chứa nước nóng, quy mô gia đình lớn, nó được khuyến khích để nhà tắm mỗi ngày. <br> Ngoài ra, khi đun sôi bộ bảo thủ trong việc xem xét việc sử dụng nước nóng thông thường, dẫn đến tiết kiệm năng lượng hơn nữa.",   lifestyle:"",   season:"wss"};
		D6.scenario.defMeasures['mHWecojoze'] = { mid:"102",  name:"mHWecojoze",  title:"Nhận một máy nước nóng mới đến sinh thái Jaws (latent loại thu hồi nhiệt)",  easyness:"2",  refCons:"consHWsum",  titleShort:"Eco Jaws", level:"",  figNum:"10",  lifeTime:"10",  price:"200000",  roanShow:"",  standardType:"既存型",  subsidy :"",  advice:"Eco Jaws (R) (nhiệt ẩn loại phục hồi), kể từ khi cơ chế thoát mặc dù nhiệt cũng được phục hồi như hơi nước, nâng cao hiệu quả 10% trở lên so với máy nước nóng khí hiện có. Nó gần như là hình dạng giống như máy nước nóng khí hiện có, nhưng đã trở thành một chút lớn cho việc thu hồi nhiệt, cũng Cũng với cống nước chảy được tạo ra khi việc thu hồi nhiệt. Những chi phí sinh thái Hàm bởi các công ty gas, đó cũng là một trường hợp trong đó các hóa đơn gas được giảm.",   lifestyle:"",   season:"wss"};
		D6.scenario.defMeasures['mHWecofeel'] = { mid:"103",  name:"mHWecofeel",  title:"Nhận một máy nước nóng mới đến sinh thái cảm giác (loại thu hồi nhiệt tiềm ẩn)",  easyness:"1",  refCons:"consHWsum",  titleShort:"Eco-Feel", level:"",  figNum:"10",  lifeTime:"10",  price:"250000",  roanShow:"",  standardType:"既存型",  subsidy :"",  advice:"Eco-cảm (R) (tiềm ẩn nhiệt loại phục hồi) là, đối với các cơ chế để thoát khỏi mặc dù nhiệt cũng được phục hồi như hơi nước, hiệu quả đã được cải thiện hơn 10 phần trăm. Nó gần như là hình dạng giống như nồi hơi dầu lửa hiện có, nhưng đã trở thành một chút lớn cho việc thu hồi nhiệt, cũng Cũng với cống nước chảy được tạo ra khi việc thu hồi nhiệt. Loại khí thay vì dầu hỏa được gọi là 'Ekojosu'.",   lifestyle:"",   season:"wss"};
		D6.scenario.defMeasures['mHWenefarm'] = { mid:"105",  name:"mHWenefarm",  title:"Nhận một máy nước nóng mới để ENEFARM (fuel cell)",  easyness:"0.5",  refCons:"consHWsum",  titleShort:"ENE-FARM", level:"5",  figNum:"10",  lifeTime:"10",  price:"1200000",  roanShow:"1",  standardType:"エコジョーズ",  subsidy :"",  advice:"ENEFARM (R) là hiệu quả nước thiết bị đun sôi trong khi phát điện bằng pin nhiên liệu. Bởi lượng điện tiêu thụ trong nhà để tạo ra điện, nó có thể được sử dụng trong hồ nhiệt thải tạo ra như nước nóng. Ở nhà mà sử dụng nhiều điện và nước nóng, bạn có thể mong đợi một tác dụng tiết kiệm năng lượng lớn.",   lifestyle:"",   season:"wss"};
		D6.scenario.defMeasures['mHWsolarHeater'] = { mid:"106",  name:"mHWsolarHeater",  title:"Sử dụng bằng cách cài đặt máy nước nóng năng lượng mặt trời các (tuần hoàn tự nhiên)",  easyness:"1",  refCons:"consHWsum",  titleShort:"máy nước nóng năng lượng mặt trời", level:"",  figNum:"9",  lifeTime:"10",  price:"400000",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Nếu thời tiết ấm áp của những ngày nắng, bạn có thể chỉ nhập trong nước nóng tắm luộc trong cái nóng của mặt trời. Nó cũng có thể được sử dụng bởi ấm vào mùa đông, bạn có rất nhiều Giảm tiêu thụ năng lượng của nước nóng. Có thể đun sôi nước với một cơ chế tương đối đơn giản, như là một nóng lên toàn cầu có hiệu quả, đã mở rộng việc sử dụng khắp nơi trên thế giới.",   lifestyle:"",   season:"wss"};
		D6.scenario.defMeasures['mHWsolarSystem'] = { mid:"107",  name:"mHWsolarSystem",  title:"Sử dụng bằng cách cài đặt một hệ thống năng lượng mặt trời (tuần hoàn cưỡng bức)",  easyness:"1",  refCons:"consHWsum",  titleShort:"hệ thống năng lượng mặt trời", level:"",  figNum:"9",  lifeTime:"10",  price:"600000",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Đây máy nước nóng năng lượng mặt trời được sử dụng tại các bể chứa nước nóng xuống đất. Vì không có xe tăng trên mái nhà, nó không mất tải. Nếu thời tiết ấm áp của những ngày nắng, bạn có thể chỉ nhập trong nước nóng tắm luộc trong cái nóng của mặt trời. Nó cũng có thể được sử dụng bởi ấm vào mùa đông, bạn có rất nhiều Giảm tiêu thụ năng lượng của nước nóng. Có thể đun sôi nước với một cơ chế tương đối đơn giản, như là một nóng lên toàn cầu có hiệu quả, đã mở rộng việc sử dụng khắp nơi trên thế giới.",   lifestyle:"",   season:"wss"};
		D6.scenario.defMeasures['mHWshowerHead'] = { mid:"108",  name:"mHWshowerHead",  title:"Để sử dụng bằng cách gắn một vòi sen đứng đầu tiết kiệm nước",  easyness:"5",  refCons:"consHWshower",  titleShort:"Tiết kiệm nước tắm đầu", level:"",  figNum:"11",  lifeTime:"10",  price:"2000",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Sở hữu nhà tắm trông giống như nó có thể thay thế một phần của (người đứng đầu). Yes để giảm lỗ mà nước nóng đi ra, ngoài việc đi ra nước mạnh mẽ nóng, một số trong số họ ở bàn tay có thể ngăn chặn các nước, bạn có thể giảm việc sử dụng nước khoảng 30 phần trăm. Bạn có thể mua tại các cửa hàng phần cứng hoặc thiết bị điện tử cửa hàng.",   lifestyle:"1",   season:"wss"};
		D6.scenario.defMeasures['mHWshowerTime'] = { mid:"109",  name:"mHWshowerTime",  title:"Việc sử dụng phòng tắm một phút ít mỗi người mỗi ngày",  easyness:"4",  refCons:"consHWshower",  titleShort:"Tắm mỗi người mỗi shortening phút", level:"",  figNum:"11",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"tiêu thụ năng lượng của nhà tắm là rất lớn, trong một trạng thái đó đã ban hành nước nóng, nó tiêu thụ năng lượng của 300 chiếc xe truyền hình. Làm giảm lớn chỉ dừng lại một chút. Chẳng hạn như một điểm dừng khi bạn đang rửa cơ thể, chúng ta hãy cẩn thận để giảm bớt việc sử dụng thời gian.",   lifestyle:"1",   season:"wss"};
		D6.scenario.defMeasures['mHWshowerTime30'] = { mid:"110",  name:"mHWshowerTime30",  title:"Để rút ngắn tắm thời gian sử dụng 30%",  easyness:"3",  refCons:"consHWshower",  titleShort:"Vòi hoa sen giảm 30%", level:"",  figNum:"11",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"tiêu thụ năng lượng của nhà tắm là rất lớn, trong một trạng thái đó đã ban hành nước nóng, nó tiêu thụ năng lượng của 300 chiếc xe truyền hình. Làm giảm lớn chỉ dừng lại một chút. Chẳng hạn như một điểm dừng khi bạn đang rửa cơ thể, chúng ta hãy cẩn thận để giảm bớt việc sử dụng thời gian.",   lifestyle:"1",   season:"wss"};
		D6.scenario.defMeasures['mHWkeep'] = { mid:"111",  name:"mHWkeep",  title:"Không phải là hâm Enter để tiếp tục gia đình trong phòng tắm",  easyness:"3",  refCons:"consHWtub",  titleShort:"Không phải là tắm nước ấm", level:"",  figNum:"12",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Trong hâm, nó đã đưa ra một bồn tắm nước nóng ra bên ngoài một lần, bạn cần phải gửi đến máy nước nóng. Sẽ mát trong thời gian này, phải mất thêm năng lượng. Nếu không sử dụng chức năng hâm nóng, tiếp theo là ý chí giảm lớn là có. Cũng bằng cách làm cho nắp vào bồn tắm, và nó cũng có thể là khó khăn để làm mát.",   lifestyle:"1",   season:"wss"};
		D6.scenario.defMeasures['mHWsaveMode'] = { mid:"112",  name:"mHWsaveMode",  title:"Thiết lập Eco dễ thương 'Chế độ tiết kiệm' để",  easyness:"3",  refCons:"consHWsum",  titleShort:"chế độ tiết kiệm nước nóng", level:"",  figNum:"8",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Dễ thương có để có thể thiết lập số lượng nước nóng để đun sôi vào ban đêm. Khi đun sôi trong phòng để không có tình trạng thiếu nước nóng, mất mát sẽ lớn hơn tại thời điểm cách nhiệt. Trong ngày diễn ra sử dụng bình thường, đặc biệt là khi không có như sự thiếu hụt nước nóng, bằng cách thiết lập trong chế độ tiết kiệm, nó sẽ tiết kiệm năng lượng.",   lifestyle:"1",   season:"wss"};
		D6.scenario.defMeasures['mHWstopAutoKeep'] = { mid:"113",  name:"mHWstopAutoKeep",  title:"Thay vì tiếp tục cách nhiệt tự động, tái đun sôi ngay trước khi người tiếp theo đi vào",  easyness:"3",  refCons:"consHWtub",  titleShort:"Không phải là một vật liệu cách nhiệt tự động", level:"",  figNum:"12",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Trong cách nhiệt tự động, để ấm thường xuyên gửi đi tắm nước nóng cho đến khi máy nước nóng ngoài trời, nó sẽ lãng phí một phần ống dẫn nhiệt lớn. Bạn cần mà không cần phải làm nóng bằng cách nhập liên tục, nhưng nếu không có sự ấm áp tự động nếu sẽ mát thời gian bỏ trống, bạn sẽ tiết kiệm năng lượng bằng cách tái ấm để ngay trước khi nó đi vào sau đó.",   lifestyle:"1",   season:"wss"};
		D6.scenario.defMeasures['mHWinsulation'] = { mid:"114",  name:"mHWinsulation",  title:"Để cải cách bồn tắm đoạn nhiệt",  easyness:"1",  refCons:"consHWtub",  titleShort:"bồn cách nhiệt", level:"",  figNum:"12",  lifeTime:"10",  price:"600000",  roanShow:"",  standardType:"普及型",  subsidy :"",  advice:"Bồn tắm được phủ một cách nhiệt vật liệu như polystyrene bọt, đã tăng kiểu đó là nước nóng là ít có khả năng để làm mát. Remodeling của bồn tắm sẽ là cần thiết, nhưng phút khó mát mẻ, bạn không cần phải là hâm. Ngoài ra, nếu nhà vệ sinh cũng là trong xe buýt đơn vị, nó cũng sẽ rất khó khăn để thoát khỏi cái nóng từ toàn bộ phòng tắm.",   lifestyle:"",   season:"wss"};
		D6.scenario.defMeasures['mHWonlyShower'] = { mid:"115",  name:"mHWonlyShower",  title:"Mùa hè không kéo dài nước nóng trong bồn tắm và chỉ kết thúc trong phòng tắm",  easyness:"3",  refCons:"consHWtub",  titleShort:"Không Tame nước nóng của bồn tắm trong mùa hè", level:"",  figNum:"11",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Lượng nước nóng trong bồn tắm là tương đương về mặt thời gian bạn đang sử dụng vòi sen 10 đến 20 phút. Nếu không có sự chứa nước tự động, nhưng nó có thể thay tiêu thụ năng lượng tăng trong việc sử dụng để rửa cơ thể chỉ sử dụng nước nóng trong bồn tắm, sẽ là phút để giảm bồn tắm nếu bạn có một sự kết hợp của hoa sen.",   lifestyle:"1",   season:"wss"};
		D6.scenario.defMeasures['mHWdishTank'] = { mid:"116",  name:"mHWdishTank",  title:"Không để lại dòng chảy của nước nóng trong máy rửa chén",  easyness:"2",  refCons:"consHWdishwash",  titleShort:"rửa chảy tableware", level:"",  figNum:"13",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Chẳng hạn như ngừng sử dụng nước nóng khi nó được rửa sạch bằng chất tẩy rửa, xin vui lòng nghĩ ra rút ngắn thời gian cho vấn đề càng nhiều càng tốt nước nóng càng tốt. Khi các vết bẩn dầu nên lau sạch trước đó trong vải cũ, vv, bạn cần nhanh hơn rửa.",   lifestyle:"1",   season:"wss"};
		D6.scenario.defMeasures['mHWdishWater'] = { mid:"117",  name:"mHWdishWater",  title:"Rửa chén với nước để nước thời gian không phải là lạnh",  easyness:"2",  refCons:"consHWdishwash",  titleShort:"rửa bộ đồ ăn", level:"",  figNum:"13",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Trong những tháng ấm hơn, bạn có thể được rửa sạch mà không sử dụng đủ nước nóng. Ví dụ, nếu bạn sử dụng một nước nóng 10 phút để rửa chén, nó được tiêu thụ nước nóng khoảng 50 lít. vết bẩn dầu bằng cách đặt ra như giữ lau bằng vải cũ, vv, rửa cũng có thể bạn cần nhanh hơn.",   lifestyle:"1",   season:"wss"};
		D6.scenario.defMeasures['mCKdishWasher'] = { mid:"118",  name:"mCKdishWasher",  title:"Sử dụng máy rửa chén",  easyness:"2",  refCons:"consHWdishwash",  titleShort:"máy rửa chén dĩa", level:"",  figNum:"15",  lifeTime:"10",  price:"80000",  roanShow:"",  standardType:"",  subsidy :"",  advice:"So với rửa chén bồn rửa bằng nước nóng, bởi vì nó được rửa sạch hồ chứa nước nóng, rửa bát đĩa tốt hơn và máy sấy khô sẽ tiết kiệm năng lượng. Nếu bạn rửa bằng nước chứ không phải là Naooyu là tiết kiệm năng lượng hơn so với máy rửa chén. Đây cũng là một cách hiệu quả để đưa ra rửa tay.",   lifestyle:"",   season:"wss"};
		D6.scenario.defMeasures['mHWtap'] = { mid:"119",  name:"mHWtap",  title:"Để cài đặt một phần nóng và lạnh vòi nước trong nhà bếp, nhà vệ sinh",  easyness:"2",  refCons:"consHWsum",  titleShort:"Mục cắm nước nóng", level:"",  figNum:"13",  lifeTime:"20",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Hoặc để ngay lập tức được dừng lại trong tầm tay, chẳng hạn như một cơ chế đó không phải là ra khỏi nước nóng và không chỉ đạo một đòn bẩy duy nhất sang trái, dễ sử dụng cũng là như nhau, có thiết bị để giảm tiêu thụ nước nóng hơn 20%.",   lifestyle:"",   season:"wss"};
		D6.scenario.defMeasures['mHWreplaceToilet5'] = { mid:"120",  name:"mHWreplaceToilet5",  title:"Để cài đặt một nhà vệ sinh tiết kiệm nước",  easyness:"1",  refCons:"consHWtoilet",  titleShort:"Tiết kiệm nước nhà vệ sinh", level:"",  figNum:"19",  lifeTime:"10",  price:"30000",  roanShow:"",  standardType:"既存型",  subsidy :"",  advice:"Có một nhu cầu để được thay thế bằng việc xây dựng các cơ vệ sinh, nhưng lượng nước so với trước khi có thể bị đè nén ít hơn một nửa. Trước đây những gì là cần thiết khoảng 13 lít được, đã có thể sử dụng trong khoảng 4-6 lít, bạn có thể làm giảm đáng kể hóa đơn tiền nước.",   lifestyle:"",   season:"wss"};
		D6.scenario.defMeasures['mHWreplaceToilet'] = { mid:"121",  name:"mHWreplaceToilet",  title:"Kaikaeru tại loại thời điểm nước ấm chỗ rửa nhà vệ sinh",  easyness:"1",  refCons:"consHWtoilet",  titleShort:"ghế Moment toilet", level:"",  figNum:"19",  lifeTime:"10",  price:"30000",  roanShow:"",  standardType:"既存型",  subsidy :"",  advice:"Các sản phẩm mới có tính năng tiết kiệm năng lượng, chẳng hạn như các loại của sự nóng lên tại thời điểm tôi đã mở nắp, nó đòi hỏi tiêu thụ điện năng ít hơn. Vui lòng chọn tiêu thụ điện năng hàng năm tiết kiệm năng lượng, được hiển thị trong danh mục như một tài liệu tham khảo.",   lifestyle:"",   season:"wss"};
		D6.scenario.defMeasures['mHWtemplatureToilet'] = { mid:"122",  name:"mHWtemplatureToilet",  title:"Giảm các thiết lập nhiệt độ ghế nhà vệ sinh ấm áp",  easyness:"3",  refCons:"consHWtoilet",  titleShort:"kiểm soát nhiệt độ ghế toilet", level:"",  figNum:"19",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Thời gian không lạnh hoặc tắt cách nhiệt, bạn có thể tiết kiệm năng lượng bằng cách thiết lập các thiết lập nhiệt độ thấp hơn. Áp dụng bìa trên ghế nhà vệ sinh, thì sẽ rất khó để cảm nhận cái lạnh.",   lifestyle:"1",   season:"wss"};
		D6.scenario.defMeasures['mHWcoverTilet'] = { mid:"123",  name:"mHWcoverTilet",  title:"Thắt chặt nắp của vật liệu cách nhiệt ghế rửa nhà vệ sinh",  easyness:"3",  refCons:"consHWtoilet",  titleShort:"Đậy nắp ghế toilet", level:"",  figNum:"19",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Nếu bạn rời khỏi tiểu bang lớn lên nắp ghế nhà vệ sinh, sức nóng có thể thoát khỏi cách nhiệt, điện năng tiêu thụ sẽ tăng lên. Khi bạn có sử dụng kết thúc, nó sẽ tiết kiệm năng lượng bằng cách đóng nắp. Nếu không có lạnh, cũng dẫn đến tiết kiệm năng lượng mà bạn không muốn sự ấm áp.",   lifestyle:"1",   season:"wss"};
		D6.scenario.defMeasures['mACreplace'] = { mid:"201",  name:"mACreplace",  title:"Kaikaeru điều hòa không khí tiết kiệm năng lượng",  easyness:"1",  refCons:"consAC",  titleShort:"Tiết kiệm năng lượng điều hòa không khí", level:"",  figNum:"1",  lifeTime:"10",  price:"160000",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Thậm chí nếu điều tương tự chỉ không khí và sưởi ấm, và hiệu suất tiết kiệm năng lượng cao điều hòa không khí sống trong tiêu thụ điện năng của khoảng một nửa so với 15 năm. Thời gian để lựa chọn, như số lượng ★ dấu ấn của một nhãn tiết kiệm năng lượng thống nhất lớn và, vui lòng chọn tiết kiệm năng lượng đề cập đến việc hiển thị các hóa đơn tiền điện hàng năm. Hiệu suất của quá trình gia nhiệt cũng lên, nó có thể giảm lượng khí thải CO2 so với quá trình gia nhiệt của khí và dầu hỏa.",   lifestyle:"",   season:"wss"};
		D6.scenario.defMeasures['mACreplaceHeat'] = { mid:"202",  name:"mACreplaceHeat",  title:"Thay thế cho điều hòa không khí tiết kiệm năng lượng, để làm nóng trong điều hòa không khí",  easyness:"2",  refCons:"consAC",  titleShort:"Tiết kiệm năng lượng máy lạnh + sưởi ấm", level:"",  figNum:"1",  lifeTime:"10",  price:"160000",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Và sưởi ấm và làm mát chỉ giống nhau, và điều hòa không khí hiệu suất tiết kiệm năng lượng cao mà sống trong tiêu thụ điện năng của khoảng một nửa so với 15 năm. Điều hòa nhiệt độ để tận dụng sức nóng ngoài trời, ngay cả khi so sánh với nóng như khí đốt và dầu hỏa, khí thải CO2 sẽ ít hơn. Thời gian để lựa chọn, như số lượng ★ dấu ấn của một nhãn tiết kiệm năng lượng thống nhất lớn và, vui lòng chọn tiết kiệm năng lượng đề cập đến việc hiển thị các hóa đơn tiền điện hàng năm.",   lifestyle:"",   season:"wss"};
		D6.scenario.defMeasures['mACchangeHeat'] = { mid:"203",  name:"mACchangeHeat",  title:"Quá trình nung nóng trong điều hòa không khí",  easyness:"2",  refCons:"consACheat",  titleShort:"Điều hòa không khí sưởi", level:"",  figNum:"1",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Khi quá trình gia nhiệt trong máy lạnh, tận dụng lợi thế của không khí trong lành của nhiệt, có thể làm giảm đáng kể lượng khí thải CO2 so với quá trình gia nhiệt của khí và dầu hỏa, nó sẽ dẫn đến việc giảm chi phí tiện ích. Ngoài ra, không khí ấm áp rất dễ dàng để tập trung ở trần cho ánh sáng, tầm công ty như sàn, hoặc hoạt động ở một bộ gió mạnh, xin hay để tận dụng, chẳng hạn như một fan hâm mộ. Bên cạnh đó, điều hòa không khí gần đây đã được tăng cường khả năng để làm ấm lên sàn.",   lifestyle:"1",   season:"wss"};
		D6.scenario.defMeasures['mHTchangeHeat'] = { mid:"204",  name:"mHTchangeHeat",  title:"Các nhà làm nóng trong điều hòa không khí",  easyness:"1",  refCons:"consHTsum",  titleShort:"Điều hòa không khí sưởi", level:"",  figNum:"1",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Khi quá trình gia nhiệt trong máy lạnh, tận dụng lợi thế của không khí trong lành của nhiệt, có thể làm giảm đáng kể lượng khí thải CO2 so với quá trình gia nhiệt của khí và dầu hỏa, nó sẽ dẫn đến việc giảm chi phí tiện ích. Ngoài ra, không khí ấm áp rất dễ dàng để tập trung ở trần cho ánh sáng, tầm công ty như sàn, hoặc hoạt động ở một bộ gió mạnh, xin hay để tận dụng, chẳng hạn như một fan hâm mộ. Bên cạnh đó, điều hòa không khí gần đây đã được tăng cường khả năng để làm ấm lên sàn.",   lifestyle:"1",   season:"wss"};
		D6.scenario.defMeasures['mCOsunCut'] = { mid:"205",  name:"mCOsunCut",  title:"Trong làm mát, cắt giảm bức xạ mặt trời để sử dụng người mù vv",  easyness:"4",  refCons:"consCOsum",  titleShort:"Cooling cắt bức xạ mặt trời", level:"",  figNum:"1",  lifeTime:"5",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Các bức xạ mặt trời vào tại thời điểm là làm mát như đã đặt bếp phía cửa sổ. Và ngăn chặn các bức xạ mặt trời, sẽ tiết kiệm năng lượng, sẽ được phong là mát mẻ. Cũng trong bức màn, bạn có thể ngăn chặn các bức xạ mặt trời, nhưng ấm lên bức màn ở bên trong của căn phòng, căn phòng sẽ trở nên nóng. Vì lý do này, nó sẽ làm mát tốt hơn để người mù-Yoshizu ra ngoài cửa sổ. Bên cạnh đó, từ khoảng tháng, và phát triển trồng, chẳng hạn như mướp đắng, rau muống, mướp, vào mùa hè kết thúc 'màn xanh' đáng ngưỡng mộ, sẽ ngăn chặn các bức xạ mặt trời.",   lifestyle:"1",   season:"wss"};
		D6.scenario.defMeasures['mCOtemplature'] = { mid:"206",  name:"mCOtemplature",  title:"Cài đặt nhiệt độ làm mát bảo thủ (28 ℃)",  easyness:"3",  refCons:"consACcool",  titleShort:"Làm mát nhiệt độ cài đặt", level:"",  figNum:"1",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Đo của tập nhiệt độ làm mát xem xét tiết kiệm năng lượng là 28 ℃ trở lên. Thay vì 'cảm thấy mát mẻ', hãy nghĩ đến mức mà 'để tránh quá nóng'. Kể từ khi nhiệt làm thế nào để cảm thấy có sự khác biệt cá nhân không cần phải đẩy chính mình, nhưng, bạn có thể tận dụng lợi thế của các fan hâm mộ, hãy cố gắng nghĩ ra bằng cách, ví dụ, ăn mặc hở hang. Nó cảm thấy mát mẻ khi gió đi vào mở cửa sổ, thậm chí như gió chuông âm thanh, làm cho bạn cảm thấy mát mẻ. Nhiệt độ thiết lập bởi 1 ℃ để understated, nó có thể giảm lượng khí thải CO2 và chi phí năng lượng khoảng 10%. Cũng vào cuối mùa giải, nó cũng là hiệu quả để tránh sử dụng thiết bị đầu làm mát.",   lifestyle:"1",   season:"wss"};
		D6.scenario.defMeasures['mHTtemplature'] = { mid:"207",  name:"mHTtemplature",  title:"Để bảo thủ (20 ℃) ​​các thiết lập nhiệt độ của quá trình gia nhiệt và quá chải chuốt",  easyness:"3",  refCons:"consACheat",  titleShort:"Làm nóng nhiệt độ cài đặt", level:"",  figNum:"3",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Đo nhiệt độ bộ sưởi ấm xem xét tiết kiệm năng lượng là 20 ℃ hoặc ít hơn. Hãy nghĩ đến mức mà thay vì 'cách để cảm thấy ấm áp', 'như vậy là không lạnh.' Kể từ khi cái lạnh làm thế nào để cảm thấy có sự khác biệt cá nhân không cần phải đẩy chính mình, nhưng, hay ăn mặc quá diêm dúa, bằng cách, ví dụ, bột ấm, hãy cố gắng nghĩ ra. Nhiệt độ thiết lập bởi 1 ℃ để understated, nó có thể giảm lượng khí thải CO2 và chi phí năng lượng khoảng 10%. Cũng vào cuối mùa giải là sớm để có hiệu quả để ngăn chặn việc sử dụng làm nóng và thiết bị làm mát.",   lifestyle:"1",   season:"wss"};
		D6.scenario.defMeasures['mHTwindowSheet'] = { mid:"208",  name:"mHTwindowSheet",  title:"Trong quá trình gia nhiệt, đặt một tấm vật liệu cách nhiệt cho các cửa sổ",  easyness:"3",  refCons:"consACheat",  titleShort:"tấm cách nhiệt cửa sổ", level:"",  figNum:"4",  lifeTime:"3",  price:"3000",  roanShow:"",  standardType:"",  subsidy :"",  advice:"(Những loại hành động d, chẳng hạn như cái gọi là bong bóng tấm bọc) tấm cách nhiệt cho các cửa sổ, được bán tại các trung tâm nhà và những thứ tương tự. Sau khi lau cửa sổ sạch sẽ, nhân với phun, bạn có thể dán nó vào một cửa sổ chỉ với nước. Không chỉ có tác dụng cách nhiệt, nó có thể ngăn chặn sự ngưng tụ. Lạnh gió đến downwash từ cửa sổ cũng nới lỏng, cũng cải thiện sự thoải mái.",   lifestyle:"",   season:"wss"};
		D6.scenario.defMeasures['mHTdouble'] = { mid:"209",  name:"mHTdouble",  title:"Cửa sổ sash để kính nhiều lớp",  easyness:"1",  refCons:"consACheat",  titleShort:"Nhiều lớp kính", level:"5",  figNum:"4",  lifeTime:"30",  price:"100000",  roanShow:"",  standardType:"",  subsidy :"Nếu bạn muốn công việc cách nhiệt của toàn bộ ngôi nhà của cửa sổ, tùy thuộc vào áp dụng cho các chi phí xây dựng, tín dụng và tài sản thuế, có một hệ thống pháp khấu trừ thuế thu nhập phù hợp với dư nợ cho vay.",  advice:"thời gian làm nóng có thể bị ức chế về nhiều tỷ lệ của nhiệt để thoát khỏi cửa sổ và khăn quàng, làm thế nào để thoát khỏi cái nóng bằng cách thay thế kính đơn bình thường trong nửa kính hai lớp. Không chỉ tiết kiệm năng lượng, đó cũng là một lợi thế mà ngưng tụ là ít có khả năng tháng. Lạnh gió đến downwash từ cửa sổ cũng nới lỏng, cũng cải thiện sự thoải mái. Kể từ khi có một phương pháp phù hợp với ngôi nhà, hãy tham khảo như để xây dựng.",   lifestyle:"",   season:"wss"};
		D6.scenario.defMeasures['mHTlowe'] = { mid:"210",  name:"mHTlowe",  title:"Cửa sổ sash để kính thấp-E khung nhựa",  easyness:"1",  refCons:"consACheat",  titleShort:"khung nhựa thấp E kính", level:"",  figNum:"4",  lifeTime:"30",  price:"150000",  roanShow:"",  standardType:"",  subsidy :"Nếu bạn muốn công việc cách nhiệt của toàn bộ ngôi nhà của cửa sổ, tùy thuộc vào áp dụng cho các chi phí xây dựng, tín dụng và tài sản thuế, có một hệ thống pháp khấu trừ thuế thu nhập phù hợp với dư nợ cho vay.",  advice:"thời gian làm nóng có thể bị ức chế về nhiều tỷ lệ của nhiệt để thoát khỏi cửa sổ và khăn quàng, làm thế nào để thoát khỏi cái nóng bằng cách thay thế kính đơn bình thường trong nửa kính hai lớp. Không chỉ tiết kiệm năng lượng, đó cũng là một lợi thế mà ngưng tụ là ít có khả năng tháng. Lạnh gió đến downwash từ cửa sổ cũng nới lỏng, cũng cải thiện sự thoải mái. Kể từ khi có một phương pháp phù hợp với ngôi nhà, hãy tham khảo như để xây dựng.",   lifestyle:"",   season:"wss"};
		D6.scenario.defMeasures['mHTuchimado'] = { mid:"211",  name:"mHTuchimado",  title:"Gắn một cửa sổ bên trong",  easyness:"2",  refCons:"consACheat",  titleShort:"Cửa sổ bên trong", level:"5",  figNum:"4",  lifeTime:"30",  price:"60000",  roanShow:"",  standardType:"",  subsidy :"Nếu bạn muốn công việc cách nhiệt của toàn bộ ngôi nhà của cửa sổ, tùy thuộc vào áp dụng cho các chi phí xây dựng, tín dụng và tài sản thuế, có một hệ thống pháp khấu trừ thuế thu nhập phù hợp với dư nợ cho vay.",  advice:"Trong quá trình gia nhiệt thường là tỷ lệ nhiệt thoát ra từ các cửa sổ và khăn quàng, nó sẽ khó khăn hơn để thoát nhiệt bằng cách gắn các 'cửa sổ nội bộ', thêm vào bên trong cửa sổ hiện hành và sash. Cửa sổ bên trong là tương đối chi phí xây dựng rẻ hơn, làm việc trong khoảng một giờ để hoàn thành, nó cũng có hiệu quả để ngăn chặn sự ngưng tụ và tội phạm phòng chống. Vui lòng tham khảo, chẳng hạn như trong công ty xây dựng để biết thêm thông tin.",   lifestyle:"",   season:"wss"};
		D6.scenario.defMeasures['mHTdoubleGlassAll'] = { mid:"212",  name:"mHTdoubleGlassAll",  title:"Thay thế kính cửa sổ của tất cả các phòng trong kính nhiều lớp",  easyness:"1",  refCons:"consHTsum",  titleShort:"Toàn bộ căn phòng bằng kính nhiều lớp", level:"",  figNum:"4",  lifeTime:"30",  price:"100000",  roanShow:"",  standardType:"",  subsidy :"Nếu bạn muốn công việc cách nhiệt của toàn bộ ngôi nhà của cửa sổ, tùy thuộc vào áp dụng cho các chi phí xây dựng, tín dụng và tài sản thuế, có một hệ thống pháp khấu trừ thuế thu nhập phù hợp với dư nợ cho vay.",  advice:"thời gian làm nóng có thể bị ức chế về nhiều tỷ lệ của nhiệt để thoát khỏi cửa sổ và khăn quàng, làm thế nào để thoát khỏi cái nóng bằng cách thay thế kính đơn bình thường trong nửa kính hai lớp. Không chỉ tiết kiệm năng lượng, đó cũng là một lợi thế mà ngưng tụ là ít có khả năng tháng. Du khách giảm bớt cũng gió lạnh sắp tới downwash từ cửa sổ, chẳng hạn như cải thiện hoặc sáng giá rét của mùa đông, cũng cải thiện sự thoải mái. Kể từ khi có một phương pháp phù hợp với ngôi nhà, hãy tham khảo như để xây dựng.",   lifestyle:"",   season:"wss"};
		D6.scenario.defMeasures['mHTuchimadoAll'] = { mid:"213",  name:"mHTuchimadoAll",  title:"Gắn một Uchimado cho tất cả các căn phòng",  easyness:"1",  refCons:"consHTsum",  titleShort:"Cửa sổ bên trong toàn bộ phòng", level:"",  figNum:"4",  lifeTime:"30",  price:"100000",  roanShow:"",  standardType:"",  subsidy :"Nếu bạn muốn công việc cách nhiệt của toàn bộ ngôi nhà của cửa sổ, tùy thuộc vào áp dụng cho các chi phí xây dựng, tín dụng và tài sản thuế, có một hệ thống pháp khấu trừ thuế thu nhập phù hợp với dư nợ cho vay.",  advice:"Trong quá trình gia nhiệt thường là tỷ lệ nhiệt thoát ra từ các cửa sổ và khăn quàng, nó sẽ khó khăn hơn để thoát nhiệt bằng cách gắn các 'cửa sổ nội bộ', thêm vào bên trong cửa sổ hiện hành và sash. Cửa sổ bên trong là tương đối chi phí xây dựng rẻ hơn, làm việc trong khoảng một giờ để hoàn thành, nó cũng có hiệu quả để ngăn chặn sự ngưng tụ và tội phạm phòng chống. tổng gió lạnh et al đến downwash từ cửa sổ, chẳng hạn như cải thiện hoặc sáng giá rét của mùa đông, cũng cải thiện sự thoải mái. Vui lòng tham khảo, chẳng hạn như trong công ty xây dựng để biết thêm thông tin.",   lifestyle:"",   season:"wss"};
		D6.scenario.defMeasures['mHTloweAll'] = { mid:"214",  name:"mHTloweAll",  title:"Cửa sổ sash của tất cả các phòng trong kính thấp-E khung nhựa",  easyness:"1",  refCons:"consHTsum",  titleShort:"Tất cả các phòng trong kính thấp-E khung nhựa", level:"",  figNum:"4",  lifeTime:"30",  price:"150000",  roanShow:"",  standardType:"",  subsidy :"Nếu bạn muốn công việc cách nhiệt của toàn bộ ngôi nhà của cửa sổ, tùy thuộc vào áp dụng cho các chi phí xây dựng, tín dụng và tài sản thuế, có một hệ thống pháp khấu trừ thuế thu nhập phù hợp với dư nợ cho vay.",  advice:"thời gian làm nóng có thể bị ức chế về nhiều tỷ lệ của nhiệt để thoát khỏi cửa sổ và khăn quàng, làm thế nào để thoát khỏi cái nóng bằng cách thay thế kính đơn bình thường trong nửa kính hai lớp. Không chỉ tiết kiệm năng lượng, đó cũng là một lợi thế mà ngưng tụ là ít có khả năng tháng. Du khách giảm bớt cũng gió lạnh sắp tới downwash từ cửa sổ, chẳng hạn như cải thiện hoặc sáng giá rét của mùa đông, cũng cải thiện sự thoải mái. Kể từ khi có một phương pháp phù hợp với ngôi nhà, hãy tham khảo như để xây dựng.",   lifestyle:"",   season:"wss"};
		D6.scenario.defMeasures['mACfilter'] = { mid:"215",  name:"mACfilter",  title:"Làm sạch bộ lọc điều hòa không khí",  easyness:"2",  refCons:"consACheat",  titleShort:"làm sạch bộ lọc", level:"5",  figNum:"1",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Điều hoà nhiệt độ là là mong muốn để lọc sạch mỗi khi bạn sử dụng một tháng. Khi mắt của bộ lọc bị tắc, quạt bị suy yếu, đặc biệt là sẽ giảm hiệu quả lớn trong hệ thống sưởi. Đặc biệt, trong phòng, bao gồm nhà bếp, xin vui lòng sạch siêng năng để dễ dàng gắn khói dầu. Trong một máy lạnh gần đây, và cũng tự động mô hình để làm sạch bộ lọc.",   lifestyle:"1",   season:"wss"};
		D6.scenario.defMeasures['mHTtime'] = { mid:"216",  name:"mHTtime",  title:"Ngắn thời gian sử dụng một giờ sưởi ấm",  easyness:"3",  refCons:"consACheat",  titleShort:"Sưởi 1 giờ rút ngắn", level:"",  figNum:"3",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Sưởi là dễ bị với thời gian dài Tsukeppanashi. Cố gắng Dừng nhận được ấm áp hơn. Chẳng hạn như khi đi ngủ hoặc trước khi đi ra ngoài là một cách cũng dừng lại trong 30 phút trước đó. Bên cạnh đó, bởi vì nó là một sự lãng phí để làm nóng căn phòng đó không có ai, cố gắng cắt giảm càng nhiều càng tốt.",   lifestyle:"1",   season:"wss"};
		D6.scenario.defMeasures['mHTpartialHeating'] = { mid:"217",  name:"mHTpartialHeating",  title:"Bằng cách sử dụng kotatsu và thảm nóng, tránh làm nóng phòng",  easyness:"2",  refCons:"consACheat",  titleShort:"kotatsu thảm", level:"",  figNum:"3",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Phần sưởi ấm, như kotatsu và thảm nóng, vì vậy ấm duy nhất gần với cơ thể, tiêu thụ năng lượng thấp. Cũng hạ thấp nhiệt độ đã đặt của căn phòng nóng lớn, bạn có thể duy trì sự thoải mái cùng. Đặc biệt, hoặc là cấu trúc ngoài trời, trường hợp của cầu thang cấu trúc từ phòng sưởi ấm được theo sau ở tầng trên, không khí thật đau ấm có thể gây mất tích trong trần nhà, hiệu quả để làm ấm căn phòng sẽ tồi tệ hơn. Trong trường hợp này, hãy thử làm nóng cũng xem xét để làm ấm bàn chân. Hoặc mặc vớ, nó cũng có tác dụng đến ăn mặc quá diêm dúa. Nếu bạn muốn sử dụng <br> kotatsu và thảm nóng, hoặc che phủ bằng tấm cách điện giữa sàn nhà, và cũng trong chăn dày của kotatsu, nó sẽ làm giảm tiêu thụ điện năng nhiều hơn nữa.",   lifestyle:"1",   season:"wss"};
		D6.scenario.defMeasures['mHTceiling'] = { mid:"218",  name:"mHTceiling",  title:"Khuấy trần của không khí ấm áp tại thời điểm nóng",  easyness:"2",  refCons:"consACheat",  titleShort:"người đưa tin", level:"",  figNum:"3",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Và có một hệ thống sưởi phòng, có rất nhiều mà nhiệt độ gần 5 ~ 10 ℃ tốt hơn về trần hơn sàn nhà là cao hơn. Hoặc khuấy, chẳng hạn như một fan hâm mộ, mà khuấy động bởi người lưu hành và quạt lên, nó có thể mang lại không khí ấm áp xuống sàn nhà, thoải mái chi tiêu. Hoặc mặc vớ, nó cũng có tác dụng đến ăn mặc quá diêm dúa.",   lifestyle:"1",   season:"wss"};
		D6.scenario.defMeasures['mHTareaLimit'] = { mid:"219",  name:"mHTareaLimit",  title:"Đóng cửa phòng và cám tại thời điểm sưởi ấm, để giảm phạm vi sưởi ấm",  easyness:"2",  refCons:"consACheat",  titleShort:"phạm vi sưởi ấm", level:"5",  figNum:"3",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"phòng lớn để làm nóng một đòi hỏi rất nhiều năng lượng. Khi căn phòng riêng biệt, chẳng hạn như trong cám lúa mì và cửa ra vào, bạn ấm lên có thể là một thiết bị sưởi ấm nhỏ. Nếu trần nhà, chẳng hạn như cao cấu trúc ngoài trời, mặt khác, sẽ đòi hỏi rất nhiều nhiệt.",   lifestyle:"1",   season:"wss"};
		D6.scenario.defMeasures['mHTdanran'] = { mid:"220",  name:"mHTdanran",  title:"Để chi tiêu trong một căn phòng trong Hearthstone gia đình",  easyness:"3",  refCons:"consHTsum",  titleShort:"Gia đình Hearthstone", level:"",  figNum:"3",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Khi các thành viên gia đình chi tiêu trong một căn phòng riêng biệt, bạn phải có một hệ thống sưởi và ánh sáng, tương ứng. Bằng cách chi tiêu với nhau trong căn phòng, bạn có thể giảm cả ánh sáng và sưởi ấm. Trong khi bằng mọi cách tận hưởng thời gian của sum họp, hãy cố gắng bảo tồn năng lượng.",   lifestyle:"1",   season:"wss"};
		D6.scenario.defMeasures['mHTbiomass'] = { mid:"221",  name:"mHTbiomass",  title:"Để giới thiệu một bếp củi (bếp pellet)",  easyness:"1",  refCons:"consACheat",  titleShort:"bếp củi viên", level:"",  figNum:"3",  lifeTime:"20",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Với một bếp củi hoặc bếp viên, bạn có thể giảm lượng khí thải carbon dioxide vì nó không sử dụng nhiên liệu hóa thạch như dầu mỏ và khí đốt. Là nhiên liệu làm nóng từ những ngày xa xưa, mà là trong một make thời trang, chẳng hạn như lò sưởi, đang ngày càng trường hợp được giới thiệu cũng ở các khu vực đô thị. Pellet bếp, để tự động cung cấp nhiên liệu, cũng là lợi thế của không tốn nhiều thời gian. Để cài đặt và lắp đặt ống khói, bạn sẽ cần phải công trình xây dựng.",   lifestyle:"",   season:"wss"};
		D6.scenario.defMeasures['mHTcentralNotUse'] = { mid:"222",  name:"mHTcentralNotUse",  title:"Giảm nhiệt độ đã đặt phòng không được sử dụng trong lò sưởi trung tâm",  easyness:"2",  refCons:"consHTsum",  titleShort:"Làm nóng nhiệt độ của phòng chưa sử dụng", level:"5",  figNum:"3",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Nếu bạn là một người sưởi ấm trung tâm, nó được cho phép để làm ấm phòng không sử dụng. Nếu chúng ta sẽ ngừng quá trình gia nhiệt của căn phòng không được sử dụng và có một vấn đề, chẳng hạn như ngưng tụ và đóng băng, xin vui lòng ít tập làm nóng đến một mức độ nào đó không xảy ra. Nhiệt độ mà tại đó các mục tiêu của các thiết lập hệ thống sưởi là 20 ℃.",   lifestyle:"1",   season:"wss"};
		D6.scenario.defMeasures['mHTkanki'] = { mid:"223",  name:"mHTkanki",  title:"Cài đặt một hệ thống trao đổi thông gió nhiệt tổng",  easyness:"1",  refCons:"consHTsum",  titleShort:"Tổng số thông gió trao đổi nhiệt", level:"",  figNum:"3",  lifeTime:"20",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Ngôi nhà mới đã được ủy thác sự ra đời của thiết bị thông gió, nhưng khi bạn là người sưởi ấm, bạn vứt bỏ không khí ấm áp để ngoài trời. Trong toàn bộ hệ thống thông gió trao đổi nhiệt có thể được sử dụng để thu hồi nhiệt, bạn có thể giảm lượng nhiệt bị loại bỏ.",   lifestyle:"",   season:"wss"};
		D6.scenario.defMeasures['mPTstopPot'] = { mid:"301",  name:"mPTstopPot",  title:"Không để làm ấm trong một nồi điện",  easyness:"2",  refCons:"consCKpot",  titleShort:"Không nồi giữ ấm", level:"",  figNum:"17",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Trong một ấm đun nước điện, bạn sẽ muốn và rất nhiều điện năng tiêu thụ cho một vật liệu cách nhiệt thời gian dài. Hoặc với nước đun sôi, nếu cần thiết, hãy cố gắng tận dụng các phích mà không sử dụng điện.",   lifestyle:"1",   season:"wss"};
		D6.scenario.defMeasures['mPTstopPotNight'] = { mid:"302",  name:"mPTstopPotNight",  title:"Dừng sự ấm áp của một ấm điện để đi ra ngoài trong hoặc vào ban đêm",  easyness:"3",  refCons:"consCKpot",  titleShort:"Ban đêm ấm áp Dừng", level:"",  figNum:"17",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Chẳng hạn như đi ra ngoài vào thời điểm đó hoặc vào ban đêm, khi một thời gian dài không sử dụng nước nóng, bạn có thể làm giảm sức mạnh vật liệu cách nhiệt mà bạn ngăn chặn sự ấm đun nước điện. Và nồi cơm điện, chẳng hạn như vật liệu cách nhiệt của ghế nhà vệ sinh cũng có, tốt hơn sẽ là năng lượng tiết kiệm được dừng lại trong cùng một cách.",   lifestyle:"1",   season:"wss"};
		D6.scenario.defMeasures['mPTstopRiceCooker'] = { mid:"303",  name:"mPTstopRiceCooker",  title:"Thoát khỏi sự ấm áp của nồi cơm điện",  easyness:"3",  refCons:"consCKrice",  titleShort:"jar ấm áp", level:"",  figNum:"18",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Để ăn cơm ấm áp, so với các vật liệu cách nhiệt trong nồi cơm điện, nên lại hâm nóng trong lò vi sóng lò nướng ngay trước khi ăn sẽ tiết kiệm năng lượng. Khi ủ ở nhiệt độ cao trong một thời gian dài của thời gian, đôi khi gạo được đổi màu, bạn có thể ăn ngon là tốt hơn để chúng ở nhiệt độ phòng.",   lifestyle:"1",   season:"wss"};
		D6.scenario.defMeasures['mPTreplacePot'] = { mid:"304",  name:"mPTreplacePot",  title:"Kaikaeru đến một ấm đun nước điện tiết kiệm năng lượng",  easyness:"2",  refCons:"consCKpot",  titleShort:"Tiết kiệm năng lượng ấm đun nước điện", level:"",  figNum:"17",  lifeTime:"",  price:"",  roanShow:"",  standardType:"既存型",  subsidy :"",  advice:"Có một ấm đun nước điện, đó là vật liệu cách nhiệt, chẳng hạn như một phích, bạn có thể giảm mức tiêu thụ điện của vật liệu cách nhiệt. Vì nó đã không giữ điện năng tiêu thụ ấm áp trong danh mục được hiển thị, hãy chọn để làm điều này như một tài liệu tham khảo.",   lifestyle:"",   season:"wss"};
		D6.scenario.defMeasures['mCKflame'] = { mid:"305",  name:"mCKflame",  title:"Vì vậy mà không ngọn lửa không Nhô ra từ nồi",  easyness:"2",  refCons:"consCKcook",  titleShort:"điều chỉnh ngọn lửa nấu ăn", level:"",  figNum:"14",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Ngọn lửa nhô ra từ đáy chảo, chỉ khí là lãng phí, không giảm thời gian nấu ăn. Hãy sử dụng để điều chỉnh đến mức mà những ngọn lửa không nhô ra từ đáy chảo. Thêm vào đó, bằng cách đặt ra cho việc thiết lập tốt nấu ăn, bạn có thể giảm tiêu thụ gas.",   lifestyle:"1",   season:"wss"};
		D6.scenario.defMeasures['mDRsolar'] = { mid:"401",  name:"mDRsolar",  title:"Để phơi khô trên một ngày đẹp trời mà không có một máy sấy quần áo và chức năng sấy khô",  easyness:"2",  refCons:"consDRsum",  titleShort:"Mặt trời", level:"",  figNum:"16",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"chức năng sấy khô quần áo rất thuận tiện, phải mất 10 lần năng lượng hơn trong việc giặt ủi. Càng nhiều càng tốt để làm khô dưới ánh mặt trời, đó là tiết kiệm năng lượng không sử dụng một chức năng sấy khô.",   lifestyle:"1",   season:"wss"};
		D6.scenario.defMeasures['mDRheatPump'] = { mid:"402",  name:"mDRheatPump",  title:"Kaikaeru trong máy giặt mà lon quần áo khô của bơm nhiệt",  easyness:"1",  refCons:"consDRsum",  titleShort:"Nhiệt bơm khô", level:"",  figNum:"16",  lifeTime:"10",  price:"140000",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Trong số các máy sấy quần áo và các chức năng sấy khô với một chiếc máy giặt, một trong những máy bơm nhiệt, năng lượng tiêu thụ so với máy sấy khô thông thường bạn cần khoảng một nửa. Vâng, nếu bạn sử dụng một chức năng sấy khô cũng đã làm việc rất nhiều làm giảm lượng chi phí tiện ích. Tuy nhiên, kể từ khi chức năng sấy khô tự sử dụng rất nhiều năng lượng, nó là khuyến khích không sử dụng càng nhiều càng tốt chức năng làm khô càng tốt.",   lifestyle:"",   season:"wss"};
		D6.scenario.defMeasures['mLIceilingLED'] = { mid:"501",  name:"mLIceilingLED",  title:"Thay thế đồ đạc đèn huỳnh quang với ánh sáng trần LED",  easyness:"4",  refCons:"consLI",  titleShort:"LED ánh sáng", level:"",  figNum:"6",  lifeTime:"20",  price:"",  roanShow:"",  standardType:"蛍光灯",  subsidy :"",  advice:"hiệu suất tiết kiệm năng lượng LED là cao, và lâu dài. Không giống như đèn huỳnh quang, vì côn trùng vào trang bìa của các đèn không bật, bạn có thể tiết kiệm công sức thậm chí làm sạch. Thay thế từ thiết bị chiếu sáng, nhưng kể từ khi có một ổ cắm, bạn thường có thể thay thế mình mà không hỏi đến cửa hàng điện. Ngoài ra để điều chỉnh, chẳng hạn như màu của ánh sáng, hoặc bạn có thể điều chỉnh độ sáng mịn.",   lifestyle:"",   season:"wss"};
		D6.scenario.defMeasures['mLILED'] = { mid:"502",  name:"mLILED",  title:"Thay thế đèn LED",  easyness:"2",  refCons:"consLI",  titleShort:"bóng đèn LED", level:"",  figNum:"5",  lifeTime:"40000h",  price:"2000",  roanShow:"",  standardType:"電球",  subsidy :"",  advice:"bóng đèn LED, và sử dụng các ổ cắm giống như bóng đèn sợi đốt, bạn có thể thay thế nó khi bóng đèn bị phá vỡ. Việc tiêu thụ điện có thể giảm 80%, cuộc sống sẽ có nhiều hơn 40 lần.",   lifestyle:"",   season:"wss"};
		D6.scenario.defMeasures['mLIsensor'] = { mid:"503",  name:"mLIsensor",  title:"Thay thế con người nhạy cảm",  easyness:"2",  refCons:"consLI",  titleShort:"cảm biến ánh sáng", level:"",  figNum:"5",  lifeTime:"10",  price:"",  roanShow:"",  standardType:"電球",  subsidy :"",  advice:"Ánh sáng lối vào, và các loại cảm biến, cho ánh sáng bằng cách cảm nhận của nhân dân, hoạt động phòng chống tội phạm sẽ cao hơn. Thời gian được giảm đáng kể điện đang chảy, nó sẽ tiết kiệm năng lượng. Bên cạnh đó, hành lang như vậy là tốt nếu chỉ sáng khi đi qua một người, và việc lắp đặt ánh sáng của cảm biến con người, sẽ thiết thực và tiết kiệm năng lượng cũng có thể thắp sáng duy nhất khi đi qua một con người.",   lifestyle:"",   season:"wss"};
		D6.scenario.defMeasures['mLItime'] = { mid:"504",  name:"mLItime",  title:"Thời gian sử dụng chiếu sáng ngắn 1 giờ",  easyness:"3",  refCons:"consLI",  titleShort:"rút ngắn chiếu sáng", level:"",  figNum:"6",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Bạn nhiều ánh sáng điện khi đưa vào lưu thông, nhưng vì nó là một phần nhỏ của một giây, bạn sẽ tiết kiệm năng lượng bằng cách dẫn đến thường xuyên để dập tắt. Điều quan trọng là để đưa thói quen nhất thiết phải tắt đèn khi bạn rời khỏi phòng. Ngoài ra, khi tiếp xúc với ánh sáng vào ban đêm, sẽ điên chu kỳ giấc ngủ, nó sẽ không tốt cho cơ thể.",   lifestyle:"1",   season:"wss"};
		D6.scenario.defMeasures['mLIoff'] = { mid:"505",  name:"mLIoff",  title:"Tắt đèn khi bạn rời khỏi phòng",  easyness:"4",  refCons:"consLI",  titleShort:"thắp Tắt", level:"",  figNum:"6",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Khi bạn rời khỏi phòng để đảm bảo bạn tắt thường xuyên được chiếu sáng. Nhiều người trong số điện chảy vào thời điểm đó đặt nó, vì nó là một phần nhỏ của một giây, cũng có kế hoạch quay trở lại sớm hơn, tốt hơn để tắt siêng năng chiếu sáng sẽ tiết kiệm năng lượng.",   lifestyle:"1",   season:"wss"};
		D6.scenario.defMeasures['mTVreplace'] = { mid:"601",  name:"mTVreplace",  title:"Kaikaeru với TV hiệu suất tiết kiệm năng lượng cao",  easyness:"2",  refCons:"consTV",  titleShort:"Tiết kiệm Eneterebi mua", level:"",  figNum:"7",  lifeTime:"10",  price:"40000",  roanShow:"",  standardType:"普及型",  subsidy :"",  advice:"Đối với truyền hình thực hiện tiết kiệm năng lượng được cải thiện, nó đã được bán sớm hơn so với gõ để trở thành điện năng tiêu thụ ít hơn một nửa chừng cùng kích thước. Trong over-the-counter, vì vậy hãy chọn càng nhiều càng hóa đơn tiền điện hàng năm có thể là TV giá rẻ.",   lifestyle:"",   season:"wss"};
		D6.scenario.defMeasures['mTVradio'] = { mid:"602",  name:"mTVradio",  title:"Nửa thời gian truyền hình đài",  easyness:"1",  refCons:"consTVsum",  titleShort:"radio", level:"",  figNum:"7",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"TV là bởi vì có một nhu cầu chiếu màn hình, bạn phải tiêu tốn điện năng tiêu thụ từ 10 đến 100 lần radio. Nếu bạn đã bật TV cho cô đơn là, để tiết kiệm năng lượng, hãy cố gắng đặt như radio hoặc CD.",   lifestyle:"1",   season:"wss"};
		D6.scenario.defMeasures['mTVtime'] = { mid:"603",  name:"mTVtime",  title:"Trong một giờ một ngày rút ngắn thời gian truyền hình mặc",  easyness:"3",  refCons:"consTV",  titleShort:"TV rút ngắn", level:"",  figNum:"7",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Trước đó xác định xem chương trình truyền hình, Cố gắng tắt TV khi bạn đã hoàn tất. Như bạn rời khỏi bật, nó sẽ sẽ xem xét cho chương trình tiếp theo vô tình. Cũng trong trường hợp của các trò chơi video, bởi vì nó là một thời gian dài để có xu hướng, chúng ta hãy cố gắng rút ngắn thời gian để sử dụng.",   lifestyle:"1",   season:"wss"};
		D6.scenario.defMeasures['mTVbright'] = { mid:"604",  name:"mTVbright",  title:"Nó được điều chỉnh như vậy là không phải là một màn hình TV quá sáng",  easyness:"2",  refCons:"consTV",  titleShort:"điều chỉnh độ sáng truyền hình", level:"",  figNum:"7",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Bạn phải có khả năng điều chỉnh độ sáng của màn hình TV. Bán hàng vào thời điểm đó là bộ sáng để, trong trạng thái này ánh sáng chói quá nhiều ở nhà, tiêu thụ điện năng cũng sẽ có nhiều. Bằng cách thận trọng thiết lập độ sáng, tiêu thụ điện năng khoảng 2-4 phần trăm nó sẽ bị giảm. Trong truyền hình mới, đó cũng là một loại tự động điều chỉnh các cảm biến.",   lifestyle:"1",   season:"wss"};
		D6.scenario.defMeasures['mRFreplace'] = { mid:"701",  name:"mRFreplace",  title:"Kaikaeru tủ lạnh tiết kiệm năng lượng",  easyness:"2",  refCons:"consRF",  titleShort:"Tiết kiệm năng lượng tủ lạnh", level:"",  figNum:"2",  lifeTime:"10",  price:"150000",  roanShow:"",  standardType:"普及型",  subsidy :"",  advice:"Có tủ lạnh tiết kiệm năng lượng sống trong điện của khoảng một nửa so với mô hình trước đó. Thời gian để lựa chọn, như số lượng ★ dấu ấn của một nhãn tiết kiệm năng lượng thống nhất lớn và, vui lòng chọn tiết kiệm năng lượng đề cập đến việc hiển thị các hóa đơn tiền điện hàng năm. Vào thời điểm Gai 換 là để đảm bảo bạn nhận được đưa ra khỏi tủ lạnh cũ trong hệ thống tái chế thiết bị nhà.",   lifestyle:"",   season:"wss"};
		D6.scenario.defMeasures['mRFstop'] = { mid:"702",  name:"mRFstop",  title:"Dừng một trong những tủ lạnh",  easyness:"2",  refCons:"consRF",  titleShort:"tủ lạnh dừng", level:"",  figNum:"2",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Nếu bạn đang sử dụng tủ lạnh hai trở lên, hãy dừng lại một. Tiêu thụ càng nhiều điện và lớn ngay cả một tủ lạnh nhỏ. Nếu bạn không sử dụng để sử dụng bạn có thể cảm thấy như 'lãng phí', nhưng vì một tác động môi trường lớn chỉ để đưa điện sẽ xảy ra, không nên sử dụng là mong muốn.",   lifestyle:"1",   season:"wss"};
		D6.scenario.defMeasures['mRFwall'] = { mid:"703",  name:"mRFwall",  title:"Thả tủ lạnh từ các bức tường",  easyness:"4",  refCons:"consRF",  titleShort:"vị trí tủ lạnh", level:"",  figNum:"2",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Tủ lạnh là một tiêu chuẩn được phát hành khoảng 5cm từ các bức tường. Tủ lạnh có để thoát khỏi sức nóng từ hai bên và bề mặt trần, nhưng khi tiếp xúc với các bức tường là khó khăn để thoát khỏi cái nóng, điện năng tiêu thụ sẽ tăng lên khoảng 10%.",   lifestyle:"1",   season:"wss"};
		D6.scenario.defMeasures['mRFtemplature'] = { mid:"704",  name:"mRFtemplature",  title:"Để thiết lập nhiệt độ tủ lạnh bảo thủ",  easyness:"4",  refCons:"consRF",  titleShort:"nhiệt độ làm lạnh", level:"",  figNum:"2",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Tủ lạnh có thể kiểm soát nhiệt độ. Thiết lập, Tsuyokara vào, mỗi kết quả đối với kẻ yếu, bạn có thể khoảng 10% năng lượng tiết kiệm từ bên trong. Bởi vì nỗi đau của những món ăn sẽ nhanh hơn một chút, hãy thử trong khi kiểm tra xem liệu có bất kỳ rắc rối.",   lifestyle:"1",   season:"wss"};
		D6.scenario.defMeasures['mCRreplace'] = { mid:"801",  name:"mCRreplace",  title:"Kaikaeru cho xe sinh thái",  easyness:"2",  refCons:"consCR",  titleShort:"thay thế xe", level:"",  figNum:"21",  lifeTime:"8",  price:"1800000",  roanShow:"",  standardType:"普及型",  subsidy :"Trong phần giới thiệu của sinh thái xe, lợi ích của việc  có thể thu được.",  advice:"Ngoài hybrid và xe điện, công nghệ được cải thiện, và những chiếc xe tiết kiệm nhiên liệu mà chỉ đòi hỏi về tiêu thụ nhiên liệu hiện có được một nửa đã được bán đã được phát triển. Vui lòng chọn trong việc xem xét mức tiêu thụ nhiên liệu tại thời điểm mua.",   lifestyle:"",   season:"wss"};
		D6.scenario.defMeasures['mCRreplaceElec'] = { mid:"802",  name:"mCRreplaceElec",  title:"Sự ra đời của xe điện",  easyness:"1",  refCons:"consCR",  titleShort:"xe điện", level:"",  figNum:"21",  lifeTime:"7",  price:"3000000",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Xe điện, sử dụng điện đã bị buộc tội thay cho xăng, chạy bằng cách chuyển động cơ thay vì động cơ. hiệu quả cao hơn so với động cơ, đã được bán như một chiếc xe thực tế đủ. Tuy nhiên, các trạm thu phí vẫn còn ít, vì nó mất nhiều thời gian để phí, bạn cần phải sạc vào ban đêm. Tại châu Âu và Trung Quốc, nó đã thông qua một chính sách để chuyển sang xe điện từ công thức cơ xe tại cho đến khoảng năm 2040.",   lifestyle:"",   season:"wss"};
		D6.scenario.defMeasures['mCRecoDrive'] = { mid:"803",  name:"mCRecoDrive",  title:"Gấu trong tâm trí, chẳng hạn như sinh thái lái xe chạy không tải dừng",  easyness:"3",  refCons:"consCRsum",  titleShort:"Eco-Drive", level:"",  figNum:"21",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Ngoài các điểm dừng chạy không tải, bằng cách khởi động mềm tại thời điểm bắt đầu, bạn có thể cải thiện khoảng 10% lượng tiêu thụ nhiên liệu.",   lifestyle:"1",   season:"wss"};
		D6.scenario.defMeasures['mCRtrain'] = { mid:"804",  name:"mCRtrain",  title:"Để sử dụng xe lửa hoặc xe buýt, chẳng hạn như giao thông công cộng",  easyness:"2",  refCons:"consCRtrip",  titleShort:"giao thông công cộng", level:"",  figNum:"22",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Trong trường hợp của khoảng 2km của khu phố, khi thời tiết tốt đẹp, hoặc sử dụng một chiếc xe đạp mà không có một chiếc xe, chúng ta hãy đi bộ của. Nó cũng sẽ vì lợi ích của sức khỏe.",   lifestyle:"1",   season:"wss"};
		D6.scenario.defMeasures['mCR20percent'] = { mid:"805",  name:"mCR20percent",  title:"Dừng xe bằng cách sử dụng 20%",  easyness:"1",  refCons:"consCRtrip",  titleShort:"sử dụng xe 20% xuống", level:"",  figNum:"22",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"sử dụng xe sẽ tiêu thụ rất nhiều năng lượng. Ý tưởng như không được sử dụng để làm loãng các ứng dụng cần thiết là rất quan trọng.",   lifestyle:"1",   season:"wss"};
		D6.scenario.defMeasures['mCRwalk'] = { mid:"806",  name:"mCRwalk",  title:"Không phải là một chiếc xe trong trường hợp gần, đi bằng xe đạp hoặc đi bộ",  easyness:"2",  refCons:"consCRtrip",  titleShort:"Xe đạp hoặc đi bộ", level:"",  figNum:"22",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Trong trường hợp của khoảng 2km của khu phố, khi thời tiết tốt đẹp, hoặc sử dụng một chiếc xe đạp mà không có một chiếc xe, chúng ta hãy đi bộ của. Nó cũng sẽ vì lợi ích của sức khỏe.",   lifestyle:"1",   season:"wss"};
		D6.scenario.defMeasures['mPTstopPlug'] = { mid:"901",  name:"mPTstopPlug",  title:"Rút phích cắm ra khỏi ổ cắm trên tường, làm giảm sức mạnh chế độ chờ",  easyness:"3",  refCons:"consTotal",  titleShort:"điện dự phòng", level:"",  figNum:"20",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"TV và video, chẳng hạn như máy lạnh, nó có thể đã được tiêu thụ cũng điện khi không sử dụng. Khi không sử dụng trong một thời gian dài, bạn có thể giúp giảm bớt bằng cách loại bỏ các phích cắm ra khỏi ổ cắm trên tường. Đối với mô hình gần đây, làm giảm sức mạnh chờ, xin vui lòng làm việc về vụ việc ở phía trước của mô hình cũ trong hơn năm năm. Điều hòa nhiệt độ, chứ không phải là kéo ra khỏi ổ cắm điện trực tiếp, là dừng chân đầu tiên trên điều khiển từ xa, hãy ngắt kết nối nó từ hoạt động hoàn toàn dừng lại.",   lifestyle:"1",   season:"wss"};





		D6.scenario.defInput["i010"] = {  cons:"consTotal",  title:"Quan điểm tập trung như một biện pháp đối phó",  unit:"",  text:"Bạn có muốn xem bất kỳ biện pháp ưu tiên", inputType:"sel010", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"3",d21p:"0",d22t:"2",d22p:"1",d23t:"1",d23p:"2",d2w:"2",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i001"] = {  cons:"consTotal",  title:"quy mô gia đình",  unit:"人",  text:"Bao gồm cả bạn, hãy chọn số lượng người đã sống chung với nhau.", inputType:"sel001", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"3",d11p:"2",d12t:"2",d12p:"1",d13t:"1",d13p:"0",d1w:"2",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i002"] = {  cons:"consTotal",  title:"Set nhà",  unit:"",  text:"Osumai là, tách ra là, Nhà ở", inputType:"sel002", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"2",d11p:"2",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"2",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i003"] = {  cons:"consTotal",  title:"Chiều rộng của ngôi nhà",  unit:"m2",  text:"Trong tổng diện tích sàn của ngôi nhà, chọn giá trị số gần nhất.", inputType:"sel003", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"150",d11p:"0",d12t:"100",d12p:"1",d13t:"0",d13p:"2",d1w:"3",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i004"] = {  cons:"consTotal",  title:"Quyền sở hữu của ngôi nhà",  unit:"",  text:"Đó là quyền sở hữu nhà, Is thuê", inputType:"sel004", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i005"] = {  cons:"consTotal",  title:"Số tầng",  unit:"",  text:"câu chuyện gì làm, những gì sàn trường hợp nhà ở tập thể", inputType:"sel005", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i006"] = {  cons:"consTotal",  title:"bề mặt mái trần hoặc (tầng trên cùng)",  unit:"",  text:"bề mặt mái trần (tầng trên cùng) là", inputType:"sel006", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i007"] = {  cons:"consTotal",  title:"Ngày mái",  unit:"",  text:"Hoặc ngày của mái nhà là một tốt", inputType:"sel007", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"3",d11p:"0",d12t:"2",d12p:"1",d13t:"1",d13p:"2",d1w:"3",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i008"] = {  cons:"consTotal",  title:"Số phòng",  unit:"部屋",  text:"Số phòng trong nhà", inputType:"sel008", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"8",d11p:"0",d12t:"5",d12p:"1",d13t:"1",d13p:"2",d1w:"2",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i009"] = {  cons:"consTotal",  title:"năm xây dựng",  unit:"年",  text:"Có gì năm làm kể từ khi xây dựng một ngôi nhà", inputType:"sel009", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i021"] = {  cons:"consTotal",  title:"trạng thái",  unit:"",  text:"Vui lòng chọn khu vực của bạn của tỉnh.", inputType:"sel021", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i022"] = {  cons:"consTotal",  title:"Thông tin chi tiết khu vực",  unit:"",  text:"Diện tích khi khí hậu tại các tỉnh khác", inputType:"sel022", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i023"] = {  cons:"consTotal",  title:"Sự tiện lợi của giao thông công cộng",  unit:"",  text:"Osumai là giao thông công cộng là một khu vực tốt", inputType:"sel023", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i041"] = {  cons:"consTotal",  title:"Cửa sổ của hiệu suất cách nhiệt",  unit:"",  text:"Cửa sổ của hiệu suất cách nhiệt", inputType:"sel041", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"5",d21p:"0",d22t:"4",d22p:"1",d23t:"0",d23p:"2",d2w:"2",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i042"] = {  cons:"consTotal",  title:"Độ dày của nhiệt liệu của bức tường cách nhiệt",  unit:"",  text:"Bao nhiêu là độ dày của vật liệu cách nhiệt", inputType:"sel042", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"100",d11p:"2",d12t:"50",d12p:"1",d13t:"",d13p:"",d1w:"2",d1d:"1", d21t:"100",d21p:"2",d22t:"50",d22p:"1",d23t:"",d23p:"",d2w:"3",d2d:"1", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i043"] = {  cons:"consTotal",  title:"Cách cải tạo cửa sổ",  unit:"",  text:"Cho dù người đó có một nhiệt nhật của cửa sổ cách nhiệt", inputType:"sel043", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"1",d21p:"2",d22t:"2",d22p:"1",d23t:"",d23p:"",d2w:"2",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i044"] = {  cons:"consTotal",  title:"cải cách trần cách nhiệt tường",  unit:"",  text:"Bạn đã cải cách vật liệu cách nhiệt, chẳng hạn như một bức tường, trần, sàn", inputType:"sel044", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"1",d21p:"2",d22t:"2",d22p:"1",d23t:"",d23p:"",d2w:"1",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i051"] = {  cons:"consEnergy",  title:"Việc lắp đặt năng lượng mặt trời",  unit:"",  text:"Bạn có thiết lập một hệ thống phát điện năng lượng mặt trời", inputType:"sel051", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"1",d11p:"2",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"4",d1d:"0", d21t:"1",d21p:"2",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"4",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i052"] = {  cons:"consEnergy",  title:"Kích thước của mặt trời",  unit:"kW",  text:"Vui lòng chọn kích thước của năng lượng mặt trời phát điện được cài đặt.", inputType:"sel052", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"5",d11p:"2",d12t:"2",d12p:"1",d13t:"",d13p:"",d1w:"2",d1d:"0", d21t:"5",d21p:"2",d22t:"2",d22p:"1",d23t:"",d23p:"",d2w:"2",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i053"] = {  cons:"consEnergy",  title:"Năm lắp đặt năng lượng mặt trời",  unit:"",  text:"Năm Khi được rằng cài đặt năng lượng mặt trời", inputType:"sel053", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i054"] = {  cons:"consEnergy",  title:"Bạn có sử dụng một dầu hỏa",  unit:"",  text:"Bạn có sử dụng một dầu hỏa", inputType:"sel054", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i061"] = {  cons:"consEnergy",  title:"hóa đơn tiền điện",  unit:"円",  text:"Vui lòng chọn xấp xỉ hóa đơn tiền điện trong vòng một tháng.", inputType:"sel061", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"15000",d11p:"0",d12t:"10000",d12p:"1",d13t:"0",d13p:"2",d1w:"3",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i062"] = {  cons:"consEnergy",  title:"Lệ phí bán điện",  unit:"円",  text:"bạn có thể bán điện bao nhiêu mỗi tháng trong năng lượng mặt trời.", inputType:"sel062", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i063"] = {  cons:"consEnergy",  title:"Gasudai",  unit:"円",  text:"Chọn một giá xăng xấp xỉ 1 tháng.", inputType:"sel063", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"10000",d11p:"0",d12t:"6000",d12p:"1",d13t:"0",d13p:"2",d1w:"2",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i064"] = {  cons:"consEnergy",  title:"tiền mua dầu hỏa",  unit:"円",  text:"Vui lòng chọn việc sử dụng dầu hỏa xấp xỉ mỗi tháng.", inputType:"sel064", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"10000",d11p:"0",d12t:"6000",d12p:"1",d13t:"0",d13p:"2",d1w:"2",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i065"] = {  cons:"consEnergy",  title:"số tiền mua hàng Bánh",  unit:"円",  text:"Vui lòng chọn số lượng than bánh mua xấp xỉ mỗi tháng.", inputType:"sel065", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"10000",d11p:"0",d12t:"6000",d12p:"1",d13t:"0",d13p:"2",d1w:"2",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i066"] = {  cons:"consEnergy",  title:"cấp nhiệt huyện",  unit:"円",  text:"Bạn có một nguồn cung cấp nhiệt để sưởi ấm huyện", inputType:"sel066", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"10000",d11p:"0",d12t:"6000",d12p:"1",d13t:"0",d13p:"2",d1w:"2",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i072"] = {  cons:"consEnergy",  title:"Năng lực của bể nhà",  unit:"",  text:"Vui lòng chọn dung lượng nếu bể nhà được cài đặt", inputType:"sel072", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i073"] = {  cons:"consEnergy",  title:"Kerosene Home số bể lần",  unit:"",  text:"Vui lòng chọn số lần để đưa vào một năm trong bể quê hương của dầu hỏa", inputType:"sel073", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i074"] = {  cons:"consEnergy",  title:"tiền nước và nước thải",  unit:"円",  text:"Vui lòng chọn tiền nước và nước thải xấp xỉ mỗi tháng.", inputType:"sel074", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i075"] = {  cons:"consEnergy",  title:"chi phí nhiên liệu xe",  unit:"円",  text:"Chọn xăng khoảng một tháng (Phí dầu nhẹ). Nó trở thành những phút cả gia đình.", inputType:"sel075", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"10000",d11p:"0",d12t:"6000",d12p:"1",d13t:"0",d13p:"2",d1w:"2",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i081"] = {  cons:"consEnergy",  title:"công ty điện lực",  unit:"",  text:"Vui lòng chọn một công ty điện lực", inputType:"sel081", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i082"] = {  cons:"consEnergy",  title:"hợp đồng điện",  unit:"",  text:"Vui lòng chọn một loại hợp đồng điện", inputType:"sel082", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i083"] = {  cons:"consEnergy",  title:"loại khí",  unit:"",  text:"Vui lòng chọn loại gas", inputType:"sel083", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i091"] = {  cons:"consSeason",  title:"hóa đơn tiền điện",  unit:"円",  text:"Vui lòng chọn xấp xỉ hóa đơn tiền điện trong vòng một tháng.", inputType:"sel091", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i092"] = {  cons:"consSeason",  title:"Lệ phí bán điện",  unit:"円",  text:"bạn có thể bán điện bao nhiêu mỗi tháng trong năng lượng mặt trời.", inputType:"sel092", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i093"] = {  cons:"consSeason",  title:"Gasudai",  unit:"円",  text:"Chọn một giá xăng xấp xỉ 1 tháng.", inputType:"sel093", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i094"] = {  cons:"consSeason",  title:"tiền mua dầu hỏa",  unit:"円",  text:"Vui lòng chọn việc sử dụng dầu hỏa xấp xỉ mỗi tháng.", inputType:"sel094", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i101"] = {  cons:"consHWsum",  title:"Các loại máy nước nóng",  unit:"",  text:"Máy nước nóng tắm nước đun sôi là, những loại thiết bị làm.", inputType:"sel101", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"6",d21p:"2",d22t:"3",d22p:"0",d23t:"2",d23p:"1",d2w:"2",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i102"] = {  cons:"consHWsum",  title:"máy nước nóng năng lượng mặt trời",  unit:"",  text:"Bạn có sử dụng một máy nước nóng năng lượng mặt trời", inputType:"sel102", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"3",d11p:"0",d12t:"1",d12p:"2",d13t:"",d13p:"",d1w:"2",d1d:"0", d21t:"3",d21p:"0",d22t:"1",d22p:"2",d23t:"",d23p:"",d2w:"2",d2d:"0", d31t:"3",d31p:"0",d32t:"1",d32p:"2",d33t:"",d33p:"",d3w:"2",d3d:"0"}; 
		D6.scenario.defInput["i103"] = {  cons:"consHWtub",  title:"ngày Bath đun sôi (trừ mùa hè)",  unit:"日/週",  text:"Đun sôi bồn tắm, bạn có bao nhiêu ngày một tuần.", inputType:"sel103", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"5",d31p:"0",d32t:"2",d32p:"1",d33t:"0",d33p:"2",d3w:"2",d3d:"0"}; 
		D6.scenario.defInput["i104"] = {  cons:"consHWtub",  title:"ngày Bath đun sôi (mùa hè)",  unit:"日/週",  text:"Đun sôi tắm vào mùa hè, bạn có bao nhiêu ngày một tuần.", inputType:"sel104", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"5",d31p:"0",d32t:"2",d32p:"1",d33t:"0",d33p:"2",d3w:"2",d3d:"0"}; 
		D6.scenario.defInput["i105"] = {  cons:"consHWshower",  title:"thời gian tắm (trừ mùa hè)",  unit:"分/日",  text:"Thời gian sử dụng phòng tắm trong cả gia đình, bạn có bao nhiêu phút mỗi ngày. Tỷ lệ trung bình là khoảng một người 5 phút.", inputType:"sel105", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"40",d11p:"0",d12t:"20",d12p:"1",d13t:"0",d13p:"2",d1w:"2",d1d:"0", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"40",d31p:"0",d32t:"20",d32p:"1",d33t:"0",d33p:"2",d3w:"2",d3d:"0"}; 
		D6.scenario.defInput["i106"] = {  cons:"consHWshower",  title:"thời gian tắm (mùa hè)",  unit:"分/日",  text:"Thời gian sử dụng khi tắm cho cả gia đình vào mùa hè, bạn có bao nhiêu phút mỗi ngày.", inputType:"sel106", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"40",d11p:"0",d12t:"20",d12p:"1",d13t:"0",d13p:"2",d1w:"2",d1d:"0", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"40",d31p:"0",d32t:"20",d32p:"1",d33t:"0",d33p:"2",d3w:"2",d3d:"0"}; 
		D6.scenario.defInput["i107"] = {  cons:"consHWtub",  title:"Chiều cao của chùm tia nước nóng",  unit:"",  text:"Chiều cao của chùm tia nước nóng", inputType:"sel107", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"8",d31p:"0",d32t:"0",d32p:"2",d33t:"",d33p:"",d3w:"2",d3d:"0"}; 
		D6.scenario.defInput["i108"] = {  cons:"consHWtub",  title:"Bồn tắm thời gian ủ bệnh của",  unit:"時間",  text:"Bạn có nhiều giờ một ngày sự ấm áp của phòng tắm", inputType:"sel108", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"10",d31p:"0",d32t:"4",d32p:"1",d33t:"0",d33p:"2",d3w:"1",d3d:"0"}; 
		D6.scenario.defInput["i109"] = {  cons:"consHWtub",  title:"Rửa cơ thể trong bồn nước nóng",  unit:"",  text:"Bạn có sử dụng nước nóng trong bồn tắm khi bạn đã thu thập được trong bồn tắm", inputType:"sel109", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i110"] = {  cons:"consHWtub",  title:"Làm thế nào để tái ấm bồn tắm nước nóng",  unit:"割",  text:"Bạn có hâm nóng như thế nào", inputType:"sel110", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"10",d31p:"0",d32t:"0",d32p:"2",d33t:"",d33p:"",d3w:"1",d3d:"0"}; 
		D6.scenario.defInput["i111"] = {  cons:"consHWtub",  title:"Khi tắm nước nóng là thấp",  unit:"割",  text:"Những gì bạn muốn làm gì khi một bồn tắm nước nóng là thấp", inputType:"sel111", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i112"] = {  cons:"consHWshower",  title:"Cho đến khi nước nóng trong phòng tắm đi ra",  unit:"秒",  text:"Sau bao lâu thì thời gian cho đến khi là người đầu tiên đi ra nước nóng", inputType:"sel112", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"20",d21p:"0",d22t:"10",d22p:"1",d23t:"0",d23p:"2",d2w:"1",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i113"] = {  cons:"consHWdishwash",  title:"Sử dụng nước nóng trong máy rửa chén",  unit:"",  text:"Trong máy rửa chén, bạn có sử dụng nước mà không có việc sử dụng nước nóng", inputType:"sel113", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i114"] = {  cons:"consHWdresser",  title:"thời gian sử dụng nước nóng trong lưu vực",  unit:"ヶ月",  text:"thời gian sử dụng nước nóng trong lưu vực", inputType:"sel114", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"5",d31p:"0",d32t:"0",d32p:"2",d33t:"",d33p:"",d3w:"1",d3d:"0"}; 
		D6.scenario.defInput["i115"] = {  cons:"consHWdishwash",  title:"thời gian sử dụng nước nóng trong máy rửa chén",  unit:"ヶ月",  text:"thời gian sử dụng nước nóng trong máy rửa chén", inputType:"sel115", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i116"] = {  cons:"consHWshower",  title:"Tiết kiệm nước tắm đầu",  unit:"",  text:"bạn đang sử dụng một vòi sen đứng đầu tiết kiệm nước", inputType:"sel116", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"2",d21p:"0",d22t:"1",d22p:"2",d23t:"",d23p:"",d2w:"2",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i117"] = {  cons:"consHWtub",  title:"Bồn xe buýt đơn vị",  unit:"",  text:"Là đơn vị xe buýt. Bồn tắm là đoạn nhiệt", inputType:"sel117", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"3",d21p:"0",d22t:"2",d22p:"1",d23t:"1",d23p:"0",d2w:"1",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i131"] = {  cons:"consHWtoilet",  title:"Chất cách nhiệt trong ghế nhà vệ sinh",  unit:"",  text:"Bạn có phải là sự ấm áp của ghế toilet", inputType:"sel131", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"4",d31p:"2",d32t:"2",d32p:"1",d33t:"1",d33p:"0",d3w:"1",d3d:"0"}; 
		D6.scenario.defInput["i132"] = {  cons:"consHWtoilet",  title:"Cài đặt nhiệt độ ghế toilet",  unit:"",  text:"Làm thế nào để bạn thiết lập nhiệt độ của ghế toilet", inputType:"sel132", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"4",d31p:"0",d32t:"3",d32p:"1",d33t:"2",d33p:"2",d3w:"1",d3d:"0"}; 
		D6.scenario.defInput["i133"] = {  cons:"consHWtoilet",  title:"loại tức ghế ấm vệ sinh",  unit:"",  text:"Moment là loại ghế nhà vệ sinh ấm áp", inputType:"sel133", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i134"] = {  cons:"consHWtoilet",  title:"Đậy nắp ghế toilet",  unit:"",  text:"Bạn đóng nắp của ghế nhà vệ sinh sau khi sử dụng", inputType:"sel134", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"2",d31p:"0",d32t:"1",d32p:"2",d33t:"",d33p:"1",d3w:"1",d3d:""}; 
		D6.scenario.defInput["i201"] = {  cons:"consHTsum",  title:"Phạm vi sưởi ấm",  unit:"",  text:"phạm vi tốt cho quá trình gia nhiệt là, hoặc sẽ được bao nhiêu của toàn bộ ngôi nhà.", inputType:"sel201", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"1",d11p:"0",d12t:"0.5",d12p:"1",d13t:"0",d13p:"2",d1w:"1",d1d:"0", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i202"] = {  cons:"consHTsum",  title:"thiết bị làm nóng chủ yếu sử dụng",  unit:"",  text:"các nguồn năng lượng của thiết bị sưởi ấm thường xuyên nhất được sử dụng để làm ấm căn phòng là gì. Vui lòng chọn trong nguồn nhiệt trong trường hợp hệ thống sưởi sàn.", inputType:"sel202", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"6",d11p:"0",d12t:"5",d12p:"2",d13t:"",d13p:"",d1w:"2",d1d:"0", d21t:"6",d21p:"0",d22t:"5",d22p:"2",d23t:"",d23p:"",d2w:"2",d2d:"0", d31t:"5",d31p:"2",d32t:"2",d32p:"0",d33t:"1",d33p:"1",d3w:"2",d3d:"0"}; 
		D6.scenario.defInput["i203"] = {  cons:"consHTsum",  title:"Làm nóng thiết bị để sử dụng như một phụ trợ",  unit:"",  text:"Làm nóng thiết bị để sử dụng như một phụ trợ", inputType:"sel203", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i204"] = {  cons:"consHTsum",  title:"thời gian làm nóng",  unit:"時間",  text:"Quá trình nung nóng vào mùa đông Bạn có sử dụng bao nhiêu giờ một ngày.", inputType:"sel204", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"24",d11p:"0",d12t:"0",d12p:"2",d13t:"",d13p:"",d1w:"2",d1d:"0", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i205"] = {  cons:"consHTsum",  title:"Làm nóng nhiệt độ cài đặt",  unit:"℃",  text:"Bạn có muốn thành lập trong những gì ℃ là khi sưởi ấm. Hoặc nếu bạn không thể thiết lập là về những gì ℃.", inputType:"sel205", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"23",d11p:"0",d12t:"21",d12p:"1",d13t:"0",d13p:"2",d1w:"3",d1d:"0", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"23",d31p:"0",d32t:"21",d32p:"1",d33t:"0",d33p:"2",d3w:"3",d3d:"0"}; 
		D6.scenario.defInput["i206"] = {  cons:"consHTsum",  title:"Thời gian để sưởi ấm",  unit:"ヶ月",  text:"Thời gian để sưởi ấm", inputType:"sel206", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i211"] = {  cons:"consACheat",  title:"Tên của phòng",  unit:"",  text:"Tên của phòng", inputType:"", right:"", postfix:"", nodata:"", varType:"String", min:"", max:"", defaultValue:"", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i212"] = {  cons:"consACheat",  title:"Kích thước của căn phòng",  unit:"m2",  text:"Hãy trả lời các kích thước của hệ thống sưởi và làm mát cho căn phòng. Nếu có một đòn-by, xin vui lòng gấp đôi số tiền đó.", inputType:"sel212", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i213"] = {  cons:"consACheat",  title:"Kích thước của kính cửa sổ",  unit:"m2",  text:"Kích thước của tấm kính chắn sash và cửa sổ, hãy trả lời như là tổng của căn phòng.", inputType:"sel213", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i214"] = {  cons:"consACheat",  title:"Loại kính cửa sổ",  unit:"w/m2K",  text:"Loại kính cửa sổ", inputType:"sel214", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"4",d21p:"2",d22t:"3",d22p:"1",d23t:"",d23p:"",d2w:"1",d2d:"1", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i215"] = {  cons:"consACcool",  title:"Tuổi của điều hòa không khí",  unit:"年",  text:"Tuổi của điều hòa không khí", inputType:"sel215", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i216"] = {  cons:"consACcool",  title:"hiệu suất điều hòa nhiệt độ",  unit:"",  text:"Khi bạn mua máy lạnh, cậu chọn tiết kiệm năng lượng", inputType:"sel216", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"2",d11p:"0",d12t:"1",d12p:"2",d13t:"",d13p:"",d1w:"2",d1d:"0", d21t:"2",d21p:"0",d22t:"1",d22p:"2",d23t:"",d23p:"",d2w:"2",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i217"] = {  cons:"consACcool",  title:"làm sạch điều hòa không khí bộ lọc",  unit:"",  text:"Bạn có điều hòa không khí làm sạch bộ lọc", inputType:"sel217", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"2",d31p:"0",d32t:"1",d32p:"2",d33t:"",d33p:"",d3w:"1",d3d:"0"}; 
		D6.scenario.defInput["i231"] = {  cons:"consACheat",  title:"thiết bị làm nóng chủ yếu sử dụng",  unit:"",  text:"các nguồn năng lượng của thiết bị sưởi ấm thường xuyên nhất được sử dụng để làm ấm căn phòng là gì. Vui lòng chọn trong nguồn nhiệt trong trường hợp hệ thống sưởi sàn.", inputType:"sel231", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i232"] = {  cons:"consACheat",  title:"Làm nóng thiết bị để sử dụng như một phụ trợ",  unit:"",  text:"Làm nóng thiết bị để sử dụng như một phụ trợ", inputType:"sel232", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i233"] = {  cons:"consACheat",  title:"thời gian làm nóng",  unit:"時間",  text:"Quá trình nung nóng vào mùa đông Bạn có sử dụng bao nhiêu giờ một ngày.", inputType:"sel233", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i234"] = {  cons:"consACheat",  title:"Làm nóng nhiệt độ cài đặt",  unit:"℃",  text:"Bạn có muốn thành lập trong những gì ℃ là khi sưởi ấm. Hoặc nếu bạn không thể thiết lập là về những gì ℃.", inputType:"sel234", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i235"] = {  cons:"consACheat",  title:"Thời gian để sưởi ấm",  unit:"ヶ月",  text:"Thời gian để sưởi ấm", inputType:"sel235", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i236"] = {  cons:"consACheat",  title:"Thời gian sử dụng của máy tạo độ ẩm",  unit:"ヶ月",  text:"Thời gian sử dụng của máy tạo độ ẩm", inputType:"sel236", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i237"] = {  cons:"consACheat",  title:"Lắp đặt tấm cách nhiệt",  unit:"",  text:"Lắp đặt tấm rèm cách nhiệt dày vào mùa đông", inputType:"sel237", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i238"] = {  cons:"consACheat",  title:"Bạn có Shimekire phòng với cửa",  unit:"",  text:"Bạn có Shimekire phòng với cửa", inputType:"sel238", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i239"] = {  cons:"consACheat",  title:"cầu thang",  unit:"",  text:"Atrium hay, bạn đi lên đến tầng trên trên cầu thang từ phòng", inputType:"sel239", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i240"] = {  cons:"consACheat",  title:"Giảm diện tích sưởi ấm do các phân vùng của căn phòng",  unit:"",  text:"Giảm diện tích sưởi ấm do các phân vùng của căn phòng", inputType:"sel240", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i241"] = {  cons:"consACheat",  title:"Sử dụng thời gian của bếp điện",  unit:"",  text:"Sử dụng thời điểm nóng dầu bếp điện", inputType:"sel241", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i242"] = {  cons:"consACheat",  title:"phòng lạnh",  unit:"",  text:"Cho dù căn phòng có ảnh hưởng đến quá trình gia nhiệt", inputType:"sel242", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i243"] = {  cons:"consHTsum",  title:"Sự hiện diện hay vắng mặt của sự ngưng tụ trên cửa sổ",  unit:"",  text:"Bạn có một sự ngưng tụ của cửa sổ", inputType:"sel243", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i244"] = {  cons:"consHTsum",  title:"Ngưng tụ của bức tường, chẳng hạn như một tủ quần áo",  unit:"",  text:"Bạn có một sự ngưng tụ của bức tường, chẳng hạn như một tủ quần áo", inputType:"sel244", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i245"] = {  cons:"consHTsum",  title:"Cảm thấy cái lạnh buổi sáng",  unit:"ヶ月",  text:"Chọn một lạnh mà hầu hết có thể cảm nhận", inputType:"sel245", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i246"] = {  cons:"consHTsum",  title:"Thời gian để sáng bắt đầu lạnh",  unit:"",  text:"Từ mấy giờ là buổi sáng của cái lạnh", inputType:"sel246", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i247"] = {  cons:"consHTsum",  title:"Thời gian để sáng ngày lạnh đầu",  unit:"",  text:"Sau bao lâu thì sáng ngày lạnh", inputType:"sel247", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i248"] = {  cons:"consHTsum",  title:"Sự khéo léo của quá chải chuốt",  unit:"",  text:"Bạn cố gắng đầu tiên để ăn mặc quá diêm dúa trước khi gắn một hệ thống sưởi", inputType:"sel248", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"3",d11p:"0",d12t:"2",d12p:"1",d13t:"1",d13p:"2",d1w:"1",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"3",d31p:"0",d32t:"2",d32p:"1",d33t:"1",d33p:"2",d3w:"1",d3d:"1"}; 
		D6.scenario.defInput["i249"] = {  cons:"consHTsum",  title:"Nóng của căn phòng vắng mặt",  unit:"",  text:"Bạn có một căn phòng mà không ai không phải là để sưởi ấm", inputType:"sel249", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"4",d11p:"2",d12t:"3",d12p:"1",d13t:"",d13p:"",d1w:"1",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"4",d31p:"2",d32t:"3",d32p:"1",d33t:"",d33p:"",d3w:"2",d3d:"1"}; 
		D6.scenario.defInput["i261"] = {  cons:"consCOsum",  title:"thời gian làm mát",  unit:"時間",  text:"Điều hòa không khí vào mùa hè Bạn có sử dụng bao nhiêu giờ một ngày.", inputType:"sel261", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"24",d31p:"0",d32t:"8",d32p:"1",d33t:"",d33p:"",d3w:"1",d3d:"1"}; 
		D6.scenario.defInput["i262"] = {  cons:"consCOsum",  title:"múi giờ Cooling",  unit:"",  text:"Chủ yếu Bạn có sử dụng điều hòa không khí đến thời điểm múi giờ", inputType:"sel262", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i263"] = {  cons:"consCOsum",  title:"Làm mát nhiệt độ cài đặt",  unit:"℃",  text:"Bạn có muốn thành lập trong những gì ℃ là khi làm mát.", inputType:"sel263", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"28",d11p:"2",d12t:"25",d12p:"1",d13t:"",d13p:"",d1w:"1",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"28",d31p:"2",d32t:"25",d32p:"1",d33t:"",d33p:"",d3w:"1",d3d:"1"}; 
		D6.scenario.defInput["i264"] = {  cons:"consCOsum",  title:"Thời gian làm mát (bao gồm ẩm)",  unit:"ヶ月",  text:"Thời gian làm mát (bao gồm ẩm)", inputType:"sel264", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i265"] = {  cons:"consCOsum",  title:"Sức nóng của phòng",  unit:"",  text:"Nếu căn phòng nóng", inputType:"sel265", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i266"] = {  cons:"consCOsum",  title:"Sự hiện diện hay vắng mặt của dòng bức xạ mặt trời",  unit:"",  text:"Bạn có muốn nhập ánh sáng mặt trời là phòng vào buổi sáng hoặc buổi tối của mùa hè", inputType:"sel266", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i267"] = {  cons:"consCOsum",  title:"cắt bức xạ mặt trời",  unit:"",  text:"Khi mặt trời buổi chiều hoặc buổi sáng mặt trời bước vào phòng sẽ nóng. Bạn đã nghĩ ra với bức xạ mặt trời không nhập", inputType:"sel267", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"4",d11p:"0",d12t:"2",d12p:"1",d13t:"1",d13p:"2",d1w:"1",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"4",d31p:"0",d32t:"2",d32p:"1",d33t:"1",d33p:"2",d3w:"1",d3d:"1"}; 
		D6.scenario.defInput["i268"] = {  cons:"consCOsum",  title:"quạt sử dụng",  unit:"",  text:"Bằng cách, ví dụ, tận dụng lợi thế của các fan hâm mộ Bạn phải tránh càng nhiều càng tốt để sử dụng điều hòa không khí", inputType:"sel268", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"4",d31p:"0",d32t:"2",d32p:"1",d33t:"1",d33p:"2",d3w:"1",d3d:"1"}; 
		D6.scenario.defInput["i271"] = {  cons:"consACcool",  title:"thời gian làm mát",  unit:"時間",  text:"Điều hòa không khí vào mùa hè Bạn có sử dụng bao nhiêu giờ một ngày.", inputType:"sel271", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"10",d31p:"0",d32t:"4",d32p:"1",d33t:"0",d33p:"2",d3w:"1",d3d:"1"}; 
		D6.scenario.defInput["i272"] = {  cons:"consACcool",  title:"múi giờ Cooling",  unit:"",  text:"Chủ yếu Bạn có sử dụng điều hòa không khí đến thời điểm múi giờ", inputType:"sel272", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i273"] = {  cons:"consACcool",  title:"Làm mát nhiệt độ cài đặt",  unit:"℃",  text:"Bạn có muốn thành lập trong những gì ℃ là khi làm mát.", inputType:"sel273", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i274"] = {  cons:"consACcool",  title:"Thời gian làm mát (bao gồm ẩm)",  unit:"ヶ月",  text:"Thời gian làm mát (bao gồm ẩm)", inputType:"sel274", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i275"] = {  cons:"consACcool",  title:"Sức nóng của phòng",  unit:"",  text:"Nếu căn phòng nóng", inputType:"sel275", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i276"] = {  cons:"consACcool",  title:"Sự hiện diện hay vắng mặt của dòng bức xạ mặt trời",  unit:"",  text:"Bạn có muốn nhập ánh sáng mặt trời là phòng vào buổi sáng hoặc buổi tối của mùa hè", inputType:"sel276", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i277"] = {  cons:"consACcool",  title:"cắt bức xạ mặt trời",  unit:"",  text:"Khi mặt trời buổi chiều hoặc buổi sáng mặt trời bước vào phòng sẽ nóng. Bạn đã nghĩ ra với bức xạ mặt trời không nhập", inputType:"sel277", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i278"] = {  cons:"consACcool",  title:"quạt sử dụng",  unit:"",  text:"Bằng cách, ví dụ, tận dụng lợi thế của các fan hâm mộ Bạn phải tránh càng nhiều càng tốt để sử dụng điều hòa không khí", inputType:"sel278", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i281"] = {  cons:"consHTcold",  title:"sưởi ấm trung tâm",  unit:"",  text:"Là sưởi ấm trung tâm", inputType:"sel281", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i282"] = {  cons:"consHTcold",  title:"nguồn nhiệt trung tâm",  unit:"",  text:"sưởi ấm trung tâm của nguồn nhiệt", inputType:"sel282", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i283"] = {  cons:"consHTcold",  title:"nguồn nhiệt trung tâm chỉ",  unit:"",  text:"Các đơn vị nguồn nhiệt và bồn tắm của nguồn sức nóng của miền Trung là một", inputType:"sel283", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i284"] = {  cons:"consHTcold",  title:"giai đoạn sưởi ấm trung tâm",  unit:"",  text:"Thời gian sử dụng sưởi ấm trung tâm là", inputType:"sel284", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i285"] = {  cons:"consHTsum",  title:"thông gió trao đổi nhiệt",  unit:"",  text:"Đó là kiểu trao đổi nhiệt của hệ thống thông gió", inputType:"sel285", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"2",d11p:"0",d12t:"1",d12p:"2",d13t:"",d13p:"",d1w:"1",d1d:"0", d21t:"2",d21p:"0",d22t:"1",d22p:"2",d23t:"",d23p:"",d2w:"1",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i286"] = {  cons:"consHTcold",  title:"đường Sưởi",  unit:"",  text:"bạn đang sử dụng hệ thống sưởi đường", inputType:"sel286", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i287"] = {  cons:"consHTcold",  title:"nguồn nhiệt sưởi ấm đường",  unit:"",  text:"Đường gia nhiệt của nguồn nhiệt", inputType:"sel287", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i288"] = {  cons:"consHTcold",  title:"khu vực đường Sưởi",  unit:"",  text:"khu vực đường Sưởi", inputType:"sel288", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i289"] = {  cons:"consHTcold",  title:"sưởi ấm tần số đường sử dụng",  unit:"",  text:"sưởi ấm tần số đường sử dụng", inputType:"sel289", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i290"] = {  cons:"consHTcold",  title:"Sử dụng sưởi ấm mái nhà",  unit:"",  text:"Bạn đang sử dụng sưởi ấm mái nhà", inputType:"sel290", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i291"] = {  cons:"consHTcold",  title:"Các khu vực mục tiêu của quá trình gia nhiệt mái nhà",  unit:"",  text:"Các khu vực mục tiêu của quá trình gia nhiệt mái nhà", inputType:"sel291", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i292"] = {  cons:"consHTcold",  title:"sưởi ấm mái nhà của các nguồn nhiệt",  unit:"",  text:"sưởi ấm mái nhà của các nguồn nhiệt", inputType:"sel292", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i293"] = {  cons:"consHTcold",  title:"Tần suất sử dụng của quá trình gia nhiệt mái nhà",  unit:"",  text:"Tần suất sử dụng của hệ thống sưởi mái", inputType:"sel293", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i294"] = {  cons:"consHTcold",  title:"Sử dụng bể tuyết tan chảy",  unit:"",  text:"Sử dụng bể tuyết tan chảy", inputType:"sel294", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i295"] = {  cons:"consHTcold",  title:"Các nguồn nhiệt của bể tan tuyết",  unit:"",  text:"Các nguồn nhiệt của bể tan tuyết", inputType:"sel295", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i401"] = {  cons:"consDRsum",  title:"Tần suất sử dụng máy sấy quần áo",  unit:"",  text:"Bạn có sử dụng máy sấy và chức năng khô rửa. Vui lòng chọn xem có nên sử dụng ở mức độ nào, nếu bạn đang sử dụng.", inputType:"sel401", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"5",d11p:"0",d12t:"3",d12p:"1",d13t:"0",d13p:"2",d1w:"2",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i402"] = {  cons:"consDRsum",  title:"Loại máy sấy",  unit:"",  text:"Loại máy sấy", inputType:"sel402", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i403"] = {  cons:"consDRsum",  title:"Tần suất rửa",  unit:"",  text:"Còn làm thế nào để sử dụng máy giặt", inputType:"sel403", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i411"] = {  cons:"consDRsum",  title:"Sức mạnh của máy hút bụi",  unit:"",  text:"Làm thế nào để bạn thiết lập sức mạnh của máy hút bụi", inputType:"sel411", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i412"] = {  cons:"consDRsum",  title:"Chân không sử dụng sạch hơn",  unit:"分/日",  text:"Bạn có sử dụng ở mức độ nào các máy hút bụi trong một ngày", inputType:"sel412", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i501"] = {  cons:"consLIsum",  title:"chiếu sáng sống",  unit:"W",  text:"Các vật cố ánh sáng của cuộc sống, chủ yếu làm bạn sử dụng những gì.", inputType:"sel501", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"3",d21p:"2",d22t:"2",d22p:"1",d23t:"",d23p:"",d2w:"1",d2d:"1", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i502"] = {  cons:"consLIsum",  title:"Ánh sáng của căn phòng vắng mặt",  unit:"",  text:"Bạn có tắt ánh sáng trong phòng mà không ai", inputType:"sel502", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"7",d11p:"0",d12t:"1",d12p:"1",d13t:"0",d13p:"2",d1w:"1",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"7",d31p:"0",d32t:"1",d32p:"1",d33t:"0",d33p:"2",d3w:"1",d3d:"1"}; 
		D6.scenario.defInput["i511"] = {  cons:"consLI",  title:"Ánh sáng của nơi này",  unit:"",  text:"", inputType:"sel511", right:"1", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i512"] = {  cons:"consLI",  title:"loại ánh sáng",  unit:"",  text:"", inputType:"sel512", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i513"] = {  cons:"consLI",  title:"Công suất tiêu thụ của 1 bóng (this)",  unit:"W",  text:"", inputType:"sel513", right:"1", postfix:"Number", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i514"] = {  cons:"consLI",  title:"số bóng - số",  unit:"球・本",  text:"Bạn có Nếu bạn có nhiều hơn một, này những gì bóng-gì trong suốt", inputType:"sel514", right:"1", postfix:"Number", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i515"] = {  cons:"consLI",  title:"Sử dụng thời gian của chiếu sáng",  unit:"時間/日",  text:"Bạn có sử dụng nhiều giờ trong một ngày", inputType:"sel515", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i601"] = {  cons:"consTVsum",  title:"thời gian truyền hình",  unit:"時間",  text:"Tổng của tất cả các TV trong nhà, làm bạn đặt nhiều giờ trong một ngày. Xin vui lòng, kể cả thời gian của trò chơi video.", inputType:"sel601", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i631"] = {  cons:"consTV",  title:"kích thước TV của",  unit:"インチ",  text:"kích thước TV của", inputType:"sel631", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i632"] = {  cons:"consTV",  title:"Tuổi của truyền hình",  unit:"年",  text:"Tuổi của truyền hình", inputType:"sel632", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i633"] = {  cons:"consTV",  title:"thời gian truyền hình",  unit:"年",  text:"Tuổi của truyền hình", inputType:"sel633", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i701"] = {  cons:"consRFsum",  title:"Tủ lạnh của số",  unit:"台",  text:"bạn đang sử dụng bất kỳ số lượng tủ lạnh. Stocker (tủ đông) cũng nên được tính là một.", inputType:"sel701", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"2",d11p:"0",d12t:"0",d12p:"2",d13t:"",d13p:"",d1w:"1",d1d:"2", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"2",d31p:"0",d32t:"0",d32p:"2",d33t:"",d33p:"",d3w:"1",d3d:"2"}; 
		D6.scenario.defInput["i711"] = {  cons:"consRF",  title:"Sử dụng tuổi thọ của tủ lạnh",  unit:"年",  text:"Sử dụng tuổi thọ của tủ lạnh", inputType:"sel711", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i712"] = {  cons:"consRF",  title:"loại tủ lạnh",  unit:"",  text:"loại tủ lạnh", inputType:"sel712", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i713"] = {  cons:"consRF",  title:"Nội dung đánh giá",  unit:"",  text:"Nội dung đánh giá", inputType:"sel713", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i714"] = {  cons:"consRF",  title:"cài đặt nhiệt độ tủ lạnh",  unit:"",  text:"Làm thế nào để bạn thiết lập nhiệt độ", inputType:"sel714", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"4",d31p:"1",d32t:"3",d32p:"2",d33t:"0",d33p:"1",d3w:"1",d3d:"1"}; 
		D6.scenario.defInput["i715"] = {  cons:"consRF",  title:"Tsumesugi nội dung",  unit:"",  text:"Bạn cố gắng để không bị quá đóng gói", inputType:"sel715", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i716"] = {  cons:"consRF",  title:"Lắp đặt mà mở khoảng cách từ tường",  unit:"",  text:"Bạn có một khoảng cách khoảng 5cm ở bên cạnh, mặt sau", inputType:"sel716", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i801"] = {  cons:"consCKcook",  title:"nguồn nhiệt bếp",  unit:"",  text:"nguồn nhiệt bếp", inputType:"sel801", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i802"] = {  cons:"consCKcook",  title:"Tần suất nấu",  unit:"割",  text:"Tần suất nấu", inputType:"sel802", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i811"] = {  cons:"consCKrice",  title:"Chất cách nhiệt trong các lọ",  unit:"",  text:"Bạn có phải là sự ấm áp của nồi cơm điện", inputType:"sel811", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i821"] = {  cons:"consCKpot",  title:"vật liệu cách nhiệt của nồi",  unit:"",  text:"Bạn có phải là hơi ấm của nồi", inputType:"sel821", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"10",d11p:"0",d12t:"4",d12p:"1",d13t:"0",d13p:"2",d1w:"1",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"10",d31p:"0",d32t:"4",d32p:"1",d33t:"0",d33p:"2",d3w:"1",d3d:"1"}; 
		D6.scenario.defInput["i822"] = {  cons:"consCKpot",  title:"Hiệu quả năng lượng của ấm đun nước điện",  unit:"",  text:"Là nồi điện tiết kiệm năng lượng", inputType:"sel822", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i901"] = {  cons:"consCRsum",  title:"sở hữu xe hơi",  unit:"",  text:"sở hữu xe hơi", inputType:"sel901", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"4",d11p:"0",d12t:"2",d12p:"1",d13t:"0",d13p:"2",d1w:"2",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i902"] = {  cons:"consCRsum",  title:"Số tổ chức bởi chiếc xe tay ga xe đạp",  unit:"",  text:"Số tổ chức bởi chiếc xe tay ga xe đạp", inputType:"sel902", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i911"] = {  cons:"consCR",  title:"loại xe",  unit:"",  text:"loại xe", inputType:"sel911", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i912"] = {  cons:"consCR",  title:"tiêu thụ nhiên liệu của xe",  unit:"",  text:"tiêu thụ nhiên liệu của xe", inputType:"sel912", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"30",d11p:"2",d12t:"15",d12p:"1",d13t:"",d13p:"",d1w:"2",d1d:"1", d21t:"30",d21p:"2",d22t:"15",d22p:"1",d23t:"",d23p:"",d2w:"2",d2d:"1", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i913"] = {  cons:"consCR",  title:"Người sử dụng chính của xe",  unit:"",  text:"Có ai trong xe. Hoặc vui lòng điền vào nếu có một cuộc gọi bạn.", inputType:"", right:"", postfix:"", nodata:"", varType:"String", min:"", max:"", defaultValue:"", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i914"] = {  cons:"consCR",  title:"Sử dụng sinh thái lốp",  unit:"",  text:"Bạn có sử dụng sinh thái lốp", inputType:"sel914", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i921"] = {  cons:"consCRtrip",  title:"điểm đến",  unit:"",  text:"Vâng đi ra ngoài đích đến", inputType:"", right:"", postfix:"", nodata:"", varType:"String", min:"", max:"", defaultValue:"", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i922"] = {  cons:"consCRtrip",  title:"tần số",  unit:"",  text:"Đi bạn hoặc trong bất kỳ chiếc xe độ", inputType:"sel922", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i923"] = {  cons:"consCRtrip",  title:"khoảng cách một chiều",  unit:"km",  text:"khoảng cách một chiều", inputType:"sel923", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i924"] = {  cons:"consCRtrip",  title:"sử dụng xe",  unit:"",  text:"Bạn có sử dụng bất kỳ chiếc xe chủ yếu", inputType:"sel924", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i931"] = {  cons:"consCRsum",  title:"Idling dừng",  unit:"",  text:"Bạn có phải là dừng chạy không tải trong một thời gian dài dừng", inputType:"sel931", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"3",d11p:"0",d12t:"2",d12p:"1",d13t:"1",d13p:"2",d1w:"1",d1d:"0", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"3",d31p:"0",d32t:"2",d32p:"1",d33t:"1",d33p:"2",d3w:"1",d3d:"0"}; 
		D6.scenario.defInput["i932"] = {  cons:"consCRsum",  title:"tăng tốc đột ngột và tăng tốc đột ngột",  unit:"",  text:"Là nó không làm tăng tốc đột ngột và tăng tốc đột ngột", inputType:"sel932", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"3",d31p:"0",d32t:"2",d32p:"1",d33t:"1",d33p:"2",d3w:"1",d3d:"0"}; 
		D6.scenario.defInput["i933"] = {  cons:"consCRsum",  title:"Ít hoạt động với khả năng tăng tốc và giảm tốc",  unit:"",  text:"Ít hoạt động với khả năng tăng tốc và giảm tốc", inputType:"sel933", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"3",d31p:"0",d32t:"2",d32p:"1",d33t:"1",d33p:"2",d3w:"1",d3d:"0"}; 
		D6.scenario.defInput["i934"] = {  cons:"consCRsum",  title:"tắt tăng tốc sớm",  unit:"",  text:"tắt tăng tốc sớm", inputType:"sel934", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i935"] = {  cons:"consCRsum",  title:"Sử dụng thông tin giao thông đường bộ",  unit:"",  text:"Sử dụng thông tin giao thông đường bộ", inputType:"sel935", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"3",d31p:"0",d32t:"2",d32p:"1",d33t:"1",d33p:"2",d3w:"1",d3d:"0"}; 
		D6.scenario.defInput["i936"] = {  cons:"consCRsum",  title:"Không nạp với hành lý không cần thiết",  unit:"",  text:"Du lịch mà không cần vợ hành lý không cần thiết", inputType:"sel936", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i937"] = {  cons:"consCRsum",  title:"kiểm soát nhiệt độ của điều hòa không khí xe",  unit:"",  text:"Bạn phải điều chỉnh thường xuyên với khối lượng nhiệt độ và không khí của điều hòa không khí xe", inputType:"sel937", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"3",d31p:"0",d32t:"2",d32p:"1",d33t:"1",d33p:"2",d3w:"1",d3d:"0"}; 
		D6.scenario.defInput["i938"] = {  cons:"consCRsum",  title:"Du lịch mà không cần khởi động",  unit:"",  text:"Bạn đã có một hoạt động khởi động vào một ngày lạnh", inputType:"sel938", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"3",d31p:"0",d32t:"2",d32p:"1",d33t:"1",d33p:"2",d3w:"1",d3d:"0"}; 
		D6.scenario.defInput["i939"] = {  cons:"consCRsum",  title:"Kiểm tra áp suất lốp",  unit:"",  text:"Bạn cố gắng giữ cho áp suất không khí trong lốp xe đúng cách", inputType:"sel939", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i221"] = {  cons:"consCOsum",  title:"hiệu suất điều hòa nhiệt độ",  unit:"",  text:"Hoặc điều hòa không khí hiệu suất tiết kiệm năng lượng là tốt", inputType:"sel221", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"3",d11p:"0",d12t:"2",d12p:"1",d13t:"1",d13p:"2",d1w:"1",d1d:"0", d21t:"3",d21p:"0",d22t:"2",d22p:"1",d23t:"1",d23p:"2",d2w:"1",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i121"] = {  cons:"consHWsum",  title:"Hiệu suất của máy nước nóng",  unit:"",  text:"Hoặc hiệu suất tiết kiệm năng lượng của máy nước nóng là một tốt", inputType:"sel121", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"3",d11p:"0",d12t:"2",d12p:"1",d13t:"1",d13p:"2",d1w:"1",d1d:"0", d21t:"3",d21p:"0",d22t:"2",d22p:"1",d23t:"1",d23p:"2",d2w:"1",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i621"] = {  cons:"consTVsum",  title:"hiệu suất truyền của",  unit:"",  text:"Hoặc TV hiệu suất tiết kiệm năng lượng là tốt", inputType:"sel621", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"3",d11p:"0",d12t:"2",d12p:"1",d13t:"1",d13p:"2",d1w:"1",d1d:"0", d21t:"3",d21p:"0",d22t:"2",d22p:"1",d23t:"1",d23p:"2",d2w:"1",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i421"] = {  cons:"consDRsum",  title:"Hiệu suất của máy giặt",  unit:"",  text:"Hoặc hiệu suất tiết kiệm năng lượng của máy giặt là một tốt", inputType:"sel421", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"3",d11p:"0",d12t:"2",d12p:"1",d13t:"1",d13p:"2",d1w:"1",d1d:"0", d21t:"3",d21p:"0",d22t:"2",d22p:"1",d23t:"1",d23p:"2",d2w:"1",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 
		D6.scenario.defInput["i721"] = {  cons:"consRFsum",  title:"hiệu suất tủ lạnh",  unit:"",  text:"Hoặc hiệu suất tủ lạnh tiết kiệm năng lượng là tốt", inputType:"sel721", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"3",d11p:"0",d12t:"2",d12p:"1",d13t:"1",d13p:"2",d1w:"1",d1d:"0", d21t:"3",d21p:"0",d22t:"2",d22p:"1",d23t:"1",d23p:"2",d2w:"1",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 

		D6.scenario.defSelectValue["sel010"]= [ "Vui lòng chọn", "ưu tiên giảm CO2", "Tiện ích chi phí ưu tiên giảm", "Nỗ lực giảm bớt xem xét", "ưu tiên những nỗ lực một cách dễ dàng", "" ];			D6.scenario.defSelectData['sel010']= [ '-1', '1', '2', '3', '4' ];
		D6.scenario.defSelectValue["sel001"]= [ "Vui lòng chọn", "1 người", "2 người", "ba người", "4 người", "năm người", "6 người", "7 người", "8 người", "9 trở lên", "" ];			D6.scenario.defSelectData['sel001']= [ '-1', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];
		D6.scenario.defSelectValue["sel002"]= [ "Vui lòng chọn", "nhà", "bộ", "" ];			D6.scenario.defSelectData['sel002']= [ '-1', '1', '2' ];
		D6.scenario.defSelectValue["sel003"]= [ "Vui lòng chọn", "15m2", "30m2", "50m2", "70m2", "100m2", "120m2", "150m2", "200m2 trở lên", "" ];			D6.scenario.defSelectData['sel003']= [ '-1', '15', '30', '50', '70', '100', '120', '150', '220' ];
		D6.scenario.defSelectValue["sel004"]= [ "Vui lòng chọn", "quyền sở hữu nhà", "cho thuê", "" ];			D6.scenario.defSelectData['sel004']= [ '-1', '1', '2' ];
		D6.scenario.defSelectValue["sel005"]= [ "Vui lòng chọn", "Một tầng", "Hai tầng", "3 tầng trở lên", "" ];			D6.scenario.defSelectData['sel005']= [ '-1', '1', '2', '3' ];
		D6.scenario.defSelectValue["sel006"]= [ "Vui lòng chọn", "Tầng trên cùng (ở trên mái nhà)", "Không phải là tầng trên cùng (có một phòng ở trên)", "" ];			D6.scenario.defSelectData['sel006']= [ '-1', '1', '2' ];
		D6.scenario.defSelectValue["sel007"]= [ "Vui lòng chọn", "rất tốt", "các tốt", "đôi khi mờ", "xấu", "" ];			D6.scenario.defSelectData['sel007']= [ '-1', '1', '2', '3', '4' ];
		D6.scenario.defSelectValue["sel008"]= [ "Vui lòng chọn", "1 phòng", "2 phòng", "3 phòng", "4 phòng", "5 phòng", "6 phòng", "7 phòng", "8 phòng trở lên", "" ];			D6.scenario.defSelectData['sel008']= [ '-1', '1', '2', '3', '4', '5', '6', '7', '8' ];
		D6.scenario.defSelectValue["sel009"]= [ "Vui lòng chọn", "Ít hơn 5 năm", "5 - dưới 10 năm", "10 - dưới 20 tuổi", "Hơn 20 năm", "Không biết", "" ];			D6.scenario.defSelectData['sel009']= [ '-1', '3', '7', '13', '30' ];
		D6.scenario.defSelectValue[""]= [ "", "", "" ];			D6.scenario.defSelectData['']= [ '', '', '' ];
		D6.scenario.defSelectValue[""]= [ "", "", "" ];			D6.scenario.defSelectData['']= [ '', '', '' ];
		D6.scenario.defSelectValue["sel023"]= [ "Vui lòng chọn", "tiện lợi", "Tiện lợi nếu bất cứ điều gì", "Bất tiện nếu bất cứ điều gì", "điều bất tiện", "" ];			D6.scenario.defSelectData['sel023']= [ '-1', '1', '2', '3', '4' ];
		D6.scenario.defSelectValue["sel041"]= [ "Vui lòng chọn", "khung nhựa kính triple", "khung nhựa thấp E kính", "Nhựa nhôm composit khung hình / nhựa kính kép", "khung nhôm kính kép", "khung nhôm kính đơn tờ", "Không biết", "" ];			D6.scenario.defSelectData['sel041']= [ '-1', '1', '2', '3', '4', '5', '6' ];
		D6.scenario.defSelectValue["sel042"]= [ "Vui lòng chọn", "Bông thuỷ tinh 200mm tương đương", "Bông thuỷ tinh 150mm tương đương", "Bông thuỷ tinh 100mm tương đương", "Bông thuỷ tinh 50mm tương đương", "Bông thuỷ tinh 30mm tương đương", "Nó không chứa", "Không biết", "" ];			D6.scenario.defSelectData['sel042']= [ '-1', '200', '150', '100', '50', '30', '10', '-1' ];
		D6.scenario.defSelectValue["sel043"]= [ "Vui lòng chọn", "Đó là vào năm đầy đủ", "một số đã được", "không", "" ];			D6.scenario.defSelectData['sel043']= [ '-1', '1', '2', '3' ];
		D6.scenario.defSelectValue["sel044"]= [ "Vui lòng chọn", "Đó là vào năm đầy đủ", "một số đã được", "không", "" ];			D6.scenario.defSelectData['sel044']= [ '-1', '1', '2', '3' ];
		D6.scenario.defSelectValue["sel051"]= [ "Vui lòng chọn", "không", "là", "" ];			D6.scenario.defSelectData['sel051']= [ '-1', '0', '1' ];
		D6.scenario.defSelectValue["sel052"]= [ "Vui lòng chọn", "không", "Là (~ 3kW)", "Là (4kW)", "Là (5kW)", "Là (6 ~ 10kW)", "Là (hơn 10kW)", "" ];			D6.scenario.defSelectData['sel052']= [ '-1', '0', '3', '4', '5', '8', '11' ];
		D6.scenario.defSelectValue["sel053"]= [ "Vui lòng chọn", "2010 trước khi tài chính", "2011 - 2012 năm tài chính", "2013", "2014", "2015", "2016", "2017 hay muộn", "không được cài đặt", "" ];			D6.scenario.defSelectData['sel053']= [ '-1', '2010', '2011', '2013', '2014', '2015', '2016', '2017', '9999' ];
		D6.scenario.defSelectValue["sel054"]= [ "Vui lòng chọn", "vâng", "không", "" ];			D6.scenario.defSelectData['sel054']= [ '-1', '1', '2' ];
		D6.scenario.defSelectValue["sel061"]= [ "Vui lòng chọn", "1000 yên", "2000 yên", "3000 yen", "5000 yen", "7000 yen", "10.000 yen", "12.000 yen", "15.000 yen", "20.000 yen", "30.000 yen", "hơn", "" ];			D6.scenario.defSelectData['sel061']= [ '-1', '1000', '2000', '3000', '5000', '7000', '10000', '12000', '15000', '20000', '30000', '40000' ];
		D6.scenario.defSelectValue["sel062"]= [ "Vui lòng chọn", "1000 yên", "2000 yên", "3000 yen", "5000 yen", "7000 yen", "10.000 yen", "12.000 yen", "15.000 yen", "20.000 yen", "30.000 yen", "hơn", "" ];			D6.scenario.defSelectData['sel062']= [ '-1', '1000', '2000', '3000', '5000', '7000', '10000', '12000', '15000', '20000', '30000', '40000' ];
		D6.scenario.defSelectValue["sel063"]= [ "Vui lòng chọn", "All-điện (không sử dụng)", "1000 yên", "2000 yên", "3000 yen", "5000 yen", "7000 yen", "10.000 yen", "12.000 yen", "15.000 yen", "20.000 yen", "30.000 yenFALSE" ];			D6.scenario.defSelectData['sel063']= [ '-1', '0', '1000', '2000', '3000', '5000', '7000', '10000', '12000', '15000', '20000', '30000', '40000' ];
		D6.scenario.defSelectValue["sel064"]= [ "Vui lòng chọn", "Không sử dụng", "1 lon trong hai tháng (9L)", "Tháng 1 lon (18L)", "Tháng 2 lon (36L)", "Tháng 3 lon (54L)", "Tuần 1 lon (72L)", "1 lon trong 5 ngày (108L)", "Tuần 2 lon (144L)", "Tuần 3 lon (216L)", "hơn", "" ];			D6.scenario.defSelectData['sel064']= [ '-1', '0', '900', '1800', '3600', '5400', '7200', '10800', '14400', '21600', '30000' ];
		D6.scenario.defSelectValue["sel065"]= [ "Vui lòng chọn", "Không sử dụng", "1000 yên", "2000 yên", "3000 yen", "5000 yen", "7000 yen", "10.000 yen", "12.000 yen", "15.000 yen", "20.000 yen", "30.000 yenFALSE" ];			D6.scenario.defSelectData['sel065']= [ '-1', '0', '1000', '2000', '3000', '5000', '7000', '10000', '12000', '15000', '20000', '30000', '40000' ];
		D6.scenario.defSelectValue["sel066"]= [ "Vui lòng chọn", "Không sử dụng", "Chúng tôi đang sử dụng", "" ];			D6.scenario.defSelectData['sel066']= [ '-1', '1', '2' ];
		D6.scenario.defSelectValue["sel072"]= [ "Vui lòng chọn", "100L", "200L", "300L", "400L", "" ];			D6.scenario.defSelectData['sel072']= [ '-1', '100', '200', '300', '400' ];
		D6.scenario.defSelectValue["sel073"]= [ "Vui lòng chọn", "Ba lần một năm hoặc ít hơn", "Năm 4-6 lần", "Năm 7-10 lần", "Năm 11-15 lần", "Năm 16-20 lần", "Năm 21 lần trở lên", "" ];			D6.scenario.defSelectData['sel073']= [ '-1', '3', '5', '8', '12', '18', '24' ];
		D6.scenario.defSelectValue["sel074"]= [ "Vui lòng chọn", "500 yên", "1000 yên", "1500 yen", "2000 yên", "3000 yen", "4000 yen", "5000 yen", "7000 yen", "10.000 yen", "15.000 yen", "hơn", "" ];			D6.scenario.defSelectData['sel074']= [ '-1', '500', '1000', '1500', '2000', '3000', '4000', '5000', '7000', '10000', '15000', '20000' ];
		D6.scenario.defSelectValue["sel075"]= [ "Vui lòng chọn", "Không sử dụng", "1000 yên", "2000 yên", "3000 yen", "5000 yen", "7000 yen", "10.000 yen", "12.000 yen", "15.000 yen", "20.000 yen", "30.000 yenFALSE" ];			D6.scenario.defSelectData['sel075']= [ '-1', '0', '1000', '2000', '3000', '5000', '7000', '10000', '12000', '15000', '20000', '30000', '40000' ];
		D6.scenario.defSelectValue["sel081"]= [ "Vui lòng chọn", "Hokkaido Electric Power Co.", "Tohoku Electric Power", "Tokyo Electric Power Co.", "Chubu Electric Power Co.", "Công ty Điện lực Hokuriku", "Kansai Electric Power Co.", "Chubu Electric Power Co.", "Shikoku Electric Power", "Kyushu Electric Power", "Okinawa Electric Power", "khác", "" ];			D6.scenario.defSelectData['sel081']= [ '-1', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11' ];
		D6.scenario.defSelectValue["sel082"]= [ "Vui lòng chọn", "Bình thường gia đình (đồng hồ đo)", "thỏa thuận múi giờ", "" ];			D6.scenario.defSelectData['sel082']= [ '-1', '1', '2' ];
		D6.scenario.defSelectValue["sel083"]= [ "Vui lòng chọn", "khí thành phố", "LP Gas", "Không sử dụng khí", "" ];			D6.scenario.defSelectData['sel083']= [ '-1', '1', '2', '3' ];
		D6.scenario.defSelectValue["sel091"]= [ "Vui lòng chọn", "1000 yên", "2000 yên", "3000 yen", "5000 yen", "7000 yen", "10.000 yen", "12.000 yen", "15.000 yen", "20.000 yen", "30.000 yen", "hơn", "" ];			D6.scenario.defSelectData['sel091']= [ '-1', '1000', '2000', '3000', '5000', '7000', '10000', '12000', '15000', '20000', '30000', '40000' ];
		D6.scenario.defSelectValue["sel092"]= [ "Vui lòng chọn", "1000 yên", "2000 yên", "3000 yen", "5000 yen", "7000 yen", "10.000 yen", "12.000 yen", "15.000 yen", "20.000 yen", "30.000 yen", "hơn", "" ];			D6.scenario.defSelectData['sel092']= [ '-1', '1000', '2000', '3000', '5000', '7000', '10000', '12000', '15000', '20000', '30000', '40000' ];
		D6.scenario.defSelectValue["sel093"]= [ "Vui lòng chọn", "All-điện (không sử dụng)", "1000 yên", "2000 yên", "3000 yen", "5000 yen", "7000 yen", "10.000 yen", "12.000 yen", "15.000 yen", "20.000 yen", "30.000 yenFALSE" ];			D6.scenario.defSelectData['sel093']= [ '-1', '0', '1000', '2000', '3000', '5000', '7000', '10000', '12000', '15000', '20000', '30000', '40000' ];
		D6.scenario.defSelectValue["sel094"]= [ "Vui lòng chọn", "Không sử dụng", "1 lon trong hai tháng (9L)", "Tháng 1 lon (18L)", "Tháng 2 lon (36L)", "Tháng 3 lon (54L)", "Tuần 1 lon (72L)", "1 lon trong 5 ngày (108L)", "Tuần 2 lon (144L)", "Tuần 3 lon (216L)", "hơn", "" ];			D6.scenario.defSelectData['sel094']= [ '-1', '0', '900', '1800', '3600', '5400', '7200', '10800', '14400', '21600', '30000' ];
		D6.scenario.defSelectValue["sel101"]= [ "Vui lòng chọn", "máy nước nóng gas", "Eco Jaws (khí tiềm ẩn loại thu hồi nhiệt)", "máy nước nóng dầu hỏa", "Eco-cảm (dầu hỏa nhiệt ẩn loại phục hồi)", "máy nước nóng điện", "Eco dễ thương (điện)", "ECOWILL (CHP)", "ENE-FARM (fuel cell)", "củi", "" ];			D6.scenario.defSelectData['sel101']= [ '-1', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];
		D6.scenario.defSelectValue["sel102"]= [ "Vui lòng chọn", "Chúng tôi đang sử dụng", "Nó đôi khi được sử dụng", "Không sử dụng", "" ];			D6.scenario.defSelectData['sel102']= [ '-1', '1', '2', '3' ];
		D6.scenario.defSelectValue["sel103"]= [ "Vui lòng chọn", "Không tích lũy nước nóng", "Một ngày, một tuần", "Hai ngày một tuần", "Khoảng một lần mỗi hai ngày", "Tuần 5-6 ngày", "mỗi ngày", "" ];			D6.scenario.defSelectData['sel103']= [ '-1', '0', '1', '2', '3.5', '5.5', '7' ];
		D6.scenario.defSelectValue["sel104"]= [ "Vui lòng chọn", "Không tích lũy nước nóng", "Một ngày, một tuần", "Hai ngày một tuần", "Khoảng một lần mỗi hai ngày", "Tuần 5-6 ngày", "mỗi ngày", "" ];			D6.scenario.defSelectData['sel104']= [ '-1', '0', '1', '2', '3.5', '5.5', '7' ];
		D6.scenario.defSelectValue["sel105"]= [ "Vui lòng chọn", "Không sử dụng", "5 phút", "10 phút", "15 phút", "20 phút", "30 phút", "40 phút", "60 phút", "90 phút", "120 phút", "" ];			D6.scenario.defSelectData['sel105']= [ '-1', '0', '5', '10', '15', '20', '30', '40', '60', '90', '120' ];
		D6.scenario.defSelectValue["sel106"]= [ "Vui lòng chọn", "Không sử dụng", "5 phút", "10 phút", "15 phút", "20 phút", "30 phút", "40 phút", "60 phút", "90 phút", "120 phút", "" ];			D6.scenario.defSelectData['sel106']= [ '-1', '0', '5', '10', '15', '20', '30', '40', '60', '90', '120' ];
		D6.scenario.defSelectValue["sel107"]= [ "Vui lòng chọn", "Mức độ hấp thụ vai", "sitz tắm", "Không dính một nước nóng", "" ];			D6.scenario.defSelectData['sel107']= [ '-1', '8', '4', '0' ];
		D6.scenario.defSelectValue["sel108"]= [ "Vui lòng chọn", "không", "3 giờ", "6 giờ", "10 giờ", "16 giờ", "24 giờ", "" ];			D6.scenario.defSelectData['sel108']= [ '-1', '0', '3', '6', '10', '16', '24' ];
		D6.scenario.defSelectValue["sel109"]= [ "Vui lòng chọn", "Sử dụng nước nóng trong bồn tắm", "Half-and-gian bán hủy dài", "Sử dụng phòng tắm", "Không biết", "" ];			D6.scenario.defSelectData['sel109']= [ '-1', '10', '5', '2', '0' ];
		D6.scenario.defSelectValue["sel110"]= [ "Vui lòng chọn", "Nó luôn luôn là sự hâm nóng tự động", "Các hâm nếu cần thiết", "Nước nóng đổ, nếu cần thiết", "Không biết", "" ];			D6.scenario.defSelectData['sel110']= [ '-1', '10', '5', '5', '0' ];
		D6.scenario.defSelectValue["sel111"]= [ "Vui lòng chọn", "Là nước nóng luôn cộng tự động", "Nước nóng đổ, nếu cần thiết", "Nhập cốt nhỏ", "Tương ứng với bất cứ lúc nào", "Không biết", "" ];			D6.scenario.defSelectData['sel111']= [ '-1', '10', '5', '0', '5', '5' ];
		D6.scenario.defSelectValue["sel112"]= [ "Vui lòng chọn", "Nước nóng đi ra sớm", "Chờ khoảng 5 giây", "Chờ khoảng 10 giây", "Chờ khoảng 20 giây", "Chờ một phút ít hơn", "Không biết", "" ];			D6.scenario.defSelectData['sel112']= [ '-1', '3', '5', '10', '20', '50', '20' ];
		D6.scenario.defSelectValue["sel113"]= [ "Vui lòng chọn", "Nó luôn luôn là", "Là xấp xỉ", "đôi khi", "không", "" ];			D6.scenario.defSelectData['sel113']= [ '-1', '1', '2', '3', '4' ];
		D6.scenario.defSelectValue["sel114"]= [ "Vui lòng chọn", "Không sử dụng nước nóng", "2 tháng", "Bốn tháng", "6 tháng", "8 tháng", "10 tháng", "12 tháng", "" ];			D6.scenario.defSelectData['sel114']= [ '-1', '0', '2', '4', '6', '8', '10', '12' ];
		D6.scenario.defSelectValue["sel115"]= [ "Vui lòng chọn", "Không sử dụng nước nóng", "sử dụng máy rửa chén", "2 tháng", "Bốn tháng", "6 tháng", "8 tháng", "10 tháng", "12 tháng", "" ];			D6.scenario.defSelectData['sel115']= [ '-1', '0', '99', '2', '4', '6', '8', '10', '12' ];
		D6.scenario.defSelectValue["sel116"]= [ "Vui lòng chọn", "Chúng tôi đang sử dụng", "Không sử dụng", "Không biết", "" ];			D6.scenario.defSelectData['sel116']= [ '-1', '1', '2', '3' ];
		D6.scenario.defSelectValue["sel117"]= [ "Vui lòng chọn", "Đơn vị xe buýt của bồn cách nhiệt", "đơn vị xe buýt", "Không một chiếc xe buýt đơn vị", "" ];			D6.scenario.defSelectData['sel117']= [ '-1', '1', '2', '3' ];
		D6.scenario.defSelectValue["sel131"]= [ "Vui lòng chọn", "Đó là quanh năm", "Đó là khác so với mùa hè", "Nó chỉ là mùa đông", "không", "" ];			D6.scenario.defSelectData['sel131']= [ '-1', '1', '2', '3', '4' ];
		D6.scenario.defSelectValue["sel132"]= [ "Vui lòng chọn", "tăng", "thông thường", "thấp", "Không biết", "" ];			D6.scenario.defSelectData['sel132']= [ '-1', '1', '2', '3', '4' ];
		D6.scenario.defSelectValue["sel133"]= [ "Vui lòng chọn", "vâng", "không", "" ];			D6.scenario.defSelectData['sel133']= [ '-1', '1', '2' ];
		D6.scenario.defSelectValue["sel134"]= [ "Vui lòng chọn", "vâng", "không", "" ];			D6.scenario.defSelectData['sel134']= [ '-1', '1', '2' ];
		D6.scenario.defSelectValue["sel201"]= [ "Vui lòng chọn", "toàn bộ ngôi nhà", "Khoảng một nửa của ngôi nhà", "Một phần của ngôi nhà", "1 phòng duy nhất", "Không phải là hệ thống sưởi của căn phòng", "" ];			D6.scenario.defSelectData['sel201']= [ '-1', '1', '0.5', '0.25', '0.1', '0.02' ];
		D6.scenario.defSelectValue["sel202"]= [ "Vui lòng chọn", "điều hòa không khí", "sưởi ấm Electro-nhiệt", "khí", "dầu lửa", "bếp củi viên", "Kotatsu và thảm nóng chỉ", "heat huyện", "" ];			D6.scenario.defSelectData['sel202']= [ '-1', '1', '2', '3', '4', '5', '6' ];
		D6.scenario.defSelectValue["sel203"]= [ "Vui lòng chọn", "điều hòa không khí", "sưởi ấm Electro-nhiệt", "khí", "dầu lửa", "bếp củi viên", "Kotatsu và thảm nóng chỉ", "heat huyện", "" ];			D6.scenario.defSelectData['sel203']= [ '-1', '0', '18', '19', '20', '21', '22', '23', '24', '25', '26' ];
		D6.scenario.defSelectValue["sel204"]= [ "Vui lòng chọn", "Không sử dụng", "1 giờ", "2 giờ", "3 giờ", "Bốn giờ", "6 giờ", "8 giờ", "12 giờ", "16 giờ", "24 giờ", "" ];			D6.scenario.defSelectData['sel204']= [ '-1', '0', '1', '2', '3', '4', '6', '8', '12', '16', '24' ];
		D6.scenario.defSelectValue["sel205"]= [ "Vui lòng chọn", "Không sử dụng", "18 ℃", "19 ℃", "20 ℃", "21 ℃", "22 ℃", "23 ℃", "24 ℃", "25 ℃", "26 ℃ trở lên", "" ];			D6.scenario.defSelectData['sel205']= [ '-1', '0', '18', '19', '20', '21', '22', '23', '24', '25', '26' ];
		D6.scenario.defSelectValue["sel206"]= [ "Vui lòng chọn", "Không sưởi ấm", "1 tháng", "2 tháng", "ba tháng", "Bốn tháng", "5 tháng", "6 tháng", "8 tháng", "10 tháng", "" ];			D6.scenario.defSelectData['sel206']= [ '-1', '0', '1', '2', '3', '4', '5', '6', '8', '10' ];
		D6.scenario.defSelectValue[""]= [ "", "", "" ];			D6.scenario.defSelectData['']= [ '', '', '' ];
		D6.scenario.defSelectValue["sel212"]= [ "Vui lòng chọn", "4 thảm tatami rưỡi", "6 tatami", "8 tatami", "10 tatami", "12 tatami", "15 tatami", "20 thảm tatami", "25 thảm tatami", "30 tatami", "40 tatami", "" ];			D6.scenario.defSelectData['sel212']= [ '-1', '7.3', '10', '13', '16', '19.5', '24', '33', '41', '49', '65' ];
		D6.scenario.defSelectValue["sel213"]= [ "Vui lòng chọn", "cửa sổ nhỏ (90 × 120)", "Koshimado (120 × 180)", "Hai cửa sổ quét (180 × 180)", "Bốn cửa sổ quét (180 × 360)", "Quét Sáu tương đương (180 × 540)", "Quét Tám tương đương (180 × 720)", "" ];			D6.scenario.defSelectData['sel213']= [ '-1', '1.1', '2.2', '3.3', '6.5', '9.7', '13' ];
		D6.scenario.defSelectValue["sel214"]= [ "Vui lòng chọn", "một kính", "Nhôm kính nhiều lớp", "Khung nhiều lớp kính khác hơn nhôm", "cửa sổ kép", "thấp-e kính kép", "" ];			D6.scenario.defSelectData['sel214']= [ '-1', '6', '3.5', '2.5', '2.5', '1.5' ];
		D6.scenario.defSelectValue["sel215"]= [ "Vui lòng chọn", "Không có", "Chưa đầy một năm", "Chưa đầy 3 năm", "Ít hơn 5 năm", "Ít hơn 7 năm", "Ít hơn 10 năm", "Ít hơn 15 năm", "Ít hơn 20 năm", "Hơn 20 năm", "" ];			D6.scenario.defSelectData['sel215']= [ '-1', '0', '1', '2', '4', '6', '9', '13', '18', '25' ];
		D6.scenario.defSelectValue["sel216"]= [ "Vui lòng chọn", "vâng", "không", "Không biết", "" ];			D6.scenario.defSelectData['sel216']= [ '-1', '1', '2', '3' ];
		D6.scenario.defSelectValue["sel217"]= [ "Vui lòng chọn", "là", "không", "Không biết", "" ];			D6.scenario.defSelectData['sel217']= [ '-1', '1', '2', '3' ];
		D6.scenario.defSelectValue["sel231"]= [ "Vui lòng chọn", "điều hòa không khí", "sưởi ấm Electro-nhiệt", "khí", "dầu lửa", "bếp củi viên", "Kotatsu và thảm nóng chỉ", "" ];			D6.scenario.defSelectData['sel231']= [ '-1', '1', '2', '3', '4', '5', '6' ];
		D6.scenario.defSelectValue["sel232"]= [ "Vui lòng chọn", "điều hòa không khí", "sưởi ấm Electro-nhiệt", "khí", "dầu lửa", "bếp củi viên", "Kotatsu và thảm nóng chỉ", "" ];			D6.scenario.defSelectData['sel232']= [ '-1', '0', '18', '19', '20', '21', '22', '23', '24', '25', '26' ];
		D6.scenario.defSelectValue["sel233"]= [ "Vui lòng chọn", "Không sử dụng", "1 giờ", "2 giờ", "3 giờ", "Bốn giờ", "6 giờ", "8 giờ", "12 giờ", "16 giờ", "24 giờ", "" ];			D6.scenario.defSelectData['sel233']= [ '-1', '0', '1', '2', '3', '4', '6', '8', '12', '16', '24' ];
		D6.scenario.defSelectValue["sel234"]= [ "Vui lòng chọn", "Không sử dụng", "18 ℃", "19 ℃", "20 ℃", "21 ℃", "22 ℃", "23 ℃", "24 ℃", "25 ℃", "26 ℃ trở lên", "" ];			D6.scenario.defSelectData['sel234']= [ '-1', '0', '18', '19', '20', '21', '22', '23', '24', '25', '26' ];
		D6.scenario.defSelectValue["sel235"]= [ "Vui lòng chọn", "Không sưởi ấm", "1 tháng", "2 tháng", "ba tháng", "Bốn tháng", "5 tháng", "6 tháng", "8 tháng", "10 tháng", "" ];			D6.scenario.defSelectData['sel235']= [ '-1', '0', '1', '2', '3', '4', '5', '6', '8', '10' ];
		D6.scenario.defSelectValue["sel236"]= [ "Vui lòng chọn", "Không phải là ẩm", "1 tháng", "2 tháng", "ba tháng", "Bốn tháng", "5 tháng", "6 tháng", "" ];			D6.scenario.defSelectData['sel236']= [ '-1', '0', '1', '2', '3', '4', '5', '6' ];
		D6.scenario.defSelectValue["sel237"]= [ "Vui lòng chọn", "là", "không", "" ];			D6.scenario.defSelectData['sel237']= [ '-1', '1', '2' ];
		D6.scenario.defSelectValue["sel238"]= [ "Vui lòng chọn", "Có thể", "không thể", "" ];			D6.scenario.defSelectData['sel238']= [ '-1', '1', '2' ];
		D6.scenario.defSelectValue["sel239"]= [ "Vui lòng chọn", "Một", "Không có", "" ];			D6.scenario.defSelectData['sel239']= [ '-1', '1', '2' ];
		D6.scenario.defSelectValue["sel240"]= [ "Vui lòng chọn", "không thể", "20% giảm", "30 đến 40% giảm", "rưỡi", "giảm 60-70%", "" ];			D6.scenario.defSelectData['sel240']= [ '-1', '0', '2', '3', '5', '7' ];
		D6.scenario.defSelectValue["sel241"]= [ "Vui lòng chọn", "Không sử dụng", "1 giờ", "2 giờ", "3 giờ", "Bốn giờ", "6 giờ", "8 giờ", "12 giờ", "16 giờ", "24 giờ", "" ];			D6.scenario.defSelectData['sel241']= [ '-1', '0', '1', '2', '3', '4', '6', '8', '12', '16', '24' ];
		D6.scenario.defSelectValue["sel242"]= [ "Vui lòng chọn", "Tôi không cảm thấy cái lạnh và sưởi ấm cho", "Một chút lạnh", "Không hoàn toàn để làm ấm", "Lạnh ngay cả khi hệ thống sưởi", "Sưởi không", "" ];			D6.scenario.defSelectData['sel242']= [ '-1', '1', '2', '3', '4', '5' ];
		D6.scenario.defSelectValue["sel243"]= [ "Vui lòng chọn", "ngưng tụ tốt", "Một chút ngưng tụ", "Hầu như không có sự ngưng tụ", "Không ngưng tụ", "Không biết", "" ];			D6.scenario.defSelectData['sel243']= [ '-1', '1', '2', '3', '4', '5' ];
		D6.scenario.defSelectValue["sel244"]= [ "Vui lòng chọn", "ngưng tụ tốt", "Một chút ngưng tụ", "Hầu như không có sự ngưng tụ", "Không ngưng tụ", "Không biết", "" ];			D6.scenario.defSelectData['sel244']= [ '-1', '1', '2', '3', '4', '5' ];
		D6.scenario.defSelectValue["sel245"]= [ "Vui lòng chọn", "Thật khó có thể thức dậy vào buổi sáng trong thời tiết lạnh", "tay và chân lạnh", "Nhận sương trên cửa sổ", "Hơi thở mây trắng trong phòng", "" ];			D6.scenario.defSelectData['sel245']= [ '-1', '1', '2', '3', '4', '5' ];
		D6.scenario.defSelectValue["sel246"]= [ "Vui lòng chọn", "đầu tháng Mười", "Vào cuối tháng Mười", "đầu tháng", "cuối tháng", "đầu tháng", "cuối tháng", "đầu tháng Giêng", "cuối tháng", "" ];			D6.scenario.defSelectData['sel246']= [ '-1', '1', '2', '3', '4', '5', '6', '7', '8' ];
		D6.scenario.defSelectValue["sel247"]= [ "Vui lòng chọn", "đầu tháng hai", "Trong cuối tháng Hai", "đầu tháng", "cuối tháng", "Tháng tư đầu", "cuối tháng Tư", "đầu tháng", "cuối tháng", "" ];			D6.scenario.defSelectData['sel247']= [ '-1', '1', '2', '3', '4', '5', '6', '7', '8' ];
		D6.scenario.defSelectValue["sel248"]= [ "Vui lòng chọn", "Nó luôn luôn là", "Là xấp xỉ", "đôi khi", "không", "" ];			D6.scenario.defSelectData['sel248']= [ '-1', '1', '2', '3', '4' ];
		D6.scenario.defSelectValue["sel249"]= [ "Vui lòng chọn", "Nó luôn luôn là", "Là xấp xỉ", "đôi khi", "không", "" ];			D6.scenario.defSelectData['sel249']= [ '-1', '1', '2', '3', '4' ];
		D6.scenario.defSelectValue["sel261"]= [ "Vui lòng chọn", "Không sử dụng", "1 giờ", "2 giờ", "3 giờ", "Bốn giờ", "6 giờ", "8 giờ", "12 giờ", "16 giờ", "24 giờ", "" ];			D6.scenario.defSelectData['sel261']= [ '-1', '0', '1', '2', '3', '4', '6', '8', '12', '16', '24' ];
		D6.scenario.defSelectValue["sel262"]= [ "Vui lòng chọn", "Không sử dụng", "buổi sáng", "buổi trưa", "buổi chiều", "đêm", "" ];			D6.scenario.defSelectData['sel262']= [ '-1', '0', '1', '2', '3', '4' ];
		D6.scenario.defSelectValue["sel263"]= [ "Vui lòng chọn", "24 ℃ dưới đây", "25 ℃", "26 ℃", "27 ℃", "28 ℃", "29 ℃", "30 ℃", "Không sử dụng", "" ];			D6.scenario.defSelectData['sel263']= [ '-1', '24', '25', '26', '27', '28', '29', '30', '0' ];
		D6.scenario.defSelectValue["sel264"]= [ "Vui lòng chọn", "Không làm mát", "1 tháng", "2 tháng", "ba tháng", "Bốn tháng", "5 tháng", "6 tháng", "" ];			D6.scenario.defSelectData['sel264']= [ '-1', '0', '1', '2', '3', '4', '5', '6' ];
		D6.scenario.defSelectValue["sel265"]= [ "Vui lòng chọn", "Tôi không cảm thấy hơi nóng và làm mát", "Một chút nóng", "Nếu khá mát mẻ Note", "Hot ngay cả khi làm mát", "Làm mát không", "" ];			D6.scenario.defSelectData['sel265']= [ '-1', '1', '2', '3', '4', '5' ];
		D6.scenario.defSelectValue["sel266"]= [ "Vui lòng chọn", "nhập tốt", "Nhập một chút", "Không phù hợp", "Không biết", "" ];			D6.scenario.defSelectData['sel266']= [ '-1', '1', '2', '3', '4' ];
		D6.scenario.defSelectValue["sel267"]= [ "Vui lòng chọn", "Nó luôn luôn là", "Là xấp xỉ", "đôi khi", "không", "" ];			D6.scenario.defSelectData['sel267']= [ '-1', '1', '2', '3', '4' ];
		D6.scenario.defSelectValue["sel268"]= [ "Vui lòng chọn", "Nó luôn luôn là", "Là xấp xỉ", "đôi khi", "không", "" ];			D6.scenario.defSelectData['sel268']= [ '-1', '1', '2', '3', '4' ];
		D6.scenario.defSelectValue["sel271"]= [ "Vui lòng chọn", "Không sử dụng", "1 giờ", "2 giờ", "3 giờ", "Bốn giờ", "6 giờ", "8 giờ", "12 giờ", "16 giờ", "24 giờ", "" ];			D6.scenario.defSelectData['sel271']= [ '-1', '0', '1', '2', '3', '4', '6', '8', '12', '16', '24' ];
		D6.scenario.defSelectValue["sel272"]= [ "Vui lòng chọn", "Không sử dụng", "buổi sáng", "buổi trưa", "buổi chiều", "đêm", "" ];			D6.scenario.defSelectData['sel272']= [ '-1', '0', '1', '2', '3', '4' ];
		D6.scenario.defSelectValue["sel273"]= [ "Vui lòng chọn", "24 ℃ dưới đây", "25 ℃", "26 ℃", "27 ℃", "28 ℃", "29 ℃", "30 ℃", "Không sử dụng", "" ];			D6.scenario.defSelectData['sel273']= [ '-1', '24', '25', '26', '27', '28', '29', '30', '0' ];
		D6.scenario.defSelectValue["sel274"]= [ "Vui lòng chọn", "Không làm mát", "1 tháng", "2 tháng", "ba tháng", "Bốn tháng", "5 tháng", "6 tháng", "" ];			D6.scenario.defSelectData['sel274']= [ '-1', '0', '1', '2', '3', '4', '5', '6' ];
		D6.scenario.defSelectValue["sel275"]= [ "Vui lòng chọn", "Tôi không cảm thấy hơi nóng và làm mát", "Một chút nóng", "Nếu khá mát mẻ Note", "Hot ngay cả khi làm mát", "Làm mát không", "" ];			D6.scenario.defSelectData['sel275']= [ '-1', '1', '2', '3', '4', '5' ];
		D6.scenario.defSelectValue["sel276"]= [ "Vui lòng chọn", "nhập tốt", "Nhập một chút", "Không phù hợp", "Không biết", "" ];			D6.scenario.defSelectData['sel276']= [ '-1', '1', '2', '3', '4' ];
		D6.scenario.defSelectValue["sel277"]= [ "Vui lòng chọn", "Nó luôn luôn là", "Là xấp xỉ", "đôi khi", "không", "" ];			D6.scenario.defSelectData['sel277']= [ '-1', '1', '2', '3', '4' ];
		D6.scenario.defSelectValue["sel278"]= [ "Vui lòng chọn", "Nó luôn luôn là", "Là xấp xỉ", "đôi khi", "không", "" ];			D6.scenario.defSelectData['sel278']= [ '-1', '1', '2', '3', '4' ];
		D6.scenario.defSelectValue["sel281"]= [ "Vui lòng chọn", "vâng", "không", "" ];			D6.scenario.defSelectData['sel281']= [ '-1', '1', '2' ];
		D6.scenario.defSelectValue["sel282"]= [ "Vui lòng chọn", "dầu lửa", "điện", "Điện (bơm nhiệt)", "khí", "Lai (nhiệt bơm gas +)", "cấp nhiệt huyện", "" ];			D6.scenario.defSelectData['sel282']= [ '-1', '1', '2', '3', '4', '5', '6' ];
		D6.scenario.defSelectValue["sel283"]= [ "Vui lòng chọn", "chỉ trung tâm", "Chia sẻ với bồn tắm", "" ];			D6.scenario.defSelectData['sel283']= [ '-1', '1', '2' ];
		D6.scenario.defSelectValue["sel284"]= [ "Vui lòng chọn", "Không sử dụng", "1 tháng", "2 tháng", "ba tháng", "Bốn tháng", "5 tháng", "6 tháng", "8 tháng", "" ];			D6.scenario.defSelectData['sel284']= [ '-1', '0', '1', '2', '3', '4', '5', '6', '8' ];
		D6.scenario.defSelectValue["sel285"]= [ "Vui lòng chọn", "vâng", "không", "" ];			D6.scenario.defSelectData['sel285']= [ '-1', '1', '2' ];
		D6.scenario.defSelectValue["sel286"]= [ "Vui lòng chọn", "vâng", "không", "" ];			D6.scenario.defSelectData['sel286']= [ '-1', '1', '2' ];
		D6.scenario.defSelectValue["sel287"]= [ "Vui lòng chọn", "dầu lửa", "điện", "Điện (bơm nhiệt)", "khí", "Lai (nhiệt bơm gas +)", "cấp nhiệt huyện", "" ];			D6.scenario.defSelectData['sel287']= [ '-1', '1', '2', '3', '4', '5', '6' ];
		D6.scenario.defSelectValue["sel288"]= [ "Vui lòng chọn", "1 mét vuông (3m2)", "2 mét vuông (7m2)", "3 mét vuông (10m2)", "5 mét vuông (15m2)", "10 mét vuông (30m2)", "15 mét vuông (50m2)", "20 Tsubo (65m2)", "30 mét vuông (100m2)", "" ];			D6.scenario.defSelectData['sel288']= [ '-1', '3', '7', '10', '15', '30', '50', '65', '100' ];
		D6.scenario.defSelectValue["sel289"]= [ "Vui lòng chọn", "Năm 2-3 ngày", "Khoảng một ngày một tháng", "2-3 ngày mỗi tháng", "Từ 2 đến 3 ngày một tuần", "Luôn luôn ON cảm biến", "Luôn luôn ON mà không có một cảm biến", "" ];			D6.scenario.defSelectData['sel289']= [ '-1', '2', '6', '12', '30', '50', '100' ];
		D6.scenario.defSelectValue["sel290"]= [ "Vui lòng chọn", "vâng", "không", "" ];			D6.scenario.defSelectData['sel290']= [ '-1', '1', '2' ];
		D6.scenario.defSelectValue["sel291"]= [ "Vui lòng chọn", ": Xung quanh máng xối chỉ", "Toàn bộ bề mặt mái nhà", "" ];			D6.scenario.defSelectData['sel291']= [ '-1', '10', '30' ];
		D6.scenario.defSelectValue["sel292"]= [ "Vui lòng chọn", "dầu lửa", "điện", "Điện (bơm nhiệt)", "khí", "Đồng phát (gas)", "Đồng phát (dầu hỏa)", "cấp nhiệt huyện", "" ];			D6.scenario.defSelectData['sel292']= [ '-1', '1', '2', '3', '4', '5', '6' ];
		D6.scenario.defSelectValue["sel293"]= [ "Vui lòng chọn", "Năm 2-3 ngày", "Khoảng một ngày một tháng", "2-3 ngày mỗi tháng", "Từ 2 đến 3 ngày một tuần", "Luôn luôn ON cảm biến", "Luôn luôn ON mà không có một cảm biến", "" ];			D6.scenario.defSelectData['sel293']= [ '-1', '2', '6', '15', '30', '50', '100' ];
		D6.scenario.defSelectValue["sel294"]= [ "Vui lòng chọn", "vâng", "không", "Không biết", "" ];			D6.scenario.defSelectData['sel294']= [ '-1', '1', '2', '3' ];
		D6.scenario.defSelectValue["sel295"]= [ "Vui lòng chọn", "dầu lửa", "điện", "Điện (bơm nhiệt)", "khí", "Đồng phát (gas)", "Đồng phát (dầu hỏa)", "cấp nhiệt huyện", "" ];			D6.scenario.defSelectData['sel295']= [ '-1', '1', '2', '3', '4', '5', '6' ];
		D6.scenario.defSelectValue["sel401"]= [ "Vui lòng chọn", "Không sử dụng", "Tháng 1-3 lần", "Một hoặc hai lần một tuần", "Một lần mỗi hai ngày", "mỗi ngày", "" ];			D6.scenario.defSelectData['sel401']= [ '-1', '5', '4', '3', '2', '1' ];
		D6.scenario.defSelectValue["sel402"]= [ "Vui lòng chọn", "Điện (bơm nhiệt)", "điện", "khí", "Không biết", "Không có", "" ];			D6.scenario.defSelectData['sel402']= [ '-1', '1', '2', '3', '4', '5' ];
		D6.scenario.defSelectValue["sel403"]= [ "Vui lòng chọn", "Cũng biến máy giặt nhiều lần mỗi ngày", "Rẽ hai lần về máy giặt mỗi ngày", "Rẽ lần máy giặt mỗi ngày", "Bật máy giặt Khi giặt quần áo bẩn tích lũy", "Không biết", "" ];			D6.scenario.defSelectData['sel403']= [ '-1', '4', '2', '1', '0.5', '1' ];
		D6.scenario.defSelectValue["sel411"]= [ "Vui lòng chọn", "Nó được sử dụng trong hầu hết sức mạnh", "Nó được biết đến bởi khác nhau tùy thuộc vào vị trí", "Chúng tôi đang sử dụng cơ bản, với yếu", "Không có bộ", "Không biết", "" ];			D6.scenario.defSelectData['sel411']= [ '-1', '1', '2', '3', '4', '5', '6' ];
		D6.scenario.defSelectValue["sel412"]= [ "Vui lòng chọn", "hầu như không sử dụng", "5 phút", "10 phút", "15 phút", "30 phút", "1 giờ", "Sử dụng một máy hút bụi robot", "Không biết", "" ];			D6.scenario.defSelectData['sel412']= [ '-1', '0', '5', '10', '15', '30', '60', '11', '12' ];
		D6.scenario.defSelectValue["sel501"]= [ "Vui lòng chọn", "bóng đèn sợi đốt", "đèn ni ong", "LED", "" ];			D6.scenario.defSelectData['sel501']= [ '-1', '1', '2', '3' ];
		D6.scenario.defSelectValue["sel502"]= [ "Vui lòng chọn", "đặt tất cả", "Ngoài ra còn có các vị trí của Tsukeppanashi", "Nó gần như bị xóa", "Nó tắt", "" ];			D6.scenario.defSelectData['sel502']= [ '-1', '10', '6', '2', '0' ];
		D6.scenario.defSelectValue["sel511"]= [ "Vui lòng chọn", "hành lang", "Monto", "hành lang", "nhà vệ sinh", "phòng thay đồ", "bồn tắm", "phòng khách", "" ];			D6.scenario.defSelectData['sel511']= [ '-1', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10' ];
		D6.scenario.defSelectValue["sel512"]= [ "Vui lòng chọn", "bóng đèn sợi đốt", "bóng đèn huỳnh quang", "đèn ni ong", "đèn huỳnh quang dạng ống", "LED", "Sensor Viết", "" ];			D6.scenario.defSelectData['sel512']= [ '-1', '1', '2', '3', '4', '5', '6' ];
		D6.scenario.defSelectValue["sel513"]= [ "Vui lòng chọn", "5W", "10W", "15W", "20W", "30W", "40W", "60W", "80W", "100W", "" ];			D6.scenario.defSelectData['sel513']= [ '-1', '5', '10', '15', '20', '30', '40', '60', '80', '100' ];
		D6.scenario.defSelectValue["sel514"]= [ "Vui lòng chọn", "1 bóng-book", "2 bóng - Đây", "3 quả bóng - đây", "4 quả bóng, điều này", "6 quả bóng - đây", "8-ball, đây", "10 quả bóng - đây", "15 bi - điều này", "20 bi - điều này", "30 quả bóng - đây", "" ];			D6.scenario.defSelectData['sel514']= [ '-1', '1', '2', '3', '4', '6', '8', '10', '15', '20', '30' ];
		D6.scenario.defSelectValue["sel515"]= [ "Vui lòng chọn", "Không sử dụng", "1 giờ", "2 giờ", "3 giờ", "Bốn giờ", "6 giờ", "8 giờ", "12 giờ", "16 giờ", "24 giờ", "" ];			D6.scenario.defSelectData['sel515']= [ '-1', '0', '1', '2', '3', '4', '6', '8', '12', '16', '24' ];
		D6.scenario.defSelectValue["sel601"]= [ "Vui lòng chọn", "Không sử dụng", "2 giờ", "Bốn giờ", "6 giờ", "8 giờ", "12 giờ", "16 giờ", "24 giờ", "32 giờ", "40 giờ", "" ];			D6.scenario.defSelectData['sel601']= [ '-1', '0', '2', '4', '6', '8', '12', '16', '24', '32', '40' ];
		D6.scenario.defSelectValue["sel631"]= [ "Vui lòng chọn", "Không có", "Ít hơn 20 inch", "20-30 inch", "30-40 inch", "40-50 inch", "50-65 inch", "65 inch trở lên", "" ];			D6.scenario.defSelectData['sel631']= [ '-1', '0', '18', '25', '35', '45', '60', '70' ];
		D6.scenario.defSelectValue["sel632"]= [ "Vui lòng chọn", "Không có", "Chưa đầy một năm", "Chưa đầy 3 năm", "Ít hơn 5 năm", "Ít hơn 7 năm", "Ít hơn 10 năm", "Ít hơn 15 năm", "Ít hơn 20 năm", "Hơn 20 năm", "" ];			D6.scenario.defSelectData['sel632']= [ '-1', '0', '1', '2', '4', '6', '9', '13', '18', '25' ];
		D6.scenario.defSelectValue["sel633"]= [ "Vui lòng chọn", "Không sử dụng", "2 giờ", "Bốn giờ", "6 giờ", "8 giờ", "12 giờ", "16 giờ", "24 giờ", "" ];			D6.scenario.defSelectData['sel633']= [ '-1', '0', '2', '4', '6', '8', '12', '16', '24' ];
		D6.scenario.defSelectValue["sel701"]= [ "Vui lòng chọn", "Không có", "một", "hai", "3 đơn vị", "bốn", "năm", "" ];			D6.scenario.defSelectData['sel701']= [ '-1', '0', '1', '2', '3', '4', '5' ];
		D6.scenario.defSelectValue["sel711"]= [ "Vui lòng chọn", "Không có", "Chưa đầy một năm", "Chưa đầy 3 năm", "Ít hơn 5 năm", "Ít hơn 7 năm", "Ít hơn 10 năm", "Ít hơn 15 năm", "Ít hơn 20 năm", "Hơn 20 năm", "" ];			D6.scenario.defSelectData['sel711']= [ '-1', '0', '1', '2', '4', '6', '8', '12', '17', '25' ];
		D6.scenario.defSelectValue["sel712"]= [ "Vui lòng chọn", "Tủ lạnh-tủ đông", "Tủ đông (Stocker)", "" ];			D6.scenario.defSelectData['sel712']= [ '-1', '1', '2' ];
		D6.scenario.defSelectValue["sel713"]= [ "Vui lòng chọn", "Ít hơn 100L", "101-200 lít", "201-300 lít", "301-400 lít", "401-500 lít", "501 lít trở lên", "" ];			D6.scenario.defSelectData['sel713']= [ '-1', '80', '150', '250', '350', '450', '550' ];
		D6.scenario.defSelectValue["sel714"]= [ "Vui lòng chọn", "sức mạnh", "vừa", "yếu", "Không biết", "" ];			D6.scenario.defSelectData['sel714']= [ '-1', '1', '2', '3', '4' ];
		D6.scenario.defSelectValue["sel715"]= [ "Vui lòng chọn", "cẩn thận", "Không quá", "Chưa thể", "Không biết", "" ];			D6.scenario.defSelectData['sel715']= [ '-1', '1', '2', '3', '4' ];
		D6.scenario.defSelectValue["sel716"]= [ "Vui lòng chọn", "bạn có", "Chưa thể", "Không biết", "" ];			D6.scenario.defSelectData['sel716']= [ '-1', '1', '2', '3' ];
		D6.scenario.defSelectValue["sel801"]= [ "Vui lòng chọn", "khí", "Điện (như IH)", "Không biết", "" ];			D6.scenario.defSelectData['sel801']= [ '-1', '1', '2', '3' ];
		D6.scenario.defSelectValue["sel802"]= [ "Vui lòng chọn", "không", "Tuần 1 bữa ăn hoặc ít hơn", "2-3 bữa một tuần", "Một bữa ăn một ngày", "2 bữa một ngày", "3 bữa ăn mỗi ngày", "" ];			D6.scenario.defSelectData['sel802']= [ '-1', '0', '1', '2', '4', '7', '10' ];
		D6.scenario.defSelectValue["sel811"]= [ "Vui lòng chọn", "không", "Đó là khoảng 6 giờ", "Đó là khoảng 12 giờ", "Nó gần như là 24 giờ", "" ];			D6.scenario.defSelectData['sel811']= [ '-1', '0', '6', '12', '24' ];
		D6.scenario.defSelectValue["sel821"]= [ "Vui lòng chọn", "không", "Đó là khoảng 6 giờ", "Đó là khoảng 12 giờ", "Nó gần như là 24 giờ", "" ];			D6.scenario.defSelectData['sel821']= [ '-1', '0', '6', '12', '24' ];
		D6.scenario.defSelectValue["sel822"]= [ "Vui lòng chọn", "vâng", "không", "Không biết", "" ];			D6.scenario.defSelectData['sel822']= [ '-1', '1', '2', '3' ];
		D6.scenario.defSelectValue["sel901"]= [ "Vui lòng chọn", "Không có", "một", "hai", "3 đơn vị", "bốn", "Năm hoặc nhiều hơn", "" ];			D6.scenario.defSelectData['sel901']= [ '-1', '0', '1', '2', '3', '4', '5' ];
		D6.scenario.defSelectValue["sel902"]= [ "Vui lòng chọn", "Không có", "một", "hai", "3 đơn vị", "bốn", "Năm hoặc nhiều hơn", "" ];			D6.scenario.defSelectData['sel902']= [ '-1', '0', '1', '2', '3', '4', '5' ];
		D6.scenario.defSelectValue["sel911"]= [ "Vui lòng chọn", "minicar", "xe nhỏ", "Văn", "3 số", "xe điện", "xe đạp xe tay ga", "xe đạp lớn", "" ];			D6.scenario.defSelectData['sel911']= [ '-1', '1', '2', '3', '4', '5', '6', '7' ];
		D6.scenario.defSelectValue["sel912"]= [ "Vui lòng chọn", "6km / L hoặc ít hơn", "7-9km / L", "10-12km / L", "13-15km / L", "16-20km / L", "21-26km / L", "27-35km / L", "36km / L trở lên", "" ];			D6.scenario.defSelectData['sel912']= [ '-1', '6', '8', '11', '14', '18', '23', '30', '40' ];
		D6.scenario.defSelectValue[""]= [ "", "", "" ];			D6.scenario.defSelectData['']= [ '', '', '' ];
		D6.scenario.defSelectValue["sel914"]= [ "Vui lòng chọn", "vâng", "không", "Không biết", "" ];			D6.scenario.defSelectData['sel914']= [ '-1', '1', '2', '3' ];
		D6.scenario.defSelectValue[""]= [ "", "", "" ];			D6.scenario.defSelectData['']= [ '', '', '' ];
		D6.scenario.defSelectValue["sel922"]= [ "Vui lòng chọn", "mỗi ngày", "5 lần một tuần", "Hai đến ba lần mỗi tuần", "Mỗi tuần một lần", "Hai lần một tháng", "Mỗi tháng một lần", "Một lần mỗi hai tháng", "Năm 2-3 lần", "Mỗi năm một lần", "" ];			D6.scenario.defSelectData['sel922']= [ '-1', '365', '250', '120', '50', '25', '12', '6', '2', '1' ];
		D6.scenario.defSelectValue["sel923"]= [ "Vui lòng chọn", "1km", "2km", "3km", "5km", "10km", "20km", "30km", "50km", "100km", "200km", "400kmFALSE" ];			D6.scenario.defSelectData['sel923']= [ '-1', '1', '2', '3', '5', '10', '20', '30', '50', '100', '200', '400', '700' ];
		D6.scenario.defSelectValue["sel924"]= [ "Vui lòng chọn", "đơn vị đầu tiên", "đơn vị thứ hai", "xe thứ ba", "Bốn mắt", "năm mắt", "" ];			D6.scenario.defSelectData['sel924']= [ '-1', '1', '2', '3', '4', '5' ];
		D6.scenario.defSelectValue["sel931"]= [ "Vui lòng chọn", "Nó luôn luôn là", "đôi khi", "không", "" ];			D6.scenario.defSelectData['sel931']= [ '-1', '1', '2', '3' ];
		D6.scenario.defSelectValue["sel932"]= [ "Vui lòng chọn", "Nó luôn luôn là", "đôi khi", "không", "" ];			D6.scenario.defSelectData['sel932']= [ '-1', '1', '2', '3' ];
		D6.scenario.defSelectValue["sel933"]= [ "Vui lòng chọn", "Nó luôn luôn là", "đôi khi", "không", "" ];			D6.scenario.defSelectData['sel933']= [ '-1', '1', '2', '3' ];
		D6.scenario.defSelectValue["sel934"]= [ "Vui lòng chọn", "Nó luôn luôn là", "đôi khi", "không", "" ];			D6.scenario.defSelectData['sel934']= [ '-1', '1', '2', '3' ];
		D6.scenario.defSelectValue["sel935"]= [ "Vui lòng chọn", "Nó luôn luôn là", "đôi khi", "không", "" ];			D6.scenario.defSelectData['sel935']= [ '-1', '1', '2', '3' ];
		D6.scenario.defSelectValue["sel936"]= [ "Vui lòng chọn", "Nó luôn luôn là", "đôi khi", "không", "" ];			D6.scenario.defSelectData['sel936']= [ '-1', '1', '2', '3' ];
		D6.scenario.defSelectValue["sel937"]= [ "Vui lòng chọn", "Nó luôn luôn là", "đôi khi", "không", "" ];			D6.scenario.defSelectData['sel937']= [ '-1', '1', '2', '3' ];
		D6.scenario.defSelectValue["sel938"]= [ "Vui lòng chọn", "Nó luôn luôn là", "đôi khi", "không", "" ];			D6.scenario.defSelectData['sel938']= [ '-1', '1', '2', '3' ];
		D6.scenario.defSelectValue["sel939"]= [ "Vui lòng chọn", "Nó luôn luôn là", "đôi khi", "không", "" ];			D6.scenario.defSelectData['sel939']= [ '-1', '1', '2', '3' ];
		D6.scenario.defSelectValue["sel221"]= [ "Vui lòng chọn", "rất tốt", "thông thường", "Không thực sự tốt", "Không biết", "" ];			D6.scenario.defSelectData['sel221']= [ '-1', '1', '2', '3', '4' ];
		D6.scenario.defSelectValue["sel121"]= [ "Vui lòng chọn", "rất tốt", "thông thường", "Không thực sự tốt", "Không biết", "" ];			D6.scenario.defSelectData['sel121']= [ '-1', '1', '2', '3', '4' ];
		D6.scenario.defSelectValue["sel621"]= [ "Vui lòng chọn", "rất tốt", "thông thường", "Không thực sự tốt", "Không biết", "" ];			D6.scenario.defSelectData['sel621']= [ '-1', '1', '2', '3', '4' ];
		D6.scenario.defSelectValue["sel421"]= [ "Vui lòng chọn", "rất tốt", "thông thường", "Không thực sự tốt", "Không biết", "" ];			D6.scenario.defSelectData['sel421']= [ '-1', '1', '2', '3', '4' ];
		D6.scenario.defSelectValue["sel721"]= [ "Vui lòng chọn", "rất tốt", "thông thường", "Không thực sự tốt", "Không biết", "" ];			D6.scenario.defSelectData['sel721']= [ '-1', '1', '2', '3', '4' ];


		D6.scenario.defSelectValue["sel021"] = ["Hồ Chí Minh", "Hà Nội", "Đà Nẵng", "Hồ Chí Minh"];
		D6.scenario.defSelectData["sel021"] = ["-1", "1", "2", "3"];
	
};