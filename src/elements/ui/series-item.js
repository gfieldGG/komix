"use strict";

Polymer({
	is: "series-item",
	properties: {
		title: {
			type: String
		},
		year: {
			type: String
		},
		cover: {
			type: String
		}
	},
	listeners: {
		"tap": "_tapped"
	},
	_tapped() {
		console.log("IST TAPPED WOLLL");
	}
});
