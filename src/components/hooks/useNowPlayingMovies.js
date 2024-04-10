import { useEffect } from "react";
import { API_OPTION } from "../../utils/constant";
import { useDispatch } from 'react-redux';
import { addPlayingMovies } from "../../utils/movieSlice";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const moviesPlayingData = async () => {

        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', API_OPTION)

        const result = await data.json();

        dispatch(addPlayingMovies(result.results))
    }
    useEffect(() => {
        moviesPlayingData();
    }, [])

}
export default useNowPlayingMovies;