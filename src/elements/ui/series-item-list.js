"use strict";

Polymer({
	is: "series-item-list",
	properties: {
		items: Array
	},
	ready() {
		const items = [];
		const cover = "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/349320/349320._SX1280_QL80_TTD_.jpg";

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
