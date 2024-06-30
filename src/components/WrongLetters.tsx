import { useContext } from "react";
import { AppState, GlobalContext } from "../context/GlobalState";

const WrongLetters = () => {
  const { wrongLetters } = useContext(GlobalContext) as AppState;
  return (
    <div className="wrong-letters-container">
      <div>
        {wrongLetters && wrongLetters.length > 0 && <p>Wrong</p>}
        {wrongLetters && wrongLetters.map((letter, i) => <span key={i}>{letter},</span>)}
      </div>
    </div>
  );
};

export default WrongLetters;
