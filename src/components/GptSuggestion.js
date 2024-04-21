import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptSuggestion = () => {
    const { gptMovies, searchName } = useSelector(store => store.gpt)
    return (

        <div className=' bg-black m-4 bg-opacity-80 mt-20 '>
            {searchName?.map((title, index) => <MovieList key={title} title={title} movies={gptMovies[index]} />)}
        </div>
    )
}

export default GptSuggestion;