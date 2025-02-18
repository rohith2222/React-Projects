import { useState, useRef, useEffect } from 'react';
import './form.css'
import ClaudeRecipe from '../ClaudeRecipe/ClaudeRecipe';
import IngridientList from '../IngridientList/IngridientList';
import { getRecipeFromMistral } from '../ai';

export default function Form(){
    const [ingridients,setIngridients] = useState([]);
    // const [recipeShown,setRecipeShown] = useState(false);
    const [recipeCont, setRecipeCont] = useState("");

    function addIngridient(event){
        event.preventDefault();
        const formEl = event.currentTarget;
        const formData = new FormData(formEl);
        const newIngridient = formData.get("ingridient");
        setIngridients(ingridients => [...ingridients, newIngridient]);
        formEl.reset();
    }

    function getRecipe(event){
        event.preventDefault();
        console.log("Recipe requested")
        getRecipeFromMistral(ingridients)
        .then(recipe => {
            console.log("Recipe acquired")
            setRecipeCont(recipe);
            // setRecipeShown(true);
        })
        .catch(error => {
            console.error("Error fetching recipe:", error);
            // setRecipeShown(false);
        });
    }

    const recipeSection = useRef(null)
    useEffect(() => {
        if(recipeSection!==null && recipeCont!==""){
            recipeSection.current.scrollIntoView({behavior: "smooth"});
        }
    },[recipeCont])

    return (
        <main>
            <form className="form-add" onSubmit={addIngridient}>
                <input type="text" placeholder="e.g. oregano" name='ingridient'/>
                <button type='submit'>+Add ingridient</button>
            </form>
            {ingridients.length!==0 && 
                <IngridientList ingridients={ingridients} getRecipe={getRecipe} refer={recipeSection}/>
            }
            {recipeCont!=="" && <ClaudeRecipe recipeCont={recipeCont}/>}
        </main>
    );
}
