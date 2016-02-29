function findPropertyInArray (haystack, needle) {
	for (var i = 0; i < haystack.length; i++) {
	  var item = haystack[i];
    if (item[needle] !== undefined) {
    	return item[needle];
    }
  }
  return false;
}
