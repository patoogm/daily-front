import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import NewsPage from '../../components/NewsAdminPage/NewsAdminPage'


function NewsPagePage() {

  if (localStorage.getItem('token') === 'undefined' || localStorage.getItem('token') === null) {
    window.location.assign('/login')
  } else {
    return (
      <>
        <Header />
        <NewsPage />
        <Footer />
      </>
    )
  }
    
}

export default NewsPagePage
