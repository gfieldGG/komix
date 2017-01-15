"use strict";

Polymer({
	is: "page-provider",
	properties: {
		_path: {
			computed: "_computePath(issueId, pageNumber)"
		},
		issueId: Number,
		pageNumber: Number,
		pageUrl: {
			notify: true
		}
	},
	_computePath: (issueId, pageNumber) => `comic/${issueId}/page/${pageNumber}`
});
