
export default function IngridientList(props){
    const ingridientElement = props.ingridients.map((ingridient,index) => {
        return <li key={index}>{ingridient}</li>
    })

    return <section>
        <h1 className="heading">Ingridients on hand(Atleast 4 needed):</h1>
        <ul>
            {ingridientElement}
        </ul>
        {props.ingridients.length>3 &&
        <div className="ready-recipe">
            <div className='text-container' ref={props.refer}>
                <h1>Ready for a recipe?</h1>
                <p>Generate a recipe from your list of ingridients</p>
            </div>
            <button onClick={props.getRecipe} className='recipe'>Get a recipe</button>
        </div>
        }
    </section>
}