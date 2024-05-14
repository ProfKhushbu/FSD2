
const E = require('events'); 

const ee = new E();
ee.on('start', (start, middle, end) => {
    console.log(`started from ${start} via ${middle} to ${end}`);
  });
  
  ee.emit('start', 1,30, 100);







