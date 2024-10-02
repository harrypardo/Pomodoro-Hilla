
import { useContext, useRef, useState } from "react";

import PlayIcon from '../../assets/icons/play.png';
import StopButton from '../../assets/icons/stop.png';

import ReactPlayer from 'react-player'
import StationList from "./StationList";
import { STATIONS } from "./stations";
import { Station } from "./types";

import './musicplayer.styles.scss';
import Draggable from "react-draggable";
import { DraggableContext } from "Frontend/views/@index";

export default function MusicPlayer( ) {

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentStation, setCurrentStation] = useState(STATIONS.LOFI_GIRL.url);
    const [stationKey, setStationKey] = useState(STATIONS.LOFI_GIRL.name);

    const onClickPlayButton = () => setIsPlaying((playing) => !playing);
    const onChangeStation = (station: Station) => {
       
        setCurrentStation(station.url);
        setStationKey(station.name);
        setIsPlaying(true);}; 


     const nodeRef = useRef(null);   

    const dragContext = useContext(DraggableContext);

    return (
    
    <Draggable nodeRef={nodeRef} disabled={!dragContext?.isDraggable}>
    <div className="musicplayer-container" ref={nodeRef}>

            <img src={isPlaying ? StopButton : PlayIcon } 
            width="50px"
            height="50px"
            alt="play-button"
            onClick={onClickPlayButton}></img>

            <StationList onChangeStation={onChangeStation}  />
           
            <ReactPlayer
            key={stationKey}
            url={currentStation}
            playing={isPlaying}
            height={"0"}
            width={"0"}
            config={{
                youtube: {
                playerVars: { showinfo: 0 }
                }
            }}
        />
    </div>
    </Draggable>);

}