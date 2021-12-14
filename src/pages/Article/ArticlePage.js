import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import MobileMenu from '../../components/mobileMenu/MobileMenu'
import News from '../../components/news/News'

const ArticlePage = () => {
  return (
    <div>
      <MobileMenu />
      <Header />
      <News />
      <Footer />
    </div>
  )
}

export default ArticlePage