import { useEffect } from "react";
import { API_OPTION } from "../../utils/constant";
import { useDispatch } from 'react-redux';
import { addPopularMovies } from "../../utils/movieSlice";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMoviesData = async () => {

        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTION)

        const result = await data.json();

        dispatch(addPopularMovies(result.results))
    }
    useEffect(() => {
        popularMoviesData();
    }, [])

}
export default usePopularMovies;