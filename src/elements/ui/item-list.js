"use strict";

Polymer({
	is: "item-list",
	properties: {
		items: Array
	},
	ready() {
		this.items = [];
		for(let i = 0; i < 100; i++) {
			this.items[i] = {
				cover: "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/349320/349320._SX1280_QL80_TTD_.jpg",
				title: "Saga",
				year: 2000 + i
			};
		}
		console.log(this.items);
	}
});
