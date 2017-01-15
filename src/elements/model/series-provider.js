"use strict";

Polymer({
	is: "series-provider"
	properties: {
		series: {
			notify: true,
			computed: "_computeSeries(_response)"
		}
	},
	_computeSeries: response => response.series
});
