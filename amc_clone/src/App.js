import './Styles/App.css';
import {useState} from 'react';
import Banner from './Component/Banner.jsx'
import posterIcon from './Images/Black-Panther-wakanda-forever-Character-Posters.webp';
import ShowingAvailability from './Component/ShowingAvailability.jsx';

const App = () => {
  const [isName, setName] = useState('');
  const [isActors, setActors] = useState('');
  const [isDirectors, setDirectors] = useState('');
  const [isRating, setRating] = useState('');
  const [isRunTime, setRunTime] = useState(0);
  const [isSynopsis, setSynopsis] = useState('');
  const [isRelease, setRelease] = useState(0);

  return (
    <div className="Site">
      <div className="Header">
        <Banner />
      </div>
      <div className="SiteContent">
        <div className="Poster">
          <img className="PosterImage" style={{width:'100%'}} src={posterIcon} alt='poster' />
          <div className="Title-Container">
            <div className="Title">
              Black Panther: Wakanda Forever
            </div>
          </div>
        </div>
        <div className="MovieDetails">
          <ShowingAvailability />
          <div className="Description-Container">
            <div className="Description-Text">
                     Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
