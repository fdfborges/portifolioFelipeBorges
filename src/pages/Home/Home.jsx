import React from 'react'
import Header from '../../components/Header/Header.jsx'
import Apresentation from '../../components/Apresentation/Apresentation.jsx'
import Experience from '../../components/Experience/Experience.jsx'
import Projetos from '../../components/Projetos/Projetos.jsx'
import Footer from '../../components/Footer/Footer.jsx'

export default function Home() {
  return (
    <>
      <Header />
      <Apresentation />
      <Experience />
      <Projetos />
      <Footer />
    </>
  )
}
