

export default function Word(props){


    const letterElements = props.letters.map((letterObj) => 
        <span 
            key={letterObj.id} 
            className={props.gameOver 
                ? (!letterObj.found? "word-game-over": null) 
                : null}
        >
            {props.gameOver ? letterObj.letter : letterObj.found? letterObj.letter :null}
        </span>
    )
    return (
        <section className={"word-container"}>
            {letterElements}
        </section>
    )
}