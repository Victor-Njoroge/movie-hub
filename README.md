# Author Victor Njoroge


# Flat Dango Ticket Booking Website

This is a cinema ticket booking website where users can browse and purchase tickets for movie screenings. The website provides a user-friendly interface to explore available movies, select showtimes, and proceed with ticket purchases. In case tickets are sold out for a particular showtime, the website clearly indicates that the tickets are no longer available.



## Features
- Movie Listings: Users can view a comprehensive list of movies currently being screened. Each movie is presented with details such as title, genre, synopsis, and duration.

- Showtimes: The website displays showtimes for each movie, allowing users to choose a convenient screening time.

- Ticket Purchase: Users can purchase the desired ticket for a specific movie 

- Ticket Availability: When tickets are available for a showtime, users can successfully complete their ticket purchase. However, if the tickets are sold out, the website prominently displays a "Ticket Sold Out" message, informing the users that no further tickets are available for that showtime

## Technologies Used

- HTML5 and CSS3 for the website layout and styling.
- JavaScript for dynamic functionality and vote counting.
- Fetch API for making HTTP requests to update vote counts.By the help of Json-server

## Setup and Usage

1. Clone the repository or download the source code.
2. Open the project folder in a code editor of your choice.
3. Through the terminal activate Json_server by running `npx json-server --watch db.json --port 3000`
4. Open the `index.html` file in a web browser.
5. Explore the list of movies available in the theatre.
6. Click on the "Buy Ticket" button to purchase a ticket
7. The tickets and capacity count change each time a person buys a ticket
8. The delete button deletes the movie from the db.json
9. Enjoy the Interaction of the User Interface

## Project Structure

The project follows a simple file structure:
1. With the help of the `index.html` the project is able to be potrayed in the website
2. With the use of `style.css` a simple web layout has been perpoted on the website
3. The `index.js` plays a big role in fetching data from the `db.json` through the help of the `Json-server` in order to fetch and render items to the `index.html`

## What has been entailed in the `index.js`

1. Event Listeners such as: Onclick and Onscroll
2. GET, PATCH and DELETE method
3. Several functions (`arrow function, anonymous functions`)

## License

The cinema ticket booking website is open source and is distributed under the `MIT License.` You are free to utilize, modify, and distribute the code for personal or commercial purposes.

# Github account (Victor-Njoroge)