import React, { useState } from "react";

const Search = ({ searchGifs, searchRandom}) => {


  const [search, setSearch] = useState('')
 

  
  const handleKey = (event) => {
    if (event.key === 'Enter') {
      searchGifs(search)
    }
  }

  
    return <div className="row">
      <div className="input-field">
        <input 
        className="validate"
        placeholder="search" 
        type="search" 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKey}
        />
        <button className="btn search-btn" onClick={() => searchGifs(search)}>Search</button>
      </div>
      <button className="btn search-btn" onClick={() => searchRandom()}>Random</button>
  </div>
  }

export {Search}
