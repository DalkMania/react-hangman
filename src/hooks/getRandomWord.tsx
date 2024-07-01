import { useCallback, useContext, useEffect, useMemo } from "react";
import { GlobalContext, AppContext } from "../context/GlobalState";
import { generate } from "random-words";
import { formatDictionaryResponse } from "../helpers";

const GetRandomWord = () => {
  const { setSelectedWord, playable } = useContext(GlobalContext) as AppContext;
  const foundWord = useMemo(() => {
    if (!playable) {
      return generate();
    }
  }, [playable]);

  const checkWordinDictionary = useCallback(async () => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${foundWord}`;
    const data = await fetch(url);
    const json = await data.json();
    const formatted = formatDictionaryResponse(json);
    setSelectedWord(formatted);
  }, [foundWord, setSelectedWord]);

  useEffect(() => {
    if (!playable) {
      checkWordinDictionary();
    }
  }, [playable, checkWordinDictionary]);
};

export default GetRandomWord;
