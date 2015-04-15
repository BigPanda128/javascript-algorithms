var sort = require('./heapsort').heapSort;
var nums = [];
for (var i = 0; i < 100; ++i) {
	 nums[i] = Math.floor(Math.random() * 101);
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
dispArr(nums);
sort(nums);
dispArr(nums);
