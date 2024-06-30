import { useContext, useEffect } from "react";
import { GlobalContext, AppContext } from "../context/GlobalState";

const HandleKeyDown = () => {
  const { selectedWord, wrongLetters, correctLetters, setWrongLetters, setCorrectLetters, toggleNotification } =
    useContext(GlobalContext) as AppContext;

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      const { key, keyCode } = event;

      if (keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord && selectedWord.word.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(letter);
          } else {
            toggleNotification();
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(letter);
          } else {
            toggleNotification();
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [correctLetters, wrongLetters, selectedWord, setCorrectLetters, setWrongLetters, toggleNotification]);
};

export default HandleKeyDown;
