
let quote = document.getElementById("quote")
let author = document.getElementById("author")

let api_url = "https://api.quotable.io/random";

async function getquote(url){
    const responce = await fetch(url)
    var data = await responce.json();
    console.log(data)
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

getquote(api_url)