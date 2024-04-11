
import Header from './Header'
import MainContainer from './MainContainer';
import SecondryContainer from './SecondryContainer';
import useNowPlayingMovies from './hooks/useNowPlayingMovies'
import usePopularMovies from './hooks/usePopularMovies';
import useUpcoming from './hooks/useUpcoming';


const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();
    useUpcoming();
    return (
        <div>
            <Header />
            <MainContainer />
            <SecondryContainer />
        </div>
    )
}

export default Browse