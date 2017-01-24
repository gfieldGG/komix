"use strict";

Polymer({
	is: "reader-page",
	properties: {
		pageUrl: Object,
	},
	listeners: {
		"tap": "_onTapped"
	},
	_onTapped() {
		this.fire("pageTapped");
	}
});
