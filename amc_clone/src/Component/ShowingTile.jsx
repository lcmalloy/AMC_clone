import '../Styles/ShowingTile.css'

const ShowingTile = (prop) => {

  return (
    <div className="ShowingTile_Container">
      <div className="Showing-Title">
        {prop.info.title}
      </div>
      <div className="Showing-Showtime">
        {prop.info.showtime}
      </div>
      <div className="Showing-Location">
        {prop.info.location}
      </div>
      <div className="Showing-Seating">
        <a  href={prop.info.seating}>
          Movie Seating
        </a>
      </div>
    </div>
  )
}

export default ShowingTile;