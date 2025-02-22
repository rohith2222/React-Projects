

export default function Languages(props){
    
    const langElements = props.langs.map((lang,index) => 
        (<span 
            key={lang.name} 
            style={{backgroundColor:lang.bgColor, color: lang.color}}
            className={props.wrongGuess-index>0 ? "bad-guess" : null}
        >
            {lang.name}
            {props.wrongGuess-index>0 ? "💀" : null}
        </span>))
    return (
        <div className="lang-container">
            {langElements}
        </div>
    )
}