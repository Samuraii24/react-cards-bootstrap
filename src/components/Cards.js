import Card from './Card';
import React from 'react';
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import './cards.css';


// En lugar de tener multiple tarjetas, lo que se hace es tener un arreglo de objetos,

const cards = [
    {
        id: 1,
        title: 'Fazt Web',
        image: image1,
        url:'https://www.faztweb.com'
    },
    {
        id: 2,
        title: 'Fazt Blog',
        image: image2,
        url:'https://www.blog.faztweb.com'
    },
    {
        id: 3,
        title: 'Fazt Youtube',
        image: image3,
        url:'https://www.youtube.com/fazztech'
    }
]

// Ahora con el arreglo anterior, creamos una funcion .map que recorre el arreglo y devuelve
// una lista de componentes Card tantos como tenga en el arreglo
const Cards = () => {
    return (
        <div className='container d-flex justify-content-center align-items-center h-100'>
            <div className='row'>
                {
                    cards.map(card => (
                        <div className='col-md-4' key={card.id}>
                            <Card title= {card.title} imageSource={card.image} url={card.url} text={card.text} />
                        </div>
                    ))
                } 
                
            </div>
        </div>
    );
}

export default Cards;

