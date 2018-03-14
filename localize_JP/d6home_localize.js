﻿/* 2017/12/16  version 1.0
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
 * 								2017/12/16 ver.1.0 set functions
 * 								2018/03/14 			global setting fix
 * 
 * 
 */

// D6.scenario.areafix
// called by diagnosis.js  just after create scenario
D6.scenario.areafix = function() {

	// prefecture definition ----------------------------------------------------
	D6.scenario.defSelectValue['sel021'] = [ "選んで下さい", "北海道", "青森", "岩手", "宮城", "秋田", "山形", "福島", "茨城", "栃木", "群馬", "埼玉", "千葉", "東京", "神奈川", "新潟", "富山", "石川", "福井", "山梨", "長野", "岐阜",  "静岡", "愛知", "三重", "滋賀", "京都", "大阪", "兵庫", "奈良", "和歌山", "鳥取", "島根", "岡山", "広島", "山口", "徳島", "香川", "愛媛", "高知", "福岡", "佐賀", "長崎", "熊本", "大分", "宮崎", "鹿児島", "沖縄" ];
	D6.scenario.defSelectData['sel021']= [ '-1', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47' ]; 
	D6.scenario.defSelectValue['sel022'] = [ "選んで下さい", "北部", "南部"];
	D6.scenario.defSelectData['sel022'] = [ "-1", "1", "2"];
	
	//easy input
	D6.scenario.defEasyQues[0].title = "簡易入力";
	D6.scenario.defEasyQues[1].title = "行動チェック入力";

	//cons definition
	D6.consAC.title = "部屋空調";
	D6.consAC.countCall = "部屋目";

	D6.consACcool.title = "部屋冷房";
	D6.consACcool.addable = "冷暖房する部屋";
	D6.consACcool.countCall = "部屋目";
	D6.consACcool.inputGuide = "部屋ごとの冷房の使い方について";

	D6.consACheat.title = "部屋暖房";
	D6.consACheat.addable = "冷暖房する部屋";
	D6.consACheat.countCall = "部屋目";
	D6.consACheat.inputGuide = "部屋ごとの暖房の使い方について";

	D6.consCKcook.title = "調理";
	D6.consCKcook.inputGuide = "コンロを中心とした調理の使い方について";

	D6.consCKpot.title = "保温";
	D6.consCKpot.inputGuide = "ポットなど保温器具の使い方について";

	D6.consCKrice.title = "炊飯";
	D6.consCKrice.inputGuide = "炊飯の使い方について";

	D6.consCKsum.title = "調理";
	D6.consCKsum.inputGuide = "調理関連の使い方について";

	D6.consCOsum.title = "冷房";
	D6.consCOsum.inputGuide = "家全体での冷房の使い方について";

	D6.consCR.title = "車";
	D6.consCR.addable = "車";
	D6.consCR.countCall = "台目";
	D6.consCR.inputGuide = "保有する車ごとの性能・使い方について";

	D6.consCRsum.title = "車";
	D6.consCRsum.inputGuide = "車・バイクの使い方について";

	D6.consCRtrip.title = "移動";
	D6.consCRtrip.countCall = "ヶ所目";
	D6.consCRtrip.addable = "移動先";
	D6.consCRtrip.inputGuide = "移動先ごとの車等の使い方について";

	D6.consDRsum.title = "掃除洗濯";
	D6.consDRsum.inputGuide = "掃除機、洗濯機や衣類乾燥機の使い方について";

	D6.consEnergy.title = "全般エネルギー設定";
	D6.consEnergy.inputGuide = "家全体でのエネルギーの使い方や、1ヶ月あたりの光熱費について";

	D6.consHTcold.title = "寒冷地";
	D6.consHTcold.inputGuide = "寒冷地での暖房の使い方について";

	D6.consHTsum.title = "暖房";
	D6.consHTsum.inputGuide = "家全体での暖房の使い方について";

	D6.consHWdishwash.title = "食器洗い";
	D6.consHWdishwash.inputGuide = "食器洗いの使い方について";

	D6.consHWdresser.title = "洗面";
	D6.consHWdresser.inputGuide = "洗面でのお湯の使い方について";

	D6.consHWshower.title = "シャワー";
	D6.consHWshower.inputGuide = "シャワーの使い方について";

	D6.consHWsum.title = "給湯"; // consumption title for person
	D6.consHWsum.inputGuide = "給湯全般の使い方について"; // guidance in question

	D6.consHWtoilet.title = "トイレ";
	D6.consHWtoilet.inputGuide = "トイレの水や保温の使い方について";

	D6.consHWtub.title = "浴槽";
	D6.consHWtub.inputGuide = "浴槽のお湯の使い方について";

	D6.consLI.title = "照明";
	D6.consLI.addable = "照明する部屋";
	D6.consLI.countCall = "部屋目";
	D6.consLI.inputGuide = "個別部屋の照明の使い方について";

	D6.consLIsum.title = "照明";
	D6.consLIsum.inputGuide = "家全体での照明の使い方について";

	D6.consRF.title = "冷蔵庫";
	D6.consRF.addable = "冷蔵庫";
	D6.consRF.countCall = "台目";
	D6.consRF.inputGuide = "個別の冷蔵庫の使い方について";

	D6.consRFsum.title = "冷蔵庫";
	D6.consRFsum.inputGuide = "家全体での冷蔵庫の使い方について";

	D6.consSeason.titleList = ["","冬","春秋","夏"];	//season name
	D6.consSeason.inputGuide = "季節ごとの1ヶ月あたりの光熱費について。おおよその値でご記入ください。";

	D6.consTotal.title = "全体";
	D6.consTotal.inputGuide = "地域や家の基本情報について";

	D6.consTV.title = "テレビ";
	D6.consTV.addable = "テレビ";
	D6.consTV.countCall = "台目";
	D6.consTV.inputGuide = "個別のテレビの使い方について";

	D6.consTVsum.title = "テレビ";
	D6.consTVsum.inputGuide = "家全体のテレビの使い方について";



	D6.scenario.defMeasures['mTOsolar'] = { mid:"1",  name:"mTOsolar",  title:"太陽光発電を設置する",  easyness:"0.5",  refCons:"consTotal",  titleShort:"太陽光発電", level:"",  figNum:"25",  lifeTime:"20",  price:"400000",  roanShow:"",  standardType:"",  subsidy :"",  advice:"発電で余った電気は、電力会社に高く買い取ってもらうことができます。2017年度は1kWhあたり28円（東京電力、中部電力、関西電力の場合）、もしくは30円（それ以外の電力会社では高いですが、太陽光が余剰となったときに買い取りを停止する装置の設置が必要になります）。パネルを設置するだけで発電がされ、モーターなど稼働する部分がないために寿命が長く、維持管理も比較的少なくて済みます。交流に変換をする「コンディショナー」と呼ばれる装置は10年程度ごとに交換が必要になります。<br>　また、太陽光発電装置を導入すると、電気を売る様子が表示される装置が設置されます。電気をどれだけ発電できたのか、家庭でどれだけ消費したのかが表示され、機種によっては時間帯別に表示されるものもあります。販売できた金額も表示され、より多く販売するために自然と電気の使用量が減る効果も出てきます。",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mTOhems'] = { mid:"2",  name:"mTOhems",  title:"HEMS装置を設置する",  easyness:"1",  refCons:"consTotal",  titleShort:"HEMS装置", level:"",  figNum:"3",  lifeTime:"20",  price:"200000",  roanShow:"",  standardType:"",  subsidy :"",  advice:"HEMSとは、家庭で使っている電気を時間ごとに細かく把握したり、エアコンなどの家電製品を、省エネのために自動制御したりできるシステムです。電気の使い方などの特徴をチェックすると、どんなことをすれば省エネにつながるか、ポイントが見えてきます。表示されるグラフをもとに、いつ電気の消費が多いのか、何が原因なのか、考えてみてください。",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mTOsolarSmall'] = { mid:"3",  name:"mTOsolarSmall",  title:"ベランダに太陽光パネルを置く",  easyness:"2",  refCons:"consTotal",  titleShort:"ベランダ太陽光", level:"",  figNum:"25",  lifeTime:"10",  price:"50000",  roanShow:"",  standardType:"",  subsidy :"",  advice:"太陽光といっても屋根に設置するのではなく、持ち運びできる小型のパネルをベランダなどに置くもので、照明などちょっとした用途に使うことができます。既成品として販売されていることもありますが、自分で作ることもでき、材料は、インターネット通販とホームセンターで調達できます。<br>　晴れた日にはふとんを干すような感覚で、日光にあててバッテリーを充電させ、充電された分で活用することができます。曇りの日などは、電気を使うことができない場合があります。",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHWecocute'] = { mid:"101",  name:"mHWecocute",  title:"給湯器をエコキュートに買い換える",  easyness:"2",  refCons:"consHWsum",  titleShort:"エコキュート", level:"",  figNum:"8",  lifeTime:"10",  price:"400000",  roanShow:"1",  standardType:"電気温水器",  subsidy :"",  advice:"エコキュート（自然冷媒ヒートポンプ給湯器）は、エアコンの室外機のような装置がついており、外気の熱を利用してお湯を沸かすため、電気温水器より3倍以上効率がよくなります。貯湯槽にためたお湯を使い切るような、家族人数が多く、毎日欠かさずお風呂に入る家庭にはお勧めです。<br>　また、ふだんのお湯の使い方を考慮して控えめに沸かす設定をすると、さらに省エネにつながります。",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHWecojoze'] = { mid:"102",  name:"mHWecojoze",  title:"給湯器をエコジョーズ（潜熱回収型）に買い換える",  easyness:"2",  refCons:"consHWsum",  titleShort:"エコジョーズ", level:"",  figNum:"10",  lifeTime:"10",  price:"200000",  roanShow:"",  standardType:"既存型",  subsidy :"",  advice:"エコジョーズ（潜熱回収型）は、水蒸気として逃げていた熱も回収する仕組みのため、既存のガス給湯器に比べて効率が1割以上向上しています。既存のガス給湯器とほぼ同じ形ですが、熱回収をするために少し大型になっており、また熱を回収する際に発生する水を流すドレンもついています。ガス会社によってはエコジョーズ料金により、ガス代が割り引かれる場合もあります。",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHWecofeel'] = { mid:"103",  name:"mHWecofeel",  title:"給湯器をエコフィール（潜熱回収型）に買い換える",  easyness:"1",  refCons:"consHWsum",  titleShort:"エコフィール", level:"",  figNum:"10",  lifeTime:"10",  price:"250000",  roanShow:"",  standardType:"既存型",  subsidy :"",  advice:"エコフィール（潜熱回収型）は、水蒸気として逃げていた熱も回収する仕組みのため、効率が1割以上向上しています。既存の灯油ボイラーとほぼ同じ形ですが、熱回収をするために少し大型になっており、また熱を回収する際に発生する水を流すドレンもついています。灯油ではなくガスのタイプは「エコジョース」といいます。",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHWenefarm'] = { mid:"105",  name:"mHWenefarm",  title:"給湯器をエネファーム（燃料電池）に買い換える",  easyness:"0.5",  refCons:"consHWsum",  titleShort:"エネファーム", level:"5",  figNum:"10",  lifeTime:"10",  price:"1200000",  roanShow:"1",  standardType:"エコジョーズ",  subsidy :"",  advice:"エネファームは、燃料電池で発電をしながらお湯をわかす効率がよい装置です。家庭で消費する電気の分だけ発電を行い、発生した余熱をお湯としてためて利用することができます。電気やお湯をたくさん使う家庭で、大きな省エネ効果が期待できます。",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHWsolarHeater'] = { mid:"106",  name:"mHWsolarHeater",  title:"太陽熱温水器（自然循環式）を設置して利用する",  easyness:"1",  refCons:"consHWsum",  titleShort:"太陽熱温水器", level:"",  figNum:"9",  lifeTime:"10",  price:"400000",  roanShow:"",  standardType:"",  subsidy :"",  advice:"暖かい時期の晴れた日なら、太陽の熱で沸かしたお湯だけでお風呂に入ることができます。冬でも加温することで利用することができ、お湯のエネルギー消費を大幅に減らせます。比較的簡単なしくみでお湯をわかすことができ、有効な温暖化対策として、世界中で利用が拡大しています。",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHWsolarSystem'] = { mid:"107",  name:"mHWsolarSystem",  title:"ソーラーシステム（強制循環式）を設置して利用する",  easyness:"1",  refCons:"consHWsum",  titleShort:"ソーラーシステム", level:"",  figNum:"9",  lifeTime:"10",  price:"600000",  roanShow:"",  standardType:"",  subsidy :"",  advice:"貯湯タンクを地上に置いて利用する太陽熱温水器です。屋根にタンクがないので、負荷がかかりません。暖かい時期の晴れた日なら、太陽の熱で沸かしたお湯だけでお風呂に入ることができます。冬でも加温することで利用することができ、お湯のエネルギー消費を大幅に減らせます。比較的簡単なしくみでお湯をわかすことができ、有効な温暖化対策として、世界中で利用が拡大しています。",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHWshowerHead'] = { mid:"108",  name:"mHWshowerHead",  title:"節水シャワーヘッドを取り付けて利用する",  easyness:"5",  refCons:"consHWshower",  titleShort:"節水シャワーヘッド", level:"",  figNum:"11",  lifeTime:"10",  price:"2000",  roanShow:"",  standardType:"",  subsidy :"",  advice:"シャワーの持ち手（ヘッド）の部分を取り替えることができるようになっています。お湯が出る穴を小さくしてあり、勢いよくお湯が出てくるほか、手元で止水できるものもあり、3割程度お湯の利用を減らすことができます。ホームセンターや家電量販店などで購入できます。",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHWshowerTime'] = { mid:"109",  name:"mHWshowerTime",  title:"シャワーの利用を1人1日1分短くする",  easyness:"4",  refCons:"consHWshower",  titleShort:"シャワー1人1分短縮", level:"",  figNum:"11",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"シャワーのエネルギー消費はとても大きく、お湯を出している状態で、テレビ300台分のエネルギーが消費されます。少し止めるだけでも大きな削減になります。身体を洗っているときには止めるなど、利用時間を減らすよう気を付けましょう。",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHWshowerTime30'] = { mid:"110",  name:"mHWshowerTime30",  title:"シャワーの利用時間を3割短くする",  easyness:"3",  refCons:"consHWshower",  titleShort:"シャワー3割短縮", level:"",  figNum:"11",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"シャワーのエネルギー消費はとても大きく、お湯を出している状態で、テレビ300台分のエネルギーが消費されます。少し止めるだけでも大きな削減になります。身体を洗っているときには止めるなど、利用時間を減らすよう気を付けましょう。",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHWkeep'] = { mid:"111",  name:"mHWkeep",  title:"風呂に家族が続けて入り追い焚きをしない",  easyness:"3",  refCons:"consHWtub",  titleShort:"風呂の保温をしない", level:"",  figNum:"12",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"追い焚きでは、風呂のお湯をいちど外に出し、給湯器まで送る必要があります。この間に冷えてしまい、余分なエネルギーがかかります。追い炊き機能を使わずに、続けてはいることが大きな削減になります。また浴槽にフタをすることでも、冷めにくくすることもできます。",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHWsaveMode'] = { mid:"112",  name:"mHWsaveMode",  title:"エコキュートを「節約モード」に設定する",  easyness:"3",  refCons:"consHWsum",  titleShort:"給湯節約モード", level:"",  figNum:"8",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"エコキュートは夜間に沸かす湯量の設定ができるようになっています。お湯切れがないように余裕に沸かすと、保温時のロスが大きくなります。通常の使い方をする日で、特に湯切れなどない場合には、節約モードに設定することで、省エネになります。",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHWstopAutoKeep'] = { mid:"113",  name:"mHWstopAutoKeep",  title:"自動保温を続けるのでなく、次の人が入る直前に沸かし直す",  easyness:"3",  refCons:"consHWtub",  titleShort:"自動保温をしない", level:"",  figNum:"12",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"自動保温では、頻繁に風呂のお湯を屋外の給湯器まで送り出して温めるため、配管部分の熱の無駄が大きくなります。続けて入ることで保温しなくてもすみますが、時間があいて冷めてしまう場合には自動保温をせず、後から入る直前に温め直すことで省エネになります。",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHWinsulation'] = { mid:"114",  name:"mHWinsulation",  title:"断熱型の浴槽にリフォームする",  easyness:"1",  refCons:"consHWtub",  titleShort:"断熱浴槽", level:"",  figNum:"12",  lifeTime:"10",  price:"600000",  roanShow:"",  standardType:"普及型",  subsidy :"",  advice:"浴槽が発泡スチロールなどの断熱材で覆われており、お湯が冷めにくくなっているタイプが増えています。浴槽のリフォーム工事が必要になりますが、冷めにくい分、追い炊きをしなくてすみます。あわせて、浴室もユニットバスにすると、浴室全体からの熱も逃げにくくなります。",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHWonlyShower'] = { mid:"115",  name:"mHWonlyShower",  title:"夏場はシャワーだけですませて浴槽にお湯を張らない",  easyness:"3",  refCons:"consHWtub",  titleShort:"夏に浴槽のお湯をためない", level:"",  figNum:"11",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"浴槽のお湯の量は、シャワーを使っている時間に換算すると10～20分に相当します。自動湯張りをせずに、浴槽のお湯だけを使って洗う家庭ではかえって増える場合もありますが、シャワーを併用している場合には浴槽の分が削減になります。",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHWdishTank'] = { mid:"116",  name:"mHWdishTank",  title:"食器洗いでお湯を流しっぱなしにしない",  easyness:"2",  refCons:"consHWdishwash",  titleShort:"食器流し洗い", level:"",  figNum:"13",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"洗剤で洗っているときにはお湯を止めるなど、なるべくお湯を出す時間を短く工夫してください。油汚れは古布等で先にふき取っておくと、すすぎも早く済みます。",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHWdishWater'] = { mid:"117",  name:"mHWdishWater",  title:"水が冷たくない時期には水で食器を洗う",  easyness:"2",  refCons:"consHWdishwash",  titleShort:"食器水洗い", level:"",  figNum:"13",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"暖かい季節には、お湯を使わなくても十分すすぐことができます。たとえば食器洗いでお湯を10分使う場合、ポット3杯分の熱湯を沸かすだけのエネルギーが消費されます。油汚れは古布等でふき取っておくなど、工夫することで食器洗いも早く済みます。",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mCKdishWasher'] = { mid:"118",  name:"mCKdishWasher",  title:"食器洗い乾燥機を使う",  easyness:"2",  refCons:"consHWdishwash",  titleShort:"食器洗浄機", level:"",  figNum:"15",  lifeTime:"10",  price:"80000",  roanShow:"",  standardType:"",  subsidy :"",  advice:"食器をお湯で流し洗いするのに比べると、お湯をためて洗浄しているため、食器洗浄乾燥機のほうが省エネとなります。なおお湯ではなく水で洗う場合には、食器洗浄機よりも省エネとなります。手洗いで工夫するのも有効な方法です。",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHWtap'] = { mid:"119",  name:"mHWtap",  title:"台所・洗面所に節湯水栓を設置する",  easyness:"2",  refCons:"consHWsum",  titleShort:"節湯水栓", level:"",  figNum:"13",  lifeTime:"20",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"手元ですぐ止められるようにしたり、シングルレバーを左に向けないとお湯がでないしくみにするなど、使い勝手は同じでも、お湯の消費量を2割以上減らせる機器があります。",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHWreplaceToilet5'] = { mid:"120",  name:"mHWreplaceToilet5",  title:"節水トイレを設置する",  easyness:"1",  refCons:"consHWtoilet",  titleShort:"節水トイレ", level:"",  figNum:"19",  lifeTime:"10",  price:"30000",  roanShow:"",  standardType:"既存型",  subsidy :"",  advice:"トイレ本体を工事して交換する必要がありますが、水の量を以前よりも半分以下に抑えることができます。以前は13リットル程度必要だったものが、4-6リットル程度で使えるようになっており、水道代を大きく削減できます。",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHWreplaceToilet'] = { mid:"121",  name:"mHWreplaceToilet",  title:"瞬間式の温水洗浄便座に買い替える",  easyness:"1",  refCons:"consHWtoilet",  titleShort:"瞬間式便座", level:"",  figNum:"19",  lifeTime:"10",  price:"30000",  roanShow:"",  standardType:"既存型",  subsidy :"",  advice:"新製品では省エネ機能があり、ふたを開けた瞬間に温めるタイプなど、消費電力が少なくてすみます。カタログに表示されている年間消費電力量を参考に省エネ型を選んでください。",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHWtemplatureToilet'] = { mid:"122",  name:"mHWtemplatureToilet",  title:"保温便座の温度設定を下げる",  easyness:"3",  refCons:"consHWtoilet",  titleShort:"便座温度調節", level:"",  figNum:"19",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"寒くない時期は保温を切ったり、温度設定を低めに設定することで省エネができます。便座にカバーをかけると、冷たさを感じにくくなります。",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHWcoverTilet'] = { mid:"123",  name:"mHWcoverTilet",  title:"保温洗浄便座のふたをしめる",  easyness:"3",  refCons:"consHWtoilet",  titleShort:"便座のふたを閉める", level:"",  figNum:"19",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"便座のふたを上げた状態にしておくと、保温の熱が逃げやすく、消費電力が増えます。用を終えたら、ふたを閉めることで省エネになります。寒くなければ、保温をしないようにすることも省エネにつながります。",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mACreplace'] = { mid:"201",  name:"mACreplace",  title:"エアコンを省エネ型に買い替える",  easyness:"1",  refCons:"consAC",  titleShort:"省エネエアコン", level:"",  figNum:"1",  lifeTime:"10",  price:"160000",  roanShow:"",  standardType:"",  subsidy :"",  advice:"同じだけ冷暖房をしても、15年に比べると半分くらいの消費電力ですむ省エネ性能の高いエアコンがあります。選ぶ時には、統一省エネラベルの★マークの数が多いものや、年間電気代の表示を参考に省エネ型を選んでください。暖房の性能もあがっており、ガスや灯油の暖房に比べてもCO2を削減することができます。",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mACreplaceHeat'] = { mid:"202",  name:"mACreplaceHeat",  title:"エアコンを省エネ型に買い替え、エアコンで暖房する",  easyness:"2",  refCons:"consAC",  titleShort:"省エネエアコン＋暖房", level:"",  figNum:"1",  lifeTime:"10",  price:"160000",  roanShow:"",  standardType:"",  subsidy :"",  advice:"同じだけ冷暖房をして、15年に比べると半分くらいの消費電力ですむ省エネ性能の高いエアコンがあります。エアコンは室外の熱を利用するために、ガスや灯油などの暖房とくらべても、CO2排出量が少なくなります。選ぶ時には、統一省エネラベルの★マークの数が多いものや、年間電気代の表示を参考に省エネ型を選んでください。",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mACchangeHeat'] = { mid:"203",  name:"mACchangeHeat",  title:"暖房をエアコンでする",  easyness:"2",  refCons:"consACheat",  titleShort:"エアコン暖房", level:"",  figNum:"1",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"エアコンで暖房をすると、外気の熱を利用するため、ガスや灯油の暖房に比べて大幅にCO2を削減でき、光熱費の削減にもつながります。なお、床までしっかり暖気が届かないと暖まりませんから、強風設定で暖房するか、うちわなどを活用してください。また、最近のエアコンは床まで暖める機能が充実していますので、ぜひ試してみてください。",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHTchangeHeat'] = { mid:"204",  name:"mHTchangeHeat",  title:"家の暖房をエアコンでする",  easyness:"1",  refCons:"consHTsum",  titleShort:"エアコン暖房", level:"",  figNum:"1",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"エアコンで暖房をすると、外気の熱を利用するため、ガスや灯油の暖房に比べて大幅にCO2を削減でき、光熱費の削減にもつながります。なお、床までしっかり暖気が届かないと暖まりませんから、強風設定で暖房するか、うちわなどを活用してください。また、最近のエアコンは床まで暖める機能が充実していますので、ぜひ試してみてください。",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mCOsunCut'] = { mid:"205",  name:"mCOsunCut",  title:"冷房で、すだれ等を使い日射をカットする",  easyness:"4",  refCons:"consCOsum",  titleShort:"冷房日射カット", level:"",  figNum:"1",  lifeTime:"5",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"冷房時に日射が入るのは、窓にストーブを置いているようなものです。遮るほうが省エネになり、より涼しく過ごすことができます。なおカーテンでは窓の内側のカーテンが暖まりますので、窓の外にすだれ・よしずをするほうが涼しくなります。また、5月頃から、ゴーヤ・朝顔・ヘチマなどを植えて育てると、夏にはりっぱな「緑のカーテン」ができあがり、涼しく過ごすことができます。",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mCOtemplature'] = { mid:"206",  name:"mCOtemplature",  title:"冷房の温度設定を控えめ（28℃）にする",  easyness:"3",  refCons:"consACcool",  titleShort:"冷房設定温度", level:"",  figNum:"1",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"省エネを考えた暖房設定温度の目安は20℃以下です。「暖かくする」のではなく「寒くないようにする」程度に考えてみてください。寒さの感じ方には個人差があるので無理をする必要はありませんが、厚着をしたり、暖まる食事をとるなどして、工夫をしてみてください。1℃控えめにすることで、CO2排出量や光熱費をおよそ1割削減できます。また季節の終わりには、早めに冷暖房器具をしまうことも効果的です。",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHTtemplature'] = { mid:"207",  name:"mHTtemplature",  title:"厚着をして暖房の温度設定を控えめ（20℃）にする",  easyness:"3",  refCons:"consACheat",  titleShort:"暖房設定温度", level:"",  figNum:"3",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"省エネを考えた冷房設定温度の目安は28℃以上です。「涼しくする」のではなく、「暑くないようにする」程度に考えてみてください。暑さの感じ方には個人差があるので無理をする必要はありませんが、扇風機を活用したり、薄着をするなどして工夫をしてみてください。窓をあけて風が入ると涼しく感じますし、風鈴の音なども、涼しく感じさせてくれます。1℃控えめにすることで、CO2排出量や光熱費をおよそ1割削減できます。また季節の終わりには、早めに冷暖房器具をしまうことも効果的です。",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHTwindowSheet'] = { mid:"208",  name:"mHTwindowSheet",  title:"暖房時に、窓用の断熱シートを貼る",  easyness:"3",  refCons:"consACheat",  titleShort:"窓断熱シート", level:"",  figNum:"4",  lifeTime:"3",  price:"3000",  roanShow:"",  standardType:"",  subsidy :"",  advice:"断熱シート（いわゆるプチプチシートのようなもの）は、ホームセンター等で売られています。窓をきれいにしてから、霧吹きをかけ、その水だけで窓に貼り付けることができます。断熱効果があるだけでなく、結露も抑えることができます。窓から吹き下ろしてくる冷たい風も和らぎ、快適性も向上します。",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHTdouble'] = { mid:"209",  name:"mHTdouble",  title:"窓・サッシを複層ガラスにする",  easyness:"1",  refCons:"consACheat",  titleShort:"複層ガラス", level:"5",  figNum:"4",  lifeTime:"30",  price:"100000",  roanShow:"",  standardType:"",  subsidy :"家の窓全体の断熱工事をする場合、工事にかかった費用に応じて、固定資産税の控除や、ローン残高に応じた所得税控除の制度があります。",  advice:"暖房時は窓やサッシから逃げる熱の割合が多く、通常のシングルガラスを複層ガラスに取り替えることで熱の逃げ方を半分程度に抑えることができます。省エネだけでなく、結露がつきにくくなるというメリットもあります。窓から吹き下ろしてくる冷たい風も和らぎ、快適性も向上します。家屋に応じた手法がありますので、工務店などに相談してください。",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHTlowe'] = { mid:"210",  name:"mHTlowe",  title:"窓・サッシを樹脂枠low-Eガラスにする",  easyness:"1",  refCons:"consACheat",  titleShort:"樹脂枠low-Eガラス", level:"",  figNum:"4",  lifeTime:"30",  price:"150000",  roanShow:"",  standardType:"",  subsidy :"家の窓全体の断熱工事をする場合、工事にかかった費用に応じて、固定資産税の控除や、ローン残高に応じた所得税控除の制度があります。",  advice:"暖房時は窓やサッシから逃げる熱の割合が多く、取り替えることで熱の逃げ方を半分程度に抑えることができます。通常の二重ガラスに比べて、断熱にすぐれており、枠からの熱ロスも減らせます。省エネだけでなく、結露がつきにくくなるというメリットもあります。家屋に応じた手法がありますので、工務店などに相談してください。",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHTuchimado'] = { mid:"211",  name:"mHTuchimado",  title:"内窓をとりつける",  easyness:"2",  refCons:"consACheat",  titleShort:"内窓", level:"5",  figNum:"4",  lifeTime:"30",  price:"60000",  roanShow:"",  standardType:"",  subsidy :"家の窓全体の断熱工事をする場合、工事にかかった費用に応じて、固定資産税の控除や、ローン残高に応じた所得税控除の制度があります。",  advice:"暖房時は窓やサッシから逃げる熱の割合が多く、現在の窓やサッシの内側に追加して「内窓」をつけることでより熱が逃げにくくなります。内窓は比較的工事費が安く、約1時間で工事も完了し、結露防止や防犯にも効果があります。詳しくは工務店などに相談してください。",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHTdoubleGlassAll'] = { mid:"212",  name:"mHTdoubleGlassAll",  title:"全ての部屋の窓ガラスを複層ガラスに置き換える",  easyness:"1",  refCons:"consHTsum",  titleShort:"全居室を複層ガラスに", level:"",  figNum:"4",  lifeTime:"30",  price:"100000",  roanShow:"",  standardType:"",  subsidy :"家の窓全体の断熱工事をする場合、工事にかかった費用に応じて、固定資産税の控除や、ローン残高に応じた所得税控除の制度があります。",  advice:"暖房時は窓やサッシから逃げる熱の割合が多く、通常のシングルガラスを複層ガラスに取り替えることで熱の逃げ方を半分程度に抑えることができます。省エネだけでなく、結露がつきにくくなるというメリットもあります。窓から吹き下ろしてくる冷たい風も和らいだり、冬の朝方の寒さが改善されたりなど、快適性も向上します。家屋に応じた手法がありますので、工務店などに相談してください。",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHTuchimadoAll'] = { mid:"213",  name:"mHTuchimadoAll",  title:"全ての部屋に内窓をとりつける",  easyness:"1",  refCons:"consHTsum",  titleShort:"全居室を内窓に", level:"",  figNum:"4",  lifeTime:"30",  price:"100000",  roanShow:"",  standardType:"",  subsidy :"家の窓全体の断熱工事をする場合、工事にかかった費用に応じて、固定資産税の控除や、ローン残高に応じた所得税控除の制度があります。",  advice:"暖房時は窓やサッシから逃げる熱の割合が多く、現在の窓やサッシの内側に追加して「内窓」をつけることでより熱が逃げにくくなります。内窓は比較的工事費が安く、約1時間で工事も完了し、結露防止や防犯にも効果があります。窓から吹き下ろしてくる冷たい風も和ら、冬の朝方の寒さが改善されたりなど、快適性も向上します。詳しくは工務店などに相談してください。",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHTloweAll'] = { mid:"214",  name:"mHTloweAll",  title:"全ての部屋の窓・サッシを樹脂枠low-Eガラスにする",  easyness:"1",  refCons:"consHTsum",  titleShort:"全居室を樹脂枠low-Eガラスに", level:"",  figNum:"4",  lifeTime:"30",  price:"150000",  roanShow:"",  standardType:"",  subsidy :"家の窓全体の断熱工事をする場合、工事にかかった費用に応じて、固定資産税の控除や、ローン残高に応じた所得税控除の制度があります。",  advice:"暖房時は窓やサッシから逃げる熱の割合が多く、取り替えることで熱の逃げ方を半分程度に抑えることができます。通常の二重ガラスに比べて、断熱にすぐれており、枠からの熱ロスも減らせます。省エネだけでなく、結露がつきにくくなるというメリットもあります。窓から吹き下ろしてくる冷たい風も和ら、冬の朝方の寒さが改善されたりなど、快適性も向上します。家屋に応じた手法がありますので、工務店などに相談してください。",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mACfilter'] = { mid:"215",  name:"mACfilter",  title:"エアコンのフィルターを掃除する",  easyness:"2",  refCons:"consACheat",  titleShort:"フィルター掃除", level:"5",  figNum:"1",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"エアコンは1ヶ月利用するごとにフィルター掃除するのが望ましいです。フィルターの目が詰まると、送風が弱くなり、特に暖房での効率が大きく落ちてしまいます。特にキッチンを含む部屋では、油煙がつきやすいのでこまめに掃除してください。最近のエアコンでは、自動的にフィルターを掃除する機種もあります。",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHTtime'] = { mid:"216",  name:"mHTtime",  title:"暖房の使用時間を1時間短くする",  easyness:"3",  refCons:"consACheat",  titleShort:"暖房1時間短縮", level:"",  figNum:"3",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"暖房はつい長い時間つけっぱなしにしがちです。暖かくなったら止めるようにしましょう。就寝前や外出時などは30分前に止めるのも一つの方法です。また、人がいない部屋を暖房するのは無駄ですので、なるべく切るようにしましょう。",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHTpartialHeating'] = { mid:"217",  name:"mHTpartialHeating",  title:"こたつやホットカーペットを活用して、部屋暖房を控える",  easyness:"2",  refCons:"consACheat",  titleShort:"こたつ・ホットカーペット", level:"",  figNum:"3",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"こたつやホットカーペットなどの部分暖房は、身体の近くだけを温めるので、消費エネルギーが少なくなっています。部屋暖房の設定温度を大きく下げても、同じ快適性を維持できます。特に、吹き抜け構造だったり、暖房部屋から階段が上階に続いている構造の場合、せっかく温めた空気が天井に抜けてしまい、部屋を温めるのに効率が悪くなります。こうした場合には、足元を温める暖房も検討してみてください。靴下をはいたり、厚着をすることも効果的です。<br>　こたつやホットカーペットを使う場合には、床との間に断熱シートを敷いたり、こたつの掛け布団も厚めにすると、より消費電力を減らせます。",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHTceiling'] = { mid:"218",  name:"mHTceiling",  title:"暖房時に天井の暖気をかきまぜる",  easyness:"2",  refCons:"consACheat",  titleShort:"サーキュレータ", level:"",  figNum:"3",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"部屋暖房をしていると、床に比べて天井のほうが5～10℃近くも温度が高くなっていることが多くあります。うちわなどでかきまぜたり、サーキュレータや扇風機を上向きにしてかきまぜることで、暖かい空気を床まで届けることができ、快適に過ごせます。靴下をはいたり、厚着をすることも効果的です。",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHTareaLimit'] = { mid:"219",  name:"mHTareaLimit",  title:"暖房時に部屋のドアやふすまを閉め、暖房範囲を小さくする",  easyness:"2",  refCons:"consACheat",  titleShort:"暖房範囲", level:"5",  figNum:"3",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"広い部屋を暖房するのには多くのエネルギーが必要です。ふすまや扉などで部屋を区切ると、小さい暖房器具でもよく暖まります。逆に吹き抜け構造など天井が高い場合は、多くの暖房が必要になります。",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHTdanran'] = { mid:"220",  name:"mHTdanran",  title:"家族だんらんで一部屋で過ごすようにする",  easyness:"3",  refCons:"consHTsum",  titleShort:"家族だんらん", level:"",  figNum:"3",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"家族が別々の部屋で過ごすと、それぞれに暖房や照明をつける必要があります。いっしょの部屋で過ごすことで、暖房も照明も減らすことができます。ぜひ団らんの時間を楽しみながら、省エネをしてみてください。",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHTbiomass'] = { mid:"221",  name:"mHTbiomass",  title:"薪ストーブ（ペレットストーブ）を導入する",  easyness:"1",  refCons:"consACheat",  titleShort:"薪・ペレットストーブ", level:"",  figNum:"3",  lifeTime:"20",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"薪ストーブもしくはペレットストーブを使うと、石油やガスなどの化石燃料を使わないため二酸化炭素排出量を減らすことができます。昔からの暖房燃料ですが、むしろ暖炉などおしゃれな作りで、都市部でも導入する事例が増えています。ペレットストーブは、燃料を自動的に供給するために、手間がかからないのもメリットです。設置には煙突の設置など、工事が必要になります。",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHTcentralNotUse'] = { mid:"222",  name:"mHTcentralNotUse",  title:"セントラルヒーティングで使っていない部屋の設定温度を下げる",  easyness:"2",  refCons:"consHTsum",  titleShort:"未使用部屋の暖房温度", level:"5",  figNum:"3",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"セントラルヒーティングをしている場合には、使わない部屋まで暖めていることになります。使わない部屋の暖房を止めてしまうと結露・凍結などの問題がある場合には、そうならない程度に暖房設定を控えめにしてください。人がいる部屋での暖房設定の目安は20℃です。",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHTkanki'] = { mid:"223",  name:"mHTkanki",  title:"全熱交換換気装置を設置する",  easyness:"1",  refCons:"consHTsum",  titleShort:"全熱交換換気", level:"",  figNum:"3",  lifeTime:"20",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"新しい家では換気設備の導入が義務付けられていますが、暖房をしているときには、温かい空気を捨ててしまうことにもなります。熱を回収して、逃げる量を少なくできる換気システムにすると、大きく熱のロスを減らすことができます。",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mPTstopPot'] = { mid:"301",  name:"mPTstopPot",  title:"電気ポットで保温をしない",  easyness:"2",  refCons:"consCKpot",  titleShort:"ポット保温しない", level:"",  figNum:"17",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"電気ポットでは、保温のために多くの電気が消費されています。必要に応じてお湯を沸かすようにするか、魔法瓶を活用してみてください。",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mPTstopPotNight'] = { mid:"302",  name:"mPTstopPotNight",  title:"外出時や夜間に電気ポットの保温を止める",  easyness:"3",  refCons:"consCKpot",  titleShort:"夜間保温停止", level:"",  figNum:"17",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"外出時や夜間など、長時間お湯を使わない場合には、止めておくことで保温電力を削減できます。炊飯ジャーや、便座の保温なども、同様に止めておくほうが省エネになります。",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mPTstopRiceCooker'] = { mid:"303",  name:"mPTstopRiceCooker",  title:"炊飯ジャーの保温をやめる",  easyness:"3",  refCons:"consCKrice",  titleShort:"ジャー保温", level:"",  figNum:"18",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"炊飯ジャーの保温を止めて、食べるときに電子レンジで温め直すほうが省エネになります。長時間保温をすると、ご飯が変色することもあり、常温保温のほうがおいしくいただけます。",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mPTreplacePot'] = { mid:"304",  name:"mPTreplacePot",  title:"省エネタイプの電気ポットに買い替える",  easyness:"2",  refCons:"consCKpot",  titleShort:"省エネ電気ポット", level:"",  figNum:"17",  lifeTime:"",  price:"",  roanShow:"",  standardType:"既存型",  subsidy :"",  advice:"魔法瓶のような断熱がされている電気ポットがあり、保温の電気消費が少なくてすみます。店頭では保温消費電力が表示されていることがあり、これを参考にしてください。",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mCKflame'] = { mid:"305",  name:"mCKflame",  title:"鍋から炎がはみ出さないようにする",  easyness:"2",  refCons:"consCKcook",  titleShort:"調理炎調整", level:"",  figNum:"14",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"鍋底から炎がはみ出すのは、ガスが無駄になるだけで、調理時間の短縮にはなりません。鍋底からはみ出さない程度に調節して使いましょう。このほかにも、段取りよく調理をする工夫によって、ガスの消費を減らすことができます。",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mDRsolar'] = { mid:"401",  name:"mDRsolar",  title:"晴れた日は衣類乾燥機や乾燥機能を使わずに天日乾燥させる",  easyness:"2",  refCons:"consDRsum",  titleShort:"天日干し", level:"",  figNum:"16",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"乾燥機能は便利ですが、洗濯の10倍以上のエネルギーがかかります。なるべく天日干しをして、乾燥機能を使わないことが効果的です。",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mDRheatPump'] = { mid:"402",  name:"mDRheatPump",  title:"ヒートポンプ式の衣類乾燥ができる洗濯機に買い替える",  easyness:"1",  refCons:"consDRsum",  titleShort:"ヒートポンプ乾燥", level:"",  figNum:"16",  lifeTime:"10",  price:"140000",  roanShow:"",  standardType:"",  subsidy :"",  advice:"衣類乾燥機や乾燥機能付き洗濯機の中で、ヒートポンプ式のものは、通常の乾燥機に比べてエネルギー消費が半分程度で済みます。よく乾燥機能を利用する場合には、光熱費の削減額も大きく効いてきます。ただし、乾燥機能自体が多くのエネルギーを使うため、なるべく乾燥機能を使わないことが望ましいです。",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mLIceilingLED'] = { mid:"501",  name:"mLIceilingLED",  title:"蛍光灯器具をLEDシーリングライトに付け替える",  easyness:"4",  refCons:"consLI",  titleShort:"LEDライト", level:"",  figNum:"6",  lifeTime:"20",  price:"",  roanShow:"",  standardType:"蛍光灯",  subsidy :"",  advice:"LEDの省エネ性能は高く、長持ちします。カバーの中に虫が入らないため、掃除の手間も省くことができます。照明器具から取り替えますが、ソケットがあるので、通常は電気屋に頼まなくても交換はできます。色合いなども調整したり、細かく明るさを調整したりすることもできます。",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mLILED'] = { mid:"502",  name:"mLILED",  title:"LEDに付け替える",  easyness:"2",  refCons:"consLI",  titleShort:"LED電球", level:"",  figNum:"5",  lifeTime:"40000h",  price:"2000",  roanShow:"",  standardType:"電球",  subsidy :"",  advice:"電球と同じソケットを使っており、電球が切れたときにそのまま付け替えることができます。電気の消費を8割削減でき、寿命は40倍以上になります。",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mLIsensor'] = { mid:"503",  name:"mLIsensor",  title:"人感センサー式に付け替える",  easyness:"2",  refCons:"consLI",  titleShort:"センサー照明", level:"",  figNum:"5",  lifeTime:"10",  price:"",  roanShow:"",  standardType:"電球",  subsidy :"",  advice:"玄関の照明では、ずっと明かりをつけているより、人が近づくと点くため、防犯性能も高いとされています。点いている時間が短い分、大幅な省エネができます。同じ人感センサーとしては、廊下などに設置をして、人が通るときだけ照らすタイプも実用的で効果的です。",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mLItime'] = { mid:"504",  name:"mLItime",  title:"照明を使う時間を1時間短くする",  easyness:"3",  refCons:"consLI",  titleShort:"照明短縮", level:"",  figNum:"6",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"点けるときに多くの電気が流れますが、ほんの一瞬であるため、結果的にこまめに消すほうが省エネになります。部屋を離れるときには消す習慣が大切です。また、夜に明るい光をあびると、睡眠のサイクルが狂ってしまい、身体にとってよくないことになります。",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mLIoff'] = { mid:"505",  name:"mLIoff",  title:"部屋を出るときに照明を消す",  easyness:"4",  refCons:"consLI",  titleShort:"照明消灯", level:"",  figNum:"6",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"部屋を離れるときには、こまめに照明を消すようにしましょう。すぐに戻ってくる予定でも、点けるときに多くの電気が流れますが、ほんの一瞬であるため、結果的にこまめに消すほうが省エネになります。",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mTVreplace'] = { mid:"601",  name:"mTVreplace",  title:"省エネ性能の高いテレビに買い替える",  easyness:"2",  refCons:"consTV",  titleShort:"省エネテレビ購入", level:"",  figNum:"7",  lifeTime:"10",  price:"40000",  roanShow:"",  standardType:"普及型",  subsidy :"",  advice:"省エネ性能があがっているため、同じサイズであれば半分以下の消費電力になるテレビが販売されています。店頭では、なるべく年間電気代が安いものを選ぶようにしてください。",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mTVradio'] = { mid:"602",  name:"mTVradio",  title:"テレビの時間の半分をラジオにする",  easyness:"1",  refCons:"consTVsum",  titleShort:"ラジオ", level:"",  figNum:"7",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"ラジオはテレビの10～100分の1の消費電力ですみます。寂しいためにテレビをつけている場合には、半分程度の時間は、ラジオやCDなどに代えてみてください。",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mTVtime'] = { mid:"603",  name:"mTVtime",  title:"テレビを点ける時間を1日1時間短くする",  easyness:"3",  refCons:"consTV",  titleShort:"テレビ短縮", level:"",  figNum:"7",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"あらかじめ見る番組を決め、見終えたら消すようにしましょう。点けっぱなしにしていると、つい次の番組まで見てしまうこともあります。またテレビゲームの場合にも、長時間しがちですので、使う時間を短くするようにしましょう。",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mTVbright'] = { mid:"604",  name:"mTVbright",  title:"テレビの画面を明るすぎないよう調整する",  easyness:"2",  refCons:"consTV",  titleShort:"テレビ明るさ調節", level:"",  figNum:"7",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"テレビの画面の明るさを調節できるようになっています。販売時には明るく設定がされており、このままでは家ではまぶしすぎ、消費電力も多くなります。明るさを控えめに設定することで、2～4割程度消費電力が削減されます。新しいテレビでは、センサーで自動調節するタイプもあります。",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mRFreplace'] = { mid:"701",  name:"mRFreplace",  title:"冷蔵庫を省エネ型に買い替える",  easyness:"2",  refCons:"consRF",  titleShort:"省エネ冷蔵庫", level:"",  figNum:"2",  lifeTime:"10",  price:"150000",  roanShow:"",  standardType:"普及型",  subsidy :"",  advice:"以前の機種に比べると半分くらいの電気ですむ省エネ型冷蔵庫があります。選ぶ時には、統一省エネラベルの★マークの数が多いものや、年間電気代の表示を参考に省エネ型を選んでください。買換のときには、古い冷蔵庫は家電リサイクルの制度で引き取ってもらうようにしましょう。",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mRFstop'] = { mid:"702",  name:"mRFstop",  title:"冷蔵庫のうち１台を止める",  easyness:"2",  refCons:"consRF",  titleShort:"冷蔵庫停止", level:"",  figNum:"2",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"2台以上使っている場合には、1台を止めてください。小型の冷蔵庫でも大型と同じくらい多くの電気を消費します使わないでおくと「もったいない」と感じるかもしれませんが、電気を入れているだけで大きな環境負荷が生じますので、使わないほうが望ましいです。",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mRFwall'] = { mid:"703",  name:"mRFwall",  title:"冷蔵庫を壁から離す",  easyness:"4",  refCons:"consRF",  titleShort:"冷蔵庫位置", level:"",  figNum:"2",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"冷蔵庫は壁から5cm程度離すのが目安です。冷蔵庫は側面や天井面から熱を逃がしていますが、壁に接していると熱が逃げにくくなり、消費電力が1割程度増えてしまいます。",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mRFtemplature'] = { mid:"704",  name:"mRFtemplature",  title:"冷蔵庫の温度設定を控えめにする",  easyness:"4",  refCons:"consRF",  titleShort:"冷蔵温度", level:"",  figNum:"2",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"冷蔵庫は温度調節ができます。強から中へ、中から弱へするとそれぞれ1割程度省エネができます。食品の傷みがやや速くなりますので、支障がないか確認しながら試してみてください。",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mCRreplace'] = { mid:"801",  name:"mCRreplace",  title:"エコカーに買い替える",  easyness:"2",  refCons:"consCR",  titleShort:"車買い替え", level:"",  figNum:"21",  lifeTime:"8",  price:"1800000",  roanShow:"",  standardType:"普及型",  subsidy :"エコカーの導入にあたっては、「減税」のメリットが得られます。",  advice:"ハイブリッド車や電気自動車以外にも、技術改善により、既存の燃料消費が半分程度で済む低燃費車が開発されて販売されています。購入時には燃費を考慮して選んで下さい。",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mCRreplaceElec'] = { mid:"802",  name:"mCRreplaceElec",  title:"電気自動車を導入する",  easyness:"1",  refCons:"consCR",  titleShort:"電気自動車", level:"",  figNum:"21",  lifeTime:"7",  price:"3000000",  roanShow:"",  standardType:"",  subsidy :"",  advice:"ガソリンの代わりに充電式電池に電気をため、エンジンの代わりにモーターを回して走ります。エンジンに比べて効率が高く、十分実用的な車として販売がされています。ただし充電スタンドはまだ少なく、充電に時間がかかるため、夜間に充電しておくと便利です。",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mCRecoDrive'] = { mid:"803",  name:"mCRecoDrive",  title:"アイドリングストップなどエコドライブに心がける",  easyness:"3",  refCons:"consCRsum",  titleShort:"エコドライブ", level:"",  figNum:"21",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"アイドリングストップのほか、発進時にふんわりスタートすることにより、燃費を1割程度向上させることができます。",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mCRtrain'] = { mid:"804",  name:"mCRtrain",  title:"鉄道やバスなど公共交通機関を利用する",  easyness:"2",  refCons:"consCRtrip",  titleShort:"公共交通", level:"",  figNum:"22",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"2km程度の近所の場合で、気候がいいときには、車を使わずに自転車を使ったり、歩いたりしましょう。健康のためにもなります。",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mCR20percent'] = { mid:"805",  name:"mCR20percent",  title:"車の利用を2割止める",  easyness:"1",  refCons:"consCRtrip",  titleShort:"車の利用2割減", level:"",  figNum:"22",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"車の利用は多くのエネルギーを消費します。必要性の薄い用途には使わないなどの工夫が大切です。",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mCRwalk'] = { mid:"806",  name:"mCRwalk",  title:"近くの場合には車でなく、自転車や徒歩で行く",  easyness:"2",  refCons:"consCRtrip",  titleShort:"自転車や徒歩", level:"",  figNum:"22",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"2km程度の近所の場合で、気候がいいときには、車を使わずに自転車を使ったり、歩いたりしましょう。健康のためにもなります。",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mPTstopPlug'] = { mid:"901",  name:"mPTstopPlug",  title:"コンセントからプラグを抜き、待機電力を減らす",  easyness:"3",  refCons:"consTotal",  titleShort:"待機電力", level:"",  figNum:"20",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"テレビやビデオ、エアコンなど、使用していないときにも電気が消費されていることがあります。長時間使わないときには、コンセントからプラグを抜くことで削減ができます。最近の機種は待機電力が削減されており、5年以上前の機種で有効です。またエアコンは直接コンセントを抜くのではなく、まずリモコンでしっかり止めて、羽の動きが止まってから抜いてください。",   lifestyle:"1",   season:"wss"};
	
	
D6.scenario.defInput["i010"] = {  cons:"consTotal",  title:"対策として重視する視点",  unit:"",  text:"どんな対策を優先的に表示しますか", inputType:"sel010", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"3",d21p:"0",d22t:"2",d22p:"1",d23t:"1",d23p:"2",d2w:"2",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel010"]= [ "選んで下さい", "CO2削減優先", "光熱費削減優先", "取り組みやすさ考慮", "取り組みやすさ優先", "" ];			D6.scenario.defSelectData['sel010']= [ '-1', '1', '2', '3', '4' ];
D6.scenario.defInput["i001"] = {  cons:"consTotal",  title:"家族人数",  unit:"人",  text:"あなたを含めて、いっしょに住んでいる人数を選んで下さい。", inputType:"sel001", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"3",d11p:"2",d12t:"2",d12p:"1",d13t:"1",d13p:"0",d1w:"2",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel001"]= [ "選んで下さい", "1人", "2人", "3人", "4人", "5人", "6人", "7人", "8人", "9人以上", "" ];			D6.scenario.defSelectData['sel001']= [ '-1', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];
D6.scenario.defInput["i002"] = {  cons:"consTotal",  title:"集合戸建て",  unit:"",  text:"お住いは、戸建てですか、集合住宅ですか", inputType:"sel002", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"2",d11p:"2",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"2",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel002"]= [ "選んで下さい", "戸建て", "集合", "" ];			D6.scenario.defSelectData['sel002']= [ '-1', '1', '2' ];
D6.scenario.defInput["i003"] = {  cons:"consTotal",  title:"家の広さ",  unit:"m2",  text:"家の延べ床面積で、いちばん近い数値を選んで下さい。", inputType:"sel003", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"150",d11p:"0",d12t:"100",d12p:"1",d13t:"0",d13p:"2",d1w:"3",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel003"]= [ "選んで下さい", "15m2", "30m2", "50m2", "70m2", "100m2", "120m2", "150m2", "200m2以上", "" ];			D6.scenario.defSelectData['sel003']= [ '-1', '15', '30', '50', '70', '100', '120', '150', '220' ];
D6.scenario.defInput["i004"] = {  cons:"consTotal",  title:"家の所有",  unit:"",  text:"持ち家ですか、賃貸ですか", inputType:"sel004", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel004"]= [ "選んで下さい", "持ち家", "賃貸", "" ];			D6.scenario.defSelectData['sel004']= [ '-1', '1', '2' ];
D6.scenario.defInput["i005"] = {  cons:"consTotal",  title:"階数",  unit:"",  text:"何階建てですか、集合住宅の場合何階ですか", inputType:"sel005", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel005"]= [ "選んで下さい", "平屋建て", "2階建て", "3階以上", "" ];			D6.scenario.defSelectData['sel005']= [ '-1', '1', '2', '3' ];
D6.scenario.defInput["i006"] = {  cons:"consTotal",  title:"天井が屋根面（最上階）か",  unit:"",  text:"天井が屋根面（最上階）ですか", inputType:"sel006", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel006"]= [ "選んで下さい", "最上階（上は屋根）", "最上階でない（上に部屋がある）", "" ];			D6.scenario.defSelectData['sel006']= [ '-1', '1', '2' ];
D6.scenario.defInput["i007"] = {  cons:"consTotal",  title:"屋根の日当たり",  unit:"",  text:"屋根の日当たりはいいですか", inputType:"sel007", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"3",d11p:"0",d12t:"2",d12p:"1",d13t:"1",d13p:"2",d1w:"3",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel007"]= [ "選んで下さい", "とてもよい", "よい", "ときどき陰る", "よくない", "" ];			D6.scenario.defSelectData['sel007']= [ '-1', '1', '2', '3', '4' ];
D6.scenario.defInput["i008"] = {  cons:"consTotal",  title:"居室数",  unit:"部屋",  text:"居室数", inputType:"sel008", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"8",d11p:"0",d12t:"5",d12p:"1",d13t:"1",d13p:"2",d1w:"2",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel008"]= [ "選んで下さい", "1部屋", "2部屋", "3部屋", "4部屋", "5部屋", "6部屋", "7部屋", "8部屋以上", "" ];			D6.scenario.defSelectData['sel008']= [ '-1', '1', '2', '3', '4', '5', '6', '7', '8' ];
D6.scenario.defInput["i009"] = {  cons:"consTotal",  title:"築年数",  unit:"年",  text:"建築年代", inputType:"sel009", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel009"]= [ "選んで下さい", "5年未満", "5-10年未満", "10-20年未満", "20年以上", "わからない", "" ];			D6.scenario.defSelectData['sel009']= [ '-1', '3', '7', '13', '30' ];
D6.scenario.defInput["i021"] = {  cons:"consTotal",  title:"都道府県",  unit:"",  text:"お住まいの都道府県を選んで下さい。", inputType:"sel021", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue[""]= [ "", "", "", "" ];			D6.scenario.defSelectData['']= [ '', '', '' ];
D6.scenario.defInput["i022"] = {  cons:"consTotal",  title:"詳細地域",  unit:"",  text:"都道府県内の気候が違う場合の地域", inputType:"sel022", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue[""]= [ "", "", "", "" ];			D6.scenario.defSelectData['']= [ '', '', '' ];
D6.scenario.defInput["i023"] = {  cons:"consTotal",  title:"都市部か郊外か",  unit:"",  text:"お住いは公共交通の便はいい地域ですか", inputType:"sel023", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel023"]= [ "選んで下さい", "便利", "どちらかと言えば便利", "どちらかといえば不便", "不便", "" ];			D6.scenario.defSelectData['sel023']= [ '-1', '1', '2', '3', '4' ];
D6.scenario.defInput["i041"] = {  cons:"consTotal",  title:"窓の断熱性能",  unit:"",  text:"窓の断熱性能", inputType:"sel041", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"5",d21p:"0",d22t:"4",d22p:"1",d23t:"0",d23p:"2",d2w:"2",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel041"]= [ "選んで下さい", "樹脂枠三重ガラス", "樹脂枠low-Eガラス", "樹脂アルミ複合/樹脂枠二重ガラス", "アルミ枠二重ガラス", "アルミ枠単板ガラス", "わからない", "" ];			D6.scenario.defSelectData['sel041']= [ '-1', '1', '2', '3', '4', '5', '6' ];
D6.scenario.defInput["i042"] = {  cons:"consTotal",  title:"壁面の断熱材の厚さ",  unit:"",  text:"断熱材の厚さはどの程度ですか", inputType:"sel042", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"100",d11p:"2",d12t:"50",d12p:"1",d13t:"",d13p:"",d1w:"2",d1d:"1", d21t:"100",d21p:"2",d22t:"50",d22p:"1",d23t:"",d23p:"",d2w:"3",d2d:"1", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel042"]= [ "選んで下さい", "グラスウール200mm相当", "グラスウール150mm相当", "グラスウール100mm相当", "グラスウール50mm相当", "グラスウール30mm相当", "入っていない", "わからない", "" ];			D6.scenario.defSelectData['sel042']= [ '-1', '200', '150', '100', '50', '30', '10', '-1' ];
D6.scenario.defInput["i043"] = {  cons:"consTotal",  title:"窓の断熱リフォーム",  unit:"",  text:"窓の断熱リフォームをしましかたか", inputType:"sel043", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"1",d21p:"2",d22t:"2",d22p:"1",d23t:"",d23p:"",d2w:"2",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel043"]= [ "選んで下さい", "全面的にした", "一部した", "していない", "" ];			D6.scenario.defSelectData['sel043']= [ '-1', '1', '2', '3' ];
D6.scenario.defInput["i044"] = {  cons:"consTotal",  title:"壁天井断熱リフォーム",  unit:"",  text:"壁・天井・床などの断熱リフォームをしましたか", inputType:"sel044", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"1",d21p:"2",d22t:"2",d22p:"1",d23t:"",d23p:"",d2w:"1",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel044"]= [ "選んで下さい", "全面的にした", "一部した", "していない", "" ];			D6.scenario.defSelectData['sel044']= [ '-1', '1', '2', '3' ];
D6.scenario.defInput["i051"] = {  cons:"consEnergy",  title:"太陽光の設置",  unit:"",  text:"太陽光発電装置を設置していますか", inputType:"sel051", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"1",d11p:"2",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"4",d1d:"0", d21t:"1",d21p:"2",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"4",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel051"]= [ "選んで下さい", "していない", "している", "" ];			D6.scenario.defSelectData['sel051']= [ '-1', '0', '1' ];
D6.scenario.defInput["i052"] = {  cons:"consEnergy",  title:"太陽光のサイズ",  unit:"kW",  text:"設置している太陽光発電装置のサイズを選んで下さい。", inputType:"sel052", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"5",d11p:"2",d12t:"2",d12p:"1",d13t:"",d13p:"",d1w:"2",d1d:"0", d21t:"5",d21p:"2",d22t:"2",d22p:"1",d23t:"",d23p:"",d2w:"2",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel052"]= [ "選んで下さい", "していない", "している（～3kW）", "している（4kW)", "している（5kW)", "している（6～10kW)", "している（10kW以上）", "" ];			D6.scenario.defSelectData['sel052']= [ '-1', '0', '3', '4', '5', '8', '11' ];
D6.scenario.defInput["i053"] = {  cons:"consEnergy",  title:"太陽光発電の設置年",  unit:"",  text:"太陽光発電を設置した年はいつですか", inputType:"sel053", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel053"]= [ "選んで下さい", "2010年度以前", "2011-2012年度", "2013年度", "2014年度", "2015年度", "2016年度", "2017年度以降", "設置していない", "" ];			D6.scenario.defSelectData['sel053']= [ '-1', '2010', '2011', '2013', '2014', '2015', '2016', '2017', '9999' ];
D6.scenario.defInput["i054"] = {  cons:"consEnergy",  title:"灯油を使っていますか",  unit:"",  text:"灯油を使っていますか", inputType:"sel054", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel054"]= [ "選んで下さい", "はい", "いいえ", "" ];			D6.scenario.defSelectData['sel054']= [ '-1', '1', '2' ];
D6.scenario.defInput["i061"] = {  cons:"consEnergy",  title:"電気代",  unit:"円",  text:"1ヶ月のおおよその電気代を選んでください。", inputType:"sel061", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"15000",d11p:"0",d12t:"10000",d12p:"1",d13t:"0",d13p:"2",d1w:"3",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel061"]= [ "選んで下さい", "1000円", "2000円", "3000円", "5000円", "7000円", "1万円", "1万2000円", "1万5000円", "2万円", "3万円", "それ以上", "" ];			D6.scenario.defSelectData['sel061']= [ '-1', '1000', '2000', '3000', '5000', '7000', '10000', '12000', '15000', '20000', '30000', '40000' ];
D6.scenario.defInput["i062"] = {  cons:"consEnergy",  title:"売電金額",  unit:"円",  text:"太陽光発電で1ヶ月あたりどのくらい電気を売ることができますか。", inputType:"sel062", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel062"]= [ "選んで下さい", "1000円", "2000円", "3000円", "5000円", "7000円", "1万円", "1万2000円", "1万5000円", "2万円", "3万円", "それ以上", "" ];			D6.scenario.defSelectData['sel062']= [ '-1', '1000', '2000', '3000', '5000', '7000', '10000', '12000', '15000', '20000', '30000', '40000' ];
D6.scenario.defInput["i063"] = {  cons:"consEnergy",  title:"ガス代",  unit:"円",  text:"1ヶ月のおおよそのガス代を選んで下さい。", inputType:"sel063", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"10000",d11p:"0",d12t:"6000",d12p:"1",d13t:"0",d13p:"2",d1w:"2",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel063"]= [ "選んで下さい", "オール電化（使わない）", "1000円", "2000円", "3000円", "5000円", "7000円", "1万円", "1万2000円", "1万5000円", "2万円", "3万円FALSE" ];			D6.scenario.defSelectData['sel063']= [ '-1', '0', '1000', '2000', '3000', '5000', '7000', '10000', '12000', '15000', '20000', '30000', '40000' ];
D6.scenario.defInput["i064"] = {  cons:"consEnergy",  title:"灯油購入量",  unit:"円",  text:"1ヶ月あたりのおおよその灯油使用量を選んでください。", inputType:"sel064", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"10000",d11p:"0",d12t:"6000",d12p:"1",d13t:"0",d13p:"2",d1w:"2",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel064"]= [ "選んで下さい", "使わない", "2ヶ月で1缶（9L)", "月1缶（18L)", "月2缶（36L)", "月3缶（54L)", "週1缶（72L)", "5日で1缶（108L)", "週2缶（144L)", "週3缶（216L)", "それ以上", "" ];			D6.scenario.defSelectData['sel064']= [ '-1', '0', '900', '1800', '3600', '5400', '7200', '10800', '14400', '21600', '30000' ];
D6.scenario.defInput["i065"] = {  cons:"consEnergy",  title:"練炭購入量",  unit:"円",  text:"1ヶ月あたりのおおよその練炭購入量を選んでください。", inputType:"sel065", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"10000",d11p:"0",d12t:"6000",d12p:"1",d13t:"0",d13p:"2",d1w:"2",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel065"]= [ "選んで下さい", "使わない", "1000円", "2000円", "3000円", "5000円", "7000円", "1万円", "1万2000円", "1万5000円", "2万円", "3万円FALSE" ];			D6.scenario.defSelectData['sel065']= [ '-1', '0', '1000', '2000', '3000', '5000', '7000', '10000', '12000', '15000', '20000', '30000', '40000' ];
D6.scenario.defInput["i066"] = {  cons:"consEnergy",  title:"地域熱供給",  unit:"円",  text:"暖房用の地域熱供給はありますか", inputType:"sel066", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"10000",d11p:"0",d12t:"6000",d12p:"1",d13t:"0",d13p:"2",d1w:"2",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel066"]= [ "選んで下さい", "使わない", "使っている", "" ];			D6.scenario.defSelectData['sel066']= [ '-1', '1', '2' ];
D6.scenario.defInput["i072"] = {  cons:"consEnergy",  title:"ホームタンクの容量",  unit:"",  text:"ホームタンクが設置されている場合はその容量を選んでください", inputType:"sel072", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel072"]= [ "選んで下さい", "100L", "200L", "300L", "400L", "" ];			D6.scenario.defSelectData['sel072']= [ '-1', '100', '200', '300', '400' ];
D6.scenario.defInput["i073"] = {  cons:"consEnergy",  title:"灯油ホームタンク回数",  unit:"",  text:"灯油のホームタンクに年間に入れる回数を選んでください", inputType:"sel073", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel073"]= [ "選んで下さい", "年3回以下", "年4-6回", "年7-10回", "年11-15回", "年16-20回", "年21回以上", "" ];			D6.scenario.defSelectData['sel073']= [ '-1', '3', '5', '8', '12', '18', '24' ];
D6.scenario.defInput["i074"] = {  cons:"consEnergy",  title:"上下水道代",  unit:"円",  text:"1ヶ月あたりのおおよその上下水道代を選んでください。", inputType:"sel074", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel074"]= [ "選んで下さい", "500円", "1000円", "1500円", "2000円", "3000円", "4000円", "5000円", "7000円", "1万円", "1万5000円", "それ以上", "" ];			D6.scenario.defSelectData['sel074']= [ '-1', '500', '1000', '1500', '2000', '3000', '4000', '5000', '7000', '10000', '15000', '20000' ];
D6.scenario.defInput["i075"] = {  cons:"consEnergy",  title:"車燃料代",  unit:"円",  text:"おおよその1ヶ月のガソリン代（軽油代）を選んで下さい。家族全員分になります。", inputType:"sel075", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"10000",d11p:"0",d12t:"6000",d12p:"1",d13t:"0",d13p:"2",d1w:"2",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel075"]= [ "選んで下さい", "使わない", "1000円", "2000円", "3000円", "5000円", "7000円", "1万円", "1万2000円", "1万5000円", "2万円", "3万円FALSE" ];			D6.scenario.defSelectData['sel075']= [ '-1', '0', '1000', '2000', '3000', '5000', '7000', '10000', '12000', '15000', '20000', '30000', '40000' ];
D6.scenario.defInput["i081"] = {  cons:"consEnergy",  title:"電力会社",  unit:"",  text:"電力会社を選んでください", inputType:"sel081", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel081"]= [ "選んで下さい", "北海道電力", "東北電力", "東京電力", "中部電力", "北陸電力", "関西電力", "中部電力", "四国電力", "九州電力", "沖縄電力", "そのほか", "" ];			D6.scenario.defSelectData['sel081']= [ '-1', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11' ];
D6.scenario.defInput["i082"] = {  cons:"consEnergy",  title:"電気契約",  unit:"",  text:"電気の契約種類を選んでください", inputType:"sel082", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel082"]= [ "選んで下さい", "通常の家庭用（従量）", "時間帯別契約", "" ];			D6.scenario.defSelectData['sel082']= [ '-1', '1', '2' ];
D6.scenario.defInput["i083"] = {  cons:"consEnergy",  title:"ガス種類",  unit:"",  text:"ガスの種類を選んでください", inputType:"sel083", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel083"]= [ "選んで下さい", "都市ガス", "LPガス", "ガスを使わない", "" ];			D6.scenario.defSelectData['sel083']= [ '-1', '1', '2', '3' ];
D6.scenario.defInput["i091"] = {  cons:"consSeason",  title:"電気代",  unit:"円",  text:"1ヶ月のおおよその電気代を選んでください。", inputType:"sel091", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel091"]= [ "選んで下さい", "1000円", "2000円", "3000円", "5000円", "7000円", "1万円", "1万2000円", "1万5000円", "2万円", "3万円", "それ以上", "" ];			D6.scenario.defSelectData['sel091']= [ '-1', '1000', '2000', '3000', '5000', '7000', '10000', '12000', '15000', '20000', '30000', '40000' ];
D6.scenario.defInput["i092"] = {  cons:"consSeason",  title:"売電金額",  unit:"円",  text:"太陽光発電で1ヶ月あたりどのくらい電気を売ることができますか。", inputType:"sel092", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel092"]= [ "選んで下さい", "1000円", "2000円", "3000円", "5000円", "7000円", "1万円", "1万2000円", "1万5000円", "2万円", "3万円", "それ以上", "" ];			D6.scenario.defSelectData['sel092']= [ '-1', '1000', '2000', '3000', '5000', '7000', '10000', '12000', '15000', '20000', '30000', '40000' ];
D6.scenario.defInput["i093"] = {  cons:"consSeason",  title:"ガス代",  unit:"円",  text:"1ヶ月のおおよそのガス代を選んで下さい。", inputType:"sel093", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel093"]= [ "選んで下さい", "オール電化（使わない）", "1000円", "2000円", "3000円", "5000円", "7000円", "1万円", "1万2000円", "1万5000円", "2万円", "3万円FALSE" ];			D6.scenario.defSelectData['sel093']= [ '-1', '0', '1000', '2000', '3000', '5000', '7000', '10000', '12000', '15000', '20000', '30000', '40000' ];
D6.scenario.defInput["i094"] = {  cons:"consSeason",  title:"灯油購入量",  unit:"円",  text:"1ヶ月あたりのおおよその灯油使用量を選んでください。", inputType:"sel094", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel094"]= [ "選んで下さい", "使わない", "2ヶ月で1缶（9L)", "月1缶（18L)", "月2缶（36L)", "月3缶（54L)", "週1缶（72L)", "5日で1缶（108L)", "週2缶（144L)", "週3缶（216L)", "それ以上", "" ];			D6.scenario.defSelectData['sel094']= [ '-1', '0', '900', '1800', '3600', '5400', '7200', '10800', '14400', '21600', '30000' ];
D6.scenario.defInput["i101"] = {  cons:"consHWsum",  title:"給湯器の種類",  unit:"",  text:"お風呂のお湯を沸かす給湯器は、どんな機器ですか。", inputType:"sel101", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"6",d21p:"2",d22t:"3",d22p:"0",d23t:"2",d23p:"1",d2w:"2",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel101"]= [ "選んで下さい", "ガス給湯器", "エコジョーズ（ガス潜熱回収型）", "灯油給湯器", "エコフィール（灯油潜熱回収型）", "電気温水器", "エコキュート（電気）", "エコウィル（コジェネ）", "エネファーム（燃料電池）", "薪", "" ];			D6.scenario.defSelectData['sel101']= [ '-1', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];
D6.scenario.defInput["i102"] = {  cons:"consHWsum",  title:"太陽熱温水器",  unit:"",  text:"太陽熱温水器を利用していますか", inputType:"sel102", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"3",d11p:"0",d12t:"1",d12p:"2",d13t:"",d13p:"",d1w:"2",d1d:"0", d21t:"3",d21p:"0",d22t:"1",d22p:"2",d23t:"",d23p:"",d2w:"2",d2d:"0", d31t:"3",d31p:"0",d32t:"1",d32p:"2",d33t:"",d33p:"",d3w:"2",d3d:"0"}; 			D6.scenario.defSelectValue["sel102"]= [ "選んで下さい", "利用している", "時々利用している", "利用していない", "" ];			D6.scenario.defSelectData['sel102']= [ '-1', '1', '2', '3' ];
D6.scenario.defInput["i103"] = {  cons:"consHWtub",  title:"風呂沸かし日数（夏以外）",  unit:"日/週",  text:"お風呂を沸かすのは、1週間に何日くらいですか。", inputType:"sel103", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"5",d31p:"0",d32t:"2",d32p:"1",d33t:"0",d33p:"2",d3w:"2",d3d:"0"}; 			D6.scenario.defSelectValue["sel103"]= [ "選んで下さい", "お湯をためない", "週1日", "週2日", "2日に1回程度", "週5～6日", "毎日", "" ];			D6.scenario.defSelectData['sel103']= [ '-1', '0', '1', '2', '3.5', '5.5', '7' ];
D6.scenario.defInput["i104"] = {  cons:"consHWtub",  title:"風呂沸かし日数（夏）",  unit:"日/週",  text:"夏場にお風呂を沸かすのは、1週間に何日くらいですか。", inputType:"sel104", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"5",d31p:"0",d32t:"2",d32p:"1",d33t:"0",d33p:"2",d3w:"2",d3d:"0"}; 			D6.scenario.defSelectValue["sel104"]= [ "選んで下さい", "お湯をためない", "週1日", "週2日", "2日に1回程度", "週5～6日", "毎日", "" ];			D6.scenario.defSelectData['sel104']= [ '-1', '0', '1', '2', '3.5', '5.5', '7' ];
D6.scenario.defInput["i105"] = {  cons:"consHWshower",  title:"シャワー時間(夏以外）",  unit:"分/日",  text:"家族全員でシャワーを使う時間は、1日何分くらいですか。平均的には1人5分程度です。", inputType:"sel105", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"40",d11p:"0",d12t:"20",d12p:"1",d13t:"0",d13p:"2",d1w:"2",d1d:"0", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"40",d31p:"0",d32t:"20",d32p:"1",d33t:"0",d33p:"2",d3w:"2",d3d:"0"}; 			D6.scenario.defSelectValue["sel105"]= [ "選んで下さい", "使わない", "5分", "10分", "15分", "20分", "30分", "40分", "60分", "90分", "120分", "" ];			D6.scenario.defSelectData['sel105']= [ '-1', '0', '5', '10', '15', '20', '30', '40', '60', '90', '120' ];
D6.scenario.defInput["i106"] = {  cons:"consHWshower",  title:"シャワー時間(夏）",  unit:"分/日",  text:"夏場に家族全員でシャワーを使う時間は、1日何分くらいですか。", inputType:"sel106", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"40",d11p:"0",d12t:"20",d12p:"1",d13t:"0",d13p:"2",d1w:"2",d1d:"0", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"40",d31p:"0",d32t:"20",d32p:"1",d33t:"0",d33p:"2",d3w:"2",d3d:"0"}; 			D6.scenario.defSelectValue["sel106"]= [ "選んで下さい", "使わない", "5分", "10分", "15分", "20分", "30分", "40分", "60分", "90分", "120分", "" ];			D6.scenario.defSelectData['sel106']= [ '-1', '0', '5', '10', '15', '20', '30', '40', '60', '90', '120' ];
D6.scenario.defInput["i107"] = {  cons:"consHWtub",  title:"お湯はりの高さ",  unit:"",  text:"お湯はりの高さ", inputType:"sel107", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"8",d31p:"0",d32t:"0",d32p:"2",d33t:"",d33p:"",d3w:"2",d3d:"0"}; 			D6.scenario.defSelectValue["sel107"]= [ "選んで下さい", "肩までつかる程度", "半身浴", "お湯をはらない", "" ];			D6.scenario.defSelectData['sel107']= [ '-1', '8', '4', '0' ];
D6.scenario.defInput["i108"] = {  cons:"consHWtub",  title:"浴槽の保温時間",  unit:"時間",  text:"風呂の保温を1日何時間していますか", inputType:"sel108", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"10",d31p:"0",d32t:"4",d32p:"1",d33t:"0",d33p:"2",d3w:"1",d3d:"0"}; 			D6.scenario.defSelectValue["sel108"]= [ "選んで下さい", "していない", "3時間", "6時間", "10時間", "16時間", "24時間", "" ];			D6.scenario.defSelectData['sel108']= [ '-1', '0', '3', '6', '10', '16', '24' ];
D6.scenario.defInput["i109"] = {  cons:"consHWtub",  title:"身体を洗うときのお湯は",  unit:"",  text:"浴槽にためてあるときは浴槽のお湯を使いますか", inputType:"sel109", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel109"]= [ "選んで下さい", "浴槽のお湯を使う", "半々くらい", "シャワーを使う", "わからない", "" ];			D6.scenario.defSelectData['sel109']= [ '-1', '10', '5', '2', '0' ];
D6.scenario.defInput["i110"] = {  cons:"consHWtub",  title:"風呂の追い焚き方法",  unit:"割",  text:"追い焚きはどのようにしていますか", inputType:"sel110", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"10",d31p:"0",d32t:"0",d32p:"2",d33t:"",d33p:"",d3w:"1",d3d:"0"}; 			D6.scenario.defSelectValue["sel110"]= [ "選んで下さい", "常に自動で追い焚きをしている", "必要に応じて追い焚きをする", "必要に応じて注ぎ湯をする", "わからない", "" ];			D6.scenario.defSelectData['sel110']= [ '-1', '10', '5', '5', '0' ];
D6.scenario.defInput["i111"] = {  cons:"consHWtub",  title:"風呂のお湯が少なくなったとき",  unit:"割",  text:"浴槽のお湯が少なくなったときにどうしますか", inputType:"sel111", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel111"]= [ "選んで下さい", "常に自動でたし湯される", "必要に応じて注ぎ湯をする", "少ないままで入る", "その時どきで対応する", "わからない", "" ];			D6.scenario.defSelectData['sel111']= [ '-1', '10', '5', '0', '5', '5' ];
D6.scenario.defInput["i112"] = {  cons:"consHWshower",  title:"シャワーのお湯が出るまで",  unit:"秒",  text:"最初にお湯が出てくるまでの時間はどのくらいですか", inputType:"sel112", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"20",d21p:"0",d22t:"10",d22p:"1",d23t:"0",d23p:"2",d2w:"1",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel112"]= [ "選んで下さい", "すぐにお湯が出る", "5秒くらい待つ", "10秒くらい待つ", "20秒くらいまつ", "1分弱待つ", "わからない", "" ];			D6.scenario.defSelectData['sel112']= [ '-1', '3', '5', '10', '20', '50', '20' ];
D6.scenario.defInput["i113"] = {  cons:"consHWdishwash",  title:"食器洗いでのお湯の利用",  unit:"",  text:"食器洗いで、お湯を使わずに水を使うようにしていますか", inputType:"sel113", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel113"]= [ "選んで下さい", "常にしている", "だいたいしている", "時々している", "していない", "" ];			D6.scenario.defSelectData['sel113']= [ '-1', '1', '2', '3', '4' ];
D6.scenario.defInput["i114"] = {  cons:"consHWdresser",  title:"洗面でのお湯使用期間",  unit:"ヶ月",  text:"洗面でのお湯使用期間", inputType:"sel114", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"5",d31p:"0",d32t:"0",d32p:"2",d33t:"",d33p:"",d3w:"1",d3d:"0"}; 			D6.scenario.defSelectValue["sel114"]= [ "選んで下さい", "お湯を使わない", "2ヶ月", "4ヶ月", "6ヶ月", "8ヶ月", "10ヶ月", "12ヶ月", "" ];			D6.scenario.defSelectData['sel114']= [ '-1', '0', '2', '4', '6', '8', '10', '12' ];
D6.scenario.defInput["i115"] = {  cons:"consHWdishwash",  title:"食器洗いでのお湯使用期間",  unit:"ヶ月",  text:"食器洗いでのお湯使用期間", inputType:"sel115", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel115"]= [ "選んで下さい", "お湯を使わない", "食器洗い機使用", "2ヶ月", "4ヶ月", "6ヶ月", "8ヶ月", "10ヶ月", "12ヶ月", "" ];			D6.scenario.defSelectData['sel115']= [ '-1', '0', '99', '2', '4', '6', '8', '10', '12' ];
D6.scenario.defInput["i116"] = {  cons:"consHWshower",  title:"節水シャワーヘッド",  unit:"",  text:"節水シャワーヘッドを使っていますか", inputType:"sel116", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"2",d21p:"0",d22t:"1",d22p:"2",d23t:"",d23p:"",d2w:"2",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel116"]= [ "選んで下さい", "使っている", "使っていない", "わからない", "" ];			D6.scenario.defSelectData['sel116']= [ '-1', '1', '2', '3' ];
D6.scenario.defInput["i117"] = {  cons:"consHWtub",  title:"浴槽・ユニットバス",  unit:"",  text:"ユニットバスですか。また浴槽は断熱型ですか", inputType:"sel117", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"3",d21p:"0",d22t:"2",d22p:"1",d23t:"1",d23p:"0",d2w:"1",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel117"]= [ "選んで下さい", "断熱浴槽のユニットバス", "ユニットバス", "ユニットバスでない", "" ];			D6.scenario.defSelectData['sel117']= [ '-1', '1', '2', '3' ];
D6.scenario.defInput["i131"] = {  cons:"consHWtoilet",  title:"便座の保温",  unit:"",  text:"便座の保温をしていますか", inputType:"sel131", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"4",d31p:"2",d32t:"2",d32p:"1",d33t:"1",d33p:"0",d3w:"1",d3d:"0"}; 			D6.scenario.defSelectValue["sel131"]= [ "選んで下さい", "通年している", "夏以外している", "冬のみしている", "していない", "" ];			D6.scenario.defSelectData['sel131']= [ '-1', '1', '2', '3', '4' ];
D6.scenario.defInput["i132"] = {  cons:"consHWtoilet",  title:"便座の温度設定",  unit:"",  text:"便座の温度設定はどうしていますか", inputType:"sel132", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"4",d31p:"0",d32t:"3",d32p:"1",d33t:"2",d33p:"2",d3w:"1",d3d:"0"}; 			D6.scenario.defSelectValue["sel132"]= [ "選んで下さい", "高め", "ふつう", "低め", "わからない", "" ];			D6.scenario.defSelectData['sel132']= [ '-1', '1', '2', '3', '4' ];
D6.scenario.defInput["i133"] = {  cons:"consHWtoilet",  title:"瞬間式保温便座",  unit:"",  text:"瞬間式の保温便座ですか", inputType:"sel133", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel133"]= [ "選んで下さい", "はい", "いいえ", "" ];			D6.scenario.defSelectData['sel133']= [ '-1', '1', '2' ];
D6.scenario.defInput["i134"] = {  cons:"consHWtoilet",  title:"便座のふたを閉める",  unit:"",  text:"使用後に便座のふたを閉めていますか", inputType:"sel134", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"2",d31p:"0",d32t:"1",d32p:"2",d33t:"",d33p:"1",d3w:"1",d3d:""}; 			D6.scenario.defSelectValue["sel134"]= [ "選んで下さい", "はい", "いいえ", "" ];			D6.scenario.defSelectData['sel134']= [ '-1', '1', '2' ];
D6.scenario.defInput["i201"] = {  cons:"consHTsum",  title:"暖房する範囲",  unit:"",  text:"よく暖房をする範囲は、家全体のどのくらいになりますか。", inputType:"sel201", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"1",d11p:"0",d12t:"0.5",d12p:"1",d13t:"0",d13p:"2",d1w:"1",d1d:"0", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel201"]= [ "選んで下さい", "家全体", "家の半分くらい", "家の一部", "1部屋のみ", "部屋の暖房をしない", "" ];			D6.scenario.defSelectData['sel201']= [ '-1', '1', '0.5', '0.25', '0.1', '0.02' ];
D6.scenario.defInput["i202"] = {  cons:"consHTsum",  title:"主に使う暖房器具",  unit:"",  text:"部屋を暖めるために最もよく使う暖房器具のエネルギー源は何ですか。床暖房の場合は熱源で選んでください。", inputType:"sel202", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"6",d11p:"0",d12t:"5",d12p:"2",d13t:"",d13p:"",d1w:"2",d1d:"0", d21t:"6",d21p:"0",d22t:"5",d22p:"2",d23t:"",d23p:"",d2w:"2",d2d:"0", d31t:"5",d31p:"2",d32t:"2",d32p:"0",d33t:"1",d33p:"1",d3w:"2",d3d:"0"}; 			D6.scenario.defSelectValue["sel202"]= [ "選んで下さい", "エアコン", "電気熱暖房", "ガス", "灯油", "薪・ペレットストーブ", "こたつやホットカーペットのみ", "" ];			D6.scenario.defSelectData['sel202']= [ '-1', '1', '2', '3', '4', '5', '6' ];
D6.scenario.defInput["i203"] = {  cons:"consHTsum",  title:"補助的に使う暖房器具",  unit:"",  text:"補助的に使う暖房器具", inputType:"sel203", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel203"]= [ "選んで下さい", "エアコン", "電気熱暖房", "ガス", "灯油", "薪・ペレットストーブ", "こたつやホットカーペットのみ", "" ];			D6.scenario.defSelectData['sel203']= [ '-1', '0', '18', '19', '20', '21', '22', '23', '24', '25', '26' ];
D6.scenario.defInput["i204"] = {  cons:"consHTsum",  title:"暖房時間",  unit:"時間",  text:"冬に暖房は1日に何時間くらい使いますか。", inputType:"sel204", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"24",d11p:"0",d12t:"0",d12p:"2",d13t:"",d13p:"",d1w:"2",d1d:"0", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel204"]= [ "選んで下さい", "使わない", "1時間", "2時間", "3時間", "4時間", "6時間", "8時間", "12時間", "16時間", "24時間", "" ];			D6.scenario.defSelectData['sel204']= [ '-1', '0', '1', '2', '3', '4', '6', '8', '12', '16', '24' ];
D6.scenario.defInput["i205"] = {  cons:"consHTsum",  title:"暖房設定温度",  unit:"℃",  text:"暖房をするときには何℃に設定しますか。設定できない場合はおよそ何℃になっていますか。", inputType:"sel205", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"23",d11p:"0",d12t:"21",d12p:"1",d13t:"0",d13p:"2",d1w:"3",d1d:"0", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"23",d31p:"0",d32t:"21",d32p:"1",d33t:"0",d33p:"2",d3w:"3",d3d:"0"}; 			D6.scenario.defSelectValue["sel205"]= [ "選んで下さい", "使わない", "18℃", "19℃", "20℃", "21℃", "22℃", "23℃", "24℃", "25℃", "26℃以上", "" ];			D6.scenario.defSelectData['sel205']= [ '-1', '0', '18', '19', '20', '21', '22', '23', '24', '25', '26' ];
D6.scenario.defInput["i206"] = {  cons:"consHTsum",  title:"暖房する期間",  unit:"ヶ月",  text:"暖房する期間", inputType:"sel206", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel206"]= [ "選んで下さい", "暖房をしない", "1ヶ月", "2ヶ月", "3ヶ月", "4ヶ月", "5ヶ月", "6ヶ月", "8ヶ月", "10ヶ月", "" ];			D6.scenario.defSelectData['sel206']= [ '-1', '0', '1', '2', '3', '4', '5', '6', '8', '10' ];
D6.scenario.defInput["i211"] = {  cons:"consACheat",  title:"部屋の名前",  unit:"",  text:"部屋の名前", inputType:"", right:"", postfix:"", nodata:"", varType:"String", min:"", max:"", defaultValue:"", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue[""]= [ "", "", "", "" ];			D6.scenario.defSelectData['']= [ '', '', '' ];
D6.scenario.defInput["i212"] = {  cons:"consACheat",  title:"部屋の広さ",  unit:"m2",  text:"冷暖房する部屋の広さを答えてください。吹き抜けがある場合には、その分を2倍してください。", inputType:"sel212", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel212"]= [ "選んで下さい", "4畳半", "6畳", "8畳", "10畳", "12畳", "15畳", "20畳", "25畳", "30畳", "40畳", "" ];			D6.scenario.defSelectData['sel212']= [ '-1', '7.3', '10', '13', '16', '19.5', '24', '33', '41', '49', '65' ];
D6.scenario.defInput["i213"] = {  cons:"consACheat",  title:"窓ガラスの大きさ",  unit:"m2",  text:"サッシや窓のガラスの大きさを、その部屋の合計として答えてください。", inputType:"sel213", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel213"]= [ "選んで下さい", "小窓（90×120）", "腰窓（120×180）", "2枚掃き出し窓（180×180）", "4枚掃き出し窓（180×360）", "掃き出し6枚相当（180×540）", "掃き出し8枚相当（180×720）", "" ];			D6.scenario.defSelectData['sel213']= [ '-1', '1.1', '2.2', '3.3', '6.5', '9.7', '13' ];
D6.scenario.defInput["i214"] = {  cons:"consACheat",  title:"窓ガラスの種類",  unit:"w/m2K",  text:"窓ガラスの種類", inputType:"sel214", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"4",d21p:"2",d22t:"3",d22p:"1",d23t:"",d23p:"",d2w:"1",d2d:"1", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel214"]= [ "選んで下さい", "1枚ガラス", "アルミ複層ガラス", "アルミ以外枠複層ガラス", "二重窓", "low-e複層ガラス", "" ];			D6.scenario.defSelectData['sel214']= [ '-1', '6', '3.5', '2.5', '2.5', '1.5' ];
D6.scenario.defInput["i215"] = {  cons:"consACcool",  title:"エアコンの使用年数",  unit:"年",  text:"エアコンの使用年数", inputType:"sel215", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel215"]= [ "選んで下さい", "持っていない", "1年未満", "3年未満", "5年未満", "7年未満", "10年未満", "15年未満", "20年未満", "20年以上", "" ];			D6.scenario.defSelectData['sel215']= [ '-1', '0', '1', '2', '4', '6', '9', '13', '18', '25' ];
D6.scenario.defInput["i216"] = {  cons:"consACcool",  title:"エアコン性能",  unit:"",  text:"エアコンを購入したときには、省エネ型を選びましたか", inputType:"sel216", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"2",d11p:"0",d12t:"1",d12p:"2",d13t:"",d13p:"",d1w:"2",d1d:"0", d21t:"2",d21p:"0",d22t:"1",d22p:"2",d23t:"",d23p:"",d2w:"2",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel216"]= [ "選んで下さい", "はい", "いいえ", "わからない", "" ];			D6.scenario.defSelectData['sel216']= [ '-1', '1', '2', '3' ];
D6.scenario.defInput["i217"] = {  cons:"consACcool",  title:"エアコンのフィルター掃除",  unit:"",  text:"エアコンのフィルター掃除をしていますか", inputType:"sel217", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"2",d31p:"0",d32t:"1",d32p:"2",d33t:"",d33p:"",d3w:"1",d3d:"0"}; 			D6.scenario.defSelectValue["sel217"]= [ "選んで下さい", "している", "していない", "わからない", "" ];			D6.scenario.defSelectData['sel217']= [ '-1', '1', '2', '3' ];
D6.scenario.defInput["i231"] = {  cons:"consACheat",  title:"主に使う暖房器具",  unit:"",  text:"部屋を暖めるために最もよく使う暖房器具のエネルギー源は何ですか。床暖房の場合は熱源で選んでください。", inputType:"sel231", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel231"]= [ "選んで下さい", "エアコン", "電気熱暖房", "ガス", "灯油", "薪・ペレットストーブ", "こたつやホットカーペットのみ", "" ];			D6.scenario.defSelectData['sel231']= [ '-1', '1', '2', '3', '4', '5', '6' ];
D6.scenario.defInput["i232"] = {  cons:"consACheat",  title:"補助的に使う暖房器具",  unit:"",  text:"補助的に使う暖房器具", inputType:"sel232", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel232"]= [ "選んで下さい", "エアコン", "電気熱暖房", "ガス", "灯油", "薪・ペレットストーブ", "こたつやホットカーペットのみ", "" ];			D6.scenario.defSelectData['sel232']= [ '-1', '0', '18', '19', '20', '21', '22', '23', '24', '25', '26' ];
D6.scenario.defInput["i233"] = {  cons:"consACheat",  title:"暖房時間",  unit:"時間",  text:"冬に暖房は1日に何時間くらい使いますか。", inputType:"sel233", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel233"]= [ "選んで下さい", "使わない", "1時間", "2時間", "3時間", "4時間", "6時間", "8時間", "12時間", "16時間", "24時間", "" ];			D6.scenario.defSelectData['sel233']= [ '-1', '0', '1', '2', '3', '4', '6', '8', '12', '16', '24' ];
D6.scenario.defInput["i234"] = {  cons:"consACheat",  title:"暖房設定温度",  unit:"℃",  text:"暖房をするときには何℃に設定しますか。設定できない場合はおよそ何℃になっていますか。", inputType:"sel234", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel234"]= [ "選んで下さい", "使わない", "18℃", "19℃", "20℃", "21℃", "22℃", "23℃", "24℃", "25℃", "26℃以上", "" ];			D6.scenario.defSelectData['sel234']= [ '-1', '0', '18', '19', '20', '21', '22', '23', '24', '25', '26' ];
D6.scenario.defInput["i235"] = {  cons:"consACheat",  title:"暖房する期間",  unit:"ヶ月",  text:"暖房する期間", inputType:"sel235", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel235"]= [ "選んで下さい", "暖房をしない", "1ヶ月", "2ヶ月", "3ヶ月", "4ヶ月", "5ヶ月", "6ヶ月", "8ヶ月", "10ヶ月", "" ];			D6.scenario.defSelectData['sel235']= [ '-1', '0', '1', '2', '3', '4', '5', '6', '8', '10' ];
D6.scenario.defInput["i236"] = {  cons:"consACheat",  title:"加湿器の使用期間",  unit:"ヶ月",  text:"加湿器の使用期間", inputType:"sel236", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel236"]= [ "選んで下さい", "加湿をしない", "1ヶ月", "2ヶ月", "3ヶ月", "4ヶ月", "5ヶ月", "6ヶ月", "" ];			D6.scenario.defSelectData['sel236']= [ '-1', '0', '1', '2', '3', '4', '5', '6' ];
D6.scenario.defInput["i237"] = {  cons:"consACheat",  title:"断熱シートの設置",  unit:"",  text:"冬場の厚手のカーテン・断熱シートの設置", inputType:"sel237", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel237"]= [ "選んで下さい", "している", "していない", "" ];			D6.scenario.defSelectData['sel237']= [ '-1', '1', '2' ];
D6.scenario.defInput["i238"] = {  cons:"consACheat",  title:"部屋を戸で締め切れますか",  unit:"",  text:"部屋を戸で締め切れますか", inputType:"sel238", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel238"]= [ "選んで下さい", "できる", "できない", "" ];			D6.scenario.defSelectData['sel238']= [ '-1', '1', '2' ];
D6.scenario.defInput["i239"] = {  cons:"consACheat",  title:"吹き抜け",  unit:"",  text:"吹き抜けもしくは、部屋から階段で上階に上がれますか", inputType:"sel239", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel239"]= [ "選んで下さい", "ある", "ない", "" ];			D6.scenario.defSelectData['sel239']= [ '-1', '1', '2' ];
D6.scenario.defInput["i240"] = {  cons:"consACheat",  title:"部屋のしきりによる暖房面積の削減",  unit:"",  text:"部屋のしきりによる暖房面積の削減", inputType:"sel240", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel240"]= [ "選んで下さい", "できない", "2割減", "3～4割減", "半減", "6～7割減", "" ];			D6.scenario.defSelectData['sel240']= [ '-1', '0', '2', '3', '5', '7' ];
D6.scenario.defInput["i241"] = {  cons:"consACheat",  title:"電気ストーブの使用時間",  unit:"",  text:"電気ストーブ・オイルヒータの使用時間", inputType:"sel241", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel241"]= [ "選んで下さい", "使わない", "1時間", "2時間", "3時間", "4時間", "6時間", "8時間", "12時間", "16時間", "24時間", "" ];			D6.scenario.defSelectData['sel241']= [ '-1', '0', '1', '2', '3', '4', '6', '8', '12', '16', '24' ];
D6.scenario.defInput["i242"] = {  cons:"consACheat",  title:"部屋の寒さ",  unit:"",  text:"その部屋は暖房は効きますか", inputType:"sel242", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel242"]= [ "選んで下さい", "暖房すると寒さは感じない", "やや寒い", "なかなか暖まらない", "暖房しても寒い", "暖房はしない", "" ];			D6.scenario.defSelectData['sel242']= [ '-1', '1', '2', '3', '4', '5' ];
D6.scenario.defInput["i243"] = {  cons:"consHTsum",  title:"窓の結露の有無",  unit:"",  text:"窓の結露はありますか", inputType:"sel243", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel243"]= [ "選んで下さい", "よく結露する", "少し結露する", "ほとんど結露しない", "結露しない", "わからない", "" ];			D6.scenario.defSelectData['sel243']= [ '-1', '1', '2', '3', '4', '5' ];
D6.scenario.defInput["i244"] = {  cons:"consHTsum",  title:"押入れなどの壁面の結露",  unit:"",  text:"押入れなどの壁面の結露はありますか", inputType:"sel244", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel244"]= [ "選んで下さい", "よく結露する", "少し結露する", "ほとんど結露しない", "結露しない", "わからない", "" ];			D6.scenario.defSelectData['sel244']= [ '-1', '1', '2', '3', '4', '5' ];
D6.scenario.defInput["i245"] = {  cons:"consHTsum",  title:"朝方寒さを感じること",  unit:"ヶ月",  text:"最も実感できる寒さを選んで下さい", inputType:"sel245", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel245"]= [ "選んで下さい", "寒さで朝起きるのがつらい", "手足が冷たい", "窓に霜がつく", "部屋で息が白く曇る", "" ];			D6.scenario.defSelectData['sel245']= [ '-1', '1', '2', '3', '4', '5' ];
D6.scenario.defInput["i246"] = {  cons:"consHTsum",  title:"朝方の寒さが始まる時期",  unit:"",  text:"朝方の寒さはいつからですか", inputType:"sel246", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel246"]= [ "選んで下さい", "10月上旬", "10月下旬", "11月上旬", "11月下旬", "12月上旬", "12月下旬", "1月上旬", "1月下旬", "" ];			D6.scenario.defSelectData['sel246']= [ '-1', '1', '2', '3', '4', '5', '6', '7', '8' ];
D6.scenario.defInput["i247"] = {  cons:"consHTsum",  title:"朝方の寒さが終わる時期",  unit:"",  text:"朝方の寒さはいつまでですか", inputType:"sel247", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel247"]= [ "選んで下さい", "2月上旬", "2月下旬", "3月上旬", "3月下旬", "4月上旬", "4月下旬", "5月上旬", "5月下旬", "" ];			D6.scenario.defSelectData['sel247']= [ '-1', '1', '2', '3', '4', '5', '6', '7', '8' ];
D6.scenario.defInput["i248"] = {  cons:"consHTsum",  title:"厚着の工夫",  unit:"",  text:"暖房をつけるまえにまず厚着をするよう心がけていますか", inputType:"sel248", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"3",d11p:"0",d12t:"2",d12p:"1",d13t:"1",d13p:"2",d1w:"1",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"3",d31p:"0",d32t:"2",d32p:"1",d33t:"1",d33p:"2",d3w:"1",d3d:"1"}; 			D6.scenario.defSelectValue["sel248"]= [ "選んで下さい", "常にしている", "だいたいしている", "時々している", "していない", "" ];			D6.scenario.defSelectData['sel248']= [ '-1', '1', '2', '3', '4' ];
D6.scenario.defInput["i249"] = {  cons:"consHTsum",  title:"不在部屋の暖房",  unit:"",  text:"人がいない部屋を暖房しないようにしていますか", inputType:"sel249", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"4",d11p:"2",d12t:"3",d12p:"1",d13t:"",d13p:"",d1w:"1",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"4",d31p:"2",d32t:"3",d32p:"1",d33t:"",d33p:"",d3w:"2",d3d:"1"}; 			D6.scenario.defSelectValue["sel249"]= [ "選んで下さい", "常にしている", "だいたいしている", "時々している", "していない", "" ];			D6.scenario.defSelectData['sel249']= [ '-1', '1', '2', '3', '4' ];
D6.scenario.defInput["i261"] = {  cons:"consCOsum",  title:"冷房時間",  unit:"時間",  text:"夏に冷房は1日に何時間くらい使いますか。", inputType:"sel261", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"24",d31p:"0",d32t:"8",d32p:"1",d33t:"",d33p:"",d3w:"1",d3d:"1"}; 			D6.scenario.defSelectValue["sel261"]= [ "選んで下さい", "使わない", "1時間", "2時間", "3時間", "4時間", "6時間", "8時間", "12時間", "16時間", "24時間", "" ];			D6.scenario.defSelectData['sel261']= [ '-1', '0', '1', '2', '3', '4', '6', '8', '12', '16', '24' ];
D6.scenario.defInput["i262"] = {  cons:"consCOsum",  title:"冷房時間帯",  unit:"",  text:"主にいつの時間帯に冷房を使いますか", inputType:"sel262", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel262"]= [ "選んで下さい", "使わない", "朝", "昼", "夕方", "夜", "" ];			D6.scenario.defSelectData['sel262']= [ '-1', '0', '1', '2', '3', '4' ];
D6.scenario.defInput["i263"] = {  cons:"consCOsum",  title:"冷房設定温度",  unit:"℃",  text:"冷房をするときには何℃に設定しますか。", inputType:"sel263", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"28",d11p:"2",d12t:"25",d12p:"1",d13t:"",d13p:"",d1w:"1",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"28",d31p:"2",d32t:"25",d32p:"1",d33t:"",d33p:"",d3w:"1",d3d:"1"}; 			D6.scenario.defSelectValue["sel263"]= [ "選んで下さい", "24℃以下", "25℃", "26℃", "27℃", "28℃", "29℃", "30℃", "使わない", "" ];			D6.scenario.defSelectData['sel263']= [ '-1', '24', '25', '26', '27', '28', '29', '30', '0' ];
D6.scenario.defInput["i264"] = {  cons:"consCOsum",  title:"冷房する期間（除湿含む）",  unit:"ヶ月",  text:"冷房する期間（除湿含む）", inputType:"sel264", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel264"]= [ "選んで下さい", "冷房をしない", "1ヶ月", "2ヶ月", "3ヶ月", "4ヶ月", "5ヶ月", "6ヶ月", "" ];			D6.scenario.defSelectData['sel264']= [ '-1', '0', '1', '2', '3', '4', '5', '6' ];
D6.scenario.defInput["i265"] = {  cons:"consCOsum",  title:"部屋の暑さ",  unit:"",  text:"その部屋は暑いですか", inputType:"sel265", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel265"]= [ "選んで下さい", "冷房すると暑さは感じない", "やや暑い", "なかなか涼しくならなお", "冷房しても暑い", "冷房はしない", "" ];			D6.scenario.defSelectData['sel265']= [ '-1', '1', '2', '3', '4', '5' ];
D6.scenario.defInput["i266"] = {  cons:"consCOsum",  title:"日射流入の有無",  unit:"",  text:"夏の朝や夕方に日光が部屋に入りますか", inputType:"sel266", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel266"]= [ "選んで下さい", "よく入る", "少しはいる", "入らない", "わからない", "" ];			D6.scenario.defSelectData['sel266']= [ '-1', '1', '2', '3', '4' ];
D6.scenario.defInput["i267"] = {  cons:"consCOsum",  title:"日射カット",  unit:"",  text:"西日や朝日が入ると部屋が暑くなります。日射が入らないように工夫していますか", inputType:"sel267", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"4",d11p:"0",d12t:"2",d12p:"1",d13t:"1",d13p:"2",d1w:"1",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"4",d31p:"0",d32t:"2",d32p:"1",d33t:"1",d33p:"2",d3w:"1",d3d:"1"}; 			D6.scenario.defSelectValue["sel267"]= [ "選んで下さい", "常にしている", "だいたいしている", "時々している", "していない", "" ];			D6.scenario.defSelectData['sel267']= [ '-1', '1', '2', '3', '4' ];
D6.scenario.defInput["i268"] = {  cons:"consCOsum",  title:"扇風機利用",  unit:"",  text:"扇風機を活用するなどしてエアコンをなるべく使わないようにしていますか", inputType:"sel268", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"4",d31p:"0",d32t:"2",d32p:"1",d33t:"1",d33p:"2",d3w:"1",d3d:"1"}; 			D6.scenario.defSelectValue["sel268"]= [ "選んで下さい", "常にしている", "だいたいしている", "時々している", "していない", "" ];			D6.scenario.defSelectData['sel268']= [ '-1', '1', '2', '3', '4' ];
D6.scenario.defInput["i271"] = {  cons:"consACcool",  title:"冷房時間",  unit:"時間",  text:"夏に冷房は1日に何時間くらい使いますか。", inputType:"sel271", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"10",d31p:"0",d32t:"4",d32p:"1",d33t:"0",d33p:"2",d3w:"1",d3d:"1"}; 			D6.scenario.defSelectValue["sel271"]= [ "選んで下さい", "使わない", "1時間", "2時間", "3時間", "4時間", "6時間", "8時間", "12時間", "16時間", "24時間", "" ];			D6.scenario.defSelectData['sel271']= [ '-1', '0', '1', '2', '3', '4', '6', '8', '12', '16', '24' ];
D6.scenario.defInput["i272"] = {  cons:"consACcool",  title:"冷房時間帯",  unit:"",  text:"主にいつの時間帯に冷房を使いますか", inputType:"sel272", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel272"]= [ "選んで下さい", "使わない", "朝", "昼", "夕方", "夜", "" ];			D6.scenario.defSelectData['sel272']= [ '-1', '0', '1', '2', '3', '4' ];
D6.scenario.defInput["i273"] = {  cons:"consACcool",  title:"冷房設定温度",  unit:"℃",  text:"冷房をするときには何℃に設定しますか。", inputType:"sel273", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel273"]= [ "選んで下さい", "24℃以下", "25℃", "26℃", "27℃", "28℃", "29℃", "30℃", "使わない", "" ];			D6.scenario.defSelectData['sel273']= [ '-1', '24', '25', '26', '27', '28', '29', '30', '0' ];
D6.scenario.defInput["i274"] = {  cons:"consACcool",  title:"冷房する期間（除湿含む）",  unit:"ヶ月",  text:"冷房する期間（除湿含む）", inputType:"sel274", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel274"]= [ "選んで下さい", "冷房をしない", "1ヶ月", "2ヶ月", "3ヶ月", "4ヶ月", "5ヶ月", "6ヶ月", "" ];			D6.scenario.defSelectData['sel274']= [ '-1', '0', '1', '2', '3', '4', '5', '6' ];
D6.scenario.defInput["i275"] = {  cons:"consACcool",  title:"部屋の暑さ",  unit:"",  text:"その部屋は暑いですか", inputType:"sel275", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel275"]= [ "選んで下さい", "冷房すると暑さは感じない", "やや暑い", "なかなか涼しくならなお", "冷房しても暑い", "冷房はしない", "" ];			D6.scenario.defSelectData['sel275']= [ '-1', '1', '2', '3', '4', '5' ];
D6.scenario.defInput["i276"] = {  cons:"consACcool",  title:"日射流入の有無",  unit:"",  text:"夏の朝や夕方に日光が部屋に入りますか", inputType:"sel276", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel276"]= [ "選んで下さい", "よく入る", "少しはいる", "入らない", "わからない", "" ];			D6.scenario.defSelectData['sel276']= [ '-1', '1', '2', '3', '4' ];
D6.scenario.defInput["i277"] = {  cons:"consACcool",  title:"日射カット",  unit:"",  text:"西日や朝日が入ると部屋が暑くなります。日射が入らないように工夫していますか", inputType:"sel277", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel277"]= [ "選んで下さい", "常にしている", "だいたいしている", "時々している", "していない", "" ];			D6.scenario.defSelectData['sel277']= [ '-1', '1', '2', '3', '4' ];
D6.scenario.defInput["i278"] = {  cons:"consACcool",  title:"扇風機利用",  unit:"",  text:"扇風機を活用するなどしてエアコンをなるべく使わないようにしていますか", inputType:"sel278", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel278"]= [ "選んで下さい", "常にしている", "だいたいしている", "時々している", "していない", "" ];			D6.scenario.defSelectData['sel278']= [ '-1', '1', '2', '3', '4' ];
D6.scenario.defInput["i281"] = {  cons:"consHTcold",  title:"セントラルヒーティング",  unit:"",  text:"セントラルヒーティングですか", inputType:"sel281", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel281"]= [ "選んで下さい", "はい", "いいえ", "" ];			D6.scenario.defSelectData['sel281']= [ '-1', '1', '2' ];
D6.scenario.defInput["i282"] = {  cons:"consHTcold",  title:"セントラル熱源",  unit:"",  text:"セントラルヒーティングの熱源は", inputType:"sel282", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel282"]= [ "選んで下さい", "灯油", "電気", "電気（ヒートポンプ）", "ガス", "ハイブリッド（ヒートポンプ＋ガス）", "地域熱供給", "" ];			D6.scenario.defSelectData['sel282']= [ '-1', '1', '2', '3', '4', '5', '6' ];
D6.scenario.defInput["i283"] = {  cons:"consHTcold",  title:"セントラル専用熱源",  unit:"",  text:"セントラルの熱源機と風呂の熱源は別ですか", inputType:"sel283", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel283"]= [ "選んで下さい", "セントラル専用", "風呂と共用", "" ];			D6.scenario.defSelectData['sel283']= [ '-1', '1', '2' ];
D6.scenario.defInput["i284"] = {  cons:"consHTcold",  title:"セントラル暖房期間",  unit:"",  text:"セントラル暖房を使う期間は", inputType:"sel284", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel284"]= [ "選んで下さい", "使わない", "1ヶ月", "2ヶ月", "3ヶ月", "4ヶ月", "5ヶ月", "6ヶ月", "8ヶ月", "" ];			D6.scenario.defSelectData['sel284']= [ '-1', '0', '1', '2', '3', '4', '5', '6', '8' ];
D6.scenario.defInput["i285"] = {  cons:"consHTsum",  title:"熱交換換気",  unit:"",  text:"熱交換式の換気ですか", inputType:"sel285", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"2",d11p:"0",d12t:"1",d12p:"2",d13t:"",d13p:"",d1w:"1",d1d:"0", d21t:"2",d21p:"0",d22t:"1",d22p:"2",d23t:"",d23p:"",d2w:"1",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel285"]= [ "選んで下さい", "はい", "いいえ", "" ];			D6.scenario.defSelectData['sel285']= [ '-1', '1', '2' ];
D6.scenario.defInput["i286"] = {  cons:"consHTcold",  title:"ロードヒーティング",  unit:"",  text:"ロードヒーティングを使っていますか", inputType:"sel286", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel286"]= [ "選んで下さい", "はい", "いいえ", "" ];			D6.scenario.defSelectData['sel286']= [ '-1', '1', '2' ];
D6.scenario.defInput["i287"] = {  cons:"consHTcold",  title:"ロードヒーティング熱源",  unit:"",  text:"ロードヒーティングの熱源", inputType:"sel287", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel287"]= [ "選んで下さい", "灯油", "電気", "電気（ヒートポンプ）", "ガス", "ハイブリッド（ヒートポンプ＋ガス）", "地域熱供給", "" ];			D6.scenario.defSelectData['sel287']= [ '-1', '1', '2', '3', '4', '5', '6' ];
D6.scenario.defInput["i288"] = {  cons:"consHTcold",  title:"ロードヒーティング面積",  unit:"",  text:"ロードヒーティング面積", inputType:"sel288", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel288"]= [ "選んで下さい", "1坪（3m2)", "2坪（7m2)", "3坪（10m2)", "5坪（15m2)", "10坪（30m2)", "15坪（50m2)", "20坪（65m2)", "30坪（100m2)", "" ];			D6.scenario.defSelectData['sel288']= [ '-1', '3', '7', '10', '15', '30', '50', '65', '100' ];
D6.scenario.defInput["i289"] = {  cons:"consHTcold",  title:"ロードヒーティング利用頻度",  unit:"",  text:"ロードヒーティング利用頻度", inputType:"sel289", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel289"]= [ "選んで下さい", "年2-3日", "月に1日くらい", "月に2〜3日", "週に2〜3日", "センサーで常時ON", "センサーなしで常時ON", "" ];			D6.scenario.defSelectData['sel289']= [ '-1', '2', '6', '12', '30', '50', '100' ];
D6.scenario.defInput["i290"] = {  cons:"consHTcold",  title:"ルーフヒーティングの利用",  unit:"",  text:"ルーフヒーティングを使っていますか", inputType:"sel290", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel290"]= [ "選んで下さい", "はい", "いいえ", "" ];			D6.scenario.defSelectData['sel290']= [ '-1', '1', '2' ];
D6.scenario.defInput["i291"] = {  cons:"consHTcold",  title:"ルーフヒーティングの対象面積",  unit:"",  text:"ルーフヒーティングの対象面積", inputType:"sel291", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel291"]= [ "選んで下さい", ":樋のまわりのみ", "屋根面全体", "" ];			D6.scenario.defSelectData['sel291']= [ '-1', '10', '30' ];
D6.scenario.defInput["i292"] = {  cons:"consHTcold",  title:"ルーフヒーティングの熱源",  unit:"",  text:"ルーフヒーティングの熱源", inputType:"sel292", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel292"]= [ "選んで下さい", "灯油", "電気", "電気（ヒートポンプ）", "ガス", "コジェネ（ガス）", "コジェネ（灯油）", "地域熱供給", "" ];			D6.scenario.defSelectData['sel292']= [ '-1', '1', '2', '3', '4', '5', '6' ];
D6.scenario.defInput["i293"] = {  cons:"consHTcold",  title:"ルーフヒーティングの利用頻度",  unit:"",  text:"ルーフヒーティングを使う頻度は", inputType:"sel293", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel293"]= [ "選んで下さい", "年2-3日", "月に1日くらい", "月に2〜3日", "週に2〜3日", "センサーで常時ON", "センサーなしで常時ON", "" ];			D6.scenario.defSelectData['sel293']= [ '-1', '2', '6', '15', '30', '50', '100' ];
D6.scenario.defInput["i294"] = {  cons:"consHTcold",  title:"融雪槽の利用",  unit:"",  text:"融雪槽の利用", inputType:"sel294", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel294"]= [ "選んで下さい", "はい", "いいえ", "わからない", "" ];			D6.scenario.defSelectData['sel294']= [ '-1', '1', '2', '3' ];
D6.scenario.defInput["i295"] = {  cons:"consHTcold",  title:"融雪槽の熱源",  unit:"",  text:"融雪槽の熱源", inputType:"sel295", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel295"]= [ "選んで下さい", "灯油", "電気", "電気（ヒートポンプ）", "ガス", "コジェネ（ガス）", "コジェネ（灯油）", "地域熱供給", "" ];			D6.scenario.defSelectData['sel295']= [ '-1', '1', '2', '3', '4', '5', '6' ];
D6.scenario.defInput["i401"] = {  cons:"consDRsum",  title:"衣類乾燥機の利用頻度",  unit:"",  text:"洗濯の乾燥機や乾燥機能を使っていますか。使っている場合にはどの程度使うのか選んで下さい。", inputType:"sel401", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"5",d11p:"0",d12t:"3",d12p:"1",d13t:"0",d13p:"2",d1w:"2",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel401"]= [ "選んで下さい", "使わない", "月1～3回", "週1～2回", "2日に1回", "毎日", "" ];			D6.scenario.defSelectData['sel401']= [ '-1', '5', '4', '3', '2', '1' ];
D6.scenario.defInput["i402"] = {  cons:"consDRsum",  title:"乾燥機の種類",  unit:"",  text:"乾燥機の種類", inputType:"sel402", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel402"]= [ "選んで下さい", "電気(ヒートポンプ式）", "電気", "ガス", "わからない", "持っていない", "" ];			D6.scenario.defSelectData['sel402']= [ '-1', '1', '2' ];
D6.scenario.defInput["i403"] = {  cons:"consDRsum",  title:"洗濯の頻度",  unit:"",  text:"洗濯機の使い方はどうですか", inputType:"sel403", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel403"]= [ "選んで下さい", "毎日何回も洗濯機を回す", "毎日2回程度洗濯機を回す", "毎日1回洗濯機を回す", "汚れ物がたまったら洗濯機を回す", "わからない", "" ];			D6.scenario.defSelectData['sel403']= [ '-1', '4', '2', '1', '0.5', '1' ];
D6.scenario.defInput["i411"] = {  cons:"consDRsum",  title:"掃除機の強弱",  unit:"",  text:"掃除機の強弱の設定はどうしていますか", inputType:"sel411", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel411"]= [ "選んで下さい", "ほとんど強で使っている", "場所により使い分けている", "基本、弱で使っている", "設定がない", "わからない", "" ];			D6.scenario.defSelectData['sel411']= [ '-1', '1', '2', '3', '4', '5', '6' ];
D6.scenario.defInput["i412"] = {  cons:"consDRsum",  title:"掃除機利用",  unit:"分/日",  text:"掃除機を１日にどの程度使いますか", inputType:"sel412", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel412"]= [ "選んで下さい", "ほとんど使わない", "5分", "10分", "15分", "30分", "1時間", "ロボット掃除機を使用", "わからない", "" ];			D6.scenario.defSelectData['sel412']= [ '-1', '0', '5', '10', '15', '30', '60', '11', '12' ];
D6.scenario.defInput["i501"] = {  cons:"consLIsum",  title:"リビングの照明",  unit:"W",  text:"リビングの照明器具には、主に何を使っていますか。", inputType:"sel501", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"3",d21p:"2",d22t:"2",d22p:"1",d23t:"",d23p:"",d2w:"1",d2d:"1", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel501"]= [ "選んで下さい", "白熱電球", "蛍光灯", "LED", "" ];			D6.scenario.defSelectData['sel501']= [ '-1', '1', '2', '3' ];
D6.scenario.defInput["i502"] = {  cons:"consLIsum",  title:"不在部屋の照明",  unit:"",  text:"人がいない部屋の照明は消していますか", inputType:"sel502", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"3",d11p:"2",d12t:"2",d12p:"1",d13t:"",d13p:"",d1w:"1",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"3",d31p:"2",d32t:"2",d32p:"1",d33t:"",d33p:"",d3w:"1",d3d:"1"}; 			D6.scenario.defSelectValue["sel502"]= [ "選んで下さい", "全てつける", "つけっぱなしの場所もある", "ほとんど消している", "消している", "" ];			D6.scenario.defSelectData['sel502']= [ '-1', '10', '6', '2', '0' ];
D6.scenario.defInput["i511"] = {  cons:"consLI",  title:"照明の場所",  unit:"",  text:"", inputType:"sel511", right:"1", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel511"]= [ "選んで下さい", "玄関", "門灯", "廊下", "トイレ", "脱衣所", "風呂", "居室", "" ];			D6.scenario.defSelectData['sel511']= [ '-1', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10' ];
D6.scenario.defInput["i512"] = {  cons:"consLI",  title:"照明の種類",  unit:"",  text:"", inputType:"sel512", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel512"]= [ "選んで下さい", "白熱電球", "電球形蛍光灯", "蛍光灯", "細管蛍光灯", "LED", "センサー式ライト", "" ];			D6.scenario.defSelectData['sel512']= [ '-1', '1', '2', '3', '4', '5', '6' ];
D6.scenario.defInput["i513"] = {  cons:"consLI",  title:"1球（本）の消費電力",  unit:"W",  text:"", inputType:"sel513", right:"1", postfix:"Number", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel513"]= [ "選んで下さい", "5W", "10W", "15W", "20W", "30W", "40W", "60W", "80W", "100W", "" ];			D6.scenario.defSelectData['sel513']= [ '-1', '5', '10', '15', '20', '30', '40', '60', '80', '100' ];
D6.scenario.defInput["i514"] = {  cons:"consLI",  title:"球数・本数",  unit:"球・本",  text:"中に複数ある場合、何球・何本ありますか", inputType:"sel514", right:"1", postfix:"Number", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel514"]= [ "選んで下さい", "1球・本", "2球・本", "3球・本", "4球・本", "6球・本", "8球・本", "10球・本", "15球・本", "20球・本", "30球・本", "" ];			D6.scenario.defSelectData['sel514']= [ '-1', '1', '2', '3', '4', '6', '8', '10', '15', '20', '30' ];
D6.scenario.defInput["i515"] = {  cons:"consLI",  title:"照明の使用時間",  unit:"時間/日",  text:"1日に何時間使いますか", inputType:"sel515", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel515"]= [ "選んで下さい", "使わない", "1時間", "2時間", "3時間", "4時間", "6時間", "8時間", "12時間", "16時間", "24時間", "" ];			D6.scenario.defSelectData['sel515']= [ '-1', '0', '1', '2', '3', '4', '6', '8', '12', '16', '24' ];
D6.scenario.defInput["i601"] = {  cons:"consTVsum",  title:"テレビの時間",  unit:"時間",  text:"家にある全てのテレビの合計で、１日に何時間点けていますか。テレビゲームの時間も含めて下さい。", inputType:"sel601", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel601"]= [ "選んで下さい", "使わない", "2時間", "4時間", "6時間", "8時間", "12時間", "16時間", "24時間", "32時間", "40時間", "" ];			D6.scenario.defSelectData['sel601']= [ '-1', '0', '2', '4', '6', '8', '12', '16', '24', '32', '40' ];
D6.scenario.defInput["i631"] = {  cons:"consTV",  title:"テレビのサイズ",  unit:"インチ",  text:"テレビのサイズ", inputType:"sel631", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel631"]= [ "選んで下さい", "持っていない", "20インチ未満", "20～30インチ", "30～40インチ", "40～50インチ", "50～65インチ", "65インチ以上", "" ];			D6.scenario.defSelectData['sel631']= [ '-1', '0', '18', '25', '35', '45', '60', '70' ];
D6.scenario.defInput["i632"] = {  cons:"consTV",  title:"テレビの使用年数",  unit:"年",  text:"テレビの使用年数", inputType:"sel632", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel632"]= [ "選んで下さい", "持っていない", "1年未満", "3年未満", "5年未満", "7年未満", "10年未満", "15年未満", "20年未満", "20年以上", "" ];			D6.scenario.defSelectData['sel632']= [ '-1', '0', '1', '2', '4', '6', '9', '13', '18', '25' ];
D6.scenario.defInput["i633"] = {  cons:"consTV",  title:"テレビの時間",  unit:"年",  text:"テレビの使用年数", inputType:"sel633", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel633"]= [ "選んで下さい", "使わない", "2時間", "4時間", "6時間", "8時間", "12時間", "16時間", "24時間", "" ];			D6.scenario.defSelectData['sel633']= [ '-1', '0', '2', '4', '6', '8', '12', '16', '24' ];
D6.scenario.defInput["i701"] = {  cons:"consRFsum",  title:"冷蔵庫の台数",  unit:"台",  text:"冷蔵庫を何台使っていますか。ストッカー（冷凍庫）も1台と数えて下さい。", inputType:"sel701", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"2",d11p:"0",d12t:"0",d12p:"2",d13t:"",d13p:"",d1w:"1",d1d:"2", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"2",d31p:"0",d32t:"0",d32p:"2",d33t:"",d33p:"",d3w:"1",d3d:"2"}; 			D6.scenario.defSelectValue["sel701"]= [ "選んで下さい", "持っていない", "1台", "2台", "3台", "4台", "5台", "" ];			D6.scenario.defSelectData['sel701']= [ '-1', '0', '1', '2', '3', '4', '5' ];
D6.scenario.defInput["i711"] = {  cons:"consRF",  title:"冷蔵庫の使用年数",  unit:"年",  text:"冷蔵庫の使用年数", inputType:"sel711", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel711"]= [ "選んで下さい", "持っていない", "1年未満", "3年未満", "5年未満", "7年未満", "10年未満", "15年未満", "20年未満", "20年以上", "" ];			D6.scenario.defSelectData['sel711']= [ '-1', '0', '0', '2', '4', '6', '8', '12', '17', '25' ];
D6.scenario.defInput["i712"] = {  cons:"consRF",  title:"冷蔵庫の種類",  unit:"",  text:"冷蔵庫の種類", inputType:"sel712", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel712"]= [ "選んで下さい", "冷凍冷蔵庫", "冷凍庫（ストッカー）", "" ];			D6.scenario.defSelectData['sel712']= [ '-1', '1', '2' ];
D6.scenario.defInput["i713"] = {  cons:"consRF",  title:"定格内容量",  unit:"",  text:"定格内容量", inputType:"sel713", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel713"]= [ "選んで下さい", "100L未満", "101-200リットル", "201-300リットル", "301-400リットル", "401-500リットル", "501リットル以上", "" ];			D6.scenario.defSelectData['sel713']= [ '-1', '80', '150', '250', '350', '450', '550' ];
D6.scenario.defInput["i714"] = {  cons:"consRF",  title:"冷蔵庫温度設定",  unit:"",  text:"温度設定はどうしていますか", inputType:"sel714", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"4",d31p:"1",d32t:"3",d32p:"2",d33t:"0",d33p:"1",d3w:"1",d3d:"1"}; 			D6.scenario.defSelectValue["sel714"]= [ "選んで下さい", "強", "中", "弱", "わからない", "" ];			D6.scenario.defSelectData['sel714']= [ '-1', '1', '2', '3', '4' ];
D6.scenario.defInput["i715"] = {  cons:"consRF",  title:"中身のつめすぎ",  unit:"",  text:"つめすぎないように心がけていますか", inputType:"sel715", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel715"]= [ "選んで下さい", "気をつけている", "あまりできていない", "できていない", "わからない", "" ];			D6.scenario.defSelectData['sel715']= [ '-1', '1', '2', '3', '4' ];
D6.scenario.defInput["i716"] = {  cons:"consRF",  title:"壁からすきまを開けた設置",  unit:"",  text:"側面・裏面に5cm程度のすきまをあけていますか", inputType:"sel716", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel716"]= [ "選んで下さい", "できている", "できていない", "わからない", "" ];			D6.scenario.defSelectData['sel716']= [ '-1', '1', '2', '3' ];
D6.scenario.defInput["i801"] = {  cons:"consCKcook",  title:"コンロの熱源",  unit:"",  text:"コンロの熱源は", inputType:"sel801", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel801"]= [ "選んで下さい", "ガス", "電気(IHなど）", "わからない", "" ];			D6.scenario.defSelectData['sel801']= [ '-1', '1', '2', '3' ];
D6.scenario.defInput["i802"] = {  cons:"consCKcook",  title:"調理の頻度",  unit:"割",  text:"調理の頻度", inputType:"sel802", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel802"]= [ "選んで下さい", "しない", "週１食以下", "週に2-3食", "1日1食", "1日2食", "1日3食", "" ];			D6.scenario.defSelectData['sel802']= [ '-1', '0', '1', '2', '4', '7', '10' ];
D6.scenario.defInput["i811"] = {  cons:"consCKrice",  title:"ジャーの保温",  unit:"",  text:"炊飯ジャーの保温をしていますか", inputType:"sel811", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel811"]= [ "選んで下さい", "していない", "6時間程度している", "12時間程度している", "ほぼ24時間している", "" ];			D6.scenario.defSelectData['sel811']= [ '-1', '0', '6', '12', '24' ];
D6.scenario.defInput["i821"] = {  cons:"consCKpot",  title:"ポットの保温",  unit:"",  text:"ポットの保温をしていますか", inputType:"sel821", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"10",d11p:"0",d12t:"4",d12p:"1",d13t:"0",d13p:"2",d1w:"1",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"10",d31p:"0",d32t:"4",d32p:"1",d33t:"0",d33p:"2",d3w:"1",d3d:"1"}; 			D6.scenario.defSelectValue["sel821"]= [ "選んで下さい", "していない", "6時間程度している", "12時間程度している", "ほぼ24時間している", "" ];			D6.scenario.defSelectData['sel821']= [ '-1', '0', '6', '12', '24' ];
D6.scenario.defInput["i822"] = {  cons:"consCKpot",  title:"電気ポットの省エネ性",  unit:"",  text:"電気ポットは省エネタイプですか", inputType:"sel822", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel822"]= [ "選んで下さい", "はい", "いいえ", "わからない", "" ];			D6.scenario.defSelectData['sel822']= [ '-1', '1', '2', '3' ];
D6.scenario.defInput["i901"] = {  cons:"consCRsum",  title:"車の保有台数",  unit:"",  text:"車の保有台数", inputType:"sel901", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"4",d11p:"0",d12t:"2",d12p:"1",d13t:"0",d13p:"2",d1w:"2",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel901"]= [ "選んで下さい", "持っていない", "1台", "2台", "3台", "4台", "5台以上", "" ];			D6.scenario.defSelectData['sel901']= [ '-1', '1', '2', '3', '4', '5' ];
D6.scenario.defInput["i902"] = {  cons:"consCRsum",  title:"スクータ・バイクの保有台数",  unit:"",  text:"スクータ・バイクの保有台数", inputType:"sel902", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel902"]= [ "選んで下さい", "持っていない", "1台", "2台", "3台", "4台", "5台以上", "" ];			D6.scenario.defSelectData['sel902']= [ '-1', '1', '2', '3', '4', '5' ];
D6.scenario.defInput["i911"] = {  cons:"consCR",  title:"車の種類",  unit:"",  text:"車の種類", inputType:"sel911", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel911"]= [ "選んで下さい", "軽自動車", "小型車", "バン", "3ナンバー", "電気自動車", "バイク・スクータ", "大型バイク", "" ];			D6.scenario.defSelectData['sel911']= [ '-1', '1', '2', '3', '4', '5', '6', '7' ];
D6.scenario.defInput["i912"] = {  cons:"consCR",  title:"車の燃費",  unit:"",  text:"車の燃費", inputType:"sel912", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"30",d11p:"2",d12t:"15",d12p:"1",d13t:"",d13p:"",d1w:"2",d1d:"1", d21t:"30",d21p:"2",d22t:"15",d22p:"1",d23t:"",d23p:"",d2w:"2",d2d:"1", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel912"]= [ "選んで下さい", "6km/L以下", "7-9km/L", "10-12km/L", "13-15km/L", "16-20km/L", "21-26km/L", "27-35km/L", "36km/L以上", "" ];			D6.scenario.defSelectData['sel912']= [ '-1', '6', '8', '11', '14', '18', '23', '30', '40' ];
D6.scenario.defInput["i913"] = {  cons:"consCR",  title:"車の主な利用者",  unit:"",  text:"だれの車ですか。もしくは呼び方があれば記入してください。", inputType:"", right:"", postfix:"", nodata:"", varType:"String", min:"", max:"", defaultValue:"", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue[""]= [ "", "", "", "" ];			D6.scenario.defSelectData['']= [ '', '', '' ];
D6.scenario.defInput["i914"] = {  cons:"consCR",  title:"エコタイヤの使用",  unit:"",  text:"エコタイヤを使っていますか", inputType:"sel914", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel914"]= [ "選んで下さい", "はい", "いいえ", "わからない", "" ];			D6.scenario.defSelectData['sel914']= [ '-1', '1', '2', '3' ];
D6.scenario.defInput["i921"] = {  cons:"consCRtrip",  title:"行き先",  unit:"",  text:"よく出かける行き先", inputType:"", right:"", postfix:"", nodata:"", varType:"String", min:"", max:"", defaultValue:"", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue[""]= [ "", "", "", "" ];			D6.scenario.defSelectData['']= [ '', '', '' ];
D6.scenario.defInput["i922"] = {  cons:"consCRtrip",  title:"頻度",  unit:"",  text:"どの程度車で行きますか", inputType:"sel922", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel922"]= [ "選んで下さい", "毎日", "週5回", "週2～3回", "週1回", "月に2回", "月1回", "２ヶ月に1回", "年2-3回", "年1回", "" ];			D6.scenario.defSelectData['sel922']= [ '-1', '365', '250', '120', '50', '25', '12', '6', '2', '1' ];
D6.scenario.defInput["i923"] = {  cons:"consCRtrip",  title:"片道距離",  unit:"km",  text:"片道距離", inputType:"sel923", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel923"]= [ "選んで下さい", "1km", "2km", "3km", "5km", "10km", "20km", "30km", "50km", "100km", "200km", "400kmFALSE" ];			D6.scenario.defSelectData['sel923']= [ '-1', '1', '2', '3', '5', '10', '20', '30', '50', '100', '200', '400', '700' ];
D6.scenario.defInput["i924"] = {  cons:"consCRtrip",  title:"使用する車",  unit:"",  text:"どの車を主に使いますか", inputType:"sel924", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel924"]= [ "選んで下さい", "1台目", "2台目", "3台目", "4台目", "5台目", "" ];			D6.scenario.defSelectData['sel924']= [ '-1', '1', '2', '3', '4', '5' ];
D6.scenario.defInput["i931"] = {  cons:"consCRsum",  title:"アイドリングストップ",  unit:"",  text:"長時間の停車でアイドリングストップをしていますか", inputType:"sel931", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"3",d11p:"0",d12t:"2",d12p:"1",d13t:"1",d13p:"2",d1w:"1",d1d:"0", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"3",d31p:"0",d32t:"2",d32p:"1",d33t:"1",d33p:"2",d3w:"1",d3d:"0"}; 			D6.scenario.defSelectValue["sel931"]= [ "選んで下さい", "いつもしている", "時々している", "していない", "" ];			D6.scenario.defSelectData['sel931']= [ '-1', '1', '2', '3' ];
D6.scenario.defInput["i932"] = {  cons:"consCRsum",  title:"急加速や急発進",  unit:"",  text:"急加速や急発進をしないようにしていますか", inputType:"sel932", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"3",d31p:"0",d32t:"2",d32p:"1",d33t:"1",d33p:"2",d3w:"1",d3d:"0"}; 			D6.scenario.defSelectValue["sel932"]= [ "選んで下さい", "いつもしている", "時々している", "していない", "" ];			D6.scenario.defSelectData['sel932']= [ '-1', '1', '2', '3' ];
D6.scenario.defInput["i933"] = {  cons:"consCRsum",  title:"加減速の少ない運転",  unit:"",  text:"加減速の少ない運転", inputType:"sel933", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"3",d31p:"0",d32t:"2",d32p:"1",d33t:"1",d33p:"2",d3w:"1",d3d:"0"}; 			D6.scenario.defSelectValue["sel933"]= [ "選んで下さい", "いつもしている", "時々している", "していない", "" ];			D6.scenario.defSelectData['sel933']= [ '-1', '1', '2', '3' ];
D6.scenario.defInput["i934"] = {  cons:"consCRsum",  title:"早めのアクセルオフ",  unit:"",  text:"早めのアクセルオフ", inputType:"sel934", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel934"]= [ "選んで下さい", "いつもしている", "時々している", "していない", "" ];			D6.scenario.defSelectData['sel934']= [ '-1', '1', '2', '3' ];
D6.scenario.defInput["i935"] = {  cons:"consCRsum",  title:"道路交通情報の活用",  unit:"",  text:"道路交通情報の活用", inputType:"sel935", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"3",d31p:"0",d32t:"2",d32p:"1",d33t:"1",d33p:"2",d3w:"1",d3d:"0"}; 			D6.scenario.defSelectValue["sel935"]= [ "選んで下さい", "いつもしている", "時々している", "していない", "" ];			D6.scenario.defSelectData['sel935']= [ '-1', '1', '2', '3' ];
D6.scenario.defInput["i936"] = {  cons:"consCRsum",  title:" 不要な荷物を積まない",  unit:"",  text:" 不要な荷物は積まずに走行", inputType:"sel936", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel936"]= [ "選んで下さい", "いつもしている", "時々している", "していない", "" ];			D6.scenario.defSelectData['sel936']= [ '-1', '1', '2', '3' ];
D6.scenario.defInput["i937"] = {  cons:"consCRsum",  title:"カーエアコンの温度調節",  unit:"",  text:"カーエアコンの温度・風量をこまめに調節していますか", inputType:"sel937", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"3",d31p:"0",d32t:"2",d32p:"1",d33t:"1",d33p:"2",d3w:"1",d3d:"0"}; 			D6.scenario.defSelectValue["sel937"]= [ "選んで下さい", "いつもしている", "時々している", "していない", "" ];			D6.scenario.defSelectData['sel937']= [ '-1', '1', '2', '3' ];
D6.scenario.defInput["i938"] = {  cons:"consCRsum",  title:"暖機運転せずに走行する",  unit:"",  text:"寒い日に暖機運転をしていますか", inputType:"sel938", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"3",d31p:"0",d32t:"2",d32p:"1",d33t:"1",d33p:"2",d3w:"1",d3d:"0"}; 			D6.scenario.defSelectValue["sel938"]= [ "選んで下さい", "いつもしている", "時々している", "していない", "" ];			D6.scenario.defSelectData['sel938']= [ '-1', '1', '2', '3' ];
D6.scenario.defInput["i939"] = {  cons:"consCRsum",  title:"タイヤの空気圧のチェック",  unit:"",  text:"タイヤの空気圧を適切に保つよう心がけていますか", inputType:"sel939", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel939"]= [ "選んで下さい", "いつもしている", "時々している", "していない", "" ];			D6.scenario.defSelectData['sel939']= [ '-1', '1', '2', '3' ];
D6.scenario.defInput["i221"] = {  cons:"consCOsum",  title:"エアコンの性能",  unit:"",  text:"エアコンの省エネ性能は良いですか（1級ですか）", inputType:"sel221", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"3",d11p:"0",d12t:"2",d12p:"1",d13t:"1",d13p:"2",d1w:"1",d1d:"0", d21t:"3",d21p:"0",d22t:"2",d22p:"1",d23t:"1",d23p:"2",d2w:"1",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel221"]= [ "選んで下さい", "とてもよい", "ふつう", "あまりよくない", "わからない", "" ];			D6.scenario.defSelectData['sel221']= [ '-1', '1', '2', '3', '4' ];
D6.scenario.defInput["i121"] = {  cons:"consHWsum",  title:"温水器の性能",  unit:"",  text:"温水器の省エネ性能は良いですか。（1級ですか）", inputType:"sel121", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"3",d11p:"0",d12t:"2",d12p:"1",d13t:"1",d13p:"2",d1w:"1",d1d:"0", d21t:"3",d21p:"0",d22t:"2",d22p:"1",d23t:"1",d23p:"2",d2w:"1",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel121"]= [ "選んで下さい", "とてもよい", "ふつう", "あまりよくない", "わからない", "" ];			D6.scenario.defSelectData['sel121']= [ '-1', '1', '2', '3', '4' ];
D6.scenario.defInput["i621"] = {  cons:"consTVsum",  title:"テレビの性能",  unit:"",  text:"テレビの省エネ性能は良いですか。（1級ですか）", inputType:"sel621", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"3",d11p:"0",d12t:"2",d12p:"1",d13t:"1",d13p:"2",d1w:"1",d1d:"0", d21t:"3",d21p:"0",d22t:"2",d22p:"1",d23t:"1",d23p:"2",d2w:"1",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel621"]= [ "選んで下さい", "とてもよい", "ふつう", "あまりよくない", "わからない", "" ];			D6.scenario.defSelectData['sel621']= [ '-1', '1', '2', '3', '4' ];
D6.scenario.defInput["i421"] = {  cons:"consDRsum",  title:"洗濯機の性能",  unit:"",  text:"洗濯機の省エネ性能は良いですか。（1級ですか）", inputType:"sel421", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"3",d11p:"0",d12t:"2",d12p:"1",d13t:"1",d13p:"2",d1w:"1",d1d:"0", d21t:"3",d21p:"0",d22t:"2",d22p:"1",d23t:"1",d23p:"2",d2w:"1",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel421"]= [ "選んで下さい", "とてもよい", "ふつう", "あまりよくない", "わからない", "" ];			D6.scenario.defSelectData['sel421']= [ '-1', '1', '2', '3', '4' ];
D6.scenario.defInput["i721"] = {  cons:"consRFsum",  title:"冷蔵庫の性能",  unit:"",  text:"冷蔵庫の省エネ性能は良いですか。（1級ですか）", inputType:"sel721", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"3",d11p:"0",d12t:"2",d12p:"1",d13t:"1",d13p:"2",d1w:"1",d1d:"0", d21t:"3",d21p:"0",d22t:"2",d22p:"1",d23t:"1",d23p:"2",d2w:"1",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel721"]= [ "選んで下さい", "とてもよい", "ふつう", "あまりよくない", "わからない", "" ];			D6.scenario.defSelectData['sel721']= [ '-1', '1', '2', '3', '4' ];
	
};

﻿/*  2017/12/16  version 1.0
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

D6.acadd = Object.assign( D6.acadd, {
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
	[ [ 0, 0, 0, 0, 0, 0, 0],   //神戸
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 

	[ [ 0.17, 0.16, 0.14, 0.12, 0.09, 0.06, 0.05],   //札幌
	  [ 0.06, 0.05, 0.04, 0.04, 0.03, 0.02, 0.01], 
	  [ 0.09, 0.09, 0.07, 0.06, 0.04, 0.03, 0.02], 
	  [ 0.16, 0.15, 0.13, 0.11, 0.09, 0.06, 0.04] ], 
	[ [ 0.05, 0.04, 0.03, 0.03, 0.02, 0.01, 0.01],   //青森
	  [ 0.02, 0.02, 0.01, 0.01, 0.01, 0, 0], 
	  [ 0.03, 0.02, 0.02, 0.01, 0.01, 0.01, 0.01], 
	  [ 0.05, 0.04, 0.03, 0.02, 0.02, 0.01, 0.01] ], 
	[ [ 0.12, 0.11, 0.09, 0.07, 0.06, 0.04, 0.03],   //盛岡
	  [ 0.01, 0.01, 0.01, 0.01, 0, 0, 0], 
	  [ 0.03, 0.03, 0.02, 0.01, 0.01, 0.01, 0.01], 
	  [ 0.1, 0.09, 0.07, 0.06, 0.04, 0.03, 0.02] ], 
	[ [ 0.01, 0.01, 0, 0, 0, 0, 0],   //仙台
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0.02, 0.02, 0.01, 0.01, 0.01, 0, 0],   //秋田
	  [ 0.01, 0, 0, 0, 0, 0, 0], 
	  [ 0.01, 0.01, 0, 0, 0, 0, 0], 
	  [ 0.01, 0.01, 0.01, 0.01, 0, 0, 0] ], 
	[ [ 0.03, 0.03, 0.02, 0.02, 0.01, 0.01, 0.01],   //山形
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0.01, 0.01, 0, 0, 0, 0, 0], 
	  [ 0.02, 0.02, 0.02, 0.01, 0.01, 0.01, 0] ], 
	[ [ 0.01, 0.01, 0.01, 0.01, 0, 0, 0],   //福島
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0.01, 0.01, 0, 0, 0, 0, 0] ], 
	[ [ 0.01, 0.01, 0.01, 0.01, 0.01, 0, 0],   //水戸
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0.01, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0.02, 0.01, 0.01, 0.01, 0.01, 0, 0],   //宇都宮
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0.01, 0.01, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //前橋
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0.01, 0, 0, 0, 0, 0],   //さいたま
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //千葉
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //東京
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //横浜
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //新潟
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //富山
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //金沢
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //福井
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0.02, 0.02, 0.01, 0.01, 0.01, 0, 0],   //甲府
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0.01, 0.01, 0, 0, 0, 0, 0] ], 
	[ [ 0.07, 0.06, 0.05, 0.04, 0.03, 0.02, 0.02],   //長野
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0.01, 0.01, 0.01, 0, 0, 0, 0], 
	  [ 0.05, 0.04, 0.03, 0.02, 0.02, 0.01, 0.01] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //岐阜
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //静岡
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //名古屋
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //津
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //彦根
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //京都
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //大阪
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //神戸
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //奈良
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //和歌山
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //鳥取
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //松江
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //岡山
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //広島
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //山口
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //徳島
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //高松
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //松山
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //高知
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //福岡
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //佐賀
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //長崎
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //熊本
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //大分
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //宮崎
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //鹿児島
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //那覇
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ] ],

	getArray : function( prefParam ) {
		var ret;
		var pref = prefParam;
		if ( pref>47 || pref <0 ) {
			pref = 0;
		}
		ret = this.factorPrefTimeMonth[parseInt(pref)];

		return ret;
	}

});
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

 ﻿/*  2017/12/16  version 1.0
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
 
D6.acload = Object.assign( D6.acload, {

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
[ [ 0.66, 0.63, 0.6, 0.57, 0.52, 0.52, 0.44, 0.48, 0.48, 0.39, 0.33, 0.26],   //神戸
  [ 0.5, 0.47, 0.44, 0.41, 0.36, 0.31, 0.31, 0.78, 0.76, 0.69, 0.61, 0.51], 
  [ 0.56, 0.53, 0.5, 0.47, 0.42, 0.36, 0.34, 0.62, 0.6, 0.54, 0.47, 0.38], 
  [ 0.65, 0.62, 0.59, 0.56, 0.52, 0.43, 0.39, 0.41, 0.4, 0.34, 0.29, 0.22] ], 

[ [ 1.06, 1.05, 1.03, 1, 0.95, 0.95, 0.82, 0.09, 0.09, 0.05, 0.03, 0.02],   //札幌
  [ 0.93, 0.92, 0.9, 0.87, 0.83, 0.7, 0.59, 0.27, 0.23, 0.18, 0.14, 0.11], 
  [ 0.99, 0.98, 0.96, 0.93, 0.88, 0.76, 0.64, 0.14, 0.11, 0.07, 0.05, 0.04], 
  [ 1.05, 1.04, 1.02, 0.99, 0.95, 0.83, 0.7, 0.04, 0.03, 0.02, 0.01, 0.01] ], 
[ [ 0.93, 0.92, 0.89, 0.86, 0.83, 0.83, 0.71, 0.15, 0.15, 0.09, 0.06, 0.05],   //青森
  [ 0.83, 0.81, 0.79, 0.76, 0.71, 0.6, 0.52, 0.34, 0.31, 0.24, 0.18, 0.14], 
  [ 0.88, 0.86, 0.85, 0.82, 0.77, 0.66, 0.56, 0.22, 0.19, 0.13, 0.09, 0.07], 
  [ 0.93, 0.91, 0.89, 0.87, 0.83, 0.73, 0.62, 0.08, 0.06, 0.04, 0.03, 0.02] ], 
[ [ 1.01, 0.99, 0.97, 0.93, 0.89, 0.89, 0.77, 0.13, 0.13, 0.07, 0.05, 0.03],   //盛岡
  [ 0.82, 0.8, 0.78, 0.75, 0.7, 0.59, 0.52, 0.45, 0.41, 0.32, 0.26, 0.21], 
  [ 0.9, 0.88, 0.86, 0.82, 0.78, 0.67, 0.57, 0.28, 0.24, 0.18, 0.14, 0.11], 
  [ 0.99, 0.97, 0.95, 0.92, 0.88, 0.78, 0.66, 0.06, 0.05, 0.03, 0.02, 0.02] ], 
[ [ 0.82, 0.8, 0.78, 0.75, 0.71, 0.71, 0.61, 0.21, 0.21, 0.13, 0.1, 0.08],   //仙台
  [ 0.66, 0.63, 0.61, 0.58, 0.54, 0.45, 0.41, 0.44, 0.4, 0.32, 0.26, 0.21], 
  [ 0.74, 0.71, 0.69, 0.66, 0.62, 0.52, 0.45, 0.27, 0.23, 0.18, 0.14, 0.11], 
  [ 0.81, 0.79, 0.78, 0.75, 0.71, 0.61, 0.52, 0.12, 0.09, 0.07, 0.05, 0.04] ], 
[ [ 0.87, 0.85, 0.83, 0.8, 0.77, 0.77, 0.66, 0.24, 0.24, 0.14, 0.1, 0.08],   //秋田
  [ 0.79, 0.77, 0.74, 0.71, 0.66, 0.55, 0.49, 0.52, 0.48, 0.38, 0.3, 0.24], 
  [ 0.82, 0.8, 0.78, 0.74, 0.7, 0.6, 0.51, 0.38, 0.34, 0.25, 0.19, 0.14], 
  [ 0.86, 0.84, 0.82, 0.8, 0.76, 0.66, 0.56, 0.16, 0.13, 0.09, 0.06, 0.05] ], 
[ [ 0.91, 0.9, 0.88, 0.84, 0.81, 0.81, 0.7, 0.21, 0.21, 0.12, 0.09, 0.07],   //山形
  [ 0.77, 0.76, 0.73, 0.68, 0.63, 0.53, 0.49, 0.65, 0.59, 0.49, 0.4, 0.33], 
  [ 0.84, 0.82, 0.79, 0.76, 0.71, 0.6, 0.52, 0.44, 0.39, 0.3, 0.24, 0.19], 
  [ 0.9, 0.88, 0.87, 0.84, 0.8, 0.7, 0.59, 0.12, 0.1, 0.07, 0.05, 0.04] ], 
[ [ 0.83, 0.82, 0.8, 0.77, 0.73, 0.73, 0.63, 0.24, 0.24, 0.16, 0.12, 0.1],   //福島
  [ 0.66, 0.64, 0.61, 0.57, 0.53, 0.45, 0.42, 0.65, 0.62, 0.51, 0.43, 0.37], 
  [ 0.73, 0.71, 0.68, 0.65, 0.61, 0.51, 0.45, 0.45, 0.41, 0.33, 0.27, 0.22], 
  [ 0.81, 0.8, 0.78, 0.75, 0.71, 0.62, 0.52, 0.17, 0.14, 0.1, 0.08, 0.06] ], 
[ [ 0.82, 0.81, 0.8, 0.77, 0.72, 0.72, 0.6, 0.25, 0.25, 0.19, 0.15, 0.12],   //水戸
  [ 0.49, 0.47, 0.46, 0.42, 0.39, 0.34, 0.31, 0.59, 0.54, 0.47, 0.4, 0.33], 
  [ 0.62, 0.59, 0.58, 0.55, 0.52, 0.43, 0.38, 0.35, 0.32, 0.27, 0.22, 0.18], 
  [ 0.8, 0.79, 0.78, 0.75, 0.71, 0.6, 0.51, 0.14, 0.13, 0.1, 0.08, 0.06] ], 
[ [ 0.84, 0.83, 0.81, 0.78, 0.73, 0.73, 0.61, 0.25, 0.25, 0.18, 0.14, 0.11],   //宇都宮
  [ 0.52, 0.5, 0.48, 0.45, 0.41, 0.35, 0.33, 0.65, 0.62, 0.55, 0.48, 0.4], 
  [ 0.63, 0.62, 0.6, 0.56, 0.52, 0.44, 0.39, 0.43, 0.41, 0.36, 0.3, 0.24], 
  [ 0.81, 0.8, 0.79, 0.76, 0.71, 0.61, 0.51, 0.15, 0.14, 0.11, 0.09, 0.07] ], 
[ [ 0.78, 0.76, 0.74, 0.7, 0.66, 0.66, 0.55, 0.3, 0.3, 0.23, 0.18, 0.14],   //前橋
  [ 0.49, 0.48, 0.46, 0.42, 0.39, 0.34, 0.32, 0.72, 0.69, 0.62, 0.54, 0.46], 
  [ 0.63, 0.61, 0.59, 0.56, 0.52, 0.44, 0.4, 0.55, 0.54, 0.48, 0.4, 0.33], 
  [ 0.77, 0.75, 0.73, 0.7, 0.66, 0.56, 0.47, 0.21, 0.2, 0.17, 0.13, 0.1] ], 
[ [ 0.78, 0.78, 0.76, 0.73, 0.68, 0.68, 0.57, 0.33, 0.33, 0.25, 0.2, 0.15],   //さいたま
  [ 0.48, 0.47, 0.45, 0.42, 0.38, 0.34, 0.32, 0.74, 0.69, 0.63, 0.55, 0.46], 
  [ 0.58, 0.57, 0.55, 0.52, 0.48, 0.4, 0.37, 0.55, 0.52, 0.47, 0.4, 0.32], 
  [ 0.75, 0.75, 0.73, 0.7, 0.65, 0.55, 0.47, 0.23, 0.21, 0.18, 0.14, 0.11] ], 
[ [ 0.66, 0.64, 0.62, 0.59, 0.55, 0.55, 0.46, 0.39, 0.39, 0.3, 0.25, 0.2],   //千葉
  [ 0.44, 0.42, 0.4, 0.37, 0.34, 0.3, 0.28, 0.68, 0.64, 0.57, 0.5, 0.42], 
  [ 0.5, 0.48, 0.46, 0.43, 0.4, 0.34, 0.31, 0.5, 0.47, 0.41, 0.35, 0.28], 
  [ 0.62, 0.61, 0.59, 0.56, 0.52, 0.44, 0.38, 0.29, 0.27, 0.23, 0.19, 0.15] ], 
[ [ 0.63, 0.62, 0.6, 0.57, 0.53, 0.53, 0.44, 0.43, 0.43, 0.35, 0.28, 0.23],   //東京
  [ 0.44, 0.42, 0.4, 0.37, 0.34, 0.3, 0.29, 0.75, 0.7, 0.63, 0.56, 0.47], 
  [ 0.48, 0.45, 0.44, 0.41, 0.37, 0.32, 0.3, 0.58, 0.54, 0.5, 0.43, 0.35], 
  [ 0.6, 0.58, 0.56, 0.53, 0.5, 0.41, 0.37, 0.36, 0.33, 0.3, 0.24, 0.19] ], 
[ [ 0.65, 0.64, 0.62, 0.59, 0.54, 0.54, 0.45, 0.37, 0.37, 0.29, 0.24, 0.19],   //横浜
  [ 0.45, 0.42, 0.41, 0.38, 0.34, 0.3, 0.29, 0.67, 0.63, 0.57, 0.5, 0.41], 
  [ 0.5, 0.48, 0.46, 0.43, 0.4, 0.33, 0.31, 0.46, 0.43, 0.39, 0.33, 0.26], 
  [ 0.62, 0.6, 0.58, 0.55, 0.51, 0.43, 0.37, 0.28, 0.26, 0.22, 0.18, 0.14] ], 
[ [ 0.75, 0.74, 0.72, 0.69, 0.65, 0.65, 0.55, 0.4, 0.4, 0.26, 0.2, 0.15],   //新潟
  [ 0.68, 0.64, 0.61, 0.58, 0.53, 0.45, 0.41, 0.72, 0.65, 0.54, 0.43, 0.35], 
  [ 0.71, 0.68, 0.65, 0.62, 0.58, 0.48, 0.43, 0.53, 0.47, 0.37, 0.28, 0.22], 
  [ 0.74, 0.73, 0.71, 0.68, 0.64, 0.55, 0.47, 0.31, 0.27, 0.19, 0.14, 0.11] ], 
[ [ 0.78, 0.75, 0.73, 0.69, 0.65, 0.65, 0.55, 0.45, 0.45, 0.3, 0.24, 0.18],   //富山
  [ 0.65, 0.62, 0.59, 0.54, 0.49, 0.42, 0.39, 0.76, 0.7, 0.58, 0.48, 0.39], 
  [ 0.71, 0.68, 0.65, 0.62, 0.57, 0.48, 0.42, 0.55, 0.49, 0.38, 0.31, 0.24], 
  [ 0.77, 0.75, 0.72, 0.69, 0.65, 0.56, 0.48, 0.3, 0.25, 0.18, 0.14, 0.11] ], 
[ [ 0.72, 0.7, 0.67, 0.64, 0.6, 0.6, 0.51, 0.45, 0.45, 0.32, 0.25, 0.19],   //金沢
  [ 0.62, 0.58, 0.55, 0.51, 0.47, 0.4, 0.38, 0.76, 0.71, 0.59, 0.5, 0.4], 
  [ 0.65, 0.62, 0.6, 0.57, 0.52, 0.44, 0.4, 0.6, 0.55, 0.44, 0.35, 0.28], 
  [ 0.71, 0.69, 0.66, 0.64, 0.6, 0.51, 0.44, 0.36, 0.31, 0.24, 0.18, 0.14] ], 
[ [ 0.77, 0.75, 0.73, 0.7, 0.65, 0.65, 0.56, 0.41, 0.41, 0.28, 0.22, 0.17],   //福井
  [ 0.64, 0.6, 0.57, 0.53, 0.47, 0.41, 0.39, 0.82, 0.77, 0.66, 0.56, 0.46], 
  [ 0.68, 0.65, 0.62, 0.58, 0.53, 0.45, 0.41, 0.63, 0.59, 0.48, 0.39, 0.31], 
  [ 0.75, 0.73, 0.71, 0.68, 0.64, 0.55, 0.47, 0.33, 0.29, 0.22, 0.16, 0.13] ], 
[ [ 0.88, 0.85, 0.83, 0.78, 0.73, 0.73, 0.61, 0.26, 0.26, 0.2, 0.16, 0.12],   //甲府
  [ 0.56, 0.54, 0.49, 0.45, 0.4, 0.36, 0.34, 0.79, 0.73, 0.68, 0.59, 0.51], 
  [ 0.62, 0.6, 0.56, 0.52, 0.48, 0.4, 0.37, 0.5, 0.48, 0.45, 0.38, 0.31], 
  [ 0.81, 0.79, 0.76, 0.72, 0.67, 0.56, 0.48, 0.2, 0.18, 0.16, 0.12, 0.09] ], 
[ [ 0.98, 0.96, 0.93, 0.9, 0.85, 0.85, 0.73, 0.2, 0.2, 0.13, 0.1, 0.07],   //長野
  [ 0.76, 0.74, 0.72, 0.67, 0.62, 0.52, 0.48, 0.7, 0.63, 0.54, 0.45, 0.37], 
  [ 0.83, 0.81, 0.79, 0.75, 0.7, 0.59, 0.51, 0.42, 0.36, 0.29, 0.22, 0.18], 
  [ 0.94, 0.92, 0.9, 0.87, 0.82, 0.72, 0.6, 0.13, 0.1, 0.07, 0.05, 0.04] ], 
[ [ 0.74, 0.72, 0.7, 0.66, 0.62, 0.62, 0.51, 0.43, 0.43, 0.33, 0.27, 0.21],   //岐阜
  [ 0.52, 0.48, 0.45, 0.42, 0.37, 0.33, 0.32, 0.82, 0.79, 0.73, 0.65, 0.56], 
  [ 0.6, 0.57, 0.54, 0.51, 0.46, 0.38, 0.36, 0.68, 0.63, 0.57, 0.5, 0.41], 
  [ 0.71, 0.69, 0.67, 0.64, 0.59, 0.5, 0.43, 0.38, 0.35, 0.29, 0.23, 0.18] ], 
[ [ 0.65, 0.61, 0.6, 0.56, 0.52, 0.52, 0.43, 0.38, 0.38, 0.32, 0.27, 0.21],   //静岡
  [ 0.38, 0.35, 0.32, 0.29, 0.26, 0.24, 0.23, 0.68, 0.64, 0.61, 0.54, 0.45], 
  [ 0.47, 0.45, 0.43, 0.4, 0.36, 0.3, 0.29, 0.52, 0.49, 0.45, 0.4, 0.32], 
  [ 0.63, 0.6, 0.58, 0.55, 0.51, 0.42, 0.37, 0.28, 0.27, 0.24, 0.19, 0.15] ], 
[ [ 0.74, 0.71, 0.69, 0.66, 0.61, 0.61, 0.51, 0.42, 0.42, 0.34, 0.27, 0.21],   //名古屋
  [ 0.51, 0.48, 0.45, 0.41, 0.37, 0.32, 0.31, 0.8, 0.78, 0.72, 0.64, 0.54], 
  [ 0.59, 0.57, 0.54, 0.5, 0.46, 0.38, 0.36, 0.62, 0.59, 0.54, 0.46, 0.38], 
  [ 0.71, 0.69, 0.66, 0.63, 0.59, 0.49, 0.43, 0.34, 0.32, 0.27, 0.21, 0.16] ], 
[ [ 0.66, 0.64, 0.62, 0.59, 0.55, 0.55, 0.46, 0.44, 0.44, 0.35, 0.29, 0.22],   //津
  [ 0.48, 0.46, 0.44, 0.4, 0.37, 0.31, 0.3, 0.74, 0.7, 0.64, 0.56, 0.46], 
  [ 0.56, 0.53, 0.51, 0.48, 0.44, 0.36, 0.34, 0.64, 0.6, 0.55, 0.47, 0.38], 
  [ 0.66, 0.64, 0.61, 0.59, 0.55, 0.46, 0.4, 0.38, 0.36, 0.31, 0.25, 0.19] ], 
[ [ 0.74, 0.72, 0.7, 0.67, 0.63, 0.63, 0.53, 0.39, 0.39, 0.29, 0.23, 0.17],   //彦根
  [ 0.6, 0.58, 0.55, 0.52, 0.47, 0.39, 0.37, 0.75, 0.71, 0.62, 0.53, 0.43], 
  [ 0.63, 0.62, 0.59, 0.56, 0.51, 0.43, 0.39, 0.61, 0.57, 0.49, 0.41, 0.32], 
  [ 0.72, 0.7, 0.68, 0.65, 0.61, 0.52, 0.45, 0.32, 0.29, 0.23, 0.18, 0.14] ], 
[ [ 0.72, 0.7, 0.68, 0.65, 0.61, 0.61, 0.51, 0.43, 0.43, 0.34, 0.28, 0.22],   //京都
  [ 0.51, 0.49, 0.46, 0.42, 0.38, 0.33, 0.32, 0.85, 0.83, 0.76, 0.68, 0.58], 
  [ 0.58, 0.56, 0.53, 0.5, 0.45, 0.38, 0.36, 0.71, 0.68, 0.62, 0.54, 0.45], 
  [ 0.69, 0.68, 0.65, 0.62, 0.58, 0.49, 0.43, 0.39, 0.36, 0.3, 0.24, 0.19] ], 
[ [ 0.64, 0.61, 0.6, 0.57, 0.53, 0.53, 0.44, 0.54, 0.54, 0.43, 0.36, 0.28],   //大阪
  [ 0.48, 0.45, 0.42, 0.39, 0.34, 0.3, 0.3, 0.88, 0.85, 0.78, 0.7, 0.59], 
  [ 0.52, 0.49, 0.47, 0.43, 0.39, 0.33, 0.32, 0.72, 0.7, 0.64, 0.56, 0.46], 
  [ 0.62, 0.59, 0.57, 0.54, 0.5, 0.42, 0.38, 0.48, 0.45, 0.39, 0.32, 0.25] ], 
[ [ 0.66, 0.63, 0.6, 0.57, 0.52, 0.52, 0.44, 0.48, 0.48, 0.39, 0.33, 0.26],   //神戸
  [ 0.5, 0.47, 0.44, 0.41, 0.36, 0.31, 0.31, 0.78, 0.76, 0.69, 0.61, 0.51], 
  [ 0.56, 0.53, 0.5, 0.47, 0.42, 0.36, 0.34, 0.62, 0.6, 0.54, 0.47, 0.38], 
  [ 0.65, 0.62, 0.59, 0.56, 0.52, 0.43, 0.39, 0.41, 0.4, 0.34, 0.29, 0.22] ], 
[ [ 0.75, 0.73, 0.71, 0.68, 0.64, 0.64, 0.55, 0.34, 0.34, 0.26, 0.21, 0.16],   //奈良
  [ 0.53, 0.5, 0.47, 0.43, 0.39, 0.34, 0.33, 0.81, 0.77, 0.7, 0.61, 0.52], 
  [ 0.62, 0.6, 0.57, 0.54, 0.49, 0.42, 0.38, 0.58, 0.56, 0.5, 0.42, 0.34], 
  [ 0.74, 0.73, 0.7, 0.68, 0.64, 0.55, 0.47, 0.22, 0.2, 0.16, 0.12, 0.1] ], 
[ [ 0.67, 0.64, 0.62, 0.58, 0.54, 0.54, 0.46, 0.45, 0.45, 0.36, 0.31, 0.24],   //和歌山
  [ 0.48, 0.45, 0.41, 0.37, 0.33, 0.3, 0.29, 0.81, 0.78, 0.73, 0.65, 0.55], 
  [ 0.53, 0.5, 0.46, 0.43, 0.39, 0.33, 0.32, 0.63, 0.61, 0.56, 0.5, 0.41], 
  [ 0.64, 0.62, 0.58, 0.55, 0.51, 0.43, 0.39, 0.41, 0.39, 0.34, 0.28, 0.22] ], 
[ [ 0.73, 0.71, 0.68, 0.65, 0.61, 0.61, 0.52, 0.42, 0.42, 0.3, 0.24, 0.19],   //鳥取
  [ 0.58, 0.54, 0.51, 0.47, 0.42, 0.37, 0.35, 0.81, 0.77, 0.66, 0.56, 0.47], 
  [ 0.64, 0.61, 0.58, 0.54, 0.5, 0.42, 0.38, 0.6, 0.56, 0.46, 0.37, 0.3], 
  [ 0.73, 0.71, 0.67, 0.65, 0.61, 0.52, 0.45, 0.29, 0.26, 0.2, 0.15, 0.12] ], 
[ [ 0.71, 0.69, 0.66, 0.63, 0.59, 0.59, 0.5, 0.41, 0.41, 0.29, 0.23, 0.18],   //松江
  [ 0.57, 0.53, 0.5, 0.46, 0.42, 0.36, 0.34, 0.75, 0.7, 0.6, 0.5, 0.42], 
  [ 0.63, 0.6, 0.56, 0.53, 0.49, 0.41, 0.37, 0.52, 0.48, 0.39, 0.31, 0.24], 
  [ 0.7, 0.68, 0.65, 0.62, 0.59, 0.5, 0.43, 0.3, 0.26, 0.2, 0.16, 0.12] ], 
[ [ 0.73, 0.71, 0.69, 0.66, 0.61, 0.61, 0.52, 0.45, 0.45, 0.34, 0.28, 0.22],   //岡山
  [ 0.49, 0.47, 0.44, 0.4, 0.36, 0.31, 0.3, 0.86, 0.82, 0.75, 0.66, 0.56], 
  [ 0.55, 0.52, 0.49, 0.45, 0.41, 0.35, 0.33, 0.75, 0.72, 0.65, 0.57, 0.47], 
  [ 0.69, 0.67, 0.64, 0.61, 0.57, 0.48, 0.42, 0.43, 0.4, 0.34, 0.28, 0.22] ], 
[ [ 0.72, 0.69, 0.67, 0.64, 0.59, 0.59, 0.5, 0.42, 0.42, 0.33, 0.26, 0.2],   //広島
  [ 0.49, 0.46, 0.42, 0.39, 0.35, 0.3, 0.3, 0.82, 0.79, 0.72, 0.63, 0.54], 
  [ 0.53, 0.5, 0.47, 0.43, 0.39, 0.33, 0.32, 0.71, 0.69, 0.62, 0.54, 0.45], 
  [ 0.68, 0.65, 0.62, 0.59, 0.55, 0.46, 0.41, 0.43, 0.41, 0.34, 0.28, 0.21] ], 
[ [ 0.75, 0.72, 0.71, 0.68, 0.63, 0.63, 0.54, 0.35, 0.35, 0.26, 0.21, 0.16],   //山口
  [ 0.51, 0.48, 0.43, 0.4, 0.35, 0.31, 0.3, 0.8, 0.76, 0.69, 0.6, 0.52], 
  [ 0.59, 0.55, 0.51, 0.48, 0.44, 0.37, 0.35, 0.62, 0.59, 0.52, 0.44, 0.36], 
  [ 0.73, 0.7, 0.67, 0.64, 0.6, 0.52, 0.45, 0.29, 0.28, 0.22, 0.17, 0.13] ], 
[ [ 0.65, 0.62, 0.6, 0.56, 0.52, 0.52, 0.44, 0.44, 0.44, 0.35, 0.29, 0.22],   //徳島
  [ 0.47, 0.43, 0.4, 0.37, 0.33, 0.29, 0.28, 0.78, 0.75, 0.68, 0.6, 0.5], 
  [ 0.53, 0.5, 0.47, 0.43, 0.39, 0.33, 0.32, 0.63, 0.61, 0.55, 0.47, 0.39], 
  [ 0.63, 0.61, 0.58, 0.55, 0.51, 0.43, 0.38, 0.38, 0.36, 0.31, 0.25, 0.19] ], 
[ [ 0.67, 0.64, 0.62, 0.59, 0.55, 0.55, 0.47, 0.47, 0.47, 0.37, 0.3, 0.24],   //高松
  [ 0.47, 0.44, 0.41, 0.38, 0.34, 0.29, 0.29, 0.83, 0.8, 0.73, 0.65, 0.55], 
  [ 0.54, 0.51, 0.48, 0.45, 0.4, 0.34, 0.33, 0.73, 0.7, 0.64, 0.55, 0.46], 
  [ 0.65, 0.63, 0.6, 0.58, 0.54, 0.45, 0.4, 0.41, 0.39, 0.33, 0.27, 0.21] ], 
[ [ 0.66, 0.63, 0.6, 0.57, 0.53, 0.53, 0.45, 0.43, 0.43, 0.35, 0.29, 0.23],   //松山
  [ 0.47, 0.43, 0.39, 0.36, 0.32, 0.28, 0.27, 0.81, 0.77, 0.71, 0.64, 0.54], 
  [ 0.52, 0.5, 0.46, 0.43, 0.39, 0.33, 0.31, 0.67, 0.64, 0.59, 0.51, 0.42], 
  [ 0.64, 0.61, 0.59, 0.56, 0.52, 0.44, 0.38, 0.36, 0.34, 0.3, 0.24, 0.19] ], 
[ [ 0.69, 0.66, 0.63, 0.59, 0.54, 0.54, 0.45, 0.39, 0.39, 0.33, 0.28, 0.22],   //高知
  [ 0.38, 0.34, 0.31, 0.28, 0.24, 0.23, 0.23, 0.76, 0.74, 0.7, 0.64, 0.55], 
  [ 0.47, 0.45, 0.42, 0.38, 0.34, 0.3, 0.29, 0.58, 0.57, 0.53, 0.47, 0.39], 
  [ 0.65, 0.63, 0.59, 0.56, 0.51, 0.43, 0.39, 0.32, 0.31, 0.27, 0.22, 0.17] ], 
[ [ 0.6, 0.58, 0.55, 0.52, 0.48, 0.48, 0.4, 0.48, 0.48, 0.38, 0.32, 0.25],   //福岡
  [ 0.47, 0.43, 0.39, 0.35, 0.31, 0.28, 0.27, 0.8, 0.77, 0.69, 0.6, 0.51], 
  [ 0.51, 0.47, 0.43, 0.4, 0.36, 0.31, 0.29, 0.66, 0.62, 0.55, 0.47, 0.38], 
  [ 0.58, 0.55, 0.52, 0.49, 0.46, 0.39, 0.35, 0.45, 0.42, 0.36, 0.3, 0.23] ], 
[ [ 0.69, 0.67, 0.64, 0.61, 0.56, 0.56, 0.48, 0.39, 0.39, 0.31, 0.26, 0.2],   //佐賀
  [ 0.48, 0.44, 0.4, 0.36, 0.32, 0.29, 0.29, 0.82, 0.8, 0.71, 0.63, 0.56], 
  [ 0.52, 0.49, 0.45, 0.41, 0.37, 0.32, 0.31, 0.7, 0.67, 0.59, 0.51, 0.44], 
  [ 0.66, 0.64, 0.61, 0.57, 0.53, 0.45, 0.4, 0.36, 0.35, 0.29, 0.24, 0.19] ], 
[ [ 0.59, 0.56, 0.53, 0.5, 0.46, 0.46, 0.39, 0.44, 0.44, 0.36, 0.3, 0.24],   //長崎
  [ 0.45, 0.41, 0.37, 0.33, 0.29, 0.27, 0.26, 0.74, 0.73, 0.66, 0.59, 0.5], 
  [ 0.49, 0.46, 0.42, 0.38, 0.34, 0.29, 0.28, 0.63, 0.61, 0.54, 0.47, 0.39], 
  [ 0.58, 0.54, 0.51, 0.48, 0.44, 0.37, 0.34, 0.42, 0.4, 0.34, 0.28, 0.22] ], 
[ [ 0.71, 0.68, 0.65, 0.62, 0.57, 0.57, 0.48, 0.42, 0.42, 0.34, 0.29, 0.23],   //熊本
  [ 0.46, 0.42, 0.37, 0.33, 0.29, 0.28, 0.27, 0.85, 0.83, 0.76, 0.69, 0.6], 
  [ 0.51, 0.47, 0.43, 0.39, 0.35, 0.31, 0.3, 0.68, 0.67, 0.61, 0.54, 0.46], 
  [ 0.66, 0.63, 0.6, 0.57, 0.52, 0.45, 0.4, 0.38, 0.37, 0.32, 0.27, 0.21] ], 
[ [ 0.65, 0.63, 0.6, 0.57, 0.53, 0.53, 0.45, 0.36, 0.36, 0.3, 0.24, 0.19],   //大分
  [ 0.44, 0.4, 0.36, 0.33, 0.3, 0.27, 0.26, 0.77, 0.73, 0.67, 0.59, 0.49], 
  [ 0.5, 0.47, 0.43, 0.4, 0.36, 0.31, 0.3, 0.61, 0.59, 0.53, 0.45, 0.37], 
  [ 0.63, 0.6, 0.57, 0.54, 0.5, 0.43, 0.38, 0.32, 0.31, 0.27, 0.21, 0.17] ], 
[ [ 0.62, 0.6, 0.57, 0.53, 0.49, 0.49, 0.42, 0.4, 0.4, 0.37, 0.31, 0.25],   //宮崎
  [ 0.33, 0.3, 0.26, 0.23, 0.2, 0.21, 0.21, 0.75, 0.74, 0.71, 0.65, 0.56], 
  [ 0.41, 0.38, 0.35, 0.31, 0.28, 0.26, 0.25, 0.61, 0.6, 0.57, 0.51, 0.43], 
  [ 0.58, 0.55, 0.53, 0.49, 0.45, 0.39, 0.35, 0.34, 0.33, 0.31, 0.27, 0.21] ], 
[ [ 0.55, 0.53, 0.49, 0.45, 0.41, 0.41, 0.36, 0.51, 0.51, 0.43, 0.39, 0.32],   //鹿児島
  [ 0.35, 0.32, 0.27, 0.23, 0.2, 0.21, 0.21, 0.82, 0.79, 0.75, 0.7, 0.61], 
  [ 0.41, 0.38, 0.33, 0.29, 0.25, 0.24, 0.24, 0.69, 0.67, 0.64, 0.59, 0.5], 
  [ 0.53, 0.51, 0.46, 0.43, 0.38, 0.34, 0.32, 0.48, 0.46, 0.42, 0.37, 0.3] ], 
[ [ 0.12, 0.08, 0.07, 0.06, 0.05, 0.05, 0.09, 0.55, 0.55, 0.53, 0.52, 0.47],   //那覇
  [ 0.09, 0.04, 0.03, 0.02, 0.02, 0.06, 0.06, 0.76, 0.75, 0.74, 0.72, 0.67], 
  [ 0.1, 0.05, 0.04, 0.03, 0.03, 0.07, 0.07, 0.64, 0.62, 0.62, 0.6, 0.54], 
  [ 0.12, 0.08, 0.06, 0.06, 0.04, 0.08, 0.08, 0.51, 0.5, 0.49, 0.48, 0.43] ] ],


	getArray : function( prefParam ) {
		var ret;
		var pref = prefParam;
		if ( pref>47 || pref <0 ) {
			pref = 0;
		}
		ret = this.factorPrefTimeMonth[pref];

		return ret;
	}

} );
﻿/* 2017/12/16  version 1.0
 * coding: utf-8, Tab as 4 spaces
 * 
 * Home Energy Diagnosis System Ver.6
 * area.js  for override
 * 
 * AreaParameters area: parameters by prefecture for home
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

D6.area = Object.assign( D6.area, {

	//name of prefecture
	//	prefName[prefecture]
	//
	prefName : [ 
		'兵庫',
		"北海道",	//1
		"青森",
		"岩手",
		"宮城",
		"秋田",	//5
		"山形",
		"福島",
		"茨城",
		"栃木",
		"群馬",	//10
		"埼玉",
		"千葉",
		"東京",
		"神奈川",
		"新潟",	//15
		"富山",
		"石川",
		"福井",
		"山梨",
		"長野",	//20
		"岐阜",
		"静岡",
		"愛知",
		"三重",
		"滋賀",	//25
		"京都",
		"大阪",
		"兵庫",
		"奈良",
		"和歌山",	//30
		"鳥取",
		"島根",
		"岡山",
		"広島",
		"山口",	//35
		"徳島",
		"香川",
		"愛媛",
		"高知",
		"福岡",	//40
		"佐賀",
		"長崎",
		"熊本",
		"大分",
		"宮崎",	//45
		"鹿児島",
		"沖縄"
	],

	prefDefault : 13,	//not selected


	// heat category with prefecture
	//	prefHeatingLeverl[prefecture]
	//
	//	return code
	//		1:cold area in Japan(Hokkaido)
	//			.
	//			.
	//		6:hot area in Japan(Okinawa)
	//
	prefHeatingLeverl : [ 4,
				1, 2, 2, 3, 2, 2, 3,
				3, 3, 3, 4, 4, 4, 4,
				3, 3, 3, 4, 4, 3, 4, 4, 4,
				4, 4, 4, 4, 4, 4, 4,
				4, 4, 4, 4, 4, 4, 4, 4, 5,
				4, 4, 4, 4, 4, 5, 5, 6 ],

								
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
	// 0:hokkaido、1:tohoku 2:tokyo 3:chubu 4:hokuritu 5:kansai
	// 6:tyugoku 7:shikoku 8:kyusyu 9:okinawa
	prefToEleArea : [ 5,
				0, 1, 1, 1, 1, 1, 1,
				2, 2, 2, 2, 2, 2, 2,
				1, 4, 4, 4, 2, 3, 3, 3, 3,
				3, 5, 5, 5, 5, 5, 5,
				6, 6, 6, 6, 6, 7, 7, 7, 7,
				8, 8, 8, 8, 8, 8, 8, 9 ],

	//electricity supply company price ratio
	electCompanyPrice : [
		1.2,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1.2
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
		1: [ 33.32, 33.32, 33.32, -1500, 0 ],
		2: [ 33.32, 33.32, 33.32, -1500, 280 ],
		3: [ 38.89, 27.32, 13.10, 2160, 0 ],
		4: [ 17.98, 16.53, 16.53, 0, 1054 ],
		5: [ 20.22, 18.56, 18.56, 64800, 0 ],
		6: [ 22.58, 17.36, 13.08, 0, 1733 ]
	},


	// meteorological annal average templature C
	//
	//		prefTemplature( prefecture )
	//
	//
	// in Unit.setArea() copy this to averageTemplature
	//
	prefTemplature : [

	17.4	,	//兵庫
	 9.4	,	//北海道
	11.1	,	//青森
	10.7	,	//岩手
	13.1	,	//宮城
	12.4	,	//秋田
	12.2	,	//山形
	13.6	,	//福島
	14.4	,	//茨城
	14.6	,	//栃木
	15.3	,	//群馬
	15.8	,	//埼玉
	16.6	,	//千葉
	17.0	,	//東京
	16.5	,	//神奈川
	14.4	,	//新潟
	14.9	,	//富山
	15.1	,	//石川
	15.0	,	//福井
	15.3	,	//山梨
	12.5	,	//長野
	16.4	,	//岐阜
	17.1	,	//静岡
	16.6	,	//愛知
	16.6	,	//三重
	15.2	,	//滋賀
	16.3	,	//京都
	17.6	,	//大阪
	17.4	,	//兵庫
	15.3	,	//奈良
	17.3	,	//和歌山
	15.5	,	//鳥取
	15.7	,	//島根
	17.0	,	//岡山
	17.0	,	//広島
	16.2	,	//山口
	17.4	,	//徳島
	17.3	,	//香川
	17.3	,	//愛媛
	17.9	,	//高知
	18.0	,	//福岡
	17.4	,	//佐賀
	18.0	,	//長崎
	18.0	,	//熊本
	17.4	,	//大分
	18.1	,	//宮崎
	19.3	,	//鹿児島
	23.5		//沖縄
	],

	// solar factor
	//
	//		prefPVElectricity( prefecture )
	//
	prefPVElectricity : [

	4.04	,	//兵庫
	3.95	,	//北海道
	3.66	,	//青森
	3.88	,	//岩手
	3.84	,	//宮城
	3.54	,	//秋田
	3.72	,	//山形
	3.87	,	//福島
	3.95	,	//茨城
	3.97	,	//栃木
	4.08	,	//群馬
	3.81	,	//埼玉
	4.00	,	//千葉
	3.74	,	//東京
	3.92	,	//神奈川
	3.54	,	//新潟
	3.56	,	//富山
	3.68	,	//石川
	3.57	,	//福井
	4.31	,	//山梨
	3.95	,	//長野
	4.25	,	//岐阜
	4.15	,	//静岡
	4.11	,	//愛知
	4.15	,	//三重
	3.46	,	//滋賀
	3.72	,	//京都
	3.92	,	//大阪
	4.04	,	//兵庫
	3.99	,	//奈良
	4.12	,	//和歌山
	3.66	,	//鳥取
	3.74	,	//島根
	4.06	,	//岡山
	4.26	,	//広島
	3.99	,	//山口
	4.13	,	//徳島
	4.18	,	//香川
	4.15	,	//愛媛
	4.32	,	//高知
	3.79	,	//福岡
	3.94	,	//佐賀
	3.97	,	//長崎
	4.05	,	//熊本
	3.95	,	//大分
	4.26	,	//宮崎
	4.01	,	//鹿児島
	4.15		//沖縄
	],

	// heat load factore table
	//
	//エアコン・冷暖房負荷算出用　
	//	配列は　  [朝、昼、夕、夜]の係数で、
	//	それぞれ　[暖房半月、暖房1ヶ月、暖房2ヶ月、暖房3ヶ月、暖房4ヶ月、暖房6ヶ月、暖房8ヶ月、
	//				冷房半月、冷房1ヶ月、冷房2ヶ月、冷房3ヶ月、冷房4ヶ月]
	//	の規定温度における消費量に対する割合を示す。
	//	この計算方法等については、京都府地球温暖化防止活動推進センター,2006より

	// accons factor copy from D6.accons
	//月数別のエアコン負荷（初期設定は神戸市）
	airconFactor_mon :
			  [ [ 0.66, 0.62, 0.59, 0.55, 0.50, 0.41, 0.37, 0.39, 0.36, 0.31, 0.26, 0.20 ],
   				[ 0.43, 0.39, 0.37, 0.34, 0.30, 0.27, 0.26, 0.79, 0.75, 0.67, 0.59, 0.49 ],
     			[ 0.47, 0.45, 0.42, 0.39, 0.35, 0.30, 0.29, 0.57, 0.55, 0.49, 0.43, 0.35 ],
     			[ 0.62, 0.58, 0.55, 0.51, 0.47, 0.39, 0.35, 0.34, 0.32, 0.27, 0.23, 0.18 ] ],
	// heat factor copy from D6.heatcons
	//月数別の熱需要負荷（初期設定は神戸市）
	heatFactor_mon:
			  [ [ 0.64, 0.61, 0.60, 0.57, 0.53, 0.53, 0.44, 0.54, 0.54, 0.43, 0.36, 0.28 ],
     			[ 0.48, 0.45, 0.42, 0.39, 0.34, 0.30, 0.30, 0.88, 0.85, 0.78, 0.70, 0.59 ],
     			[ 0.52, 0.49, 0.47, 0.43, 0.39, 0.33, 0.32, 0.72, 0.70, 0.64, 0.56, 0.46 ],
     			[ 0.62, 0.59, 0.57, 0.54, 0.50, 0.42, 0.38, 0.48, 0.45, 0.39, 0.32, 0.25 ] ],
	// addac factor copy from D6.addac
	plusHeatFactor_mon:  
			  [ [ 0, 0, 0, 0, 0, 0, 0 ],
     			[ 0, 0, 0, 0, 0, 0, 0 ],
     			[ 0, 0, 0, 0, 0, 0, 0 ],
     			[ 0, 0, 0, 0, 0, 0, 0 ] ],


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
	prefKakeiEnergy : [ 
		[ 7959, 5661, 313, 2647],	//0:神戸
		[ 7568, 5400, 3772, 3984],  //札幌市
		[ 8892, 4251, 4886, 3806],  //青森市
		[ 8455, 5536, 3471, 4168],  //盛岡市
		[ 7822, 6913, 1492, 4149],  //仙台市
		[ 8134, 4816, 4284, 5573],  //秋田市
		[ 9019, 6170, 3119, 5078],  //山形市
		[ 8979, 6080, 2086, 5063],  //福島市
		[ 8644, 6398, 1160, 6005],  //水戸市
		[ 8438, 5842, 1100, 5612],  //宇都宮市
		[ 7785, 5318, 968, 5777],  //前橋市
		[ 9217, 6501, 374, 2922],  //さいたま市
		[ 8296, 5735, 442, 3230],  //千葉市
		[ 8982, 6123, 232, 1462],  //東京都区部
		[ 8719, 6441, 428, 2793],  //横浜市
		[ 8685, 6683, 1370, 5120],  //新潟市
		[ 10824, 5846, 2679, 6369],  //富山市
		[ 10443, 6423, 1918, 5602],  //金沢市
		[ 11659, 6434, 1674, 5284],  //福井市
		[ 8615, 5110, 1393, 4719],  //甲府市
		[ 8552, 5710, 1992, 6084],  //長野市
		[ 10186, 6953, 915, 5483],  //岐阜市
		[ 8980, 7392, 586, 3997],  //静岡市
		[ 8783, 6160, 455, 3352],  //名古屋市
		[ 9409, 6204, 885, 5788],  //津市
		[ 9113, 5571, 712, 4367],  //大津市
		[ 8994, 6135, 413, 2463],  //京都市
		[ 9246, 6026, 196, 1345],  //大阪市
		[ 7959, 5661, 313, 2647],  //神戸市
		[ 9096, 6517, 593, 3637],  //奈良市
		[ 10169, 4862, 842, 4110],  //和歌山市
		[ 8691, 5382, 1327, 4652],  //鳥取市
		[ 9122, 6504, 979, 5699],  //松江市
		[ 9466, 6275, 934, 4759],  //岡山市
		[ 9201, 6303, 765, 4310],  //広島市
		[ 8724, 5867, 1074, 7451],  //山口市
		[ 11443, 5315, 956, 4817],  //徳島市
		[ 9765, 5072, 778, 4649],  //高松市
		[ 9356, 5474, 759, 3979],  //松山市
		[ 8898, 5947, 549, 4191],  //高知市
		[ 8572, 6426, 542, 3958],  //福岡市
		[ 8875, 5993, 958, 5042],  //佐賀市
		[ 7805, 6368, 627, 2823],  //長崎市
		[ 8745, 5735, 688, 4111],  //熊本市
		[ 8260, 5606, 735, 5775],  //大分市
		[ 8188, 5252, 604, 5034],  //宮崎市
		[ 7790, 6001, 469, 5401],  //鹿児島市
		[ 8960, 4911, 366, 3177]   //那覇市
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

	[ [ 1.1084, 1.3537, 2.5436, 0.9465 ], [ 0.8664, 0.9165, 0.3546, 0.9764 ], [ 1.0782, 0.6675, 0.0175, 1.1107 ] ],   //神戸市
	[ [ 1.149, 1.1094, 1.8254, 0.9243 ], [ 0.9482, 0.9876, 0.8169, 1.0159 ], [ 0.8876, 0.8749, 0.2047, 1.0743 ] ],   //札幌市
	[ [ 1.185, 1.0197, 1.8202, 1.0114 ], [ 0.9286, 1.0217, 0.7966, 0.9894 ], [ 0.8722, 0.9376, 0.2455, 1.0025 ] ],   //青森市
	[ [ 1.2519, 1.176, 1.9527, 0.9121 ], [ 0.9035, 0.9891, 0.7324, 1.0333 ], [ 0.8249, 0.7835, 0.1757, 1.0616 ] ],   //盛岡市
	[ [ 1.1606, 1.2125, 2.2116, 0.9972 ], [ 0.9272, 0.9747, 0.5783, 0.9563 ], [ 0.9071, 0.7588, 0.0873, 1.0766 ] ],   //仙台市
	[ [ 1.1375, 1.1571, 1.962, 1.0131 ], [ 0.9253, 0.9971, 0.7264, 0.9946 ], [ 0.9411, 0.7954, 0.1733, 0.9915 ] ],   //秋田市
	[ [ 1.1941, 1.1766, 1.9629, 0.9636 ], [ 0.8986, 0.9952, 0.6925, 0.9746 ], [ 0.9103, 0.7726, 0.2285, 1.091 ] ],   //山形市
	[ [ 1.1462, 1.1823, 1.9593, 0.9525 ], [ 0.9195, 0.9801, 0.6816, 0.987 ], [ 0.9393, 0.7901, 0.2515, 1.085 ] ],   //福島市
	[ [ 1.1464, 1.252, 2.0957, 1.021 ], [ 0.9062, 0.9648, 0.5947, 0.9815 ], [ 0.9611, 0.7228, 0.2145, 1.0028 ] ],   //水戸市
	[ [ 1.1498, 1.2742, 1.934, 1.0276 ], [ 0.9069, 0.9497, 0.6857, 0.9587 ], [ 0.9555, 0.7183, 0.2786, 1.032 ] ],   //宇都宮市
	[ [ 1.1471, 1.2582, 1.9129, 0.9325 ], [ 0.8853, 0.948, 0.6602, 0.9919 ], [ 0.9949, 0.7424, 0.3491, 1.1035 ] ],   //前橋市
	[ [ 1.1087, 1.3465, 2.5018, 0.8666 ], [ 0.8778, 0.9416, 0.3854, 0.9338 ], [ 1.0587, 0.6352, 0.0219, 1.2882 ] ],   //さいたま市
	[ [ 1.1219, 1.3604, 2.4476, 1.0147 ], [ 0.881, 0.9263, 0.4213, 0.9324 ], [ 1.0359, 0.6424, 0.0343, 1.0931 ] ],   //千葉市
	[ [ 1.1218, 1.3846, 2.4812, 1.0011 ], [ 0.8666, 0.9201, 0.393, 0.8726 ], [ 1.0599, 0.6203, 0.0368, 1.2109 ] ],   //東京都区部
	[ [ 1.1243, 1.3369, 2.3761, 0.929 ], [ 0.8828, 0.9295, 0.4813, 0.9553 ], [ 1.0296, 0.6683, 0.0296, 1.1692 ] ],   //横浜市
	[ [ 1.1343, 1.3681, 2.2726, 0.9586 ], [ 0.893, 0.9273, 0.5639, 0.9968 ], [ 0.9993, 0.6303, 0.0302, 1.0607 ] ],   //新潟市
	[ [ 1.1048, 1.1422, 1.9012, 1.053 ], [ 0.8787, 0.9851, 0.7561, 0.9779 ], [ 1.0624, 0.8352, 0.205, 0.966 ] ],   //富山市
	[ [ 1.1945, 1.1597, 2.0031, 1.0081 ], [ 0.8731, 1.0076, 0.6543, 0.9632 ], [ 0.9521, 0.7745, 0.2386, 1.0505 ] ],   //金沢市
	[ [ 1.1454, 1.1327, 2.1399, 1.0077 ], [ 0.8642, 1.0102, 0.5938, 1.0036 ], [ 1.0325, 0.8059, 0.1572, 0.9838 ] ],   //福井市
	[ [ 1.1554, 1.1964, 1.8836, 0.9521 ], [ 0.8678, 0.9947, 0.689, 0.9717 ], [ 1.013, 0.747, 0.3402, 1.1109 ] ],   //甲府市
	[ [ 1.2328, 1.2225, 1.9588, 0.957 ], [ 0.8761, 0.9709, 0.7043, 0.9998 ], [ 0.896, 0.7519, 0.2145, 1.0576 ] ],   //長野市
	[ [ 1.0541, 1.199, 2.3036, 0.9536 ], [ 0.89, 0.9711, 0.4871, 0.9731 ], [ 1.1112, 0.7827, 0.1166, 1.1066 ] ],   //岐阜市
	[ [ 1.0731, 1.175, 2.3433, 0.9896 ], [ 0.8948, 0.9886, 0.453, 0.9589 ], [ 1.0778, 0.7857, 0.1207, 1.0824 ] ],   //静岡市
	[ [ 1.0842, 1.3188, 2.4434, 0.9445 ], [ 0.8755, 0.9435, 0.4371, 0.9695 ], [ 1.0953, 0.6692, 0.0136, 1.1248 ] ],   //名古屋市
	[ [ 1.079, 1.2873, 2.276, 1.0473 ], [ 0.8916, 0.964, 0.4966, 0.9682 ], [ 1.0753, 0.677, 0.1377, 0.9898 ] ],   //津市
	[ [ 1.1796, 1.3788, 2.4042, 0.9903 ], [ 0.8665, 0.9313, 0.4425, 0.9513 ], [ 0.983, 0.6095, 0.0569, 1.094 ] ],   //大津市
	[ [ 1.1548, 1.4195, 2.4335, 1.0361 ], [ 0.8259, 0.9153, 0.4398, 0.9566 ], [ 1.0838, 0.5819, 0.0223, 1.0242 ] ],   //京都市
	[ [ 1.051, 1.3736, 2.6546, 0.8413 ], [ 0.8319, 0.9203, 0.2663, 0.9845 ], [ 1.2122, 0.6347, 0.0167, 1.2374 ] ],   //大阪市
	[ [ 1.1084, 1.3537, 2.5436, 0.9465 ], [ 0.8664, 0.9165, 0.3546, 0.9764 ], [ 1.0782, 0.6675, 0.0175, 1.1107 ] ],   //神戸市
	[ [ 1.1301, 1.3407, 2.324, 0.9201 ], [ 0.8464, 0.9429, 0.4949, 0.9414 ], [ 1.0826, 0.6409, 0.0765, 1.2042 ] ],   //奈良市
	[ [ 1.0738, 1.2468, 2.1346, 0.9533 ], [ 0.875, 0.9801, 0.5627, 0.967 ], [ 1.1098, 0.7042, 0.216, 1.1172 ] ],   //和歌山市
	[ [ 1.1396, 1.2053, 2.116, 0.9945 ], [ 0.8942, 0.9914, 0.5994, 0.9753 ], [ 0.9902, 0.7406, 0.1796, 1.0486 ] ],   //鳥取市
	[ [ 1.1848, 1.2606, 2.2206, 0.9281 ], [ 0.8625, 0.9772, 0.5387, 0.9858 ], [ 0.9828, 0.6904, 0.1414, 1.1197 ] ],   //松江市
	[ [ 1.1117, 1.2538, 2.2167, 0.9359 ], [ 0.8468, 0.9675, 0.5474, 0.9602 ], [ 1.1063, 0.7157, 0.1321, 1.1519 ] ],   //岡山市
	[ [ 1.1835, 1.3205, 2.2709, 0.9131 ], [ 0.8344, 0.9538, 0.5145, 0.986 ], [ 1.0313, 0.6496, 0.1146, 1.1393 ] ],   //広島市
	[ [ 1.1315, 1.2583, 2.1551, 0.9978 ], [ 0.8563, 0.9579, 0.5741, 0.9821 ], [ 1.0642, 0.7259, 0.1697, 1.0328 ] ],   //山口市
	[ [ 1.1012, 1.1775, 1.9936, 0.974 ], [ 0.8708, 0.9956, 0.6212, 0.9728 ], [ 1.0805, 0.7707, 0.3065, 1.0799 ] ],   //徳島市
	[ [ 1.083, 1.219, 2.1848, 0.9868 ], [ 0.8645, 0.9739, 0.548, 0.9244 ], [ 1.1151, 0.7514, 0.1737, 1.1437 ] ],   //高松市
	[ [ 1.1214, 1.2011, 2.1502, 0.9629 ], [ 0.8572, 0.9762, 0.5598, 0.9506 ], [ 1.076, 0.7716, 0.2, 1.1317 ] ],   //松山市
	[ [ 1.0502, 1.203, 2.307, 0.9864 ], [ 0.8667, 0.9859, 0.4585, 0.9409 ], [ 1.1553, 0.7529, 0.1598, 1.1166 ] ],   //高知市
	[ [ 1.0572, 1.2804, 2.4313, 0.9451 ], [ 0.8802, 0.9628, 0.4214, 0.9737 ], [ 1.1234, 0.688, 0.056, 1.1171 ] ],   //福岡市
	[ [ 1.072, 1.2351, 2.2281, 0.9328 ], [ 0.8631, 0.9775, 0.5252, 0.9638 ], [ 1.1322, 0.724, 0.1539, 1.1499 ] ],   //佐賀市
	[ [ 1.0812, 1.2687, 2.4828, 0.9539 ], [ 0.876, 0.9636, 0.3415, 1.0029 ], [ 1.0984, 0.7025, 0.1204, 1.0566 ] ],   //長崎市
	[ [ 1.0242, 1.1665, 2.303, 1.0177 ], [ 0.8686, 0.9761, 0.479, 0.9543 ], [ 1.1867, 0.8178, 0.131, 1.0525 ] ],   //熊本市
	[ [ 1.084, 1.2347, 2.1746, 0.965 ], [ 0.8782, 0.972, 0.562, 0.9673 ], [ 1.0909, 0.7337, 0.1639, 1.1011 ] ],   //大分市
	[ [ 1.0268, 1.2281, 2.2258, 0.9817 ], [ 0.887, 0.9818, 0.5177, 0.939 ], [ 1.1527, 0.7262, 0.1694, 1.126 ] ],   //宮崎市
	[ [ 1.0288, 1.2375, 2.4612, 0.9435 ], [ 0.8727, 0.966, 0.3749, 0.9441 ], [ 1.1738, 0.7401, 0.0937, 1.1685 ] ],   //鹿児島市
	[ [ 0.8457, 1.1222, 1.5081, 0.9201 ], [ 0.9351, 0.9941, 0.8528, 0.9802 ], [ 1.3139, 0.847, 0.5678, 1.1395 ] ]   //那覇市

	]

});


