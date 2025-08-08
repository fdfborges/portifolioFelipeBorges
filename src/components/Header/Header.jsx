import React from 'react'
import './Header.scss';

export default function Header() {
  return (
    <div className="containerHeaderPrincipal">
        <div className="containerHeadeLeft">
            <p>FELIPE BORGES</p>
        </div>
        <div className="containerHeadeRight">
            <ul>
                <li>Home</li>
                <li>Projetos</li>
                <li>Experiência</li>
                <li>Contato</li>
            </ul>
        </div>
    </div>
  )
}

