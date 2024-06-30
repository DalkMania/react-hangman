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
