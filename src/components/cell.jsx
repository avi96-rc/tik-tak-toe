import { useState } from "react";
import "../App.css";

const Cell = (props) => {
  const gameData = props.data;

  const [cellValue, setCellValue] = useState(gameData.value);

  console.log(cellValue);

  const onClickHandler = (e) => {
   
    console.log(gameData.index, cellValue);

    if (gameData.value == "") {
      const tempValue = gameData.isXturn ? "X" : "O";
      console.log(e)
      gameData.setData(tempValue, gameData.index);
      // gameData.checkLogic();
    }
  };

  return (
    <>
      <div className="cell" onClick={onClickHandler} value={gameData.value}>
        {gameData.value}
      </div>
    </>
  );
};

export default Cell;
