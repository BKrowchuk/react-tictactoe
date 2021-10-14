const Figure = ({ grid, gridClicked }) => {
  return (
    <svg height="300" width="300" className="figure-container">
      {/* <!-- Grid --> */}
      <line x1="100" y1="0" x2="100" y2="300" />
      <line x1="200" y1="0" x2="200" y2="300" />
      <line x1="0" y1="100" x2="300" y2="100" />
      <line x1="0" y1="200" x2="300" y2="200" />
      {/* O's */}
      {grid[0][0] === 2 && <circle cx="50" cy="50" r="30" />}
      {grid[0][1] === 2 && <circle cx="150" cy="50" r="30" />}
      {grid[0][2] === 2 && <circle cx="250" cy="50" r="30" />}
      {grid[1][0] === 2 && <circle cx="50" cy="150" r="30" />}
      {grid[1][1] === 2 && <circle cx="150" cy="150" r="30" />}
      {grid[1][2] === 2 && <circle cx="250" cy="150" r="30" />}
      {grid[2][0] === 2 && <circle cx="50" cy="250" r="30" />}
      {grid[2][1] === 2 && <circle cx="150" cy="250" r="30" />}
      {grid[2][2] === 2 && <circle cx="250" cy="250" r="30" />}
      {/* X's */}
      {grid[0][0] === 1 && (
        <>
          <line x1="20" y1="20" x2="80" y2="80" />
          <line x1="80" y1="20" x2="20" y2="80" />
        </>
      )}
      {grid[0][1] === 1 && (
        <>
          <line x1="120" y1="20" x2="180" y2="80" />
          <line x1="180" y1="20" x2="120" y2="80" />
        </>
      )}
      {grid[0][2] === 1 && (
        <>
          <line x1="220" y1="20" x2="280" y2="80" />
          <line x1="280" y1="20" x2="220" y2="80" />
        </>
      )}
      {grid[1][0] === 1 && (
        <>
          <line x1="20" y1="120" x2="80" y2="180" />
          <line x1="80" y1="120" x2="20" y2="180" />
        </>
      )}
      {grid[1][1] === 1 && (
        <>
          <line x1="120" y1="120" x2="180" y2="180" />
          <line x1="180" y1="120" x2="120" y2="180" />
        </>
      )}
      {grid[1][2] === 1 && (
        <>
          <line x1="220" y1="120" x2="280" y2="180" />
          <line x1="280" y1="120" x2="220" y2="180" />
        </>
      )}
      {grid[2][0] === 1 && (
        <>
          <line x1="20" y1="220" x2="80" y2="280" />
          <line x1="80" y1="220" x2="20" y2="280" />
        </>
      )}
      {grid[2][1] === 1 && (
        <>
          <line x1="120" y1="220" x2="180" y2="280" />
          <line x1="180" y1="220" x2="120" y2="280" />
        </>
      )}
      {grid[2][2] === 1 && (
        <>
          <line x1="220" y1="220" x2="280" y2="280" />
          <line x1="280" y1="220" x2="220" y2="280" />
        </>
      )}

      {/* Rectangles */}
      <rect
        onClick={() => gridClicked(0, 0)}
        x="0"
        y="0"
        width="100"
        height="100"
        strokeWidth="0"
      />
      <rect
        onClick={() => gridClicked(1, 0)}
        x="100"
        y="0"
        width="100"
        height="100"
        strokeWidth="0"
      />
      <rect
        onClick={() => gridClicked(2, 0)}
        x="200"
        y="0"
        width="100"
        height="100"
        strokeWidth="0"
      />
      <rect
        onClick={() => gridClicked(0, 1)}
        x="0"
        y="100"
        width="100"
        height="100"
        strokeWidth="0"
      />
      <rect
        onClick={() => gridClicked(1, 1)}
        x="100"
        y="100"
        width="100"
        height="100"
        strokeWidth="0"
      />
      <rect
        onClick={() => gridClicked(2, 1)}
        x="200"
        y="100"
        width="100"
        height="100"
        strokeWidth="0"
      />
      <rect
        onClick={() => gridClicked(0, 2)}
        x="0"
        y="200"
        width="100"
        height="100"
        strokeWidth="0"
      />
      <rect
        onClick={() => gridClicked(1, 2)}
        x="100"
        y="200"
        width="100"
        height="100"
        strokeWidth="0"
      />
      <rect
        onClick={() => gridClicked(2, 2)}
        x="200"
        y="200"
        width="100"
        height="100"
        strokeWidth="0"
      />
    </svg>
  );
};

export default Figure;
