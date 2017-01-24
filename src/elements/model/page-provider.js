"use strict";

Polymer({
	is: "page-provider",
	properties: {
		_path: {
			computed: "_computePath(issueId, pageNumber)"
		},
		_params: {
			computed: "_computeParams(maxHeight)"
		},
		issueId: Number,
		pageNumber: Number,
		maxHeight: Number,
		pageUrl: {
			notify: true
		}
	},
	_computePath: (issueId, pageNumber) => `comic/${issueId}/page/${pageNumber}`,
	_computeParams: maxHeight => ({
		max_height: maxHeight
	})
});
