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
			// console.log(output100)
			// console.log(question.question)
		}
		else if (question.value === "$200") {
			output200.push(question.question)
		}
		else if (question.value === "$400") {
			output400.push(question.question)
		}
		else if (question.value === "$600") {
			output600.push(question.question)
		}
		else if (question.value === "$800") {
			output800.push(question.question)
		}
		randomQuestion()
}
filterQuestions()

function randomQuestion(){
	let realQuestion100 = output100[Math.floor(Math.random() * output100.length)]
	const JQbuttons = $('.item');
	for (const JQB of JQbuttons) {
		const button = $(JQB);
		button.click(function () {
			const newItem = $('<div class="askedQuestion"><h4>Question</h4></div>');
			$('.question').append(newItem);
			newItem.text(realQuestion100.question)
		});
	}
}


