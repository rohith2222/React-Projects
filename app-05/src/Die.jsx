
export default function Die(props){
    return (
        <button 
            className={`dice-number ${props.isHeld? "bcg-g" : "bcg-n"}`}
            onClick={props.hold}
            aria-pressed={props.isHeld}
            aria-label={`Die with a value of ${props.value}, ${props.isHeld? "held":"not held"}`}
        >
            {props.value}
        </button>    
    )
}