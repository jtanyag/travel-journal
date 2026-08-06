function Entry() {
  return (
    <article className="entry">
      <div className="entry-image-container">
        <img src="https://scrimba.com/links/travel-journal-japan-image-url" alt="Japan" width="1080" height="720" />
      </div>
      <div className="entry-content">
        <div className="entry-header">
          <img src="./src/assets/marker.png" alt="marker" width="21" height="29" />
          <p className="entry-country">Japan</p>
          <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu" target="_blank">View on Google Maps</a>
        </div>
        <p className="entry-title">Mount Fuji</p>
        <p className="entry-dates">12 Jan, 2021 - 24 Jan, 2021</p>
        <p className="entry-text">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
      </div>
    </article>
  )
}

export default Entry