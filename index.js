document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener('click', function(event){
    if (event.target.classList.contains('add-button')){
      const movieID = event.target.dataset.imbdID
    }
  })
  // code here will execute after the document is loaded

  const myForm = document.querySelector("#search-form");
  myForm.addEventListener("submit", function (e) {
    e.preventDefault();
    document.querySelector(".movies-container").innerHTML =
      renderMovies(movieData);
    function renderMovies(movieArray) {
      const movieHtmlArray = movieArray.map(function (currentMovie) {
        return `<div class="movie card m-1">
                    <img src=${currentMovie.Poster} alt="Movie Poster" />
                    <div class="card-body">
                      <div class="card-title title">${currentMovie.Title}</div>
                      <div class="releaseDate">${currentMovie.Year}</div>
                      <button class="add-button" data-imbdid=${currentMovie.imbdID}>Add</button>
                    </div>
                  </div>`;
      });
      return movieHtmlArray.join("");
    }
  });
});

const saveToWatchlist = (movieID) => {
  const movie = movieData.find((currentMovie) => {
    return currentMovie.imbdID == movieID
  })
  let watchlistJSON = localStorage.getItem('watchlist')
  let watchlist = json.parse(watchlistJSON)

  if(watchlist==null){
    watchlist = []
  }
  watchlist.push(movie)
  watchlistJSON = JSON.stringify(watchlist)
  localStorage.setItem("watchlist", watchlistJSON)
}
