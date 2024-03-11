import React from 'react';
import { Link } from 'react-router-dom';
import './WorkCard.css';

function WorkCard({ work }) {
    return (
        <div className='work-container'>
            <Link to={`/Work/${work.id}`} className='work-file' key={work.id}>
                <div className='work-content-img'>
                    <div className='work-opacity'>
                        <h2 className='work-title'>{work.title}</h2>
                    </div>
                    <img className='work-img' src={import.meta.env.BASE_URL + work.cover} alt={work.title}></img>
                </div>
            </Link>
        </div>
    )
}

export default WorkCard