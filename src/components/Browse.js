
import Header from './Header'
import MainContainer from './MainContainer';
import SecondryContainer from './SecondryContainer';
import useNowPlayingMovies from './hooks/useNowPlayingMovies'


const Browse = () => {
    useNowPlayingMovies();
    return (
        <div>
            <Header />
            <MainContainer />
            <SecondryContainer />
        </div>
    )
}

export default Browse