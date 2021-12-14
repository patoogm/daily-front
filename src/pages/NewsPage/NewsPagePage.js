import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import NewsPage from '../../components/news-admin/News-admin'
import MobileMenu from '../../components/mobileMenu/MobileMenu'


function NewsPagePage() {

  if (localStorage.getItem('token') === 'undefined' || localStorage.getItem('token') === null) {
    window.location.assign('/login')
  } else {
    return (
      <>
        <MobileMenu />
        <Header />
        <NewsPage />
        <Footer />
      </>
    )
  }
    
}

export default NewsPagePage