const ratings = document.querySelector(".ratings");

const btn = document.querySelector("button");

async function searchMovie(movieName) {
  try {
    console.log(movieName);
    const response = await fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=cce9a70e&t=${movieName}`
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      const box = createNewDiv(data);
      buildMoviePoster(box, data);
      buildMovieTitle(box, data);
      buildGenre(box, data);
      buildYear(box, data);
      buildPlot(box, data);
      buildDirector(box, data);
      buildActors(box, data);
      buildImdb(box, data);
      buildTomatoes(box, data);
      buildMetacritic(box, data);

      function buildMoviePoster(box, data) {
        const moviePoster = document.querySelector(".moviePoster");
        moviePoster.style.backgroundImage = `url("${data.Poster}")`;
        // moviePoster.style.postion = "no-repeat center center/cover";
      }
      function buildMovieTitle(box, data) {
        const movieTitle = document.querySelector(".movieTitle");
        movieTitle.innerText = data.Title;
      }
      function buildGenre(box, data) {
        const genre = document.querySelector(".genre");
        genre.innerText = `Genre: ${data.Genre}`;
      }
      function buildYear(box, data) {
        const year = document.querySelector(".year");
        year.innerText = `Year: ${data.Year}`;
      }
      function buildPlot(box, data) {
        const plot = document.querySelector(".plot");
        plot.innerText = `Plot:  ${data.Plot}`;
      }
      function buildDirector(box, data) {
        const director = document.querySelector(".director");
        director.innerText = `Director: ${data.Director}`;
      }
      function buildActors(box, data) {
        const actors = document.querySelector(".actors");
        actors.innerText = `Actors: ${data.Actors}`;
      }
      function buildImdb(box, data) {
        const imdb = document.querySelector(".imdb");
        imdb.innerText = `Imdb Ratings: ${data.Ratings[0].Value}`;
      }
      function buildTomatoes(box, data) {
        const tomatoes = document.querySelector(".tomatoes");
        tomatoes.innerText = `Tomatoes Ratings: ${data.Ratings[1].Value}`;
      }
      function buildMetacritic(box, data) {
        const Metacritic = document.querySelector(".metacritic");
        Metacritic.innerText = `Metacritic Ratings: ${data.Ratings[2].Value}`;
      }
    }
  } catch (error) {
    console.log(error);
  }
}
function createNewDiv(data) {
  const movieBox = document.querySelector(".movieBox");
  const box = document.createElement("div");
  box.classList.add("box");
  const att = document.createAttribute("url-data");
  att.value = data.html_url;
  box.setAttributeNode(att);
  movieBox.appendChild(box);
  const moviePoster = document.createElement("div");
  moviePoster.classList.add("moviePoster");
  box.appendChild(moviePoster);
  const movieTitle = document.createElement("div");
  movieTitle.classList.add("movieTitle");
  box.appendChild(movieTitle);
  const genre = document.createElement("div");
  genre.classList.add("genre");
  box.appendChild(genre);
  const year = document.createElement("div");
  year.classList.add("year");
  box.appendChild(year);
  const plot = document.createElement("div");
  plot.classList.add("plot");
  box.appendChild(plot);
  const director = document.createElement("div");
  director.classList.add("director");
  box.appendChild(director);
  const actors = document.createElement("div");
  actors.classList.add("actors");
  box.appendChild(actors);
  const imdb = document.createElement("div");
  imdb.classList.add("imdb");
  box.appendChild(imdb);
  const tomatoes = document.createElement("div");
  tomatoes.classList.add("tomatoes");
  box.appendChild(tomatoes);
  const metacritic = document.createElement("div");
  metacritic.classList.add("metacritic");
  box.appendChild(metacritic);

  return box;
}

function checkMovie() {
  btn.addEventListener("click", function () {
    const input = document.querySelector("input");
    searchMovie(input.value);
  });
}

checkMovie();
