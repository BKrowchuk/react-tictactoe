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

  const gridClicked = (x, y) => {
    if (grid[y][x] === 2) {
      let copy = [...grid];
      if (whosTurn) {
        copy[y][x] = 1;
      } else {
        copy[y][x] = 0;
      }
      setGrid(copy);
      setWhosTurn(!whosTurn);
    } else {
      console.log("That Squares Taken");
    }
  };

  return (
    <>
      <Header />
      <div className="game-container">
        <Figure grid={grid} gridClicked={gridClicked} />
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
