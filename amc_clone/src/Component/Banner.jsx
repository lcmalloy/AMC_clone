import '../App.css';
import searchIcon from '../Images/kindpng_1433595.png';
import companyLogo2 from '../Images/www.amctheatres.com_movies_black-panther-wakanda-forever-56467.png'

const Banner = () => {
  return (
    <div className="Banner">
      <div className="CompanyLogo">
        <div className="Logo">
          <img className="Logo-Image" style={{width: '8vh', height: '6vh'}} src={companyLogo2} alt='logo' />
        </div>
      </div>
      <div className="Search">
        <label>
          <div className="SearchIcon-Container">
            <img className="SearchIcon" src={searchIcon} alt='search' />
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
  )
}

export default Banner;