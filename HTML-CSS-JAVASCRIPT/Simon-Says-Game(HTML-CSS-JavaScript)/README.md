## Simon-Says-Game(HTML-CSS-JavaScript)

- **Project Type**: An interactive memory game implemented as a web application.

- **Description**: A classic Simon Says game where the computer generates a sequence of colored button flashes, and the player must repeat the sequence correctly to advance levels. Incorrect inputs end the game, displaying the score and highest score.

- **Technologies Used**:
  - HTML5 (structure with buttons, headings, and divs for the game interface).
  - CSS3 (styling for buttons, flashes, and layout; classes like .flash and .userFlash for animations).
  - JavaScript (ES6+ for game logic, event listeners, sequences, and score tracking).

- **Key Features**:
  - **Game Mechanics**: Starts on keypress; generates random color sequences; user clicks buttons to match.
  - **Levels and Scoring**: Increases level on correct sequence; tracks current score (level) and highest score across games.
  - **Visual Feedback**: Button flashes for game and user actions; background color changes to red on game over.
  - **User Interface**: Simple layout with 4 colored buttons (yellow, red, purple, green); displays level, game over message, and scores.
  - **Code Structure**: Variables for sequences, event listeners for keypress and clicks, functions for flashing, checking answers, and resetting.

- **File Structure**:
  - **index.html**: HTML for the game UI (buttons, headings).
  - **style.css**: CSS for button styles, flashes, and layout.
  - **app.js**: JavaScript for all game logic, including sequence generation, user input, and score tracking.

- **How to Run**: Open index.html in a web browser. Press any key to start, then click the buttons in sequence.

- **Learning Outcomes**: Covers DOM manipulation, event handling, arrays, random generation, and basic game state management in JavaScript.

![Simon Says Game Screenshot](Simon-1.png)

![Simon Says Game Screenshot](Simon-2.png)
