console.log('connected!')

var name
var userChoice
var computerChoice
var userScore = 0
var computerScore = 0
var options = ['rock', 'paper', 'scissors']

$('form').submit(function(event){
  name = $('#name').val()
  $('#message').text('Welcome, ' + name + '!')
  $('#userName').text(name)
  event.preventDefault()
  $('form').remove()

  $('.options').on('click', play)

  function play() {
    userChoice = $(this).attr('id')
    $('#user').removeClass('rock paper scissors').addClass(userChoice)
    computerMove()
  }

  function computerMove() {
    computerChoice = options[Math.floor(Math.random() * options.length)]
    $('#comp').removeClass('rock paper scissors').addClass(computerChoice)
    compare(userChoice, computerChoice)
  }

  function compare(user, computer){
    var message
    if (user === computer) {
      message = 'It is a tie!'
    } else if (user === 'rock' && computer === 'scissors' || user === 'paper' && computer === 'rock' || user === 'scissors' && computer === 'paper') {
      message = 'You win!'
      userScore++
      $('#userScore').text(userScore)
    } else if (computer === 'rock' && user === 'scissors' || computer === 'paper' && user === 'rock' || computer === 'scissors' && user === 'paper') {
      message = 'Computer wins!'
      computerScore++
      $('#computerScore').text(computerScore)
    }
    if (userScore === 5) {
      message = 'You win the tournament! Play again?'
      $('.options').off('click', play)
      endTournament()
    } else if (computerScore === 5) {
      message = 'Computer wins the tournament! Play again?'
      $('.options').off('click', play)
      endTournament()
    }
    $('#result').html(message)
  }

  function endTournament() {
    $('#result').addClass('btn endTournament')
    $('#result').click(function(){
      userScore = 0
      computerScore = 0
      $('#result').removeClass('endTournament btn')
      $('#user').removeClass('rock paper scissors')
      $('#comp').removeClass('rock paper scissors')
      $('#result').html('')
      $('#userScore').text(userScore)
      $('#computerScore').text(computerScore)
      $('.options').on('click', play)
    })
  }
})
