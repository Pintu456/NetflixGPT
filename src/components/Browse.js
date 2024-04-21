
import { useSelector } from 'react-redux';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondryContainer from './SecondryContainer';
import useNowPlayingMovies from './hooks/useNowPlayingMovies'
import usePopularMovies from './hooks/usePopularMovies';
import useUpcoming from './hooks/useUpcoming';
import GptSearch from './GptSearch';


const Browse = () => {
    const showGptSearch = useSelector(store => store.gpt.showGptSearch);
    useNowPlayingMovies();
    usePopularMovies();
    useUpcoming();
    return (
        <div>
            <Header />
            {showGptSearch ? <GptSearch /> : <> <MainContainer />
                <SecondryContainer /></>}

        </div>
    )
}

export default Browse