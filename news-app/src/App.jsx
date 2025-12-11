import './App.css'
import Navbar from './components/Navbar'
import News from './page/News'
import Category from './components/Category' 
import Footer from './components/Footer'

function App() {
  

  return (
    <>
    <Navbar className={'sticky top-0 z-20'}/>
    <Category className="py-10 sticky top-14 z-10 bg-base-200"/>
     <News className={'pb-10'}/>
     <Footer/>
    </>
  )
}

export default App
