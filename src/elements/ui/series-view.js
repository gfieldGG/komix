"use strict";

Polymer({
	is: "series-view",
	behaviors: [kommix.LocationControlBehavior],
	listeners: {
		"itemOpen": "_onItemOpened"
	},
	_onItemOpened() {
		this.gotoLibrary("issues");
	}
});
