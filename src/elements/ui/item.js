"use strict";

Polymer({
	is: "ui-item",
	properties: {
		cover: {
			type: String
		}
	},
	listeners: {
		"tap": "_onTapped"
	},
	_onTapped() {
		this.fire("itemOpen");
	}
});
