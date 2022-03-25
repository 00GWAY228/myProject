import React from 'react'
import style from './style.module.css';

export default function Random({random}) {
  return (
    <div className={style.random}>
    {
      <img className="activator" src={random[0].images.original.webp} alt='not found'/>
    }
  </div>
  )
}

