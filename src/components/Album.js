import {useEffect, useState} from "react";

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

    return (<div>
        <div>{data && data.images[0].url}</div>
        <h2>
            {data && data.name}
        </h2>
        <p><b>Artists: </b>{data && data.artists[0].name}</p>
        <p><b>Release date: </b>{data && data.release_date}</p>
        <p><b>Tracks: </b> to be done later</p>
    </div>);
}

export default Album;