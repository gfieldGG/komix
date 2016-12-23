"use strict";

komix.LocationControlBehavior = {
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
