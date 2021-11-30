import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import User from '../../components/User/User'
import MobileMenu from '../../components/mobileMenu/MobileMenu'

function UserPage() {
  if (localStorage.getItem('token') === 'undefined' || localStorage.getItem('token') === null) {
    window.location.assign('/login')
  } else {
    return (
      <>
        <MobileMenu />
        <Header />
        <User />
        <Footer />
      </>
    )
  }
}

export default UserPage
