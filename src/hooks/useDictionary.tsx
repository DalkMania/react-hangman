import { useFetch, ApiResponse } from "./useFetch";

export type DictionaryResponse = {
  word: string;
  definition: string;
};

export const formatDictionaryResponse = (data: ApiResponse): DictionaryResponse => {
  return {
    word: data.data[0].word,
    definition: data.data[0].meanings[0].definitions[0].definition,
  };
};

export const useDictionary = (word: string) => {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  const data: ApiResponse = useFetch(url);
  return data;
};
