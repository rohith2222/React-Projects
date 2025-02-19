import globeImage from '../assets/globe.png';

function Header(){
    return (
        <header className="header-container">
            <img src={globeImage} alt="Globe Image" />
            <span>My Travel Journal</span>
        </header>
    );
}

export default Header