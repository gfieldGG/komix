"use strict";

Polymer({
	is: "url-provider",
	properties: {
		path: String,
		params: {
			type: Object,
			value: null
		},
		computedParams: {
			computed: "_computeParams(params)",
			notify: true
		},
		url: {
			computed: "_computeUrl(path)",
			notify: true
		},
		fullUrl: {
			computed: "_computeFullUrl(url, computedParams)",
			notify: true
		}
	},
	_computeParams: params => Object.assign({
		api_key: "44817310d99520a48bace3e135b8ed0c"
	}, params),
	_computeUrl: path => `http://192.168.1.233:32501/${path}`,
	_computeFullUrl: (url, computedParams) => `${url}?${Object.entries(computedParams).map(entry => entry.map(encodeURIComponent).join("=")).join("&")}`
});
