document.addEventListener("DOMContentLoaded", function () {
    s
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
  }
});
