import Header from '../componentes/Header/Header';
import Footer from '../componentes/Footer/Footer';

export default function Layout({children}) {
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  )
}
