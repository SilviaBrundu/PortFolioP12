import React from 'react';
import { Link } from 'react-router-dom';
import './WorkCard.css';

function WorkCard({ work }) {
    return (
        <div className='work-container'>
            <Link to={`/Work/${work.id}`} className='work-file' key={work.id}>
                <div className='work-content-img'>
                    <div className='work-opacity'></div>
                    <img className='work-img' src={work.cover} alt={work.title}></img>
                </div>
                <div className='work-content-title'>
                    <h2 className='work-title'>{work.title}</h2>
                </div>
            </Link>
        </div>
    )
}

export default WorkCard