const movies = [
    {
        title: "O Poderoso Chefão",
        year: 1972,
        genre: "Crime, Drama",
        image: "https://leiturafilmica.com.br/wp-content/uploads/2021/07/o-poderoso-chefao-poster.png"
    },
    {
        title: "Matrix",
        year: 1999,
        genre: "Action, Sci-Fi",
        image: "https://br.web.img2.acsta.net/medias/nmedia/18/91/08/82/20128877.JPG"
    },
    {
        title: "Interestelar",
        year: 2014,
        genre: "Adventure, Drama, Sci-Fi",
        image: "https://play-lh.googleusercontent.com/em2griqrHoxmxEss_WM5Fi2iqSEKrEfLNAltjX54lREOR0nz0du__KuSi2bA_YNjS4w"
    },
    {
        title: "Transformers",
        year: 2007,
        genre: "Action, Adventure, Sci-Fi",
        image: "https://m.media-amazon.com/images/I/51REhA8e-gL._AC_UF894,1000_QL80_.jpg"
    },
    {
        title: "Um Senhor Estagiário",
        year: 2015,
        genre: "Comedy, Drama",
        image: "https://image.tmdb.org/t/p/original/jjI2z9PvWm69DHzhyYIrsmD6Gj6.jpg"
    },
    {
        title: "Vingadores: Ultimato",
        year: 2019,
        genre: "Action, Adventure, Sci-Fi",
        image: "https://br.web.img3.acsta.net/pictures/19/04/26/17/30/2428965.jpg"
    }
    // Adicione mais filmes aqui...
];

function showMovies() {
    const moviesList = document.getElementById("moviesList");

    movies.forEach(movie => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");

        const title = document.createElement("h2");
        title.textContent = movie.title;

        const year = document.createElement("p");
        year.textContent = `Ano: ${movie.year}`;

        const genre = document.createElement("p");
        genre.textContent = `Gênero: ${movie.genre}`;

        const image = document.createElement("img");
        image.src = movie.image;
        image.alt = movie.title;
        image.classList.add("movie-img");

        movieCard.appendChild(image);
        movieCard.appendChild(title);
        movieCard.appendChild(year);
        movieCard.appendChild(genre);

        moviesList.appendChild(movieCard);
    });
}

showMovies();
