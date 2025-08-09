import React from 'react'
import './Header.scss';

export default function Header({ onScrollTo, secaoRef1, secaoRef2, secaoRef3, secaoRef4 }) {
  return (
    <div className="containerHeaderPrincipal">
      <div className="containerHeadeLeft">
        <p>FELIPE BORGES</p>
      </div>
      <div className="containerHeadeRight">
        <div className='containerButtonsHeader'>
          <button onClick={() => onScrollTo(secaoRef1)}>Home</button>
          <button onClick={() => onScrollTo(secaoRef2)}>Experiência</button>
          <button onClick={() => onScrollTo(secaoRef3)}>Projetos</button>
          <button onClick={() => onScrollTo(secaoRef4)}>Contato</button>
        </div>
      </div>
    </div>
  )
}

