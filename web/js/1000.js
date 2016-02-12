// TIL 1000 == 1E3:

Math.round((new Date).getTime()/1E3);
Math.round((new Date).getTime()/1000);

// are identical. '1E3' is just shorter and is used by Google in t─e analytics.js file. 
