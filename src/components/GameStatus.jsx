import PropTypes from "prop-types";

export default function GameStatus({
  isGameOver,
  isGameWon,
  isGameLost,
  wrongGuessCount,
}) {
  const gameWon = (
    <>
      <h1 className="gamestatus-title">You Win!</h1>
      <p className="gamestatus-decs">Well done! 🎉</p>
    </>
  );

  const gameLost = (
    <>
      <h1 className="gamestatus-title">Game over!</h1>
      <p className="gamestatus-decs">
        You lose! Better start learning Assembly 😭
      </p>
    </>
  );

  const divClassName =
    wrongGuessCount > 1
      ? `gamestatus-container ${isGameWon ? "won" : isGameLost ? "lost" : ""}`
      : "gamestatus-container";

  let content = null;
  if (isGameOver && wrongGuessCount > 1) {
    content = isGameWon ? gameWon : isGameLost ? gameLost : null;
  }

  return <div className={divClassName}>{content}</div>;
}

GameStatus.propTypes = {
  isGameOver: PropTypes.bool.isRequired,
  isGameWon: PropTypes.bool.isRequired,
  isGameLost: PropTypes.bool.isRequired,
  wrongGuessCount: PropTypes.number.isRequired,
};
