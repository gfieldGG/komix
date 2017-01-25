"use strict";

Polymer({
	is: "reader-view",
	behaviors: [komix.LocationControlBehavior],
	properties: {
		params: Object,
	},
	listeners: {
		"pageTapped": "_onPageTapped"
	},
	_onPageTapped() {
		console.log("page tapped");
		this._nextPage();
	},
	_nextPage() {
		if(Number(this.params.page) + 1 < this.params.pageCount)
			this.replaceUrl({
				issue: this.params.issue,
				page: ++this.params.page,
				pageCount: this.params.pageCount
			});
	},
	_prevPage() {
		if(Number(this.params.page) - 1 >= 0)
			this.replaceUrl({
				issue: this.params.issue,
				page: --this.params.page,
				pageCount: this.params.pageCount
			});
	}
});
