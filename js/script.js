/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [

  {
    'quote': 'If you can\'t make it good, at least make it look good.',
    'source': 'Bill Gates',
    'year': null,
    'citation': 'Speech',
    'tags': ['humor']
  },
  {
    'quote': 'DNA is like a computer program but far, far more advanced than any software ever created.',
    'source': 'Bill Gates',
    'year': 1995,
    'citation': 'The Road Ahead',
    'tags': ['science', 'biology', 'dna']
  },
  {
    'quote': 'If you read the same things as others and say the same things they say, then you\'re perceived as intelligent. I\'m a bit more independent and radical and consider intelligence the ability to think about matters on your own and ask a lot of skeptical questions to get at the real truth, not just what you\'re told it is.',
    'source': 'Steve Wozniak',
    'year': 2007,
    'citation': 'iWoz',
    'tags': ['intelligence']
  },
  {
    'quote': 'Practice isn\’t the thing you do once you\’re good. It\’s the thing you do that makes you good.',
    'source': 'Frank Brady',
    'year': 2011,
    'citation': 'Endgame',
    'tags': ['intelligence']
  },
  {
    'quote': 'It\’s only after you\’ve stepped outside your comfort zone that you begin to change, grow, and transform.',
    'source': 'Roy T. Bennett',
    'year': null,
    'citation': null,
    'tags': ['inspirational']
  }
];

/***
 * `diceRoll` takes an integer as it's sole parameter and returns a random number between 1 and the integer
***/
function diceRoll(sides) {
  let randomNum = Math.floor(Math.random() * sides);
  return randomNum;
}


/***
 * `getRandomQuote` function
 * returns a random quote by passing diceRoll to the index bracket of quotes
***/

function getRandomQuote() {
  return quotes[diceRoll(quotes.length)];
}


/***
 * `printQuote` function generates a 
***/

function printQuote() {
  // grab a random quote using the awesome function we made earlier
  let quote = getRandomQuote();
  // every quote has a quote and a source so count on that 
  // and add them to the html
  
  let html = `
      <p class="quote"> ${quote['quote']} </p>
      <p class="source"> ${quote['source']}`;

  // if there is a citation go ahead and add it to the html
  if (quote['citation']) {
    html += `<span class="citation">${quote['citation']}</span>`;
  };
  // if there is a year on the object, add it to the html
  if (quote['year']) {
    html += `<span class="year">${quote['year']}</span>`;
  };
  // If there are tags, go ahead and loop through the array and insert them into
  // the html string 
  if (quote['tags']) {
    let tags = quote['tags'];
    tags.forEach((item, index, array) => {
        html += ` | <em>${item}</em>`;
    });
  };
  // append closing p tag
  html += '</p>';

  // set the innerhtml of the quote-box to the html string
  document.getElementById('quote-box').innerHTML = html;
  
  // return success
  return 1;
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);