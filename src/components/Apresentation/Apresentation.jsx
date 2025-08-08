import React from 'react';
import './Apresentation.scss';

export default function Apresentation() {
    return (
        <div className="containerApresentationPrincipal">
            <div className="containerAvatar"></div>
            <div className="containerTexts">
                <p>Apresento seu serviço ao mundo <strong>atrávez de um site!</strong></p>
                <span>I am a seasoned full-stack software engineer with over
                    8 years of professional experience, specializing in backend development.
                    My expertise lies in crafting robust and scalable SaaS-based
                    architectures on the Amazon AWS platform.</span>
            </div>
            <div className="containerButtons">
                <button id='BtnBackgroundWhite'>Contato</button>
                <button>Baixar CV</button>
            </div>
        </div>
    )
}
