document.addEventListener("DOMContentLoaded", function () {
  // code here will execute after the document is loaded
    const savedMovieDataJSON = localStorage.getItem('watchlist')
    const savedMovieData = JSON.parse(savedMovieDataJSON)

    console.log(savedMovieData)
    document.querySelector(".movies-container").innerHTML =
      renderMovies(savedMovieData);
    function renderMovies(movieArray) {
      const movieHtmlArray = movieArray.map(function (currentMovie) {
        return `<div class="movie card m-1">
                    <img src=${currentMovie.Poster} alt="Movie Poster" />
                    <div class="card-body">
                      <div class="card-title title">${currentMovie.Title}
                      <div class="releaseDate">${currentMovie.Year}</div>
                    </div>
                    <button class="add-button card-footer" data-imdbid=${currentMovie.imdbID}>Add Movie</button>
                  </div>`;
      });
      return movieHtmlArray.join("");
    }
  }
  );