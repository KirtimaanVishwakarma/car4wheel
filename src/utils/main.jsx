import Header from '../components/Header'

import Footer from '../components/Footer'
const Main = ({children}) => {
  return (
    <>
    <Header/>

    <div>{children}</div>
    <Footer/>
    </>
  )
}

export default Main