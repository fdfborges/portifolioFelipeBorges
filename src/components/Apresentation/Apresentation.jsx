import React from 'react';
import './Apresentation.scss';
import AvatarFelipe from '../../assets/AvatarFelipe/AvatarFelipe.png';

export default function Apresentation({secaoRef1}) {
    return (
        <div className="containerApresentationPrincipal" ref={secaoRef1}>
            <div className="containerAvatar">
                <img src={AvatarFelipe} alt="" />
            </div>
            <div className="containerTexts">
                <p>Apresento seu serviço ao mundo <strong>atrávez de um site!</strong></p>
                <span>I am a seasoned full-stack software engineer with over
                    8 years of professional experience, specializing in backend development.
                    My expertise lies in crafting robust and scalable SaaS-based
                    architectures on the Amazon AWS platform.</span>
            </div>
            <div className="containerButtons">
                <a id='BtnBackgroundWhite'>Contato</a>
                <a href='../../../public/docs/Curriculo.pdf' download="CurriculoFelipeBorges.pdf">Baixar CV</a>
            </div>
        </div>
    )
}
