const searchForm = document.getElementById("seach-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more");
const button = document.getElementById("search");

let keyword = "";
let page = 1;
let accessKey = "Kyalb9gz-OXr6q9QOETgxiioi4DsC46h2bGHhDm24Qs";
async function searchImages(){
    keyword = searchBox.value
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`
    

    const responce = await fetch(url)
    const data = await responce.json();
    
    if(page === 1){
        searchResult.innerHTML = "";
    }
    const results = data.results;

    results.map((results)=>{
        const image = document.createElement("img")
        image.src = results.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = results.links.html;
        imageLink.target = "_blank"

        imageLink.appendChild(image);

        searchResult.appendChild(imageLink)
    });
    showMoreBtn.style.display = "block";
}

// searchForm.addEventListener("submit",(e)=>{
//     e.preventDefault
//     page = 1
//     searchImages()
// });

button.addEventListener("click",function(e){
    e.preventDefault();
    page = 1
    searchImages()
});

showMoreBtn.addEventListener("click",function(){
    page++;
    searchImages()
})

