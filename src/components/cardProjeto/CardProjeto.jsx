import React from 'react'
import './CardProjeto.scss';
import MinRicardoMontenegro from '../../assets/MiniaturasCards/MinRicardoMontenegro.png';
import { FiArrowUpRight } from "react-icons/fi";


export default function CardProjeto(TituloCard, ImgCard) {
    return (
        <>
            <div className="containerCardProjetoC">
                <div className="imgCard">
                    <img src={MinRicardoMontenegro} alt="Foto miniatura do projeto" />
                </div>
                <div className="footerCard">
                    <di className="footerCardLeft">
                        <span>CLIQUE ACESSAR</span>
                        <p>TITULO PROJETO</p>
                    </di>
                    <div className="footerCardRight">
                        <a href=""><FiArrowUpRight size={'15%'} color='white' /></a>
                    </div>
                </div>
            </div>
        </>
    )
}
