import React from 'react'
import './CardProjeto.scss';
import { FiArrowUpRight } from "react-icons/fi";

export default function CardProjeto({ TituloCard, ImgCard, LinkProjeto }) {
    return (
        <>
            <div className="containerCardProjetoC">
                <div className="imgCard">
                    <img src={ImgCard} alt={`Foto miniatura do projeto ${TituloCard}`} />
                </div>
                <div className="footerCard">
                    <div className="footerCardLeft">
                        <span>CLIQUE ACESSAR</span>
                        <p>{TituloCard}</p>
                    </div>
                    <div className="footerCardRight">
                        <a href={LinkProjeto} target="_blank" rel="noopener noreferrer"><FiArrowUpRight size={'15%'} color='white' /></a>
                    </div>
                </div>
            </div>
        </>
    )
}
