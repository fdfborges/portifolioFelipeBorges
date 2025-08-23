import React from 'react'
import './Technologies.scss';

import CSS from '../../assets/IconsExperience/css.png';
import HTML from '../../assets/IconsExperience/html.png';
import JS from '../../assets/IconsExperience/javascript.png';
import REACT from '../../assets/IconsExperience/reactjs.png';
import WORDPRESS from '../../assets/IconsExperience/wordpress.png';


export default function Experience({ secaoRef2 }) {
    return (
        <div className="experiencecontainerPrincipal" ref={secaoRef2}>
            <p>EXPERIENCIA COM</p>
            <div className="experiencecontainerImg">
                <img src={WORDPRESS} alt="Icone Wordpress" />
                <img src={HTML} alt="Icone HTML" />
                <img src={CSS} alt="Icone CSS" />
                <img src={JS} alt="Icone Javascript" />
                <img src={REACT} alt="Icone React" />
            </div>
        </div>
    )
}
