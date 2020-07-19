/**
 * Home-Eco Diagnosis for JavaScript
 *
 * ConsHTsum
 */

DC = D6.consHTsum;

//change Input data to local value
DC.precalc = function() {
	this.clear(); //clear data

	this.prefecture = this.input("i021", 3); //city, prefecture ##
	this.heatArea = D6.area.getHeatingLevel(this.prefecture);

	this.person = this.input("i001", 4); //person ##
	this.houseType = this.input("i002", 2); //standalone
	this.houseSize = D6.consShow["TO"].houseSize; //home size

	// default area heating set
	this.priceHotWater =
		this.input("i066", 1) == 1
			? (D6.area.averageCostEnergy.hotwater * this.houseSize) / 100
			: 0;

	this.heatSpace = this.input("i201", this.heatArea <= 3 ? 0.6 : 0.2); //part of heating CN
	this.heatMonth = this.input("i206", D6.area.seasonMonth.winter); //heating month

	//default set
	this.heatEquip = this.input("i202", this.heatArea <= 4 ? 6 : -1); //heating equipment

	// heat time default set
	this.heatTime = this.input("i204", this.heatArea <= 4 ? 24 : 4); //heating time

	this.heatTemp = this.input("i205", 21); //heating temperature setting
	this.priceEleSpring = this.input("i0912", -1); //electricity charge in spring/fall
	this.priceEleWinter = this.input("i0911", -1); //electricity charge in winter
	this.priceGasSpring = this.input("i0922", -1); //gas charge in spring/fall
	this.priceGasWinter = this.input("i0921", -1); //gas charge in winter
	this.consKeros = this.input("i064", -1); //consumption of kerosene
	this.hotwaterEquipType = this.input("i101", -1); //hot water temperature

	this.performanceWindow = this.input("i041", -1); //performance of window
	this.performanceWall = this.input("i042", -1); //performance of wall insulation
	this.reformWindow = this.input("i043", -1); //reform to change window
	this.reformfloor = this.input("i044", -1); //reform to change floor
};

//add function
D6.consHTsum.calc_org = D6.consHTsum.calc;
D6.consHTsum.calc = function() {
	D6.consHTsum.calc_org();
	//set all for heater
	if (this.priceHotWater > 0) {
		this.hotwater = D6.consShow["TO"].hotwater;
		this.priceHotWater = D6.consShow["TO"].priceHotWater;
	}
};