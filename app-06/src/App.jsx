import {useState} from 'react'
import { generate, count } from "random-words"
import GameStatus from "./components/GameStatus"
import Languages from "./components/Languages"
import Word from './components/Word'
import KeyBoard from './components/KeyBoard'

export default function App() {
  const prgLangs = [
    {name:"HTML", bgColor:"#e2680f", color: "#F9F4DA"},
    {name:"CSS", bgColor:"rgb(51, 138, 241)", color: "#F9F4DA"},
    {name:"JavaScript", bgColor:"rgb(244, 236, 19)", color: "#1E1E1E"},
    {name:"React", bgColor:"rgb(46, 211, 233)", color: "#1E1E1E"},
    {name:"TypeScript", bgColor:"rgb(41, 142, 198)", color: "#F9F4DA"},
    {name:"Node.js", bgColor:"rgb(89, 145, 55)", color: "#F9F4DA"},
    {name:"Python", bgColor:"rgb(255, 215, 66)", color: "#1E1E1E"},
    {name:"Ruby", bgColor:"rgb(208, 44, 42)", color: "#F9F4DA"},
    {name:"Assembly", bgColor:"rgb(46, 81, 159)", color: "#F9F4DA"}
  ]

  function generateWord(){
    return generate({ minLength: 5, maxLength: 7 })
    .toUpperCase().split('').map((letter,index) => 
    {return {id:index,letter:letter,found:false}})
  }
  const [letters,setLetters] = useState(() => generateWord())
  console.log(letters)
  const [guess,setGuess] = useState(() => [])
  
  function checkLetter(letter){
    setLetters((prevLetter) => prevLetter.map((letterObj) => {
      if(letterObj.letter===letter){
        return {...letterObj,found:true} 
      }else {
        return {...letterObj}
      } 
    }))

    if(letters.some(letterObj => letterObj.letter===letter)){
      setGuess(prevGuess => [...prevGuess,{letter:letter,found:true}])
    }else{
      setGuess(prevGuess => [...prevGuess,{letter:letter,found:false}])

    }
  }
  
  const wrongGuess = guess.filter(g => g.found===false).length;
  const gameWon = letters.every(l => l.found===true)
  const gameLost = wrongGuess===8 ? true : false;
  const gameOver = gameWon || gameLost;
  
  return (
    <div className="main-container">
      <div className="desc-container">
        <h1>Assembly: Endgame</h1>
        <p>Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
        <GameStatus 
            guess={guess}
            langs={prgLangs} 
            wrongGuess={wrongGuess} 
            gameOver={gameOver}
            gameLost = {gameLost}
            gameWon = {gameWon}
        />
      </div>
      <Languages langs={prgLangs} wrongGuess={wrongGuess}/>
      <Word letters={letters} gameOver={gameOver}/>
      <KeyBoard checkLetter={checkLetter} guess={guess} gameOver={gameOver}/>
      {gameOver && <button>New Game</button>}
    </div>
  )
}


