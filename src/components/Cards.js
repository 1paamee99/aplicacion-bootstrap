import React from 'react'
import Card from './Card'
import image1 from '../assets/descarga.jpg'

const cards = [
{
 id:1, 
 title:'Curso Java',
 image: image1,
 instructor: 'Ramon Savala',
 url: 'http://www.google.com'  
},
{
 id:1, 
 title:'Curso Python',
 image: image1,
 instructor: 'Victor de la O',
 url: 'http://www.terra.com'
},
{
 id:1, 
 title:'Curso Angular',
 image: image1,
 instructor: 'Benito Samuel',
 url: 'http://www.yahoo.com'
}
]

export default function Cards() {
    console.log(cards)
  return (
    <div className='container d-flex justify-content-center align-items-center h-100'>
        <div className='row'>
            {
                cards.map(c =>(
                 <div className='col-md 4' key={cards.id}>
                    <Card
                    key={c.id}
                    id={c.id} 
                    title={c.title}
                    image={c.image}
                    instructor={c.instructor}    
                    url={c.url}

                    />
                    </div>
                ))
            }

        </div>

    </div>
  )    
}
