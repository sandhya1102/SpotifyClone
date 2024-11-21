import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { albumsData, songsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';


function Album() {

    const {id} =useParams();
    const album=albumsData[id];
    const {playwithId,play} =useContext(PlayerContext);
    
  return (
    <>
      <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end text-white'>
        <img className='w-[170px] rounded ' src={album.image} alt="" />
        <div className='flex flex-col '>
          <p>Album</p>
          <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{album.name}</h2>
          <h4 className='font-medium'>{album.desc}</h4>
          <div className='flex'>
            2021
          • 8 songs
          • 33min 4sec
          </div>
        </div>
      </div>
      <div className='w-full mt-10 mb-4 p-2'>
        <div className='flex justify-between'>
        <div className='flex items-center gap-6'>
      <i onClick={play} className="ri-play-fill bg-green-600 rounded-full w-16 h-16 text-3xl flex justify-center items-center "></i>
      <i class="ri-add-circle-line text-zinc-200 text-4xl font-light"></i>
      <i className="ri-more-fill text-3xl text-gray-200 cursor-pointer "></i>
      </div>
      <div className='flex gap-2 text-zinc-200 items-center'>
        <p>List</p>
        <i class="ri-menu-line"></i>
      </div>
      </div>
      <div className='flex justify-between text-white sm:grid-cols-4 mt-10 '>
        <p><b className='mr-4 text-md '>#</b>Title</p>
        <i class="ri-time-line text-xl"></i>
      </div>
      <hr className='mt-2' />
      {
        songsData.map((item,index)=>(
          <div onClick={()=>playwithId(item.id)} key={index} className='flex justify-between text-white mt-10 hover:bg-gray-600 p-2 cursor-pointer'>
            <div className='flex'>
             <b className='mr-2'>{index+1}</b>
             <div className='flex flex-col'>
            <p>{item.name}</p>
            <p>{item.desc}</p>
            </div>
            </div>
            <p>{item.duration}</p>
          </div>
        ))
      }
      </div>
      </>
  )
}

export default Album
