"use strict";

Polymer({
	is: "ui-reader",
	behaviors: [komix.LocationControlBehavior],
	properties: {
		params: Object,
	},
	listeners: {
		"pageTapped": "_onPageTapped"
	},
	_onPageTapped() {
		this.replaceUrl({
			issue: this.params.issue,
			page: this.params.page++
		});
	}
});
