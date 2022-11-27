import '../Styles/App.css';
import ShowingTile from './ShowingTile';
import {useState} from 'react';

const testData = [
  {
    title: 'Black Panther: Wakanda Forever',
    showtime: '12:30 - 2:30',
    location: 'Walnut Creek',
    seating: 'http://test.com/'
  },
  {
    title: 'Black Panther: Wakanda Forever',
    showtime: '1:30 - 2:30',
    location: 'Union City',
    seating: 'http://test2.com/'
  },
  {
    title: 'Black Panther: Wakanda Forever',
    showtime: '3:30 - 2:30',
    location: 'Alameda',
    seating: 'http://test3.com/'
  },
  {
    title: 'Black Panther: Wakanda Forever',
    showtime: '12:30 - 2:30',
    location: 'Walnut Creek',
    seating: 'http://test.com/'
  },
  {
    title: 'Black Panther: Wakanda Forever',
    showtime: '1:30 - 2:30',
    location: 'Union City',
    seating: 'http://test2.com/'
  },
  {
    title: 'Black Panther: Wakanda Forever',
    showtime: '3:30 - 2:30',
    location: 'Alameda',
    seating: 'http://test3.com/'
  },
  {
    title: 'Black Panther: Wakanda Forever',
    showtime: '12:30 - 2:30',
    location: 'Walnut Creek',
    seating: 'http://test.com/'
  },
  {
    title: 'Black Panther: Wakanda Forever',
    showtime: '1:30 - 2:30',
    location: 'Union City',
    seating: 'http://test2.com/'
  },
  {
    title: 'Black Panther: Wakanda Forever',
    showtime: '3:30 - 2:30',
    location: 'Alameda',
    seating: 'http://test3.com/'
  }
]

const ShowingAvailability = () => {
  const [isShowingDetail, setShowingDetail] = useState([]);
  const showings = testData.map((showing) =>
    <ShowingTile info={showing} />
  );
  return (
    <div className="Available-Showing-Container" id="Availability-Style">
      <div className="Showing-Header">
        Available Showings
      </div>
      <div className="Showings-Container">
        {showings}
      </div>
    </div>
  )
}

export default ShowingAvailability;