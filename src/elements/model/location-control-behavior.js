"use strict";

komix.LocationControlBehavior = {
	properties: {
		route: {
			type: Object,
			notify: true
		}
	},
	addRoute(newRoute) {
		if(this.route !== undefined)
			throw new Error("Route is already initialized.");

		this.route = newRoute;
	},
	gotoLibrary(view) {
		this.set("route.path", `/library/${view}`);
	}
};
