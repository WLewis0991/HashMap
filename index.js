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
		
		if (this.buckets[index] === undefined){
		this.buckets[index]= new LinkedList();
		this.buckets[index].append(key, value);
		this.size += 1;
		} else {
			this.buckets[index].append(key, value)
			this.size += 1;
		}
	}

	get(key){
		const index = this.hash(key);

		if (index < 0 || index >= this.buckets.length) {
  			throw new Error("Trying to access index out of bounds");
		}
		if (this.buckets[index] === undefined){
			return null
		} else {
			return this.buckets[index].getNode(key)
		}
	}

	has(key){
		const index = this.hash(key);

		if (index < 0 || index >= this.buckets.length) {
  			throw new Error("Trying to access index out of bounds");
		}
		if (this.buckets[index] === undefined){
			return false
		}else {
			return this.buckets[index].contains(key)
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
}

class Node {
	constructor(key, value) {
		this.key = key;
		this.value = value;
		this.nextNode = null;
	}
}

const test = new HashMap();

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

console.log(test);
setTimeout(() =>{
	console.log(test.has("monkey"));
},2000)

setTimeout(() =>{
	console.log(test);
}, 3000)