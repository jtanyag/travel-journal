import Header from './components/Header'
import Entry from './components/Entry'
import entryData from './data'

function App() {
  const entries = entryData.map((entry) => {
    return (
      <Entry 
        key={entry.id}
        entry={entry}
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
