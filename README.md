# Overview
The Star Wars Movie List App is a web application that fetches movie data from the SWAPI (Star Wars API) and allows users to view a list of Star Wars movies, sort them by year or episode, filter them by name, and view detailed information about a selected movie.

**#Technologies Used**
    React.js
    
**Components**
    **App**
**Responsibility:** The main component that orchestrates the overall functionality of the application.

**Subcomponents:**
  **MovieList:**    Displays a list of Star Wars movies and handles sorting and filtering based on user input.
  **MovieDetails:** Displays detailed information about a selected movie.

**MovieList**

  **Responsibility:** Manages the display and interaction for the list of Star Wars movies.
  **Props:**
    **movies:**   An array of movie objects fetched from the SWAPI.
    **sortBy:**   A string representing the sorting criteria ('year' or 'episode').
     **filter:**    A string representing the user-entered filter for movie names.
    **onMovieClick:** A function to handle a movie click event.

**MovieDetails**

  **Responsibility:** Displays detailed information about a selected Star Wars movie.
    **Props:**
    **movie:** The selected movie object.

    
**API Interaction**
The application fetches movie data from the SWAPI (Star Wars API) using the endpoint: https://swapi.dev/api/films/?format=json.
Styling
CSS is used for styling the components.
The styling includes layout adjustments for the left and right panels, search input, and sort select.

**Installation**
1. Install dependencies: npm install
2. Run the application: npm run dev

**Usage**
Visit the application in your web browser.
The left panel displays a list of Star Wars movies.
Use the search input to filter movies by name.
Use the sort select to order movies by year or episode.
Click on a movie in the list to view detailed information on the right panel.

**Conclusion**
The Star Wars Movie List App provides an interactive way for users to explore and learn about Star Wars movies. It leverages the SWAPI to fetch accurate and up-to-date movie information.

