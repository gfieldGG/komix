"use strict";

Polymer({
	is: "issues-view",
	behaviors: [kommix.LocationControlBehavior],
	listeners: {
		"itemOpen": "_onItemOpened"
	},
	_onItemOpened() {
		this.gotoLibrary("series");
	}
});
