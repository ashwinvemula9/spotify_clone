import React from 'react';
import './Body.css'
import { useDataLayerValue } from './DataLayer';
import Header from './Header';
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from './SongRow';


function Body({ spotify }) {

    const [{ develop_purpose }, dispatch] = useDataLayerValue();

    console.log(develop_purpose)

    return (
        <div className="body">
            <Header spotify={spotify} />
            <div className="body_info">
                <img src={develop_purpose?.images[0].url} alt="" />
                <div className="body_infotext">
                    <strong>PLAYLIST</strong>
                    <h2>{develop_purpose?.name}</h2>
                    <p>{develop_purpose?.description}</p>
                </div>
            </div>

            <div className="body_songs">
                <div className="body_icons">
                    <PlayCircleFilledIcon className="body_shuffle" />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>

                {develop_purpose?.tracks.items.map(item => (
                    <SongRow track={item.track} />
                ))}
            </div>
        </div>
    )
}

export default Body
