import '../App.css';
import searchIcon from '../Images/kindpng_1433595.png';
import companyLogo2 from '../Images/www.amctheatres.com_movies_black-panther-wakanda-forever-56467.png'

const Banner = () => {
  return (
    <div className="Banner">
      <div className="CompanyLogo">
        <div className="Logo">
          <img className="Logo-Image" src={companyLogo2} alt='logo' />
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
          <a className="Nav-Button" href="https://www.amctheatres.com/movies">
            See A Movie
          </a>
        </div>
        <div className="IsFood">
          <a className="Nav-Button" href="https://www.amctheatres.com/food-and-drink">
            Food & Drinks
          </a>
        </div>
        <div className="IsTheater">
          <a className="Nav-Button" href="https://www.amctheatres.com/movie-theatres">
            Our Theaters
          </a>
        </div>
        <div className="IsDemand">
          <a className="Nav-Button" href="https://www.amctheatres.com/on-demand">
            On Demand
          </a>
        </div>
        <div className="IsExtra">
          <a className="Nav-Button" href="https://www.amctheatres.com/offers">
            Extras
          </a>
        </div>
        <div className="IsGiftCards">
          <a className="Nav-Button" href="https://www.amctheatres.com/gift-cards">
            Gift Cards
          </a>
        </div>
      </div>
    </div>
  )
}

export default Banner;