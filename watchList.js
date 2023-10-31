document.addEventListener("DOMContentLoaded", function () {
  // code here will execute after the document is loaded
  const savedMovieDataJSON = localStorage.getItem("watchlist");
  const savedMovieData = JSON.parse(savedMovieDataJSON);

  console.log(savedMovieData);
  document.querySelector(".movies-container").innerHTML =
    renderMovies(savedMovieData);
  function renderMovies(movieArray) {
    const movieHtmlArray = movieArray.map(function (currentMovie) {
      return `<div class="movie card m-1">
      <img src=${currentMovie.Poster} alt="Movie Poster" />
      <div class="card-body">
        <div class="card-title title">${currentMovie.Title}</div>
        <div class="releaseDate">${currentMovie.Year}</div>
      </div>
    </div>`;
    });
    return movieHtmlArray.join("");
  }
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-button")) {
      const movieID = event.target.dataset.imbdid;
      deleteFromWatchList(movieID);
    }
  });
});

const deleteFromWatchList = (movieID) => {
  const movie = movieDate.find((currentMovie) => {
    return currentMovie.imbdid == movieID;
    
  });

  let watchlistJSON = localStorage.getItem("watchlist");
  let watchlist = JSON.parse(watchlistJSON);

  console.log(watchlist)
};
