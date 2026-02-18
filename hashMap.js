import { LinkedList } from "./linkedList.js";


export { HashMap };


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
