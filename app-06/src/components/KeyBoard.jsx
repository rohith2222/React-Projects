

export default function KeyBoard(props){

    const allLetters =  Array.from({ length: 26 }, (_, i) => 
        String.fromCharCode(65 + i)); // "ABC....XYZ"

    const allLetterElements = allLetters.map((letter, index) => {
        const guessObject = props.guess.find((guessObject) => guessObject.letter === letter);

        const className = guessObject 
            ? guessObject.found === true ? "right-select" : "wrong-select"
            : "";

        return (
            <button 
                key={index}
                onClick={() => {return props.checkLetter(letter)}}
                className={className}
                disabled={props.guess.some((guessObj) => guessObj.letter === letter) || props.gameOver}
            >
                {letter}
            </button>
        );
    });

    return (
        <section className="keyboard-container">
            {allLetterElements}
        </section>
    )
}