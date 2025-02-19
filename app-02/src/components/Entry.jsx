import markerImage from '../assets/marker.png'

function Entry(props){
    const entry = props.place;
    return (
        <div className="entry-container">
            <img src={entry.img.src} alt={entry.img.alt} className="main-image"/>
            <div className="detail-container">
                <span className="upper-layer">
                    <img src={markerImage} alt="Marker" className="marker-image"/>
                    <p>{entry.country}</p>
                    <a href={entry.googleMapsLink} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                </span>
                <h1>{entry.title}</h1>
                <b>{entry.dates}</b>
                <p>{entry.text}</p>
            </div>
        </div>
    );
}

export default Entry;