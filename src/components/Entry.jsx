function Entry(props) {
  return (
    <article className="entry">
      <div className="entry-image-container">
        <img src={props.entry.img.src} alt={props.entry.img.alt} width="1080" height="720" />
      </div>
      <div className="entry-content">
        <div className="entry-header">
          <img src="./src/assets/marker.png" alt="marker" width="21" height="29" />
          <p className="entry-country">{props.entry.country}</p>
          <a href={props.entry.googleMapsLink} target="_blank">View on Google Maps</a>
        </div>
        <p className="entry-title">{props.entry.title}</p>
        <p className="entry-dates">{props.entry.dates}</p>
        <p className="entry-text">{props.entry.text}</p>
      </div>
    </article>
  )
}

export default Entry