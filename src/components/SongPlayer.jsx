import React, { useContext } from 'react'
import {PlayerContext} from '../context/PlayerContext';

function SongPlayer({}) {

  const {track,seekBg,seekBar,playstatus,Play,Pause,time,previous,next,seeksong}=useContext(PlayerContext);
  return (
    <div className='h-[10%] bg-black px-5 flex justify-between text-white items-center pt-3'>
      <div className='hidden lg:flex items-center gap-4'>
        <img className='w-12 rounded-md' src={track.image} alt="" />
        <div className='pl-5'>
        <h1>{track.name}</h1>
        <p className='text-sm text-gray-300'>{track.desc.slice(0,24)}</p>
        </div>
        <i className="ri-add-circle-line pl-2 text-2xl text-gray-300"></i>
      </div>
      <div className='flex flex-col  items-center gap-1 m-auto'>
        <div className='flex gap-4 text-2xl'>
        <i className="ri-shuffle-line"></i>
        <i onClick={previous} className="ri-skip-left-fill"></i>
        {
        playstatus ?<i onClick={Pause} className="ri-pause-circle-fill text-4xl"></i> 
        :
        <i onClick={Play} class="ri-play-fill text-4xl"></i> 
        }
        <i onClick={next} className="ri-skip-right-fill"></i>
        <i className="ri-loop-left-line"></i>
        </div>
        <div className='flex items-center gap-1 text-xs text-gray-400 mt-1'>
            <p>{time.currentTime.minute}:{time.currentTime.second}</p>
        <div ref={seekBg} onClick={seeksong} className='w-[50vw] max-w-[500px] bg-slate-300 rounded-full cursor-pointer'>
            <hr ref={seekBar}  className='h-1 border-none w-0 rounded-full bg-green-500'/>
        </div>
        <p>{time.totaltime.minute}:{time.totaltime.second}</p>
        </div>
      </div>
      <div className='hidden lg:flex items-center opacity-75 gap-2 ml-[100px]'>
      <i className="ri-stop-large-line"></i>
      <i className="ri-mic-line"></i>
      <i className="ri-flip-vertical-fill"></i>
      <i className="ri-device-fill"></i>
      <i className="ri-volume-down-fill"></i>
      <div className='w-[10vw] max-w-[250px] bg-slate-300 rounded-full cursor-pointer'>
            <hr className='h-1 border-none w-0 rounded-full bg-green-500'/>
        </div>
        <i className="ri-macbook-line"></i>
        <i className="ri-fullscreen-fill"></i>
      </div>
    </div>
  )
}

export default SongPlayer
