"use strict";

komix.LocationControlBehavior = {
	_pushState(route) {
		history.pushState({}, "", route);
		window.dispatchEvent(new CustomEvent("location-changed"));
	},
	_replaceState(route) {
		history.replaceState({}, "", route);
		window.dispatchEvent(new CustomEvent("location-changed"));
	},
	initialize() {
		if(new URL(window.location.href).pathname === "/")
			this.replaceUrl("library", "series");
	},
	computeUrl(...args) {
		const queryParams = args[args.length - 1];
		const path = typeof args[0] === "object"
			? new URL(window.location.href).pathname.substring(1)
			: args.slice(0, -1).join("/");

		return `/${path}${
			typeof queryParams === "object"
				? `?${Object.entries(queryParams)
					.map(entry => entry.map(encodeURIComponent).join("="))
					.join("&")}`
				: `/${queryParams}`
		}`;
	},
	gotoUrl(...args) {
		this._pushState(this.computeUrl(...args));
	},
	replaceUrl(...args) {
		this._replaceState(this.computeUrl(...args));
	}
};
