import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import User from '../../components/user/User'
import MobileMenu from '../../components/mobileMenu/MobileMenu'

function UserPage() {
  return (
    <>
      <MobileMenu />
      <Header />
      <User />
      <Footer />
    </>
  )
}

export default UserPage
