"use strict";

Polymer({
	is: "api-provider",
	properties: {
		_url: {
			computed: "_computeUrl(path)"
		},
		_params: {
			Type: Object,
			computed: "_computeParams(params)"
		},
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
	},
	_computeUrl: path => `http://192.168.1.233:32501/${path}`,
	_computeParams: params => Object.assign({
		apiKey: "44817310d99520a48bace3e135b8ed0c"
	}, params)
});
