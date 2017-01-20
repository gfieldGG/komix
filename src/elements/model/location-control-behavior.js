"use strict";

komix.LocationControlBehavior = {
	_pushState(route) {
		history.pushState({}, "", `/library/${route}`);
		window.dispatchEvent(new CustomEvent("location-changed"));
	},
	_replaceState(route) {
		history.replaceState({}, "", route);
		window.dispatchEvent(new CustomEvent("location-changed"));
	},
	initialize() {
		if(new URL(window.location.href).pathname === "/")
			this._replaceState("/library/series");
	},
	gotoLibrary(view) {
		this._pushState(view);
	}
};
