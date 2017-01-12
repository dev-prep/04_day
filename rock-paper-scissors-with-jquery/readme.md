![Rock Paper Scissors](./assets/rps.svg.png)

# Rock Paper Scissors with jQuery

Now that you've gotten a short intro to jQuery and DOM manipulation, let's put it into practice! We're going to use some [starter_code](./starter_code) which already has HTML, CSS, and the console version of Rock Paper Scissors that we built yesterday. This afternoon we are going to use jQuery to make our game work in the broswer without needing to look at the console to see who won. If we have time, we'll add tournament functionality.

## Starting Point

Let's copy the starter code to our desktops and then open it in Sublime Text. Before we add jQuery, we need to get familiar with the existing code so we know where we're starting.

## Source in jQuery

In order to have access to jQuery, we need to source it in. Add this link to your head:

```js
<script src="http://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
```

## Code Along

> Important: Keep your console open **AT ALL TIMES** when developing with JavaScript and jQuery. This is where you will see error messages if you have syntax errors, loading errors, or other errors.

First, we can use the form to get the player's name:

```js
var name
$('form').submit(function(event){
  name = $('#name').val()
  $('#message').text('Welcome, ' + name + '!')
})
```

Why did the page reload? Form submission automiatically reload the page. We can stop that defaul behavior by adding one line:

```js
var name
$('form').submit(function(event){
  name = $('#name').val()
  $('#message').text('Welcome, ' + name + '!')
  event.preventDefault()
})
```

Why did I define the variable `name` above the event listener?

We don't really need thr form anymore, so let's get rid of it:

```js
var name
$('form').submit(function(event){
  name = $('#name').val()
  $('#message').text('Welcome, ' + name + '!')
  event.preventDefault()
  $('form').remove()
})
```

Now, let's have the player select their move by clicking on an icon instead of typing into the prompt. Get rid of the prompt and add this code:

```js
$('.options').on('click', function() {
    userChoice = $(this).attr('id')
    $('#user').removeClass('rock paper scissors').addClass(userChoice)
})
```

Let's check out that error!

The user isn't typing anything in anymore, so we can get rid of the code to alert them to an invalid choice.

After the user makes a move, we want the computer to make a move, too. Let's make it so that the computer's move icon shows up in the computer move box on our page:

```js
function computerMove() {
  computerChoice = options[Math.floor(Math.random() * options.length)]
  $('#comp').removeClass('rock paper scissors').addClass(computerChoice)
  compare(userChoice, computerChoice)
}
```

We have to call that function or it won't run, so let's call it after the user makes a choice:

```js
$('.options').on('click', function() {
    userChoice = $(this).attr('id')
    $('#user').removeClass('rock paper scissors').addClass(userChoice)
    computerMove()
})
```

Now we're cooking with gas!

![boom](https://media.giphy.com/media/14ceV8wMLIGO6Q/giphy.gif)

The winner is still announced in the console. Let's make that show up where the form used to be. Change the console.log in your compare function to this:

```js
$('#result').html(message)
```

The function in its entirety now looks like this:

```js
function compare(user, computer){
  var message
  if (user === computer) {
    message = 'It is a tie!'
  } else if (user === 'rock' && computer === 'scissors' || user === 'paper' && computer === 'rock' || user === 'scissors' && computer === 'paper') {
    message = 'You win!'
  } else if (computer === 'rock' && user === 'scissors' || computer === 'paper' && user === 'rock' || computer === 'scissors' && user === 'paper') {
    message = 'Computer wins!'
  }
  $('#result').html(message)
}
```

Let's keep score! We have a score board on the right side of our page, but it's not doing anything yet. Let's put it to work.

After determining the winner, let's change the score value and display it in the score board.

First, define beginning scores:

```js
var userScore = 0
var computerScore = 0
```

Now, add new code to the compare function, so it looks like this:

```js
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
  $('#result').html(message)
}
```

That's it! We have our game working in the browser window!

![party](https://media.giphy.com/media/l3UcA1HpL5kLuiWOc/giphy.gif)

## MORE!!!

Time permitting, let's try to add:

- a tournament function, so that whoever wins five in a row wins the tournament
- a reset button at the end of a tournament
- functionality that prevents the user from making a move before entering their name in the form