"use strict";

Polymer({
	is: "api-provider",
	properties: {
		_url: String,
		_params: Object,
		path: String,
		params: Object,
		response: {
			type: Object,
			notify: true
		},
		error: {
			type: Object,
			notify: true
		},
		loading: {
			type: Boolean,
			notify: true
		}
	}
});
