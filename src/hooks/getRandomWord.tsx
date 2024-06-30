/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useMemo } from "react";
import { GlobalContext, AppContext } from "../context/GlobalState";
import { generate } from "random-words";
import { formatDictionaryResponse, useDictionary } from "../hooks/useDictionary";

const GetRandomWord = () => {
  const { setSelectedWord, playable } = useContext(GlobalContext) as AppContext;
  const selectedWord = useMemo(() => generate(), [!playable]);
  const response = useDictionary(selectedWord as string);

  useEffect(() => {
    if (!response.isLoading && response.data) {
      setSelectedWord(formatDictionaryResponse(response));
    }
  }, [response.data]);
};

export default GetRandomWord;
