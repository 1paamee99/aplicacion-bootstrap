import React from 'react'


export default function Card({id, title, image, instructor, url}) {
  return (
    <div className='card text-center bg-dark'>
        <div className='card-body text-light'> 
        <img src={image} alt='...'></img>
        <h4 className='card-title'>{title}</h4>
        <p className='card-text text-secondary'>
          Instructor: {instructor}
        </p>
        <a href={url} className='btn btn-outline-primary rounded-4'>
          Ir al sitio web
        </a>

        </div>

    </div>
  )
}

