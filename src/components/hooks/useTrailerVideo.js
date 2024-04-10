import { useEffect } from "react";
import { API_OPTION } from "../../utils/constant";
import { addTrailerVideos } from "../../utils/movieSlice";
import { useDispatch } from 'react-redux'

const useTrailerVideos = (movieId) => {
    const dispatch = useDispatch()

    const getMoviesVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos", API_OPTION)
        const result = await data.json();
        const filterData = result.results.filter((video) => video.type === "Trailer")

        const trailer = filterData.length ? filterData[0] : result[0]

        dispatch(addTrailerVideos(trailer))
    }
    useEffect(() => {
        getMoviesVideos()
    }, [])
}
export default useTrailerVideos;