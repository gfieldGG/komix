"use strict";

Polymer({
	is: "item-list",
	properties: {
		items: Array
	},
	ready() {
		const items = [];

		for(let i = 0; i < 100000; i++) {
			items[i] = {
				cover: "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/349320/349320._SX1280_QL80_TTD_.jpg",
				title: "Saga",
				year: 2000 + i
			};
		}

		this.items = items;
	}
});
