import React from 'react';
import './Apresentation.scss';
// import AvatarFelipe from '../../assets/AvatarFelipe/AvatarFelipe.png'; // Removido se não estiver em uso
import AvatarFelipeMemoji from '../../assets/AvatarFelipe/AvatarFelipeMemoji.mp4';

export default function Apresentation({ secaoRef1 }) {
    return (
        <div className="containerApresentationPrincipal" ref={secaoRef1}>
            <div className="containerAvatar">
                {/* * AJUSTES APLICADOS AQUI:
                  * 1. Adicionado "muted" para permitir o autoplay nos navegadores.
                  * 2. Adicionado "playsInline" para garantir o funcionamento em mobile (iOS).
                  * 3. Removido "alt", que é um atributo para <img> e não para <video>.
                */}
                <video loop autoPlay muted playsInline src={AvatarFelipeMemoji}>
                   {/* Você pode colocar um texto aqui para caso o navegador não suporte o vídeo */}
                </video>
            </div>
            <div className="containerTexts">
                 {/* Dica: a grafia correta é "através" :) */}
                <p>Apresento seu serviço ao mundo <strong>através de um site!</strong></p>
                <span>Engenheiro de Software Front-end com uma sólida experiência de 5+ anos no mercado, dominando a arte de construir projetos bem arquitetados.

                    Minha especialidade é desenvolver aplicações que se destacam pela qualidade técnica e pela usabilidade. Priorizo a escrita de um código limpo, modular e de fácil manutenção, o que facilita o crescimento do produto.</span>
            </div>
            <div className="containerButtons">
                <a target='_blank' rel="noopener noreferrer" href='https://w.app/ojptdh' id='BtnBackgroundWhite'>Contato</a>
                <a href='/docs/Curriculo.pdf' download="CurriculoFelipeBorges.pdf">Baixar CV</a>
            </div>
        </div>
    )
}