import './LinkGithub.css';
import { NavLink } from 'react-router-dom';
import React from 'react';

function LinkGithub({ link }) {

    return (
        <div className='info-link-content'>
            <NavLink to={link} className='info-link' target="_blank">
                Lien Github
            </NavLink>
        </div>
    )
};

export default LinkGithub;