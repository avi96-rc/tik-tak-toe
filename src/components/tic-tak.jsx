import { useState } from "react";
import { useEffect } from "react";
import Container from "./container";
import Cell from "./cell";
import { toast } from "react-toastify";

const TicTac = () => {
  const [data, setData] = useState(new Array(9).fill(""));
  // data[3] = 'r'
  const [isXturn, setIsXTurn] = useState(true);

  let lastClickedIndex = 0;

  useEffect(() => {
    console.log("state changed");

    if (logicHandler()) {
      const toaster = toast.loading("Resetting game!...");
      setTimeout(() => {
        setData(new Array(9).fill(""));
        console.log("Reseting game", data);
        toast.update(toaster, {
          render: "New Game",
          type: "success",
          isLoading: false,
        });
      }, 3000);
    }
  }, [data]);

  const logicHandler = () => {
    // control the whole logic of the tic tac toe
    const result = [];
    toast.dismiss();
    console.log("Checking logic", data);
    toast(isXturn ? "X's turn" : "O's turn");
    let row1 = "";
    let row2 = "";
    let row3 = "";
    let col1 = "";
    let col2 = "";
    let col3 = "";
    let cross1 = "";
    let cross2 = "";

    data.forEach((element, index) => {
      if (index < 3) row1 += element;
      if (index > 2 && index < 6) row2 += element;
      if (index > 5) row3 += element;
      if ([0, 3, 6].indexOf(index) != -1) col1 += element;
      if ([1, 4, 7].indexOf(index) != -1) col2 += element;
      if ([2, 5, 8].indexOf(index) != -1) col3 += element;
      if ([0, 4, 8].indexOf(index) != -1) cross1 += element;
      if ([2, 4, 6].indexOf(index) != -1) cross2 += element;
    });

    result.push(row1 == "XXX" || row1 == "OOO" ? true : false);
    result.push(row2 == "XXX" || row2 == "OOO" ? true : false);
    result.push(row3 == "XXX" || row3 == "OOO" ? true : false);
    result.push(col1 == "XXX" || col1 == "OOO" ? true : false);
    result.push(col2 == "XXX" || col2 == "OOO" ? true : false);
    result.push(col3 == "XXX" || col3 == "OOO" ? true : false);
    result.push(cross1 == "XXX" || cross1 == "OOO" ? true : false);
    result.push(cross2 == "XXX" || cross2 == "OOO" ? true : false);

    console.log(result);

    if (data.indexOf("") == -1) {
      toast.info("IT'S A DRAW!!!");
      return true;
    } else if (result.indexOf(true) != -1) {
      toast.dismiss();
      toast.success(data[lastClickedIndex] + " WON");
    } else {
      return false;
    }

    return true;
  };

  const setDataHandler = (value, index) => {
    lastClickedIndex = index;
    setData((prevData) => [
      ...prevData.slice(0, index),
      value,
      ...prevData.slice(index + 1),
    ]);
    setIsXTurn((prev) => !prev);
  };

  function onClickHandler() {
    setData(new Array(9).fill(""));
  }

  return (
    <>
      <Container>
        {data.map((element, index, array) => {
          return (
            <Cell
              key={index}
              data={{
                value: element,
                index: index,
                isXturn: isXturn,
                setData: setDataHandler,
                checkLogic: logicHandler,
              }}
            />
          );
        })}
      </Container>
    </>
  );
};

export default TicTac;
