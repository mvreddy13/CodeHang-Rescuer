import { useState, useEffect } from "react";
import LanguageBar from "./components/LanguageBar";
import Keyboard from "./components/Keyboard";
import GameStatus from "./components/GameStatus";
import { languages } from "./components/languages";
import { getRandomWord } from "./utils";
import "./App.css";
import clsx from "clsx";
import ConfettiComponent from "./components/Confetti";

function App() {
  //State Values
  const [currentWord, setCurrentWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);

  //derived vales
  const numGuessesLeft = languages.length - 1;
  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter)
  ).length;
  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  const isGameLost = wrongGuessCount >= numGuessesLeft;
  const isGameOver = isGameLost || isGameWon;

  //static vales
  const alphabets = "abcdefghijklmnopqrstuvwxyz";

  useEffect(() => {
    const fetchWord = async () => {
      try {
        const word = await getRandomWord();
        setCurrentWord(word);
      } catch (error) {
        console.error("Error fetching word:", error);
      }
    };
    fetchWord();
  }, []);

  const handleNewGame = async () => {
    try {
      const word = await getRandomWord();
      setCurrentWord(word);
      setGuessedLetters(() => []);
    } catch (error) {
      console.error("Error fetching word:", error);
    }
  };

  const addGuessedLetter = (letter) => {
    setGuessedLetters((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    );
  };

  const languageElements = () => {
    return languages.map((language, index) => {
      const languageLost = index < wrongGuessCount;
      return (
        <LanguageBar
          languageLost={languageLost}
          key={index}
          name={language.name}
          color={language.color}
          backgroundColor={language.backgroundColor}
        />
      );
    });
  };

  const letterElements = () => {
    if (!currentWord) {
      return <p>Loading...</p>;
    }

    return (
      <div className="word-container">
        {currentWord.split("").map((letter, index) => {
          const className = isGameWon
            ? clsx("word-letter", guessedLetters.includes(letter) && "guessed")
            : clsx(
                "word-letter",
                !guessedLetters.includes(letter) && "not-guessed"
              );

          return (
            <span key={index} className={className}>
              {isGameOver
                ? letter.toUpperCase()
                : guessedLetters.includes(letter)
                ? letter.toUpperCase()
                : ""}
            </span>
          );
        })}
      </div>
    );
  };

  const keyboardElements = () => {
    return alphabets.split("").map((alphabet, index) => {
      const hasBeenGuessed = guessedLetters.includes(alphabet);
      const isCorrect = hasBeenGuessed && currentWord.includes(alphabet);
      const isWrong = hasBeenGuessed && !currentWord.includes(alphabet);

      const keyClassName = `key ${isCorrect ? "correct" : ""} ${
        isWrong ? "wrong" : ""
      }`;

      return (
        <Keyboard
          key={index}
          value={alphabet.toUpperCase()}
          isGameOver={isGameOver}
          onClick={() => addGuessedLetter(alphabet)}
          className={keyClassName}
        />
      );
    });
  };

  return (
    <>
      <header>
        <p className="game-title">Assembly: Endgame</p>
        <p className="game-desc">
          Guess the word in under 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>
      {isGameWon ? <ConfettiComponent /> : ""}
      <section className="game-status">
        <GameStatus
          isGameLost={isGameLost}
          isGameWon={isGameWon}
          isGameOver={isGameOver}
          wrongGuessCount={wrongGuessCount}
        />
      </section>
      <section className="language-bar">{languageElements()}</section>

      <section>{letterElements()}</section>

      <section className="keyboard">{keyboardElements()}</section>
      <button className="new-game" onClick={handleNewGame}>
        New Game
      </button>
    </>
  );
}

export default App;
