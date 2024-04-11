import { useEffect } from "react";
import { API_OPTION } from "../../utils/constant";
import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from "../../utils/movieSlice";

const useUpcoming = () => {
    const dispatch = useDispatch();
    const upcomingMoviesData = async () => {

        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTION)

        const result = await data.json();

        dispatch(addUpcomingMovies(result.results))
    }
    useEffect(() => {
        upcomingMoviesData();
    }, [])

}
export default useUpcoming;