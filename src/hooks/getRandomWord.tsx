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
    const apiBase = import.meta.env.DEV || import.meta.env.MODE === "preview"
      ? "/dictionary-api"
      : "/api/dictionary";
    const url = import.meta.env.DEV || import.meta.env.MODE === "preview"
      ? `${apiBase}/api/v2/entries/en/${encodeURIComponent(String(foundWord))}`
      : `${apiBase}?word=${encodeURIComponent(String(foundWord))}`;
    const data = await fetch(url);

    if (!data.ok) {
      throw new Error(`Dictionary lookup failed: ${data.status}`);
    }

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
