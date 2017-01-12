console.log('connected')

var userChoice = prompt('What is your move?').toLowerCase()
console.log('You chose: ' + userChoice)

var options = ['rock', 'paper', 'scissors']

if (options.indexOf(userChoice) != -1) {

	var computerChoice = options[Math.floor(Math.random() * options.length)]

	console.log('Computer chose: ' + computerChoice)
	compare(userChoice, computerChoice)
} else {
	console.log('That is not a valid move!')
}

function compare(user, computer){
  var message
  if (user === computer) {
    message = 'It is a tie!'
  } else if (user === 'rock' && computer === 'scissors' || user === 'paper' && computer === 'rock' || user === 'scissors' && computer === 'paper') {
    message = 'You win!'
  } else if (computer === 'rock' && user === 'scissors' || computer === 'paper' && user === 'rock' || computer === 'scissors' && user === 'paper') {
    message = 'Computer wins!'
  }
  console.log(message)
}
