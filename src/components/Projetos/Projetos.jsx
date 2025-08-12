import React from 'react'
import './Projetos.scss';
import CardProjeto from '../cardProjeto/CardProjeto';
import MinRicardoMontenegro from '../../assets/MiniaturasCards/MinRicardoMontenegro.png';
import MinVitronics from '../../assets/MiniaturasCards/MinVitronics.png';


export default function Projetos({ secaoRef3 }) {
  return (
    <>
      <div className="containerProjetosPrincipal" ref={secaoRef3}>
        <p>PROJETOS</p>
        <div className="containerGridProjetos">
          <CardProjeto
            TituloCard="Ricardo Montenegro"
            ImgCard={MinRicardoMontenegro}
            LinkProjeto="https://ricardomontenegro.com.br/" />
          <CardProjeto
            TituloCard="Vitronics"
            ImgCard={MinVitronics}
            LinkProjeto="https://vitronics.com.br/" />
          <CardProjeto
            TituloCard="Mais um Projeto"
            ImgCard={MinRicardoMontenegro}
            LinkProjeto="#" />
        </div>
      </div >
    </>
  )
}
