import Figure from "./Figure";
import WrongLetters from "./WrongLetters";
import Word from "./Word";
import Popup from "./Popup";
import Notification from "./Notification";
import Hints from "./Hints";

import GetRandomWord from "../hooks/getRandomWord";
import HandleKeyDown from "../hooks/handleKeyDown";

const Game = () => {
  GetRandomWord();
  HandleKeyDown();

  return (
    <>
      <div className="game-container">
        <Figure />
        <WrongLetters />
        <Word />
      </div>
      <Popup />
      <Notification />
      <Hints />
    </>
  );
};

export default Game;
