const quotes = [
    {
    quote:"절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다.",
    author:"L.론허바드",
    },
    {
    quote:"좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다.",
    author:"단테",
    },
    {
    quote:"당신이 할수 있다고 믿든 할수 없다고 믿든 믿는 대로 될것이다.",
    author:"헨리 포드",
    },
    {
    quote:"작은 기회로 부터 종종 위대한 업적이 시작된다.",
    author:"데모스테네스",
    },
    {
    quote:" 세상은 고통으로 가득하지만 그것을 극복하는 사람들로도 가득하다 .",
    author:"헨렌켈러",
    },    
];

const randomQuote = quotes[Math.floor(Math.random()*(quotes.length))];
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
quote.textContent=`${randomQuote.quote}`;
author.textContent=`${randomQuote.author}`;
