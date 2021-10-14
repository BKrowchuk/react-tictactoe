import { checkWin } from "../helpers/Helpers";

const Popup = ({ playAgain, grid }) => {
  let finalMessage = "";
  const winner = checkWin(grid);
  if (winner === "X") {
    finalMessage = "X's Won! 😃";
  } else if (winner === "O") {
    finalMessage = "O's Won! 😃";
  } else if (winner === "C") {
    finalMessage = "Cats Game. 😕";
  } else if (winner === 3) {
    finalMessage = "";
  }

  return (
    <div
      className="popup-container"
      style={finalMessage !== "" ? { display: "flex" } : {}}
    >
      <div className="popup">
        <h2>{finalMessage}</h2>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  );
};

export default Popup;
