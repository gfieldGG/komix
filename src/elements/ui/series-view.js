"use strict";

Polymer({
	is: "series-view",
	properties: {
		_series: Array
	},
	behaviors: [komix.LocationControlBehavior],
	listeners: {
		"itemOpen": "_onItemOpened"
	},
	_onItemOpened() {
		this.gotoLibrary("issues");
	}
});
