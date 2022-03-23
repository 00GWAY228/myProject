import React, {useState} from 'react'
import {Gifs} from '../components/Gifs/Gifs'
// import {Preloader} from '../components/Preloader/Preloader'
import {Search} from '../components/Search/Search'

function Main() {
  const [gifs, setGifs] = useState([])
  const [random, setRandom] = useState({})
  // const [loading, setLoading] = useState(true)

  const searchGifs = async (str) => {
    // setLoading(true);
   await fetch(`https://api.giphy.com/v1/gifs/search?api_key=WTwfCVzeNd3VwJtGhK5KjR3JcgOZI8VE&q=${str}`,
   {     method: 'GET'}
    )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.data);
      // setLoading(false);
     
      setGifs(data.data)
    })
    .catch((err) => {
      console.error(err);
      // setLoading(false);
    })
  
  }
  const searchRandom = async () => {
    await fetch('https://api.giphy.com/v1/gifs/random?api_key=WTwfCVzeNd3VwJtGhK5KjR3JcgOZI8VE', {
      method: 'GET'
    }).then((response)=> response.json())
    .then((data)=> {
      console.log(data.data)
      setRandom([data.data])
    })
  }
  return (
    <main className='container content'>
      <Search searchGifs={searchGifs} searchRandom={searchRandom}/>
     { gifs.length && <Gifs gifs={gifs} />}

    </main>
    )
}
export default Main
