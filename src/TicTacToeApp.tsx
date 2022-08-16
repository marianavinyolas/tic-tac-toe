import { useEffect, useState } from "react";
import "./App.css";
import Square from "./Square";

function App() {
  const [player, setPlayer] = useState("one");
  const [step, setStep] = useState(0);
  const [isOver, setIsOver] = useState(false);
  const [winner, setWinner] = useState("");
  const [squares, setSquares] = useState({
    "1": "",
    "2": "",
    "3": "",
    "4": "",
    "5": "",
    "6": "",
    "7": "",
    "8": "",
    "9": "",
  });

  useEffect(() => {
    // no winner
    step === 9 && setIsOver(true);
  }, [step]);

  useEffect(() => {
    // checks if winner is player one or two
    if (
      (squares["1"] === "X" && squares["2"] === "X" && squares["3"] === "X") ||
      (squares["4"] === "X" && squares["5"] === "X" && squares["6"] === "X") ||
      (squares["7"] === "X" && squares["8"] === "X" && squares["9"] === "X") ||
      (squares["1"] === "X" && squares["4"] === "X" && squares["7"] === "X") ||
      (squares["2"] === "X" && squares["5"] === "X" && squares["8"] === "X") ||
      (squares["3"] === "X" && squares["6"] === "X" && squares["9"] === "X") ||
      (squares["1"] === "X" && squares["5"] === "X" && squares["9"] === "X") ||
      (squares["3"] === "X" && squares["5"] === "X" && squares["7"] === "X")
    ) {
      setWinner("one");
      setIsOver(true);
    }
    if (
      (squares["1"] === "0" && squares["2"] === "0" && squares["3"] === "0") ||
      (squares["4"] === "0" && squares["5"] === "0" && squares["6"] === "0") ||
      (squares["7"] === "0" && squares["8"] === "0" && squares["9"] === "0") ||
      (squares["1"] === "0" && squares["4"] === "0" && squares["7"] === "0") ||
      (squares["2"] === "0" && squares["5"] === "0" && squares["8"] === "0") ||
      (squares["3"] === "0" && squares["6"] === "0" && squares["9"] === "0") ||
      (squares["1"] === "0" && squares["5"] === "0" && squares["9"] === "0") ||
      (squares["3"] === "0" && squares["5"] === "0" && squares["7"] === "0")
    ) {
      setWinner("two");
      setIsOver(true);
    }
  }, [squares]);

  const hdlClick = (num: string) => {
    if (!isOver) {
      if (player === "one") {
        setPlayer("two");
        setSquares((prevState) => ({ ...prevState, [num]: "X" }));
      }
      if (player === "two") {
        setPlayer("one");
        setSquares((prevState) => ({ ...prevState, [num]: "0" }));
      }
    }

    setStep(step + 1);
  };

  const handleReset = () => {
    setPlayer("one");
    setStep(0);
    setWinner("");
    setIsOver(false);
    setSquares({
      "1": "",
      "2": "",
      "3": "",
      "4": "",
      "5": "",
      "6": "",
      "7": "",
      "8": "",
      "9": "",
    });
  };

  return (
    <div className="py-10 mx-auto">
      <h1 className="mb-2 font-mono text-2xl text-blue-700">
        Tic <span className="text-pink-500">Tac</span> Toe
      </h1>
      <section className="flex flex-col items-center mx-auto w:2/3 md:w-1/2 p-5 rounded bg-gradient-to-br from-pink-200 to-blue-200 shadow-lg">
        <h1
          className={`my-2 font-mono
			${player === "one" && "text-blue-500"}
			${player === "two" && "text-purple-700 "}
			`}
        >{`Player ${player}`}</h1>
        <section className="flex">
          <Square id="1" hdlClick={hdlClick} mark={squares["1"]} />
          <Square id="2" hdlClick={hdlClick} mark={squares["2"]} />
          <Square id="3" hdlClick={hdlClick} mark={squares["3"]} />
        </section>
        <section className="flex">
          <Square id="4" hdlClick={hdlClick} mark={squares["4"]} />
          <Square id="5" hdlClick={hdlClick} mark={squares["5"]} />
          <Square id="6" hdlClick={hdlClick} mark={squares["6"]} />
        </section>
        <section className="flex">
          <Square id="7" hdlClick={hdlClick} mark={squares["7"]} />
          <Square id="8" hdlClick={hdlClick} mark={squares["8"]} />
          <Square id="9" hdlClick={hdlClick} mark={squares["9"]} />
        </section>
        <h1 className="font-mono text-pink-500 my-2">
          {" "}
          {winner === "one"
            ? `WINNER PLAYER ONE`
            : winner === "two"
            ? `WINNER PLAYER TWO`
            : ""}{" "}
        </h1>
        <button
          className="px-14 py-2 my-2  bg-pink-400 hover:bg-pink-600 text-xs text-white shadow-md transition-colors rounded"
          onClick={handleReset}
        >
          Reset
        </button>
      </section>

      {isOver && (
        <h1 className="my-4 font-mono text-2xl text-pink-500">Game Over</h1>
      )}
    </div>
  );
}

export default App;
