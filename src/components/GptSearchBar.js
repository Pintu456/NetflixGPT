import React, { useRef } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { AI_KEY, API_OPTION } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addGptMoviesResult } from '../utils/gptSlice';

const GptSearchBar = () => {
    const dispatch = useDispatch();
    const searchText = useRef(null);
    const genAI = new GoogleGenerativeAI(AI_KEY);
    const searchMoviesTMDB = async (movies) => {
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movies}&include_adult=false&language=en-US&page=1`, API_OPTION);
        const moviesDetails = await data.json();
        return moviesDetails.results;
    }
    const gptHandleSearch = async () => {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const prompt = "Act as a movie recommendation system suggest some movies  for the query  " + searchText.current.value
            +
            "only give me name of 5 movies comma separated like the example result ahead example Result: gadar,sholay,don golmal,koi mil gya";

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        // console.log(text);
        const searchRes = text.split(",")
        // console.log(searchRes);

        const gptSearchData = await searchRes.map(movie => searchMoviesTMDB(movie));

        //  console.log(gptSearchData);
        const searchData = await Promise.all(gptSearchData);
        dispatch(addGptMoviesResult({ gptMovies: searchData, searchName: searchRes }));
        console.log(searchData);
    }
    return (
        <div className=' pt-52 sm:pt-[20%] flex justify-center'>
            <form onSubmit={(e) => e.preventDefault()} className=' w-full   sm:w-2/3 grid grid-cols-12  max-sm:grid-flow-col bg-black rounded-lg '>

                <input ref={searchText} type="text" placeholder='what would you like to watch today?' className='  col-span-9 p-2 m-4 rounded-lg' />
                <button className=' col-span-3 p-2 m-4 bg-red-800 text-white rounded-lg' onClick={gptHandleSearch} >Search</button>
            </form>
        </div>
    )
}

export default GptSearchBar;