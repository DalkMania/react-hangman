/* eslint-disable  @typescript-eslint/no-explicit-any */
export const checkWin = (correct: string[], wrong: string[], word: string) => {
  let status = "win";

  if (word !== undefined) {
    word.split("").forEach((letter) => {
      if (!correct.includes(letter)) {
        status = "";
      }
    });
  }

  // Check for lose
  if (wrong.length === 6) status = "lose";

  return status;
};

export type DictionaryResponse = {
  word: string;
  definition: string;
};

export const formatDictionaryResponse = (data: any): DictionaryResponse => {
  return {
    word: data[0].word,
    definition: data[0].meanings[0].definitions[0].definition,
  };
};
