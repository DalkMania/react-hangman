import { useContext } from "react";
import { GlobalContext, AppState } from "../context/GlobalState";

const Word = () => {
  const { selectedWord, correctLetters } = useContext(GlobalContext) as AppState;
  return (
    <div className="word">
      {selectedWord &&
        selectedWord.word &&
        selectedWord.word.split("").map((letter, i) => {
          return (
            <span className="letter" key={i}>
              {correctLetters.includes(letter) ? letter : ""}
            </span>
          );
        })}
    </div>
  );
};

export default Word;
