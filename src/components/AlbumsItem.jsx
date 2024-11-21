import React from 'react'
import { useNavigate } from 'react-router-dom'

function AlbumsItem({image,name,desc,id}) {

    const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`/album/${id}`)} className='min-w-[150px] p-2 px-3 rounded cursor-pointer hover:bg-zinc-700'>
      <img className='rounded' src={image} alt="" />
      <p className='font-semibold text-white'>{name}</p>
      <p className='font-normal text-gray-400 tracking-tighter leading-5 text-sm'>{desc}</p>
    </div>
  )
}

export default AlbumsItem
