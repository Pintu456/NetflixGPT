import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className=' w-screen  aspect-video pt-20  md:pt-44 md:px-24 px-6 absolute bg-gradient-to-r from-black text-white'>
            <h1 className='text-xl sm:my-20 md:m-0 sm:text-4xl font-bold' >{title}</h1>
            <p className=' pb-44 md:py-6  hidden   xl:block text-lg w-2/3 md:w-1/3'>{overview}</p>
            <div className='my-4 md:m-0'>
                <button className=' p-2 px-12 bg-white rounded-md hover:bg-opacity-80 mx-2 text-black text-lg'> Play</button>
                <button className=' p-2 hidden sm:inline-block  px-12 bg-neutral-500 rounded-md mx-2 text-lg'>More info</button>
            </div>
        </div>
    )
}

export default VideoTitle