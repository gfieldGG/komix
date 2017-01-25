"use strict";

Polymer({
	is: "page-spinner",
	properties: {
		issueId: Number,
		currentPage: Number,
		pageCount: Number
	},
	listeners: {
		"tap": "_onTapped"
	},
	_onTapped() {
		this.fire("pageTapped");
	}
});
