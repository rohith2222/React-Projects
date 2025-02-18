import {useState, useEffect, useRef} from 'react'
import Die from "./Die"
import Timer from './Timer'
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'

export default function App() {

  function generateAllNewDice(){
    // const allDice = []
    // for(let i =0;i<10;i++)
    // allDice.push(Math.floor(Math.random()*6)+1);
    // return allDice;
    return new Array(10).fill(0).map((dice) => ({
      value: Math.ceil(Math.random()*6),
      isHeld:false,
      id: nanoid()
    }))
  }

  const [dice, setDice] = useState(() => generateAllNewDice())
  const [count,setCount] = useState(() => 0)
  const buttonRef = useRef(null)

  const gameWon = dice.every((diceObj,index,array) => 
    diceObj.isHeld===true && diceObj.value===dice[0].value
  )

  function generateNewDice(){
    setDice((prevdice) => prevdice.map((diceObj) => 
      diceObj.isHeld===true? diceObj : {...diceObj, value:Math.ceil(Math.random()*6)}
    ))
    setCount((prevCount) => prevCount+1)
  }

  function hold(id){
    setDice((prevdice) => 
      prevdice.map((diceObj) => 
      ({...diceObj, isHeld: diceObj.id===id? !diceObj.isHeld : diceObj.isHeld})))
  }

  function reloadGame(){
    setDice(() => generateAllNewDice())
    setCount(0)
  }

  useEffect(() => {
    buttonRef.current.focus()
  },[gameWon])

  const diceElements = dice.map((diceObj) => 
  <Die 
    key={diceObj.id} 
    value={diceObj.value} 
    isHeld={diceObj.isHeld} 
    hold={() => hold(diceObj.id)}
  />)

  return (
    <main className="main-container">
      {gameWon? <Confetti/>: null}
      <div aria-live='polite' className="sr-only">
        {gameWon && <p>Congratulations! You won! Press "New Game" to start again.</p>}
      </div>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container">
        {diceElements}
      </div>
      <div className='e-container'>
        <div className='timer-container'>
          <Timer result={gameWon}/>
        </div>
        <div className='button-container'>
          <button onClick={gameWon? reloadGame : generateNewDice} ref={buttonRef}>{gameWon? "New Game": "Roll"}</button>
        </div>
        <div className='counter-container'>
          <p>{count}</p>
        </div>
      </div>
    </main>
  )
}
