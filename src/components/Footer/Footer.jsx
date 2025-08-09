import React from 'react'
import Home from '../../pages/Home/Home';
import './Footer.scss';
import { CiMail } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";




export default function Footer({secaoRef4}) {

    return (
        <div className="containerFooterPrincipal">
            <div className="FooterDelimitador">
                <p ref={secaoRef4}>Contato</p>
                <span>Engenheiro de Software Front-End com mais de 3 anos de experiência na concepção e desenvolvimento de soluções web robustas, escaláveis e inovadoras. Especializado em criar código limpo, manutenível e escalável, com foco em interfaces intuitivas e funcionalidades de alta performance.</span>
                <div className="containerEmail">
                    <CiMail color='white'strokeWidth={1}/>
                    <a href="mailto:felipedefreitasborges@gmail.com">felipedefreitasborges@gmail.com</a>
                </div>
                <div className="containerIconsSocial">
                    <a target='_blank' href="https://w.app/ojptdh"><ImWhatsapp color='white' size={'1.6rem'}/></a>
                    <a target='_blank' href="https://www.instagram.com/fdfborges/"><FaInstagram color='white' size={'1.6rem'}/></a>
                </div>
            </div>
        </div>
    )
}
