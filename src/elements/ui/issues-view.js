"use strict";

Polymer({
	is: "issues-view",
	properties: {
		_issues: Array,
		params: {
			type: Object,
			notify: true
		}
	},
	behaviors: [komix.LocationControlBehavior],
	listeners: {
		"itemOpen": "_onItemOpened"
	},
	_onItemOpened() {
		this.gotoLibrary("series");
	}
});
