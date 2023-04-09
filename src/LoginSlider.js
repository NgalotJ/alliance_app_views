import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react';

const data = [
    {
        image: require('./Images/Login/Interview-rafiki 1.jpg'),
        caption: 'Find top candidates quickly',
        //description: ''
    },
    {
        image: require('./Images/Login/People search-rafiki 1.jpg'),
        caption: 'Manage users efficiently',
        //description: ''
    },
    {
        image: require('./Images/Login/Podcast-rafiki 1.jpg'),
        caption: 'Streamline application process',
        //description: ''
    }
]

function LoginSlider() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} variant='dark'>
            {data.map((slide, i) => {
                return (
                    <Carousel.Item>
                        <img
                            className = 'd-block w-50'
                            src = {slide.image}
                            alt = 'slides'
                        ></img>
                        <Carousel.Caption>
                            <h3>{slide.caption}</h3>
                            {/* <p>{slide.description}</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    )
}

export default LoginSlider;