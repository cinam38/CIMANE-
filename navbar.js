// navbar.js
document.addEventListener('DOMContentLoaded', function() {
    const navbarHTML = `
    <nav>
        <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="showtimes.html">Showtimes</a></li>
            <li><a href="deals.html">Deals</a></li>
            <li><a href="group.html">Group</a></li>
            <li><a href="contact.html">Contact Us</a></li>
            <li><a href="update-movie.html">Update Movie</a></li>
        </ul>
    </nav>`;

    // Insert the navbar into the header of the page
    const header = document.querySelector('header');
    header.insertAdjacentHTML('afterbegin', navbarHTML);
});
