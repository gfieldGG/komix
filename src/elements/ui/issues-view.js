"use strict";

Polymer({
	is: "issues-view",
	properties: {
		_issues: Array,
		detail: {
			type: Object,
			value: {
				name: "Y: The Last Man",
				volume: 1
			}
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
