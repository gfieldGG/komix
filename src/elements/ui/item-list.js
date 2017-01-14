"use strict";

Polymer({
	is: "item-list",
	properties: {
		items: {
			type: Array,
			observer: "_onItemsChanged"
		}
	},
	_onItemsChanged() {
		if(!this.ironList)
			return;
		this.ironList.items = this.items;
	},
	ready() {
		const slotted = this.$.itemTemplate.tagName === "CONTENT"
			? this.$.itemTemplate.getDistributedNodes()
			: this.$.itemTemplate.assignedNodes();

		const template = [...slotted].find(node => node.tagName === "TEMPLATE");

		if(!template) {
			console.warn("item-list requires a template to be provided in light-dom");
			return;
		}

		const ironList = document.createElement("iron-list");
		ironList.grid = true;
		ironList.scrollTarget = "document";
		ironList.items = this.items;
		ironList.appendChild(template);
		this.root.appendChild(ironList);
		this.ironList = ironList;
	}
});
