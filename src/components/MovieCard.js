import React from 'react'
import { CARD_URL } from '../utils/constant'

const MovieCard = ({ poster }) => {
    return (
        <div className='w-48 px-2 '>
            <img className='rounded-lg' src={CARD_URL + poster} alt="movie card" />
        </div>
    )
}

export default MovieCard