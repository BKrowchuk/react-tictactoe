import { useState } from "react";
import Header from "../components/Header";
import Figure from "../components/Figure";
import WhosTurn from "../components/WhosTurn";

const TicTacToe = () => {
  const [whosTurn, setWhosTurn] = useState(true);
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
        <WhosTurn whosTurn={whosTurn} />
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
