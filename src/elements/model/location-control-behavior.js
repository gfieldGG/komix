"use strict";

kommix.LocationControlBehavior = {
	properties: {
		location: {
			type: Object,
			notify: true
		}
	},
	gotoLibrary(type) {
		this.set("location.type", type);
	}
};
