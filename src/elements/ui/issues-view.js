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
	_onItemOpened(e) {
		this.gotoUrl("reader", "reader", {
			issue: e.detail.id,
			page: 0,
			pageCount: e.detail.pageCount
		});
	}
});
