"use strict";

Polymer({
	is: "reader-page",
	properties: {
		pageUrl: String
	},
	listeners: {
		"tap": "_onTapped"
	},
	_onTapped() {
		this.fire("pageTapped");
	}
});
