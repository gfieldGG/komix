"use strict";

Polymer({
	is: "item-list",
	properties: {
		items: Array,
		itemType: {
			type: String,
			observer: "_itemTypeChanged"
		}
	},
	_itemTypeChanged() {
		const items = [];
		const cover = this.itemType === "series"
			? "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/349320/349320._SX1280_QL80_TTD_.jpg"
			: "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/43074/DIG005396_1._SX1280_QL80_TTD_.jpg";

		console.log(this.itemType);
		for(let i = 0; i < 500; i++) {
			items[i] = {
				cover,
				title: "Saga",
				year: 2000 + i
			};
		}

		this.items = items;
	}
});
