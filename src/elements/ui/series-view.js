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
	_onItemOpened(e) {
		this.gotoUrl("library", "issues", {
			name: e.detail.name,
			volume: e.detail.volume
		});
	}
});
