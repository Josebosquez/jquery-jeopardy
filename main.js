//////////////////////////////
// create dom elements
//////////////////////////////
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



//////////////////////////////
// filter my questions to break down the objects into arrays
//////////////////////////////
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

///////////////////////////////
// give me a random question when an item is clicked
//////////////////////////////
let question = "hi"
const newItem = $('.askedQuestion');
function onClickRandomQuestion() {
	const JQbuttons = $('.item');
	// query the item that was created
	//query the box where our question will appear.
	// loop through our items
	for (const JQB of JQbuttons) {
		// make a variable that allows us to call for our item.
		const button = $(JQB);
		// loop through our items to see if the item value is 100, if it is run the event listener that calls for random question from that numbers arr.
		button.click(function () {
			if (button.text() === "$100") {
				question = output100[Math.floor(Math.random() * output100.length)]
				newItem.text(question.question)
				console.log(question)
			}
			else if (button.text() === "$200") {
				question = output200[Math.floor(Math.random() * output200.length)]
				newItem.text(question.question)
				console.log(button.text())
			}
			else if (button.text() === "$400") {
				question = output400[Math.floor(Math.random() * output400.length)]
				newItem.text(question.question)
				console.log(button.text())
			}
			else if (button.text() === "$600") {
				question = output600[Math.floor(Math.random() * output600.length)]
				newItem.text(question.question)
				console.log(button.text())
			}
			else if (button.text() === "$800") {
				question = output800[Math.floor(Math.random() * output800.length)]
				newItem.text(question.question)
				console.log(button.text())
			}
		});
	} 
	
	///////////////////////////
	// submit button is clicked 
	///////////////////////////
	
	function clickedSubmit() {
		// query the item that was created
		const enterButton = $('.enterButton');
		//query the box where our question will appear.
		const input = $('#textInput');
		//query the box where our question/answer will appear.
		const newItem = $('.askedQuestion');
		console.log(newItem)
		enterButton.click(function () {
			console.log(newItem.html)
			console.log(input.val())
			console.log(question)
			console.log(question.answer)
			if (question.answer === input.val()){
				console.log(newItem.text())
				newItem.text("Good Job Dude!") 
			} else {
				newItem.html('Incorrect! Try again.')
				// newItem.html('<div id="scary"><img id="hello" src = "images/hello.jpeg"></img>') 
				// const hello = $('#hello')
				// let woman = new Audio ('sounds/woman.mp3')
				// woman.play()
			}

			
			
			
			
		})
	} 
	clickedSubmit()
} onClickRandomQuestion()