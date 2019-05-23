const findLargestInt = integers => integers.reduce((acc, cur) => {
	if (cur > acc) {
  	return cur;
  }
  return acc;
})

// Test
findLargestInt([-1,4,0,-7,22,6])