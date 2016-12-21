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
			type: String,
			observer: "_coverChanged"
		}
	},
	listeners: {
		"tap": "_tapped"
	},
	_coverChanged(cover) {
		this.$.cover.style.backgroundImage = `url(${cover})`;
	},
	_tapped() {
		console.log("IST TAPPED WOLLL");
	}
});
