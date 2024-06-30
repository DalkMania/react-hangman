import { useContext } from "react";
import { AppContext, GlobalContext } from "../context/GlobalState";

const Hints = () => {
  const { selectedWord, showHints, wrongLetters, toggleHints } = useContext(GlobalContext) as AppContext;

  return (
    <>
      {wrongLetters.length > 2 && showHints === false && selectedWord.definition && (
        <div className={`hints-container`}>
          <button type="button" onClick={() => toggleHints()}>
            Need some help?
          </button>
        </div>
      )}

      {wrongLetters.length > 2 && showHints === true && selectedWord.definition && (
        <div className={`hints-container ${showHints ? "show" : ""}`}>
          {showHints === true && selectedWord.definition && (
            <>
              <p>Hint: {selectedWord.definition}</p>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Hints;
