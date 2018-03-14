﻿/*  2017/12/16  version 1.0
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
 
D6.accons = Object.assign( D6.accons, {
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

factorPrefTimeMonth : [
[ [ 0.69, 0.65, 0.6, 0.56, 0.5, 0.42, 0.38, 0.34, 0.33, 0.28, 0.23, 0.18],   //神戸
  [ 0.45, 0.42, 0.39, 0.36, 0.32, 0.28, 0.27, 0.65, 0.63, 0.55, 0.48, 0.39], 
  [ 0.53, 0.5, 0.46, 0.43, 0.38, 0.32, 0.31, 0.46, 0.44, 0.4, 0.34, 0.28], 
  [ 0.68, 0.63, 0.59, 0.55, 0.5, 0.41, 0.37, 0.29, 0.28, 0.24, 0.2, 0.16] ], 

[ [ 1.24, 1.22, 1.21, 1.18, 1.13, 0.94, 0.77, 0.06, 0.05, 0.03, 0.02, 0.02],   //札幌
  [ 1.14, 1.13, 1.1, 1.05, 0.98, 0.8, 0.67, 0.2, 0.17, 0.13, 0.1, 0.08], 
  [ 1.2, 1.19, 1.16, 1.13, 1.06, 0.88, 0.72, 0.1, 0.08, 0.05, 0.04, 0.03], 
  [ 1.24, 1.22, 1.21, 1.18, 1.13, 0.95, 0.79, 0.03, 0.02, 0.01, 0.01, 0.01] ], 
[ [ 1.14, 1.13, 1.09, 1.05, 0.98, 0.81, 0.67, 0.11, 0.09, 0.06, 0.04, 0.03],   //青森
  [ 0.99, 0.96, 0.93, 0.87, 0.8, 0.65, 0.55, 0.26, 0.23, 0.18, 0.14, 0.11], 
  [ 1.08, 1.05, 1.02, 0.97, 0.9, 0.73, 0.61, 0.16, 0.14, 0.09, 0.07, 0.05], 
  [ 1.15, 1.12, 1.09, 1.06, 1, 0.84, 0.69, 0.06, 0.05, 0.03, 0.02, 0.01] ], 
[ [ 1.2, 1.18, 1.16, 1.12, 1.05, 0.89, 0.73, 0.09, 0.07, 0.05, 0.03, 0.03],   //盛岡
  [ 0.98, 0.95, 0.91, 0.85, 0.78, 0.63, 0.55, 0.35, 0.31, 0.24, 0.19, 0.15], 
  [ 1.11, 1.08, 1.04, 0.98, 0.91, 0.75, 0.63, 0.2, 0.18, 0.13, 0.1, 0.08], 
  [ 1.2, 1.17, 1.15, 1.11, 1.05, 0.9, 0.74, 0.04, 0.03, 0.02, 0.01, 0.01] ], 
[ [ 0.98, 0.95, 0.92, 0.87, 0.8, 0.66, 0.55, 0.15, 0.12, 0.09, 0.07, 0.05],   //仙台
  [ 0.69, 0.66, 0.63, 0.58, 0.53, 0.44, 0.39, 0.34, 0.3, 0.24, 0.2, 0.16], 
  [ 0.84, 0.79, 0.76, 0.71, 0.65, 0.53, 0.45, 0.19, 0.17, 0.13, 0.1, 0.08], 
  [ 0.97, 0.94, 0.91, 0.86, 0.8, 0.66, 0.54, 0.08, 0.07, 0.05, 0.04, 0.03] ], 
[ [ 1.06, 1.03, 1, 0.95, 0.89, 0.73, 0.61, 0.17, 0.14, 0.1, 0.07, 0.05],   //秋田
  [ 0.92, 0.89, 0.85, 0.79, 0.71, 0.58, 0.51, 0.41, 0.37, 0.29, 0.22, 0.18], 
  [ 0.98, 0.94, 0.91, 0.85, 0.78, 0.64, 0.54, 0.28, 0.25, 0.18, 0.14, 0.1], 
  [ 1.05, 1.01, 0.98, 0.94, 0.88, 0.73, 0.61, 0.11, 0.09, 0.06, 0.04, 0.03] ], 
[ [ 1.13, 1.11, 1.08, 1.02, 0.95, 0.79, 0.66, 0.15, 0.12, 0.09, 0.07, 0.05],   //山形
  [ 0.9, 0.87, 0.82, 0.75, 0.68, 0.56, 0.5, 0.54, 0.49, 0.39, 0.31, 0.26], 
  [ 1.01, 0.98, 0.94, 0.87, 0.79, 0.65, 0.55, 0.33, 0.29, 0.22, 0.18, 0.14], 
  [ 1.11, 1.09, 1.06, 1.01, 0.94, 0.79, 0.66, 0.09, 0.07, 0.05, 0.04, 0.03] ], 
[ [ 1.01, 0.98, 0.94, 0.89, 0.82, 0.68, 0.57, 0.17, 0.15, 0.11, 0.09, 0.07],   //福島
  [ 0.69, 0.67, 0.63, 0.58, 0.52, 0.44, 0.4, 0.56, 0.52, 0.42, 0.35, 0.29], 
  [ 0.81, 0.78, 0.74, 0.69, 0.63, 0.51, 0.45, 0.35, 0.31, 0.25, 0.2, 0.16], 
  [ 0.97, 0.95, 0.91, 0.86, 0.8, 0.66, 0.55, 0.12, 0.1, 0.07, 0.06, 0.04] ], 
[ [ 0.98, 0.96, 0.95, 0.89, 0.81, 0.66, 0.55, 0.18, 0.16, 0.13, 0.11, 0.08],   //水戸
  [ 0.44, 0.42, 0.41, 0.38, 0.35, 0.3, 0.28, 0.47, 0.43, 0.37, 0.32, 0.26], 
  [ 0.61, 0.59, 0.58, 0.54, 0.49, 0.41, 0.36, 0.26, 0.24, 0.19, 0.16, 0.13], 
  [ 0.95, 0.92, 0.91, 0.86, 0.79, 0.65, 0.54, 0.1, 0.09, 0.07, 0.06, 0.04] ], 
[ [ 1.02, 1, 0.97, 0.91, 0.83, 0.67, 0.56, 0.18, 0.16, 0.13, 0.1, 0.08],   //宇都宮
  [ 0.48, 0.46, 0.44, 0.41, 0.37, 0.32, 0.3, 0.54, 0.5, 0.44, 0.38, 0.31], 
  [ 0.64, 0.62, 0.6, 0.55, 0.5, 0.42, 0.37, 0.32, 0.31, 0.27, 0.22, 0.18], 
  [ 0.97, 0.95, 0.93, 0.88, 0.81, 0.65, 0.54, 0.11, 0.1, 0.08, 0.06, 0.05] ], 
[ [ 0.9, 0.88, 0.84, 0.78, 0.71, 0.58, 0.49, 0.22, 0.2, 0.17, 0.13, 0.1],   //前橋
  [ 0.45, 0.44, 0.41, 0.38, 0.34, 0.3, 0.29, 0.63, 0.59, 0.52, 0.44, 0.37], 
  [ 0.63, 0.62, 0.59, 0.55, 0.5, 0.41, 0.37, 0.44, 0.42, 0.38, 0.31, 0.26], 
  [ 0.89, 0.86, 0.83, 0.78, 0.71, 0.58, 0.49, 0.15, 0.14, 0.12, 0.09, 0.07] ], 
[ [ 0.91, 0.91, 0.88, 0.82, 0.74, 0.6, 0.51, 0.23, 0.21, 0.18, 0.14, 0.11],   //さいたま
  [ 0.44, 0.43, 0.4, 0.37, 0.34, 0.3, 0.28, 0.63, 0.59, 0.53, 0.45, 0.38], 
  [ 0.55, 0.56, 0.53, 0.49, 0.44, 0.37, 0.34, 0.42, 0.4, 0.36, 0.3, 0.24], 
  [ 0.86, 0.85, 0.82, 0.77, 0.7, 0.57, 0.48, 0.16, 0.15, 0.13, 0.1, 0.08] ], 
[ [ 0.68, 0.66, 0.64, 0.59, 0.54, 0.44, 0.39, 0.27, 0.24, 0.21, 0.18, 0.14],   //千葉
  [ 0.39, 0.37, 0.35, 0.33, 0.3, 0.26, 0.25, 0.53, 0.49, 0.44, 0.38, 0.31], 
  [ 0.45, 0.43, 0.42, 0.39, 0.35, 0.3, 0.28, 0.36, 0.33, 0.29, 0.25, 0.2], 
  [ 0.63, 0.61, 0.59, 0.55, 0.5, 0.41, 0.36, 0.21, 0.19, 0.16, 0.13, 0.1] ], 
[ [ 0.64, 0.63, 0.6, 0.55, 0.5, 0.41, 0.37, 0.31, 0.28, 0.25, 0.21, 0.16],   //東京
  [ 0.39, 0.37, 0.35, 0.32, 0.29, 0.26, 0.25, 0.62, 0.57, 0.52, 0.45, 0.37], 
  [ 0.42, 0.4, 0.39, 0.36, 0.33, 0.28, 0.26, 0.43, 0.4, 0.37, 0.32, 0.26], 
  [ 0.58, 0.56, 0.54, 0.5, 0.46, 0.38, 0.34, 0.25, 0.23, 0.21, 0.17, 0.13] ], 
[ [ 0.67, 0.65, 0.62, 0.58, 0.53, 0.43, 0.38, 0.26, 0.24, 0.2, 0.17, 0.13],   //横浜
  [ 0.39, 0.37, 0.36, 0.33, 0.3, 0.27, 0.25, 0.53, 0.5, 0.44, 0.38, 0.31], 
  [ 0.45, 0.43, 0.41, 0.38, 0.35, 0.3, 0.27, 0.33, 0.31, 0.28, 0.23, 0.19], 
  [ 0.61, 0.59, 0.57, 0.53, 0.48, 0.4, 0.35, 0.2, 0.18, 0.16, 0.13, 0.1] ], 
[ [ 0.84, 0.83, 0.79, 0.74, 0.68, 0.56, 0.48, 0.29, 0.25, 0.19, 0.14, 0.11],   //新潟
  [ 0.72, 0.67, 0.63, 0.58, 0.52, 0.43, 0.4, 0.6, 0.53, 0.43, 0.34, 0.27], 
  [ 0.77, 0.72, 0.68, 0.63, 0.58, 0.47, 0.42, 0.4, 0.35, 0.27, 0.21, 0.16], 
  [ 0.83, 0.81, 0.77, 0.73, 0.67, 0.56, 0.47, 0.22, 0.19, 0.14, 0.1, 0.08] ], 
[ [ 0.9, 0.86, 0.82, 0.76, 0.69, 0.57, 0.49, 0.34, 0.29, 0.22, 0.17, 0.14],   //富山
  [ 0.68, 0.64, 0.59, 0.54, 0.48, 0.41, 0.38, 0.66, 0.59, 0.48, 0.39, 0.31], 
  [ 0.78, 0.74, 0.69, 0.63, 0.57, 0.47, 0.42, 0.41, 0.36, 0.28, 0.23, 0.18], 
  [ 0.9, 0.85, 0.81, 0.76, 0.7, 0.58, 0.49, 0.22, 0.18, 0.13, 0.1, 0.08] ], 
[ [ 0.79, 0.76, 0.72, 0.67, 0.61, 0.5, 0.44, 0.33, 0.3, 0.23, 0.18, 0.14],   //金沢
  [ 0.64, 0.59, 0.54, 0.5, 0.44, 0.38, 0.35, 0.63, 0.58, 0.47, 0.39, 0.31], 
  [ 0.68, 0.64, 0.6, 0.56, 0.51, 0.42, 0.38, 0.45, 0.41, 0.33, 0.26, 0.21], 
  [ 0.78, 0.74, 0.7, 0.66, 0.61, 0.51, 0.43, 0.25, 0.22, 0.17, 0.13, 0.1] ], 
[ [ 0.88, 0.86, 0.81, 0.77, 0.7, 0.58, 0.5, 0.3, 0.27, 0.21, 0.16, 0.12],   //福井
  [ 0.66, 0.61, 0.57, 0.51, 0.46, 0.39, 0.37, 0.71, 0.66, 0.55, 0.46, 0.37], 
  [ 0.73, 0.68, 0.63, 0.58, 0.52, 0.43, 0.39, 0.48, 0.45, 0.37, 0.3, 0.24], 
  [ 0.85, 0.82, 0.78, 0.73, 0.67, 0.56, 0.48, 0.23, 0.21, 0.16, 0.12, 0.09] ], 
[ [ 1.07, 1.04, 0.99, 0.92, 0.83, 0.66, 0.56, 0.18, 0.16, 0.14, 0.11, 0.09],   //甲府
  [ 0.54, 0.51, 0.46, 0.42, 0.37, 0.33, 0.31, 0.67, 0.61, 0.57, 0.48, 0.41], 
  [ 0.63, 0.6, 0.55, 0.5, 0.45, 0.37, 0.34, 0.37, 0.35, 0.33, 0.28, 0.23], 
  [ 0.96, 0.92, 0.88, 0.81, 0.74, 0.6, 0.5, 0.15, 0.13, 0.11, 0.09, 0.07] ], 
[ [ 1.2, 1.18, 1.15, 1.1, 1.02, 0.84, 0.7, 0.14, 0.12, 0.09, 0.07, 0.05],   //長野
  [ 0.88, 0.84, 0.81, 0.74, 0.66, 0.54, 0.49, 0.57, 0.51, 0.43, 0.35, 0.29], 
  [ 0.99, 0.96, 0.93, 0.86, 0.79, 0.64, 0.55, 0.31, 0.26, 0.21, 0.16, 0.13], 
  [ 1.16, 1.14, 1.11, 1.06, 0.99, 0.82, 0.68, 0.09, 0.07, 0.05, 0.04, 0.03] ], 
[ [ 0.83, 0.8, 0.76, 0.71, 0.64, 0.52, 0.45, 0.31, 0.28, 0.24, 0.19, 0.15],   //岐阜
  [ 0.48, 0.45, 0.41, 0.38, 0.33, 0.29, 0.28, 0.73, 0.7, 0.63, 0.55, 0.46], 
  [ 0.59, 0.56, 0.52, 0.48, 0.43, 0.35, 0.33, 0.54, 0.5, 0.45, 0.38, 0.31], 
  [ 0.78, 0.75, 0.71, 0.66, 0.6, 0.49, 0.43, 0.27, 0.25, 0.21, 0.17, 0.13] ], 
[ [ 0.67, 0.63, 0.6, 0.56, 0.5, 0.41, 0.37, 0.27, 0.25, 0.23, 0.19, 0.15],   //静岡
  [ 0.33, 0.3, 0.28, 0.26, 0.23, 0.21, 0.2, 0.52, 0.5, 0.47, 0.42, 0.35], 
  [ 0.42, 0.4, 0.37, 0.35, 0.31, 0.27, 0.25, 0.37, 0.35, 0.33, 0.29, 0.23], 
  [ 0.64, 0.6, 0.57, 0.53, 0.48, 0.4, 0.35, 0.2, 0.19, 0.17, 0.14, 0.11] ], 
[ [ 0.83, 0.79, 0.75, 0.7, 0.63, 0.51, 0.45, 0.3, 0.28, 0.24, 0.2, 0.15],   //名古屋
  [ 0.46, 0.44, 0.41, 0.37, 0.33, 0.29, 0.28, 0.7, 0.67, 0.61, 0.53, 0.44], 
  [ 0.58, 0.55, 0.51, 0.47, 0.42, 0.35, 0.33, 0.48, 0.46, 0.41, 0.35, 0.28], 
  [ 0.77, 0.74, 0.7, 0.65, 0.6, 0.48, 0.42, 0.24, 0.23, 0.19, 0.15, 0.12] ], 
[ [ 0.69, 0.66, 0.63, 0.59, 0.54, 0.44, 0.39, 0.32, 0.29, 0.25, 0.2, 0.16],   //津
  [ 0.43, 0.41, 0.39, 0.36, 0.32, 0.27, 0.26, 0.61, 0.57, 0.51, 0.44, 0.36], 
  [ 0.53, 0.5, 0.47, 0.44, 0.39, 0.33, 0.31, 0.5, 0.46, 0.42, 0.36, 0.29], 
  [ 0.68, 0.66, 0.62, 0.58, 0.53, 0.43, 0.38, 0.27, 0.25, 0.22, 0.18, 0.14] ], 
[ [ 0.84, 0.8, 0.77, 0.72, 0.66, 0.54, 0.46, 0.28, 0.25, 0.2, 0.16, 0.12],   //彦根
  [ 0.58, 0.56, 0.53, 0.49, 0.44, 0.36, 0.34, 0.62, 0.58, 0.5, 0.42, 0.33], 
  [ 0.64, 0.62, 0.58, 0.54, 0.49, 0.4, 0.36, 0.46, 0.43, 0.36, 0.3, 0.24], 
  [ 0.79, 0.77, 0.73, 0.68, 0.63, 0.52, 0.44, 0.23, 0.21, 0.16, 0.13, 0.1] ], 
[ [ 0.8, 0.77, 0.73, 0.68, 0.62, 0.51, 0.45, 0.31, 0.29, 0.24, 0.2, 0.15],   //京都
  [ 0.47, 0.45, 0.41, 0.38, 0.34, 0.3, 0.29, 0.76, 0.73, 0.65, 0.57, 0.48], 
  [ 0.56, 0.53, 0.5, 0.46, 0.41, 0.35, 0.33, 0.58, 0.55, 0.49, 0.42, 0.35], 
  [ 0.75, 0.72, 0.68, 0.64, 0.58, 0.48, 0.42, 0.27, 0.26, 0.21, 0.17, 0.13] ], 
[ [ 0.66, 0.62, 0.59, 0.55, 0.5, 0.41, 0.37, 0.39, 0.36, 0.31, 0.26, 0.2],   //大阪
  [ 0.43, 0.39, 0.37, 0.34, 0.3, 0.27, 0.26, 0.79, 0.75, 0.67, 0.59, 0.49], 
  [ 0.47, 0.45, 0.42, 0.39, 0.35, 0.3, 0.29, 0.57, 0.55, 0.49, 0.43, 0.35], 
  [ 0.62, 0.58, 0.55, 0.51, 0.47, 0.39, 0.35, 0.34, 0.32, 0.27, 0.23, 0.18] ], 
[ [ 0.69, 0.65, 0.6, 0.56, 0.5, 0.42, 0.38, 0.34, 0.33, 0.28, 0.23, 0.18],   //神戸
  [ 0.45, 0.42, 0.39, 0.36, 0.32, 0.28, 0.27, 0.65, 0.63, 0.55, 0.48, 0.39], 
  [ 0.53, 0.5, 0.46, 0.43, 0.38, 0.32, 0.31, 0.46, 0.44, 0.4, 0.34, 0.28], 
  [ 0.68, 0.63, 0.59, 0.55, 0.5, 0.41, 0.37, 0.29, 0.28, 0.24, 0.2, 0.16] ], 
[ [ 0.86, 0.83, 0.79, 0.75, 0.69, 0.57, 0.49, 0.24, 0.23, 0.19, 0.15, 0.12],   //奈良
  [ 0.49, 0.46, 0.43, 0.39, 0.35, 0.31, 0.29, 0.7, 0.67, 0.59, 0.5, 0.42], 
  [ 0.63, 0.6, 0.55, 0.52, 0.47, 0.39, 0.36, 0.45, 0.43, 0.38, 0.31, 0.26], 
  [ 0.84, 0.81, 0.78, 0.73, 0.68, 0.56, 0.48, 0.16, 0.14, 0.12, 0.09, 0.07] ], 
[ [ 0.7, 0.66, 0.63, 0.58, 0.53, 0.44, 0.39, 0.32, 0.31, 0.26, 0.22, 0.17],   //和歌山
  [ 0.43, 0.4, 0.36, 0.33, 0.29, 0.26, 0.26, 0.68, 0.65, 0.59, 0.52, 0.43], 
  [ 0.48, 0.45, 0.41, 0.38, 0.34, 0.29, 0.28, 0.47, 0.45, 0.41, 0.36, 0.3], 
  [ 0.65, 0.62, 0.58, 0.54, 0.49, 0.41, 0.36, 0.29, 0.27, 0.24, 0.2, 0.16] ], 
[ [ 0.82, 0.78, 0.74, 0.68, 0.63, 0.52, 0.46, 0.31, 0.27, 0.22, 0.17, 0.13],   //鳥取
  [ 0.57, 0.53, 0.49, 0.44, 0.39, 0.34, 0.33, 0.7, 0.66, 0.55, 0.46, 0.38], 
  [ 0.66, 0.62, 0.58, 0.53, 0.48, 0.4, 0.36, 0.45, 0.42, 0.34, 0.28, 0.22], 
  [ 0.81, 0.78, 0.72, 0.68, 0.63, 0.53, 0.45, 0.21, 0.19, 0.14, 0.11, 0.09] ], 
[ [ 0.79, 0.75, 0.7, 0.65, 0.6, 0.5, 0.43, 0.3, 0.27, 0.21, 0.16, 0.13],   //松江
  [ 0.56, 0.51, 0.47, 0.43, 0.38, 0.33, 0.31, 0.63, 0.58, 0.48, 0.4, 0.32], 
  [ 0.64, 0.6, 0.55, 0.51, 0.46, 0.38, 0.34, 0.38, 0.35, 0.29, 0.23, 0.18], 
  [ 0.76, 0.73, 0.68, 0.63, 0.59, 0.49, 0.42, 0.21, 0.19, 0.15, 0.11, 0.09] ], 
[ [ 0.83, 0.78, 0.74, 0.69, 0.63, 0.52, 0.45, 0.32, 0.3, 0.25, 0.2, 0.15],   //岡山
  [ 0.44, 0.42, 0.39, 0.35, 0.32, 0.28, 0.27, 0.76, 0.71, 0.63, 0.54, 0.45], 
  [ 0.51, 0.49, 0.45, 0.41, 0.37, 0.31, 0.3, 0.62, 0.58, 0.52, 0.44, 0.36], 
  [ 0.75, 0.71, 0.66, 0.62, 0.56, 0.46, 0.41, 0.31, 0.29, 0.24, 0.2, 0.15] ], 
[ [ 0.79, 0.74, 0.71, 0.66, 0.6, 0.5, 0.43, 0.3, 0.28, 0.23, 0.19, 0.14],   //広島
  [ 0.44, 0.41, 0.38, 0.35, 0.31, 0.27, 0.26, 0.71, 0.67, 0.59, 0.51, 0.43], 
  [ 0.5, 0.47, 0.43, 0.39, 0.35, 0.3, 0.29, 0.57, 0.54, 0.48, 0.41, 0.34], 
  [ 0.72, 0.68, 0.64, 0.59, 0.54, 0.45, 0.39, 0.3, 0.29, 0.24, 0.2, 0.15] ], 
[ [ 0.86, 0.81, 0.78, 0.74, 0.67, 0.56, 0.48, 0.25, 0.23, 0.19, 0.15, 0.12],   //山口
  [ 0.47, 0.44, 0.4, 0.36, 0.32, 0.28, 0.27, 0.68, 0.64, 0.56, 0.48, 0.41], 
  [ 0.58, 0.54, 0.49, 0.45, 0.4, 0.34, 0.32, 0.48, 0.45, 0.39, 0.33, 0.27], 
  [ 0.81, 0.77, 0.73, 0.68, 0.62, 0.52, 0.45, 0.2, 0.2, 0.16, 0.12, 0.1] ], 
[ [ 0.68, 0.63, 0.59, 0.55, 0.5, 0.41, 0.37, 0.31, 0.29, 0.25, 0.21, 0.16],   //徳島
  [ 0.41, 0.38, 0.35, 0.32, 0.29, 0.26, 0.25, 0.65, 0.62, 0.55, 0.47, 0.39], 
  [ 0.49, 0.45, 0.42, 0.39, 0.35, 0.3, 0.28, 0.48, 0.46, 0.41, 0.35, 0.28], 
  [ 0.64, 0.61, 0.57, 0.53, 0.48, 0.4, 0.35, 0.26, 0.25, 0.22, 0.18, 0.14] ], 
[ [ 0.71, 0.67, 0.64, 0.6, 0.55, 0.45, 0.4, 0.34, 0.31, 0.27, 0.22, 0.17],   //高松
  [ 0.42, 0.39, 0.36, 0.33, 0.29, 0.26, 0.25, 0.72, 0.68, 0.61, 0.53, 0.44], 
  [ 0.5, 0.47, 0.43, 0.4, 0.36, 0.31, 0.29, 0.6, 0.57, 0.5, 0.43, 0.35], 
  [ 0.68, 0.65, 0.61, 0.57, 0.52, 0.43, 0.38, 0.29, 0.28, 0.23, 0.19, 0.15] ], 
[ [ 0.69, 0.65, 0.61, 0.56, 0.51, 0.43, 0.38, 0.31, 0.29, 0.25, 0.21, 0.16],   //松山
  [ 0.42, 0.38, 0.35, 0.32, 0.28, 0.25, 0.24, 0.69, 0.64, 0.58, 0.51, 0.42], 
  [ 0.48, 0.45, 0.41, 0.38, 0.34, 0.29, 0.28, 0.53, 0.5, 0.45, 0.38, 0.31], 
  [ 0.66, 0.62, 0.58, 0.54, 0.5, 0.41, 0.36, 0.26, 0.24, 0.21, 0.17, 0.13] ], 
[ [ 0.75, 0.71, 0.66, 0.6, 0.54, 0.45, 0.4, 0.28, 0.27, 0.24, 0.2, 0.16],   //高知
  [ 0.33, 0.3, 0.27, 0.24, 0.21, 0.21, 0.2, 0.62, 0.61, 0.56, 0.5, 0.43], 
  [ 0.43, 0.41, 0.37, 0.34, 0.3, 0.26, 0.26, 0.42, 0.41, 0.38, 0.34, 0.28], 
  [ 0.69, 0.65, 0.6, 0.55, 0.5, 0.42, 0.37, 0.23, 0.22, 0.19, 0.16, 0.12] ], 
[ [ 0.61, 0.56, 0.52, 0.49, 0.44, 0.37, 0.33, 0.34, 0.32, 0.27, 0.23, 0.18],   //福岡
  [ 0.43, 0.39, 0.35, 0.31, 0.28, 0.25, 0.24, 0.68, 0.64, 0.56, 0.48, 0.41], 
  [ 0.46, 0.42, 0.38, 0.35, 0.32, 0.27, 0.26, 0.51, 0.47, 0.41, 0.35, 0.28], 
  [ 0.57, 0.53, 0.49, 0.46, 0.42, 0.35, 0.31, 0.32, 0.3, 0.25, 0.21, 0.16] ], 
[ [ 0.76, 0.72, 0.68, 0.63, 0.57, 0.47, 0.42, 0.28, 0.27, 0.22, 0.18, 0.14],   //佐賀
  [ 0.44, 0.4, 0.36, 0.32, 0.28, 0.26, 0.25, 0.72, 0.69, 0.59, 0.52, 0.45], 
  [ 0.49, 0.45, 0.41, 0.37, 0.33, 0.29, 0.28, 0.57, 0.53, 0.46, 0.39, 0.33], 
  [ 0.7, 0.66, 0.62, 0.57, 0.52, 0.43, 0.38, 0.26, 0.25, 0.21, 0.17, 0.13] ], 
[ [ 0.58, 0.54, 0.5, 0.47, 0.42, 0.36, 0.32, 0.31, 0.3, 0.26, 0.21, 0.17],   //長崎
  [ 0.4, 0.37, 0.32, 0.29, 0.26, 0.24, 0.23, 0.6, 0.59, 0.51, 0.45, 0.38], 
  [ 0.45, 0.41, 0.37, 0.34, 0.3, 0.26, 0.25, 0.47, 0.45, 0.4, 0.34, 0.28], 
  [ 0.56, 0.52, 0.48, 0.44, 0.4, 0.34, 0.31, 0.29, 0.28, 0.24, 0.2, 0.16] ], 
[ [ 0.79, 0.75, 0.7, 0.65, 0.58, 0.48, 0.43, 0.3, 0.29, 0.24, 0.2, 0.16],   //熊本
  [ 0.41, 0.38, 0.33, 0.3, 0.26, 0.25, 0.24, 0.76, 0.73, 0.64, 0.57, 0.49], 
  [ 0.48, 0.44, 0.39, 0.35, 0.31, 0.28, 0.27, 0.54, 0.53, 0.47, 0.42, 0.35], 
  [ 0.71, 0.66, 0.62, 0.57, 0.52, 0.43, 0.39, 0.26, 0.26, 0.23, 0.19, 0.15] ], 
[ [ 0.68, 0.65, 0.61, 0.57, 0.52, 0.43, 0.38, 0.25, 0.24, 0.21, 0.17, 0.14],   //大分
  [ 0.38, 0.35, 0.32, 0.29, 0.26, 0.24, 0.23, 0.64, 0.6, 0.54, 0.47, 0.39], 
  [ 0.45, 0.42, 0.38, 0.35, 0.32, 0.27, 0.26, 0.46, 0.44, 0.39, 0.33, 0.27], 
  [ 0.64, 0.61, 0.56, 0.53, 0.48, 0.4, 0.35, 0.22, 0.22, 0.19, 0.15, 0.12] ], 
[ [ 0.64, 0.61, 0.57, 0.52, 0.47, 0.4, 0.37, 0.29, 0.28, 0.26, 0.22, 0.18],   //宮崎
  [ 0.29, 0.26, 0.23, 0.2, 0.18, 0.18, 0.18, 0.62, 0.61, 0.58, 0.52, 0.44], 
  [ 0.36, 0.33, 0.3, 0.27, 0.24, 0.23, 0.22, 0.46, 0.45, 0.43, 0.38, 0.32], 
  [ 0.58, 0.54, 0.51, 0.47, 0.42, 0.36, 0.33, 0.24, 0.24, 0.22, 0.19, 0.15] ], 
[ [ 0.54, 0.51, 0.46, 0.42, 0.37, 0.33, 0.31, 0.36, 0.34, 0.31, 0.28, 0.22],   //鹿児島
  [ 0.31, 0.28, 0.23, 0.2, 0.18, 0.19, 0.19, 0.69, 0.66, 0.61, 0.56, 0.48], 
  [ 0.36, 0.33, 0.29, 0.26, 0.22, 0.21, 0.21, 0.53, 0.51, 0.48, 0.44, 0.37], 
  [ 0.52, 0.48, 0.43, 0.39, 0.35, 0.31, 0.29, 0.33, 0.32, 0.29, 0.26, 0.21] ], 
[ [ 0.11, 0.07, 0.06, 0.05, 0.04, 0.08, 0.08, 0.39, 0.38, 0.38, 0.36, 0.33],   //那覇
  [ 0.08, 0.03, 0.02, 0.02, 0.02, 0.06, 0.06, 0.61, 0.59, 0.58, 0.56, 0.51], 
  [ 0.09, 0.05, 0.03, 0.03, 0.02, 0.06, 0.06, 0.46, 0.45, 0.44, 0.43, 0.39], 
  [ 0.11, 0.07, 0.06, 0.05, 0.04, 0.08, 0.08, 0.35, 0.35, 0.34, 0.33, 0.3] ] ],
  
	getArray : function( prefParam ) {
		var ret;
		var pref = prefParam;
		if ( pref>47 || pref <0 ) {
			pref = 0;
		}
		ret = this.factorPrefTimeMonth[pref];

		return ret;
	}

});

 