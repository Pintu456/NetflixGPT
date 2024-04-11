
import { createSlice } from '@reduxjs/toolkit'
const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideos: null,
        popularMovies: null,
        upcomingMovies: null,
    },
    reducers: {
        addPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideos: (state, action) => {
            state.trailerVideos = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        }
    }

})
export const { addPlayingMovies, addTrailerVideos, addPopularMovies, addUpcomingMovies } = movieSlice.actions;
export default movieSlice.reducer;