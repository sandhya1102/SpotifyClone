import React from 'react'

function Sidebar() {
  return (
    <div className='w-[28%] m-2 rounded-xl h-[480px] bg-zinc-900 p-2 flex-col gap-2 text-white hidden lg:flex font-semibold'>
    <div className='flex justify-between items-center p-3 text-zinc-300'>
      <div className='flex gap-2'>
      <i class="ri-book-shelf-line text-2xl"></i>
      <h2>Your library</h2></div>
      <div className='flex gap-3'>
      <i class="ri-add-line text-2xl"></i>
      <i class="ri-arrow-right-line text-2xl"></i>
      </div>
      </div>
      <div className="m-2 rounded-2xl bg-zinc-800 text-white p-3 ">
        <h1 className='font-bold text-md'>Create your first playlist</h1>
        <p className='text-sm pt-2'>It's easy,we'll help you</p>
        <button className='bg-white font-bold text-black rounded-2xl p-2 mt-3'>Create playlist</button>
      </div>
      <div className="m-2 rounded-2xl bg-zinc-800 text-white p-3 ">
        <h1 className='font-bold text-md'>Let's find some podcasts to follow</h1>
        <p className='text-sm pt-2'>we'll keep you updated on new episodes</p>
        <button className='bg-white font-bold text-black rounded-2xl p-2 mt-3'>Browse podcasts</button>
      </div>
    </div>
  )
}

export default Sidebar
