import React from 'react'
import { CARD_URL } from '../utils/constant'

const MovieCard = ({ poster }) => {
    return (
        <div className=' w-36 md:w-48 px-2 '>
            {poster ? <img className='rounded-lg h-72' src={CARD_URL + poster} alt="movie card" /> : <img className='rounded-lg h-72' src="https://png.pngtree.com/png-vector/20221109/ourmid/pngtree-no-image-available-icon-flatvector-illustration-graphic-available-coming-vector-png-image_40958834.jpg" alt="movie card" />}
        </div>
    )
}

export default MovieCard