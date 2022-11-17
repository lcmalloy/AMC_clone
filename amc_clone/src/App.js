import './App.css';
import {useState} from 'react';
import searchIcon from './kindpng_1433595.png';
const App = () => {
  const [isName, setName] = useState('');
  const [isActors, setActors] = useState('');
  const [isDirectors, setDirectors] = useState('');
  const [isRating, setRating] = useState('');
  const [isRunTime, setRunTime] = useState(0);
  const [isSynopsis, setSynopsis] = useState('');
  const [isRelease, setRelease] = useState(0);

  return (
    <div className="Homepage">
      <div className="Banner">
        <div className="Search">
          <label>
            <div className="SearchIcon">
              <img style={{width: '30px', height: '30px'}}src={searchIcon} alt='search' />
            </div>
            <input type='text' placeholder='Search...'/>
          </label>
        </div>
        <div className="Tabs">
          <div className="IsMovie">
            See A Movie
          </div>
          <div className="IsFood">
            Food & Drinks
          </div>
          <div className="IsTheater">
            Our Theater
          </div>
          <div className="IsDemand">
            On Demand
          </div>
          <div className="IsExtra">
            Extras
          </div>
          <div className="IsGiftCards">
            Gift Cards
          </div>
        </div>
      </div>
      <div className="HasImage">
        image
      </div>
      <div className="MovieDetails">
        detail
      </div>
    </div>
  );
}

export default App;
