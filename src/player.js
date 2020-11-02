import React from 'react'
import Body from './Body'
import Footer from './Footer'
import './player.css'
import SideBar from './SideBar'

function Player({spotify}) {
    return (
        <div className="player">
            <div className="player_body">
                <SideBar/>
                <Body spotify={spotify} />
                <Footer/>
            </div>
        </div>
    )
}

export default Player
