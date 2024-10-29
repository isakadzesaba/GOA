// Selecting elements
const form = document.getElementById('movieForm');
const movieTitleInput = document.getElementById('movieTitle');
const movieInfoDiv = document.getElementById('movieInfo');

// Event listener for form submission
form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent page reload
    const movieTitle = movieTitleInput.value.trim();

    if (movieTitle) {
        try {
            const response = await fetch(`https://www.omdbapi.com/?t=${movieTitle}&apikey=fbd83c7f`);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            if (data.Response === "False") {
                throw new Error(data.Error);
            }

            displayMovieInfo(data);

        } catch (error) {
            movieInfoDiv.innerHTML = `<p>${error.message}</p>`;
        }
    }
});

// Function to display movie info
function displayMovieInfo(movie) {
    movieInfoDiv.innerHTML = `
        <img src="${movie.Poster}" alt="${movie.Title} Poster">
        <h2>${movie.Title} (${movie.Year})</h2>
        <p><strong>Plot:</strong> ${movie.Plot}</p>
        <p><strong>IMDb Rating:</strong> ${movie.imdbRating}</p>
        <a href="https://www.imdb.com/title/${movie.imdbID}" target="_blank">View on IMDb</a>
    `;
}
