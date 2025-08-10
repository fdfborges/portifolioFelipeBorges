import React from 'react'
import './Projetos.scss';
import CardProjeto from '../cardProjeto/CardProjeto';


export default function Projetos({ secaoRef3 }) {
  return (
    <>
      <div className="containerProjetosPrincipal" ref={secaoRef3}>
        <p>PROJETOS</p>
      <div className="containerGridProjetos">
        <CardProjeto />
        <CardProjeto />
        <CardProjeto />
      </div>
    </div >
    </>
  )
}
