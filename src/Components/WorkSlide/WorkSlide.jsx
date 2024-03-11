import React from 'react';
import arrowLeft from '../../img/Icone/arrow_left.webp';
import arrowRight from '../../img/Icone/arrow_right.webp';
import { useState } from 'react';
import data from '../../Data/data.json';
import { useParams } from 'react-router-dom';
import './WorkSlide.css';


function WorkSlide() {

    const { id } = useParams();
    const pictures = data.find((work) => work.id === id).pictures;
    const [slide, setSlide] = useState(0);
    const changeSlide = (direction) => {
        const nextSlide = (slide + direction + pictures.length) % pictures.length;
        setSlide(nextSlide);
    }
    //  * % pictures.length permet d'enchainer les slides en boucles. 

    return (
        <section className='workSlide-container'>
            <div className='workSlide-pictures'>
                {pictures.map((picture, index) => (
                    <img key={index} src={import.meta.env.BASE_URL + picture} alt='projet' className={index === slide ? 'visible' : ''} />
                ))}
                {pictures.length > 1 && (
                    <div className='slide-content'>
                        <img className='slide-arrow slide-arrow-left' src={arrowLeft} alt='gauche' onClick={() => changeSlide(-1)}></img>
                        <img className='slide-arrow slide-arrow-right' src={arrowRight} alt='droite' onClick={() => changeSlide(1)}></img>
                        <p className='slide-number-img'>{slide + 1}/{pictures.length}</p>
                    </div>
                )}
            </div>
        </section>
    )
}

export default WorkSlide