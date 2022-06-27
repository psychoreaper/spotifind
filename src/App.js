import './App.css';
import Album from "./components/Album";

function App() {
    const getRandomAlbum = () => {
        const json = require("./albums.json");
        return json.albums[Math.floor(Math.random() * (json.albums.length))].spotifyId;
    }

    return (
        <div className="App">
            <Album spotifyAlbumId={getRandomAlbum()}/>
        </div>
    );
}

export default App;
