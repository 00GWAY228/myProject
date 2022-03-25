import React, { useState } from "react";
import style from './style.module.css';
// import Button from '@mui/material/Button';

const Search = ({ searchGifs, searchRandom, searchTrend}) => {


  const [search, setSearch] = useState('')
 

  
  const handleKey = (event) => {
    if (event.key === 'Enter') {
      searchGifs(search)
    }
  }

  
    return <div className="row">
      <div className={style.field}>
      <input className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"
       placeholder="search" 
       type="search" 
       value={search}
       onChange={(e) => setSearch(e.target.value)}
       onKeyDown={handleKey}
      />
        {/* <input 
        className="validate"
        placeholder="search" 
        type="search" 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKey}
        /> */}
        <button className='btn btn-dark' id='search' onClick={() => searchGifs(search)}>Search</button>
      <button className='btn btn-dark' onClick={() => searchRandom()}>Random</button>
      <button className='btn btn-dark' onClick={() => searchTrend()}>Trending</button>
      </div>
      {/* <button className="btn search-btn" onClick={() => searchRandom()}>Random</button> */}
  </div>
  }

export {Search}
