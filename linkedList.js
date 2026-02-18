import { Node } from "./node.js";

export { LinkedList };

class LinkedList {
	constructor() {
		this.head = null;
	}

	append(key, value) {
		const node = new Node(key, value);
		if (this.head == null) {
			this.head = node;
		} else {
			let current = this.head;
			while (current.nextNode != null) {
				current = current.nextNode;
			}
			current.nextNode = node;
		}
	}

	getNode(key) {
		if (this.head == null) {
			return null;
		} else {
			let current = this.head;
			while (current != null) {
				if (current.key == key) {
					return current.value;
				} else current = current.nextNode;
			}
		}
	}

	contains(key) {
		if (this.head == null) {
			return false;
		} else {
			let current = this.head;
			while (current != null) {
				if (current.key == key) {
					return true;
				} else current = current.nextNode;
			}
		}
		return false;
	}

	getKeys() {
		if (this.head == null) {
			return "";
		} else {
			const keys = [];
			let current = this.head;
			while (current != null) {
				keys.push(current.key);
				current = current.nextNode;
			}
			return keys;
		}
	}


	getValues() {
		if (this.head == null) {
			return "";
		} else {
			const values = [];
			let current = this.head;
			while (current != null) {
				values.push(current.value);
				current = current.nextNode;
			}
			return values;
		}
	}

	getEntries(){
		if (this.head == null) {
			return "";
		} else {
			const entries = [];
			let current = this.head;
			while (current != null) {
				entries.push([current.key, current.value]);
				current = current.nextNode;
			}
			return entries;
		}	
	}

	/*
	removeAt(key) {

		let current = this.head;
		
		if (current.key === key){
			this.head = current.nextNode
			return console.log("Key Removed")
		}
		while (current != null) {
			current = current.nextNode;
			count++;
		}
		if (current == null || current.nextNode == null) {
			return RangeError("Number out of index range");
		}
		current.nextNode = current.nextNode.nextNode;
	}
		*/
}
