import {Gif} from '../Gif/Gif'

function Gifs ({gifs, random}) {

  return (
  <div className="movies">
    {gifs.length ? gifs.map(gifs => (
     <Gif key={gifs.id} gifs={gifs} />
     )) : <h4>По вашему запросу ничего не найдено</h4>}
    </div>
    )

}

export {Gifs}
