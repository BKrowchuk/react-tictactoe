import { useState } from "react";
import Header from "../components/Header";
import Figure from "../components/Figure";
import WhosTurn from "../components/WhosTurn";
import Popup from "../components/Popup";
import Notification from "../components/Notification";
import { showNotification as show } from "../helpers/Helpers";

const TicTacToe = () => {
  const [whosTurn, setWhosTurn] = useState(true);
  const [showNotification, setShowNotification] = useState(false);
  const [grid, setGrid] = useState([
    [2, 2, 2],
    [2, 2, 2],
    [2, 2, 2],
  ]);

  const playAgain = () => {
    // Empty Arrays
    setGrid([
      [2, 2, 2],
      [2, 2, 2],
      [2, 2, 2],
    ]);
  };

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
      show(setShowNotification);
    }
  };

  return (
    <>
      <Header />
      <div className="game-container">
        <Figure grid={grid} gridClicked={gridClicked} />
        <WhosTurn whosTurn={whosTurn} />
      </div>
      <Popup grid={grid} playAgain={playAgain} />
      <Notification showNotification={showNotification} />
    </>
  );
};

export default TicTacToe;
