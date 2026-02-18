class HashMap {
	constructor() {
		this.loadFactor = 0.75;
		this.capacity = 16;
		this.buckets = new Array(this.capacity).fill();
		this.size = 0;
	}

	hash(key) {
		let hashCode = 0;

		const primeNumber = 31;
		for (let i = 0; i < key.length; i++) {
			hashCode = primeNumber * hashCode + key.charCodeAt(i);
		}
		return hashCode % this.capacity;
	}

	set(key, value) {
		const index = this.hash(key);

		if (index < 0 || index >= this.buckets.length) {
			throw new Error("Trying to access index out of bounds");
		}

		if (this.buckets[index] === undefined) {
			this.buckets[index] = new LinkedList();
			this.buckets[index].append(key, value);
			this.size += 1;
		} else {
			this.buckets[index].append(key, value);
			this.size += 1;
		}
	}

	get(key) {
		const index = this.hash(key);

		if (index < 0 || index >= this.buckets.length) {
			throw new Error("Trying to access index out of bounds");
		}
		if (this.buckets[index] === undefined) {
			return null;
		} else {
			return this.buckets[index].getNode(key);
		}
	}

	has(key) {
		const index = this.hash(key);

		if (index < 0 || index >= this.buckets.length) {
			throw new Error("Trying to access index out of bounds");
		}
		if (this.buckets[index] === undefined) {
			return false;
		} else {
			return this.buckets[index].contains(key);
		}
	}

	keys() {
		const result = [];
		for (let i = 0; i < this.buckets.length; i++) {
			const bucket = this.buckets[i];
			if (!bucket) continue;
			result.push(...bucket.getKeys());
		}
		return result;
	}


	values() {
		const result = [];
		
		for (let i = 0; i < this.buckets.length; i++) {
			const bucket = this.buckets[i];
			if (!bucket) continue;
			result.push(...bucket.getValues());
		}
		return result;
	}

	entries(){
		const result = [];

		for (let i = 0; i < this.buckets.length; i++) {
			const bucket = this.buckets[i];
			if (!bucket) continue;
			result.push(...bucket.getEntries());
		}
		return result;		
	}

	/*
	remove(key){
		const index = this.hash(key)
		
		if (index < 0 || index >= this.buckets.length) {
  			throw new Error("Trying to access index out of bounds");
		}
		if (this.bucket[index] === undefined){
			return "Key not found"
		} else {
			return this.buckets[index].removeAt(key)
		}

	}
*/

	length() {
		return this.size;
	}

	clear() {
		this.capacity = 16;
		this.buckets = new Array(this.capacity).fill();
		this.size = 0;
		console.log("Hash table cleared");
	}
}

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

class Node {
	constructor(key, value) {
		this.key = key;
		this.value = value;
		this.nextNode = null;
	}
}

const test = new HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

console.log(test);
setTimeout(() => {
	console.log(test.has("monkey"));
}, 2000);

setTimeout(() => {
	console.log(test);
}, 3000);

console.log(test.keys())
console.log(test.entries())