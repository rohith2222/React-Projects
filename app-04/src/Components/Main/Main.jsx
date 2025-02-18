import { useEffect, useState } from 'react';
import './main.css'

export default function Main(props){
    const [meme,setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    });

    const [memeImages, setMemeImages] = useState([]);

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(apiData => {
                setMemeImages(apiData.data.memes.map(meme => meme.url))})
    },[])
    
    function handleChange(event){
        const {value, name} = event.currentTarget
        setMeme((prevMeme) => ({...prevMeme,[name]:value}))
    }

    function generateImg(){
        const r = Math.floor(Math.random(memeImages.length)*memeImages.length)
        setMeme(prevMeme => ({...prevMeme, imageUrl: memeImages[r]}))
    }

    return (
        <main>
            <div className="form">
                <label htmlFor="topText">Top Text</label>
                <input type="text" name="topText" id="topText" placeholder='One does not simply' onChange={handleChange} value={meme.topText}/>
                <label htmlFor="bottomText">Bottom Text</label>
                <input type="text" name="bottomText" id="bottomText" placeholder='Walk into Mordor' onChange={handleChange} value={meme.bottomText}/>
                <button onClick={generateImg}>Get a new meme image 🏞️</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    );
}