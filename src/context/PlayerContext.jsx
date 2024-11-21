import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const [track, setTrack] = useState(songsData[1]);
    const [playstatus, setplaystatus] = useState(false);
    const [time, setTime] = useState({
        currentTime: {
            second: 0,
            minute: 0,
        },
        totaltime: {
            second: 0,
            minute: 0,
        },
    });

    useEffect(()=>{
        setTimeout(()=>{
            audioRef.current.ontimeupdate=()=>{
                seekBar.current.style.width=(Math.floor(audioRef.current.currentTime/audioRef.current.duration*100))+"%";
                setTime({
                    currentTime: {
                        second: Math.floor(audioRef.current.currentTime % 60),
                        minute:  Math.floor(audioRef.current.currentTime / 60),
                    },
                    totaltime: {
                        second:  Math.floor(audioRef.current.duration%60),
                        minute:  Math.floor(audioRef.current.duration/60),
                    },
                })

            }
        },1000)
    },[audioRef])

    const seeksong=async(e)=>{
        audioRef.current.currentTime=((e.nativeEvent.offsetX / seekBg.current.offsetWidth)*audioRef.current.duration)
    }

    const Play = () => {
        audioRef.current.play(); 
        setplaystatus(true);
    };

    const Pause = () => {
        audioRef.current.pause(); 
        setplaystatus(false);
    };

    const playwithId=async (id)=>{
        await setTrack(songsData[id]);
        await audioRef.current.play();
        setplaystatus(true);
    }

    const previous = async()=>{
        if(track.id>0){
            await setTrack(songsData[track.id -1]);
            await audioRef.current.play();
            setplaystatus(true);
        }
    }

    const next = async()=>{
        if(track.id < songsData.length-1){
            await setTrack(songsData[track.id +1]);
            await audioRef.current.play();
            setplaystatus(true);
        }
    }

    const contextValue = {
        audioRef,
        seekBar,
        seekBg,
        track,
        setTrack,
        playstatus,
        setplaystatus,
        time,
        setTime,
        Play,
        Pause,
        playwithId,
        previous,next,
        seeksong
    };

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children} 
        </PlayerContext.Provider>
    );
};

export default PlayerContextProvider ;
