import React from 'react'
import Card from './Card'
import './Cards.css'
import img1 from '../images/phantom.png'
import img2 from '../images/nike.png'
import img3 from '../images/correr.png'


function Cards() {
    return (
        <div className='container'>
            <Card
                title='Tienda Nike'
                imgUrl={img1}
                body='Botines Nike Phantom'
            />
            <Card
                title='Tienda Nike'
                imgUrl={img2}
                body='Nike AirMax'
            />
            <Card
                title='Tienda Nike'
                imgUrl={img3}
                body='Nike Running'
            />
        </div>
    )
}

export default Cards