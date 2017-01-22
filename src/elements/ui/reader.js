"use strict";

Polymer({
	is: "ui-reader",
	behaviors: [komix.LocationControlBehavior],
	properties: {
		params: Object,
	},
	listeners: {
		"tap": "_onTapped"
	},
	_onTapped() {
		console.log("tapped");
		this.replaceUrl({
			issue: this.params.issue,
			page: this.params.page++
		});
	}
});
