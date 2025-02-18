import ReactMarkdown from 'react-markdown'
import './cluaderecipe.css'
export default function ClaudeRecipe(props){

    return <section className='suggested-recipe-container'>
                <ReactMarkdown children={props.recipeCont} />
            </section>
}