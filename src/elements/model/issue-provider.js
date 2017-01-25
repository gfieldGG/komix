"use strict";

Polymer({
	is: "issue-provider",
	properties: {
		_response: Object,
		params: {
			computed: "_computeParams(series)"
		},
		issues: {
			notify: true,
			computed: "_computeIssues(_response)"
		}
	},
	_computeParams: series =>
		({
			"order": "issue",
			"series": series.name,
			"volume": series.volume
		}),
	_computeIssues: response =>
		Array.from(response.comics.map(issue =>
				({
					id: issue.id,
					issueNumber: issue.issue,
					title: `${issue.series} #${issue.issue}`,
					series: issue.series,
					year: issue.year,
					pageCount: issue.page_count,
					lastreadPage: Number(issue.lastread_page)
				})
		))
});
