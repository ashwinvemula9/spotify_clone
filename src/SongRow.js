import React from 'react';
import './songrow.css'

function SongRow({ track = "test" }) {
    return (
        <div className="songrow">
            <img className="songrow_album" src={track.album.images[0].url} />
            <div className="songrow_info">
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map((artist) => artist.name).join(',')}
                    {track.album.name}
                </p>
            </div>
        </div>
    )
}

export default SongRow
