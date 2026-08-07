import Header from './components/Header'
import Entry from './components/Entry'
import entryData from './data'

function App() {
  const entries = entryData.map((entry) => {
    return (
      <Entry 
        img={{
          src: entry.img.src,
          alt: entry.img.alt
        }}
        title={entry.title}
        country={entry.country}
        googleMapsLink={entry.googleMapsLink}
        dates={entry.dates}
        text={entry.text}
      />
    )
  })
  return (
    <>
      <Header />
      <main>
        {entries}
      </main>
    </>
  )
}

export default App
