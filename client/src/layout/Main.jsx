import React, { useState } from 'react'
import { Gifs } from '../components/Gifs/Gifs'
import Random from '../components/Random/Random'

import { Search } from '../components/Search/Search'

function Main() {
  const [gifs, setGifs] = useState([])
  const [random, setRandom] = useState([])


  const searchGifs = async (str) => {
    try {
      const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=WTwfCVzeNd3VwJtGhK5KjR3JcgOZI8VE&q=${str}`)
      const data = await response.json()
      console.log(data.data);
      setRandom([])
      setGifs(data.data)
    } catch (error) {
      console.error(error);
    }
  }

  const searchRandom = async () => {

    await fetch('https://api.giphy.com/v1/gifs/random?api_key=WTwfCVzeNd3VwJtGhK5KjR3JcgOZI8VE', {
      method: 'GET'
    }).then((response) => response.json())
      .then((data) => {
        console.log(data.data)

        setGifs([])
        setRandom([data.data])
      })
  }
  const searchTrend = async () => {

    await fetch('https://api.giphy.com/v1/gifs/trending?api_key=WTwfCVzeNd3VwJtGhK5KjR3JcgOZI8VE', {
      method: 'GET'
    }).then((response) => response.json())
      .then((data) => {
        console.log(data.data)

        setRandom([])
        setGifs(data.data)

      })
  }
  return (
    <main className='container content'>
      <Search searchGifs={searchGifs} searchRandom={searchRandom} searchTrend={searchTrend} />
      {(gifs.length ? <Gifs gifs={gifs} /> : '')}
      {(random.length ? <Random random={random} /> : '')}

    </main>
  )
}
export default Main
