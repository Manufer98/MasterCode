const a = [1, 2, 3, 4];
const b = [6, 8, 5];




const carac = (array1, array2) => {
	const map = new Map();

	for (let i of array1) {
		map.set(i)
	}

	for (let i of array2) {
		if (map.has(i)) {
			return true;
		}
	}

	return false;


}

console.log(carac(a, b))