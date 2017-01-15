"use strict";

Polymer({
	is: "series-provider",
	properties: {
		series: {
			notify: true,
			computed: "_computeSeries(_response)"
		}
	},
	_computeSeries: response => Array.from(response.comics.reduce((seriesMap, issue) => {
		const id = `${issue.volume}@${issue.series}`;
		let series = seriesMap.get(id);

		if(series === undefined) {
			series = {
				startYearFromFirstIssue: false,
				data: {
					name: issue.series,
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
			series.data.coverIssue = 1;
		}
		else if(issue.year < series.data.startYear && !series.startYearFromFirstIssue) {
			series.data.startYear = issue.year;
			series.data.coverIssue = Number(issue.issue);
		}

		if(issue.year > series.data.endYear) {
			series.data.endYear = issue.year;
		}

		return series;
	}, new Map()), ([, { data }]) => data)
});
