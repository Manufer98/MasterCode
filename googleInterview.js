const a = [1, 7, 3, 4]
const b = [1, 2, 4, 4]

const c = 8;



const google = (array, sum) => {

	const set = new Set();

	for (let i of array) {
		if (set.has(sum - i)) {
			return true;
		}
		set.add(sum - i);
	}

	/*for (let i = 0; i < array.length; i++) {
		if (set.has(sum - array[i])) {
			
		}
	}*/

	return false;

	/* for (let i of array) {
		if (set.has(i)) {
			return true;
		}
	}
 */
	//return false;
	console.log(set);
}

console.log(google(b, c))