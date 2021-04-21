const container = $('.mainContainer');

const numOfColumns = 5;
const money = ['$100', '$200', '$400', '$600', '$800'];

// Loop through each column...
for (let i = 0; i < numOfColumns; i++) {
	// Create a new column
	const column = $('<div class="column"></div>');
	// Loop through each dollar amount..
	for (const amount of money) {
		// Create a new item
		const item = $(`<div class="item">${amount}</div>`);
		// Add item to column
		column.append(item);
	}
	// Add column to container
	container.append(column);
}

// filter my questions to break down the objects into arrays
const output100 = [];
const output200 = [];
const output400 = [];
const output600 = [];
const output800 = [];

function filterQuestions() {
	for (const question of QUESTIONS)
		if (question.value === "$100") {
			output100.push(question)
		}
		else if (question.value === "$200") {
			output200.push(question)
		} 
		else if (question.value === "$400") {
			output400.push(question)
		}
		else if (question.value === "$600") {
			output600.push(question)
		}
		else if (question.value === "$800") {
			output800.push(question)
		}
} filterQuestions()

function onClickRandomQuestion(){
	// query the item that was created
	const JQbuttons = $('.item');
	//query the box where our question will appear.
	const newItem = $('.askedQuestion');
	// loop through our items
	for (const JQB of JQbuttons) {
		// make a variable that allows us to call for our item.
		const button = $(JQB);
		// loop through our items to see if the item value is 100, if it is run the event listener that calls for random question from that numbers arr.
		button.click(function () {
			if (button.text() === "$100"){
				let randomQ100 = output100[Math.floor(Math.random() * output100.length)]
				newItem.text(randomQ100.question)
			}
			else if (button.text() === "$200"){
				let randomQ200 = output200[Math.floor(Math.random() * output200.length)]
				newItem.text(randomQ200.question)
			}
			else if (button.text() === "$400"){
				let randomQ400 = output400[Math.floor(Math.random() * output400.length)]
				newItem.text(randomQ400.question)
			}
			else if (button.text() === "$600"){
				let randomQ600 = output600[Math.floor(Math.random() * output600.length)]
				newItem.text(randomQ600.question)
			}
			else if (button.text() === "$800"){
				let randomQ800 = output800[Math.floor(Math.random() * output800.length)]
				newItem.text(randomQ800.question)
			}
		});
	}
}onClickRandomQuestion()


function clickedSubmit(){
	// query the item that was created
	const enterButton = $('.enterbutton');
		//query the box where our question will appear.
	const input = $('.textInput');
		enterButton.click(function () {
			console.log("enterButton:")
	})
}clickedSubmit()