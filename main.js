function choose(choices) {
    return choices[Math.floor(Math.random() * choices.length)] 
}

var quotes = [
  'hi',
  'bye',
  'hello'
  ];

var qp = document.querySelector('#quote');
qp.innerText = choose(quotes);
