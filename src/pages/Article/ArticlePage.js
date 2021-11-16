import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import MobileMenu from '../../components/mobileMenu/MobileMenu'
import Navbar from '../../components/navbar/Navbar'
import Noticias from '../../components/Noticias/Noticias'

const ArticlePage = () => {
  return (
    <div>
      <MobileMenu />
      <Header />
      <Noticias />
      <Footer />
    </div>
  )
}

export default ArticlePage
