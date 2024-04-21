import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';


const SecondryContainer = () => {
    const movies = useSelector(store => store.movies)
    return (
        <div className='bg-black'>
            <div className='mt-0 md:-mt-52 relative  z-20' >
                <MovieList title={'Now Playing'} movies={movies.nowPlayingMovies} />

                <MovieList title={'Popular'} movies={movies.popularMovies} />
                <MovieList title={'Upcoming Movies'} movies={movies.upcomingMovies} />

            </div>
        </div>
    )
}

export default SecondryContainer