function Entry(props) {
  return (
    <article className="entry">
      <div className="entry-image-container">
        <img src={props.img.src} alt={props.img.alt} width="1080" height="720" />
      </div>
      <div className="entry-content">
        <div className="entry-header">
          <img src="./src/assets/marker.png" alt="marker" width="21" height="29" />
          <p className="entry-country">{props.country}</p>
          <a href={props.googleMapsLink} target="_blank">View on Google Maps</a>
        </div>
        <p className="entry-title">{props.title}</p>
        <p className="entry-dates">{props.dates}</p>
        <p className="entry-text">{props.text}</p>
      </div>
    </article>
  )
}

export default Entry