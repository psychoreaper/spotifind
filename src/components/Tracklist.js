import '../styles/Tracklist.css';

function Tracklist(props) {
    const tracks = () => {
        return props.tracks && props.tracks.items;
    }

    const reformatTime = (millis) => {
        const minutes = Math.floor(millis / 60000);
        const seconds = ((millis % 60000) / 1000).toFixed(0);
        return (
            seconds == 60 ?
                (minutes+1) + ":00" :
                minutes + ":" + (seconds < 10 ? "0" : "") + seconds
        );
    }

    return (
        <div className="tracklist">
            <b>Tracks</b>
            {tracks() && tracks().map(tr => {
                return <div>
                    <span>{tr.name}</span>
                    <span className="tracklist-duration">{reformatTime(tr.duration_ms)}</span>
                </div>
            })}
        </div>
    )
}

export default Tracklist;