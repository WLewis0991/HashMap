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
		let bucket = this.buckets[index];

		if (bucket == null){
			bucket = new LinkedList()
		}

	}

	clear() {
		this.capacity = 16;
		this.buckets = new Array(this.capacity).fill().map(() => []);
		this.size = 0;
		console.log("Hash table cleared");
	}
}


class LinkedList {
	constructor(){
		this.head = null;
		console.log("linked")
	}
}

class Node {
	constructor(key, value){
		this.key = key;
		this.value = value;
		this.nextNode = null;

	}
}

const test = new HashMap();

console.log(test.set("dog"));
