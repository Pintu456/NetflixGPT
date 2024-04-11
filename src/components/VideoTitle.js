import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className=' w-screen aspect-video pt-44 px-12 absolute bg-gradient-to-r from-black text-white'>
            <h1 className=' text-4xl font-bold' >{title}</h1>
            <p className=' py-6 text-lg w-1/3'>{overview}</p>
            <div>
                <button className=' p-2 px-12 bg-white rounded-md hover:bg-opacity-80 mx-2 text-black text-lg'> Play</button>
                <button className=' p-2  px-12 bg-neutral-500 rounded-md mx-2 text-lg'>More info</button>
            </div>
        </div>
    )
}

export default VideoTitle