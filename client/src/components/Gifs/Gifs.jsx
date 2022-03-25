import {Gif} from '../Gif/Gif'
import style from './style.module.css';
import Masonry from 'react-masonry-css'

function Gifs ({gifs}) {

  return (
    <Masonry
  breakpointCols={6}
  className="my-masonry-grid"
  columnClassName="my-masonry-grid_column">
  { gifs.map(gif => (
    <div>
     <Gif key={gif.id} gifs={gif} />
     </div>
     ))}
</Masonry>


  )}
// <div className={style.gifs}  >
//   {gifs.length ? gifs.map(gif => (
//    <Gif key={gif.id} gifs={gif} />
//    )) : <h4>По вашему запросу ничего не найдено</h4>}
//   </div>

export {Gifs}
