var sort = require('./heapsort').heapSort;
var nums = [];
for (var i = 0; i < 15; ++i) {
	 nums.push(Math.floor(Math.random() * 99));
}

function dispArr(arr) {
	 for (var i = 0; i < arr.length; ++i) {
		  process.stdout.write(arr[i] + " ");
		   if (i % 10 == 9) {
			    process.stdout.write("\n");
			     }
		    }
	  if (i % 10 != 0) {
		   process.stdout.write("\n");
		    }
}
console.log('unsorted array:');
dispArr(nums);
sort(nums);
console.log('sorted array:');
dispArr(nums);
