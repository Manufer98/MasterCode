
class Array {
	constructor() {
		this.length = 0;
		this.data = {};
	}

	get(index) {
		return this.data[index];
	}

	push(item) {
		this.data[this.length] = item;
		this.length++;
		return this.length;
	}

	pop() {
		const lastItem = this.data[this.length - 1];
		let length = this.length - 1;
		delete this.data[length];
		this.length--;
		return lastItem;

	}
}

const array = new Array();
array.push('hi');
array.push('bye');
console.log(array.pop());
console.log(array);