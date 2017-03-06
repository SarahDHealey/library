'use strict';
function average(array) {
	let storage = 0;
	for (var i = 0; i<array.length; i++) {
		storage = storage + array[i]
	}
	return storage/array.length
}

console.log(average([1,3,4,5,6]))