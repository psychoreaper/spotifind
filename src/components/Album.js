import '../styles/Album.css';
import {useEffect, useState} from "react";
import Tracklist from "./Tracklist";

function Album(props) {
    const [data, setData] = useState();

    const getCreds = () => {
        const json = require("./token.json");
        return json.token;
    }

    useEffect(() => {
        fetch('https://api.spotify.com/v1/albums/' + props.spotifyAlbumId, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getCreds(),
            },
        })
            .then(res => res.json())
            .then(json => {
                setData(json);
                console.log(json);
            })
            .catch(e => {
                console.log(e);
            })
    }, [])

    return (<div className="album-wrapper">
        <div className="album-info">
            <h2>
                {data && data.name}
            </h2>
            <p><b>Artists: </b>{data && data.artists[0].name}</p>
            <p><b>Release date: </b>{data && data.release_date}</p>
            <p><b>Label: </b>{data && data.label}</p>
            <Tracklist tracks={data && data.tracks}/>
            <button className="album-info-button">Listen on Spotify!</button>

        </div>
        <div className="album-cover">
            {data && <img src={data.images[0].url} alt="cover"/>}
        </div>
    </div>);
}

export default Album;