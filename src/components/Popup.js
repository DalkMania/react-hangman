import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { checkWin } from '../helpers/index'

const Popup = () => {
  const {
    setSelectedWord,
    correctLetters,
    wrongLetters, 
    selectedWord, 
    resetGame
  } = useContext(GlobalContext)

  let finalMessage = '';
  let finalMessageRevealWord = '';
    
  if( checkWin(correctLetters, wrongLetters, selectedWord.word) === 'win' ) {
    finalMessage = 'Congratulations! You won! 😃';
  } else if( checkWin(correctLetters, wrongLetters, selectedWord.word) === 'lose' ) {
    finalMessage = 'Unfortunately you lost. 😕';
    finalMessageRevealWord = `...the word was: ${selectedWord.word}`;
  }

  const PlayAgain = () => {
    resetGame()
    setSelectedWord()
  }

  return (
    <>
    { selectedWord && selectedWord.word &&
      <div className="popup-container" style={finalMessage !== '' ? {display:'flex'} : {display:'none'}}>
        <div className="popup">
          <h2>{finalMessage}</h2>
          <h3>{finalMessageRevealWord}</h3>
          <button type='button' onClick={ () => PlayAgain() }>Play Again</button>
        </div>
      </div>
    }
    </>
  )
}

export default Popup
