const WhosTurn = ({ whosTurn }) => {
  return (
    <div className="whosturn-container">
      <p>{whosTurn ? "X" : "O"}'s turn</p>
    </div>
  );
};

export default WhosTurn;
