import './App.css';
import Album from "./components/Album";
import json from "./albums.json";

function App() {
    const getRandomAlbum = () => {
        const json = require("./albums.json");
        return json.albums[Math.floor(Math.random() * (json.albums.length))].spotifyId;
    }

    return (
        <div className="App">
            <div className="header">Spotichance!</div>
            <Album spotifyAlbumId={getRandomAlbum()}/>
        </div>
    );
}

export default App;
