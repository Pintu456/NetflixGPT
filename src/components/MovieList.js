import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
    return (
        <div className='text-white pl-12 pr-12 '>
            <h1 className=' text-3xl py-4'>{title}</h1>
            <div className='flex  overflow-x-scroll '>

                <div className='  flex px-2'>
                    {movies?.map(movie => <MovieCard key={movie.id} poster={movie.poster_path} />)}
                </div>
            </div>
        </div>
    )
}

export default MovieList;