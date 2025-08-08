import React from 'react'
import './Projetos.scss';
import CardProjeto from '../cardProjeto/cardProjeto';


export default function Projetos() {
  return (
    <>
      <div className="containerProjetosPrincipal">
        <p>PROJETOS</p>
        <div className="containerGridProjetos">
          <CardProjeto />
          <CardProjeto />
          <CardProjeto />
        </div>
      </div>
    </>
  )
}
