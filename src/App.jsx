import React, { useContext } from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import SongPlayer from './components/SongPlayer'
import Display from './components/Display'
import {PlayerContext} from './context/PlayerContext'


const App = () => {

 const {audioRef,track}= useContext(PlayerContext);
  return (
    <div className='bg-black h-screen'>
      <Navbar/>
      <div className='h-[77%] flex '>
        <Sidebar/>
        <Display/>
      </div>
      <SongPlayer/>
      <audio ref={audioRef} src={track.file} preload="auto"></audio>

    </div>
  )
}

export default App
