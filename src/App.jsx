import { useEffect, useState } from 'react'
import './App.css'

export function App () {
  const [fact, setFact] = useState('')
  const [catImage, setCatImage] = useState('')

  const buscarFact = () => {
    fetch('https://catfact.ninja/fact')
      .then((res) => res.json())
      .then((data) => {
        setFact(data.fact)
        getCatImage(data.fact.split(' ', 1)[0])
      })
  }

  const getCatImage = (palabra) => {
    fetch(`https://cataas.com/cat/says/${palabra}`)
      .then((data) => {
        setCatImage(data.url)
      })
  }

  useEffect(buscarFact, [])

  return (
    <main className='main'>
      <p>{fact}</p>
      <img src={catImage} />
    </main>
  )
}
