"use strict";

Polymer({
	is: "series-provider",
	properties: {
		_response: Object,
		params: {
			value: {
				"order": "series"
			}
		},
		series: {
			notify: true,
			computed: "_computeSeries(_response)"
		}
	},
	_computeSeries: response => Array.from(
		response.comics.reduce((seriesMap, issue) => {
			const id = `${issue.volume}@${issue.series}`;
			let series = seriesMap.get(id);

			if(series === undefined) {
				series = {
					startYearFromFirstIssue: false,
					data: {
						name: issue.series,
						volume: issue.volume,
						startYear: Infinity,
						endYear: -Infinity,
						coverIssue: undefined
					}
				};
				seriesMap.set(id, series);
			}

			if(issue.issue === "1") {
				series.data.startYear = issue.year;
				series.startYearFromFirstIssue = true;
				series.data.coverIssue = issue.id;
			}
			else if(issue.year < series.data.startYear && !series.startYearFromFirstIssue) {
				series.data.startYear = issue.year;
				series.data.coverIssue = issue.id;
			}

			if(issue.year > series.data.endYear) {
				series.data.endYear = issue.year;
			}

			return seriesMap;
		}, new Map()), ([, { data }]) => data)
});
