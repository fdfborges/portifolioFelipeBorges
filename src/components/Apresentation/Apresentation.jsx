import React from 'react';
import './Apresentation.scss';
import AvatarFelipe from '../../assets/AvatarFelipe/AvatarFelipe.png';

<<<<<<< HEAD
export default function Apresentation({ secaoRef1 }) {
=======
export default function Apresentation({secaoRef1}) {
>>>>>>> 67fdea9fe3c4f7c07ad3fd00b506a9093cc91cca
    return (
        <div className="containerApresentationPrincipal" ref={secaoRef1}>
            <div className="containerAvatar">
                <img src={AvatarFelipe} alt="" />
            </div>
            <div className="containerTexts">
                <p>Apresento seu serviço ao mundo <strong>atrávez de um site!</strong></p>
                <span>Engenheiro de Software Front-end com uma sólida experiência de 5+ anos no mercado, dominando a arte de construir projetos bem arquitetados.

<<<<<<< HEAD
                    Minha especialidade é desenvolver aplicações que se destacam pela qualidade técnica e pela usabilidade. Priorizo a escrita de um código limpo, modular e de fácil manutenção, o que facilita o crescimento do produto.</span>
            </div>
            <div className="containerButtons">
                <a target='_blank' href='https://w.app/ojptdh' id='BtnBackgroundWhite'>Contato</a>
=======
Minha especialidade é desenvolver aplicações que se destacam pela qualidade técnica e pela usabilidade. Priorizo a escrita de um código limpo, modular e de fácil manutenção, o que facilita o crescimento do produto.</span>
            </div>
            <div className="containerButtons">
                <a id='BtnBackgroundWhite'>Contato</a>
>>>>>>> 67fdea9fe3c4f7c07ad3fd00b506a9093cc91cca
                <a href='../../../public/docs/Curriculo.pdf' download="CurriculoFelipeBorges.pdf">Baixar CV</a>
            </div>
        </div>
    )
}
