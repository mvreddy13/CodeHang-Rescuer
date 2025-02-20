# CodeHang-Rescuer
![Working Game Screenshot](/src/assets/image.png)

## Description

"CodeHang-Rescuer" is an engaging word-guessing game built with React and Vite, where players guess a random word within 8 attempts to save the programming world from the dominance of Assembly language. The game features a keyboard interface, language-themed bars, and a status banner that displays win ("You win! Well done! 🎉") or loss ("Game over! You lose! Better start learning Assembly 😭") messages, styled with a green or red background respectively.

## Features

- Guess a random word of 5–8 letters fetched from an API.
- Interactive keyboard to guess letters, with color-coded feedback (green for correct, red for wrong).
- Language bars displaying programming languages (e.g., HTML, CSS, JavaScript) with unique colors.
- Game status updates with animated emojis (🎉 for wins, 😭 for losses).
- New game functionality to restart the game.
- Responsive design with a clean, dark-themed UI.

## Technologies Used

- **React 18.3**: For building the interactive UI components.
- **Vite**: For fast development and production builds.
- **JavaScript (ES Modules)**: For game logic and API integration.
- **CSS**: For styling, including Flexbox for layout and custom classes for game elements.
- **PropTypes**: For runtime prop type checking (optional, can be removed for production).
- **ESLint**: For code linting and maintaining code quality.
- **Word Generator API**: For fetching random words via RapidAPI.

## Installation

### Prerequisites

- Node.js (v16 or later)
- npm (comes with Node.js)

### Steps

1. Clone the repository or download the source code:

   ```bash
   git clone https://github.com/your-username/assembly-endgame.git
   cd assembly-endgame
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your RapidAPI key for the word generator (optional, if using the API):  
      - Create an account on [RapidAPI](https://rapidapi.com/).  
      - Obtain an API key for the "Word Generator" API.  
      - Update the `x-rapidapi-key` in `src/utils.js`:  
   ```javascript  
        const options = {  
          method: "GET",  
          headers: {  
            "x-rapidapi-key": "YOUR_API_KEY_HERE",  
            "x-rapidapi-host": "word-generator2.p.rapidapi.com",  
          },  
        };  
   ```

4. Run the development server:  
```  
   npm run dev  
```  
   Open your browser to `http://localhost:5173` (default Vite port) to play the game.

5. Build for production:  
```  
   npm run build  
```
- This generates a `dist` folder with optimized files for deployment. Serve it locally with:  
```bash  
   npx vite preview  
```
## Usage

- Start the game by loading the app in your browser.
- Use the keyboard to guess letters for the hidden word.
- Each incorrect guess reduces your attempts (up to 8 wrong guesses before losing).
- The language bars show programming languages, with one struck through if you lose.
- Click "New Game" to restart with a new word.
- Win by guessing the word correctly before running out of attempts, or lose if you exceed 8 wrong guesses.

## License

This project is licensed under the MIT License.

