import React, { useRef } from 'react'
import Header from '../../components/Header/Header.jsx'
import Apresentation from '../../components/Apresentation/Apresentation.jsx'
import Technologies from '../../components/Technologies/Technologies.jsx'
import Projetos from '../../components/Projetos/Projetos.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import './Home.scss';
import NavResponsive from '../../components/NavResponsive/NavResponsive.jsx'
export default function Home() {

  const secaoRef1 = useRef(null);
  const secaoRef2 = useRef(null);
  const secaoRef3 = useRef(null);
  const secaoRef4 = useRef(null);

  const rolarParaSecao = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };


  return (
    <>
      <div className="containerNavResponsive">
        <NavResponsive
          onScrollTo={rolarParaSecao}
          secaoRef1={secaoRef1}
          secaoRef2={secaoRef2}
          secaoRef3={secaoRef3}
          secaoRef4={secaoRef4}
        />
      </div>
      <div className="containerHeader">
        <Header
          onScrollTo={rolarParaSecao}
          secaoRef1={secaoRef1}
          secaoRef2={secaoRef2}
          secaoRef3={secaoRef3}
          secaoRef4={secaoRef4}
        />
      </div>

      <div className="containerHomeProjectPrincipal">
        <Apresentation secaoRef1={secaoRef1} />
        <Technologies secaoRef2={secaoRef2} />
        <Projetos secaoRef3={secaoRef3} />
        <Footer secaoRef4={secaoRef4} />
      </div>
    </>
  )
}
