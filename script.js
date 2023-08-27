// Titles: https://omdbapi.com/?s=thor&page=1&apikey=fc1fef96
// details: http://www.omdbapi.com/?i=tt3896198&apikey=fc1fef96

const movieSearchBox = document.getElementById('movie-search-box');
const searchList = document.getElementById('search-list');
const resultGrid = document.getElementById('result-grid');


//load movies from API

async function loadMovies(searchTerm){
    const URL = `https://omdbapi.com/?s=${searchTerm}&page=1&apikey=fc1fef96`;
    const res = await fetch(`${URL}`);
    const data = await res.json();
    // console.log(data);
    if(data.Response =="True") displayMovieList(data.Search);
}
function findMovies(){
    let searchTerm = (movieSearchBox.value).trim();
    if (searchTerm.length > 0) {
        searchList.classList.remove('hide-search-list');
        loadMovies(searchTerm);
    }else {
        searchList.class.add('hide-search-list');
    }
   
}


function displayMovieList(movies){
    searchList.innerHTML= "";
    for(let idx = 0; idx < movies.length; idx){
        let movieListItem = document.createElement("div");
        movieListItem.dataset.id = movies[idx].imdbID;
        movieListItem.classList.add('search-list-item');
        if(movies[idx].Poster != "N/A") 
            moviePoster = movies[idx].Poster;
        else
            moviePoster = "image_not_found";

        movieListItem.innerHTML = `
        <div class ="search-item-thumbnail">
            <img src="${moviePoster}"> 
        </div>
        <div class="search-item-info">
                <h3>${movies[idx].Title}</h3>
                <p>${movies[idx].Year}</p>
        </div>
        `;
        searchList.appendChild(movieListItem);

    }

 }
        