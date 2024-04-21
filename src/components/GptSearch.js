import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptSuggestion from './GptSuggestion';
import { BG_URL } from '../utils/constant';

const GptSearch = () => {
    return (
        <>
            <div className='-z-10  fixed  '>
                <img src={BG_URL} alt="background" className=' object-cover h-screen w-screen ' />
            </div>
            <div className=' '>

                <GptSearchBar />
                <GptSuggestion />
            </div>
        </>
    )
}

export default GptSearch;