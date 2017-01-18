"use strict";

komix.LocationControlBehavior = {
	properties: {
		location: {
			notify: true
		}
	},
	gotoLibrary(view) {
		this.set("location.view", view);
		this.set("location.type", "library");
	}
};
