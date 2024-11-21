import React, { useEffect, useRef } from 'react'
import { Route,Routes, useLocation } from 'react-router-dom'
import Home from './Home'
import Album from './Album'
import { albumsData } from '../assets/assets';

function Display() {

  const displayRef=useRef();
  const location = useLocation();
  const isAlbum=location.pathname.includes("album");
  const albumId=isAlbum? location.pathname.slice(-1):"";
  const bgColor=albumsData[Number(albumId)].bgColor;
 
  useEffect(()=>{
    if (isAlbum){
      displayRef.current.style.background = `linear-gradient(${bgColor},#27272A)`
    }
    else{
      displayRef.current.style.background=`#27272A`
    }
  })

  return (
    <>
    <div ref={displayRef} className='w-full m-2 px-6  rounded-xl bg-zinc-800 overflow-auto lg:w-[75%] lg:ml-0'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/album/:id' element={<Album/>}/>
      </Routes>
    </div>
    </>
  )
}

export default Display
