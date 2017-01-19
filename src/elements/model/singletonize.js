"use strict";

Polymer.singletonize = (element = {}, ignoredElements = []) => {
	const properties = new Map(element.properties
		? Object.keys(element.properties)
			.filter(key => key[0] !== "_" && ignoredElements.indexOf(key) === -1)
			.map(key => [key, element.properties[key].readOnly && `_set${key[0].toUpperCase()}${key.slice(1)}`])
		: []
	);

	const listener = Symbol("listener");

	let singleton;

	function addListeners(instance) {
		if(instance[listener])
			return;

		instance[listener] = event => {
			const property = event.type.slice(0, -8);
			const readOnly = properties.get(property);

			if(readOnly)
				instance[readOnly](event.detail.value);
			else
				instance[property] = event.detail.value;
		};

		properties.forEach((readOnly, property) => {
			singleton.addEventListener(`${property}-changed`, instance[listener]);

			if(readOnly)
				instance[readOnly](singleton[property]);
			else
				instance[property] = singleton[property];
		});
	}

	const singletonizedElement = {
		properties: Object.assign({
			isMaster: {
				type: Boolean,
				value: false,
				readOnly: true
			}
		}, element.properties),

		ready() {
			if(!singleton) {
				singleton = this; // eslint-disable-line consistent-this
				this._setIsMaster(true); // eslint-disable-line no-underscore-dangle

				if(element.ready)
					element.ready.apply(this, arguments);
			}
			else
				addListeners(this);

			if(typeof element.instanceReady === "function")
				element.instanceReady.apply(this, arguments);
		},

		attached() {
			if(singleton && singleton !== this)
				addListeners(this);

			if(typeof element.instanceAttached === "function")
				element.instanceAttached.apply(this, arguments);
		},

		detached() {
			if(this[listener]) {
				properties.forEach(property => singleton.removeEventListener(`${property}-changed`, this[listener]));
				this[listener] = null;
			}

			if(typeof element.instanceDetached === "function")
				element.instanceDetached.apply(this, arguments);
		}
	};

	Object.keys(element).forEach(key => {
		if(key in singletonizedElement)
			return;

		const value = element[key];

		if(typeof value !== "function")
			singletonizedElement[key] = value;
		else
			singletonizedElement[key] = (...args) => value.apply(singleton, args);
	});

	return singletonizedElement;
};

Polymer.singleton = (...args) => Polymer(Polymer.singletonize(...args));
