"use strict";

Polymer({
	is: "series-view",
	behaviors: [kommix.LocationControlBehavior],
	listeners: {
		"onItemOpened": "_onItemOpened"
	},
	_onItemOpened() {
		this.gotoLibrary("issues");
	}
});
