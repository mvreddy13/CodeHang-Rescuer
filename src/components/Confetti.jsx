import React from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

export default function ConfettiComponent() {
  const { width, height } = useWindowSize();

  return (
    <>
      <Confetti
        width={width}
        height={height}
        confettiSource={{
          x: 0,
          y: height,
          w: 10,
          h: 10,
        }}
        initialVelocityX={{ min: 2, max: 6 }}
        initialVelocityY={{ min: -20, max: -15 }}
        numberOfPieces={1000}
        gravity={0.2}
        friction={0.99}
        recycle={false}
      />
      <Confetti
        width={width}
        height={height}
        confettiSource={{
          x: width - 10,
          y: height,
          w: 10,
          h: 10,
        }}
        initialVelocityX={{ min: -6, max: -2 }}
        initialVelocityY={{ min: -20, max: -15 }}
        numberOfPieces={1000}
        gravity={0.2}
        friction={0.99}
        recycle={false}
      />
    </>
  );
}
