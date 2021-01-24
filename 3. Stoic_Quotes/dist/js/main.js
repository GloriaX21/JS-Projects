let btn = document.querySelector('button');
let output = document.getElementById('container__output');

//Creating An Array
let quotes = [
    '\"Waste no more time arguing what a good man should be. Be One.\” – Marcus Aurelius',
    '\“Think of the life you have lived until now as over and, as a dead man, see what’s left as a bonus and live it according to Nature. Love the hand that fate deals you and play it as your own, for what could be more fitting\?\” – Marcus Aurelius',
    '\“It never ceases to amaze me: we all love ourselves more than other people, but care more about their opinion than our own.\” – Marcus Aurelius',
    '\“In your actions, don’t procrastinate. In your conversations, don’t confuse. In your thoughts, don’t wander. In your soul, don’t be passive or aggressive. In your life, don’t be all about business.\” – Marcus Aurelius',
    '\“If it is not right, do not do it, if it is not true, do not say it.\” – Marcus Aurelius',
    '\“The best revenge is not to be like your enemy.\” – Marcus Aurelius'
];


btn.addEventListener('click', function(){
    var randomQuote= quotes[Math.floor(Math.random()*quotes.length)];
    output.innerHTML = randomQuote;
})

