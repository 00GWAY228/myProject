function Gif ({gifs}) {


return(

<div className="card gifs">
  <div className="card-gifs waves-effect waves-block waves-light">
    {
      <img className="activator" src={gifs.images.original.webp} alt='not found'/>
    }
  </div>

</div>
) 

}

export {Gif}

