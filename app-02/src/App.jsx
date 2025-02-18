import Header from './components/Header.jsx'
import Entry from './components/Entry.jsx'
import data from './data.js'

function App() {
  // console.log(data)
  const entryComponents = data.map((place) => {
    return <Entry
      key = {place.id}
      // img = {place.img}
      // title = {place.title}
      // country = {place.country}
      // googleMapsLink = {place.googleMapsLink}
      // dates = {place.dates}
      // text = {place.text}
      place = {place}
    />
  })
  return (
    <>
      <Header/>
      {entryComponents}
      
    </>
  )
}

export default App
