import { createContext, useReducer, useCallback } from "react";
import AppReducer from "./AppReducer";
import { DictionaryResponse } from "../hooks/useDictionary";

export type AppState = {
  playable: boolean;
  selectedWord: DictionaryResponse;
  correctLetters: string[];
  wrongLetters: string[];
  showNotification: boolean;
  showHints: boolean;
};

type AppActions = {
  toggleNotification: () => void;
  toggleHints: () => void;
  setSelectedWord: (selectedWord: DictionaryResponse) => void;
  setCorrectLetters: (letter: string) => void;
  setWrongLetters: (letter: string) => void;
  resetGame: () => void;
};

type SET_NOTIFICATION = { type: "SET_NOTIFICATION"; payload: boolean };
type SET_HINTS = { type: "SET_HINTS"; payload: boolean };
type RESET_GAME = { type: "RESET_GAME" };
type SET_CORRECT_LETTERS = { type: "SET_CORRECT_LETTERS"; payload: string };
type SET_WRONG_LETTERS = { type: "SET_WRONG_LETTERS"; payload: string };
type SET_SELECTED_WORD = { type: "SET_SELECTED_WORD"; payload: DictionaryResponse };

export type AppContext = AppState & AppActions;

export type AppActionTypes =
  | SET_NOTIFICATION
  | SET_HINTS
  | RESET_GAME
  | SET_CORRECT_LETTERS
  | SET_WRONG_LETTERS
  | SET_SELECTED_WORD;

// Initial state
const initialState = {
  playable: false,
  selectedWord: {
    word: "",
    definition: "",
  },
  correctLetters: [],
  wrongLetters: [],
  showNotification: false,
  showHints: false,
} as AppState;

// Create context
export const GlobalContext = createContext<AppContext | null>(null);

// Provider component
export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const toggleNotification = useCallback(() => {
    dispatch({
      type: "SET_NOTIFICATION",
      payload: true,
    });
    setTimeout(() => {
      dispatch({
        type: "SET_NOTIFICATION",
        payload: false,
      });
    }, 2000);
  }, []);

  const toggleHints = useCallback(() => {
    dispatch({
      type: "SET_HINTS",
      payload: true,
    });
    setTimeout(() => {
      dispatch({
        type: "SET_HINTS",
        payload: false,
      });
    }, 5000);
  }, []);

  const resetGame = () => {
    dispatch({
      type: "RESET_GAME",
    });
  };

  const setSelectedWord = (selectedWord: DictionaryResponse) => {
    dispatch({
      type: "SET_SELECTED_WORD",
      payload: selectedWord,
    });
  };

  const setCorrectLetters = (letter: string) => {
    dispatch({
      type: "SET_CORRECT_LETTERS",
      payload: letter,
    });
  };

  const setWrongLetters = (letter: string) => {
    dispatch({
      type: "SET_WRONG_LETTERS",
      payload: letter,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        playable: state.playable,
        correctLetters: state.correctLetters,
        wrongLetters: state.wrongLetters,
        showNotification: state.showNotification,
        selectedWord: state.selectedWord,
        showHints: state.showHints,
        toggleNotification,
        toggleHints,
        setSelectedWord,
        setCorrectLetters,
        setWrongLetters,
        resetGame,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
