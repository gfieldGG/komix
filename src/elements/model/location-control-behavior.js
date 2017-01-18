"use strict";

komix.LocationControlBehavior = {
	properties: {
		location: {
			type: Object,
			view: Object,
			notify: true
		}
	},
	gotoLibrary(view) {
		this.set("location.view", view);
		this.set("location.type", "library");
	}
};
