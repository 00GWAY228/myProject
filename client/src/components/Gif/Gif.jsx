// import Skeleton from '@mui/material/Skeleton';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import style from './style.module.css';


function Gif ({gifs: gif }) {


return(
 
<div className={style.gif} >
  <div className={style.gifs}>
    {gif ?  (<img  src={gif.images.original.webp} alt='not found'/>) : <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
    }
  </div>

</div>
) 

}

export {Gif}

