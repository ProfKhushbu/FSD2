// Write a nodeJS script to fire an event named calculate which calculates the total marks of 5 subjects about of 25 marks and displays the total marks on console as an output. The calculate event fires another event name percentage which takes total marks as argument and percentage should get displayed in console.
const EventEmitter = require('events');
// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();
// Listener for the 'calculate' event
eventEmitter.on('calculate', (marks) => {
    let totalMarks = 0;
    for (let i = 0; i < marks.length; i++) {
        totalMarks += marks[i];
    }
    console.log("Total Marks:", totalMarks);
    // Emit the 'percentage' event with total marks as argument
    eventEmitter.emit('percentage', totalMarks);
});
// Listener for the 'percentage' event
eventEmitter.on('percentage', (totalMarks) => {
    const percentage = (totalMarks / 125) * 100; // Assuming 25 marks for each of the 5 subjects
    console.log("Percentage:", percentage.toFixed(2) + "%");
});
// Example marks for 5 subjects (out of 25 each)
const marks = [25, 25, 25, 25, 25];

// Emit the 'calculate' event with marks as argument
eventEmitter.emit('calculate', marks);
