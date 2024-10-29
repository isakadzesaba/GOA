// Selecting elements
const form = document.getElementById('userForm');
const usernameInput = document.getElementById('username');
const userInfoDiv = document.getElementById('userInfo');

// Event listener for form submission
form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent page reload
    const username = usernameInput.value.trim(); // Get the input value

    if (username) {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);

            if (!response.ok) {
                throw new Error('User not found');
            }

            const data = await response.json();
            displayUserInfo(data); // Display user information

        } catch (error) {
            userInfoDiv.innerHTML = `<p>${error.message}</p>`;
        }
    }
});

// Function to display user info
function displayUserInfo(user) {
    userInfoDiv.innerHTML = `
        <img src="${user.avatar_url}" alt="Profile Picture">
        <h2>${user.login}</h2>
        <p>${user.bio || 'No bio available'}</p>
        <p>Public Repos: ${user.public_repos}</p>
        <a href="${user.html_url}" target="_blank">Visit GitHub Profile</a>
    `;
}
