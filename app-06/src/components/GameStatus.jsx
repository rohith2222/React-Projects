

export default function GameStatus(props){

    const wrongGuess = props.guess.filter(g => g.found===false).length;
    const langauge = wrongGuess ? props.langs[wrongGuess-1].name : null
    const options = [
        `Farewell, ${langauge}`,
        `Adios, ${langauge}`,
        `R.I.P., ${langauge}`,
        `We'll miss you, ${langauge}`,
        `Oh no, not ${langauge}!`,
        `${langauge} bites the dust`,
        `Gone but not forgotten, ${langauge}`,
        `The end of ${langauge} as we know it`,
        `Off into the sunset, ${langauge}`,
        `${langauge}, it's been real`,
        `${langauge}, your watch has ended`,
        `${langauge} has left the building`
    ];
    const randomIndex = Math.floor(Math.random() * options.length);

    
    function getGameStatus(){
        if(props.gameOver){
            if(props.gameWon){
                return <><h2>You win!</h2> <p>Well done! 🎉</p></>
            }
            else if(props.gameLost){
                return <><h2>Game over!</h2> <p>You lose! Better start learning Assembly 😭</p></>
            }
        }
        else{
            if(props.wrongGuess>0){
                return options[randomIndex]
            }
        }
        return <></>
    }
    const gameStatus = getGameStatus()

    return (
        <>
            {gameStatus && 
                <div className="game-status">
                    {getGameStatus()}
                </div>
            }
        </>

    )
}