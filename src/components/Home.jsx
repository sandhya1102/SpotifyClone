import React from 'react'
import { albumsData } from '../assets/assets'
import { songsData } from '../assets/assets'
import AlbumsItem from './AlbumsItem'
import Songsitem from './Songsitem'

const Home = () => {
  return (
    <div className='w-full m-2 px-6  rounded-xl bg-zinc-800 overflow-auto lg:w-[100%] lg:ml-0'>
      <div className='flex items-center gap-2 mt-4'>
        <p className='bg-white font-normal p-1 px-2  rounded-2xl  cursor-pointer'> All</p>
        <p className='bg-black text-white font-normal p-1 px-2  rounded-2xl cursor-pointer'>Music</p>
        <p className='bg-black text-white font-normal p-1 px-2  rounded-2xl cursor-pointer'>Podcasts</p> 
      </div>
      <div className='mt-5'>
      <h1 className='text-2xl text-white font-bold'>Featured charts</h1>        
      <div className=' flex mt-4 overflow-auto'>
        {albumsData.map((item,index)=>(<AlbumsItem key={index} image={item.image} name={item.name} desc={item.desc} id={item.id}/>))}
      </div>
      </div>
      <div className='mt-5'>
      <h1 className='text-2xl text-white font-bold'>Today's Biggest Hits</h1>        
      <div className=' flex mt-4 overflow-auto'>
        {songsData.map((item,index)=>(<Songsitem key={index} image={item.image} name={item.name} desc={item.desc} id={item.id}/>))}
      </div>
      </div>
    </div>
  )
}

export default Home
