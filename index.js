document.addEventListener("DOMContentLoaded", function () {
  // code here will execute after the document is loaded

  const myForm = document.querySelector("#search-form");
  myForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const searchString = document.getElementsByClassName("search-bar")[0].value;
    const urlEncodedSearchString = encodeURIComponent(searchString);
    // console.log(urlEncodedSearchString)
    await fetch(
      "https://www.omdbapi.com/?apikey=59354c85&s=" + urlEncodedSearchString
    )
      .then(async function (response) {
        // console.log(response)
        return await response.json();
      })
      .then(function (data) {
        console.log(data);
        document.getElementsByClassName("movies-container")[0].innerHTML =
          renderMovies(data.Search);
        movieData = data.Search;
      });

    function renderMovies(movieArray) {
      const movieHtmlArray = movieArray.map(function (currentMovie) {
        return `<div class="movie card m-1">
                    <img src=${currentMovie.Poster} alt="Movie Poster" />
                    <div class="card-body">
                      <div class="card-title title">${currentMovie.Title}</div>
                      <div class="releaseDate">${currentMovie.Year}</div>
                    </div>
                    <div class="card-footer">
                      <button type="button" id="${currentMovie.imdbID}"class="btn btn-primary add-button" data-imdbid=${currentMovie.imdbID}>Add Movie</button>
                    </div>
                  </div>`;
      });
      return movieHtmlArray.join("");
    }
  });
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("add-button")) {
      const movieID = event.target.dataset.imdbid;
      document.getElementById(event.target.dataset.imdbid).textContent = "Added!"
      document.getElementById(event.target.dataset.imdbid).setAttribute("disabled", " ")
      document.getElementById(event.target.dataset.imdbid).setAttribute("class", "btn btn-success add-button")
      saveToWatchlist(movieID);
    }
  });
});

const saveToWatchlist = (movieID) => {
  const movie = movieData.find((currentMovie) => {
    return currentMovie.imdbID == movieID;
  });
  let watchlistJSON = localStorage.getItem("watchlist");
  let watchlist = JSON.parse(watchlistJSON);
  if (watchlist == null) {
    watchlist = [];
  }
  watchlist.push(movie);
  watchlistJSON = JSON.stringify(watchlist);
  localStorage.setItem("watchlist", watchlistJSON);
};
