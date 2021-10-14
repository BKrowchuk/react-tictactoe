import { useState } from "react";
import Header from "../components/Header";
import Figure from "../components/Figure";

const TicTacToe = () => {
  const [whosTurn, setWhosTurn] = useState(1);
  const [grid, setGrid] = useState([
    [2, 2, 2],
    [2, 2, 2],
    [2, 2, 2],
  ]);

  return (
    <>
      <Header />
      <div className="game-container">
        <Figure grid={grid} />
        {/* <WhosTurn whosTurn={whosTurn} /> */}
      </div>
      {/* <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
      <Notification showNotification={showNotification} /> */}
    </>
  );
};

export default TicTacToe;
