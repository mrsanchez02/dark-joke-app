import { useContext } from 'react';
import JokeCard from './components/JokeCard';
import NavBar from './components/layout/NavBar';
import Spinner from './components/Spinner';
import useFetch from './hooks/useFetch';
import darkModeContext from './context/darkModeContext';

function App() {
  
  const DarkModeContext = useContext(darkModeContext);
  const { dark } = DarkModeContext;

  const URI = 'https://v2.jokeapi.dev/joke/Miscellaneous,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';
  const URI_DARK = 'https://v2.jokeapi.dev/joke/Dark?type=single';

  const {data , loading, error, refetch } = useFetch(`${dark?URI_DARK:URI}`);

  if(error) console.log(error);

  return (
    <>
      <NavBar/>
      <div className='container'>
      {loading ?
      <Spinner/> :
      <>
        <JokeCard 
          joke={data}
          refresh={refetch}
        />
      </>
      }
    </div>
    </>
);
}

export default App;
