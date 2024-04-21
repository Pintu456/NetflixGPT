import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {

    return (
        <div className='text-white pl-4 pr-4 sm:pl-12 sm:pr-12  '>
            <h1 className=' text-xl sm:text-3xl py-4'>{title}</h1>
            <div className='flex  overflow-x-scroll no-scrollbar'
            >

                <div className=' px-1 flex sm:px-2'>
                    {movies?.map(movie => <MovieCard key={movie.id} poster={movie.poster_path} />)}
                </div>
            </div>
        </div>
    )
}

export default MovieList;