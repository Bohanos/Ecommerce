import Nav from "./Components/Nav/Nav.jsx"
import Hero from "./Components/Hero/Hero.jsx"
import Footer from "./Components/Footer/Footer.jsx"
// import Background from "./Components/Background/Background.jsx";
import Abovelink from "./Components/Abovelink/Abovelink.jsx";
import Adverts from "./Components/Adverts/Adverts.jsx";
import Topseller from "./Components/Topseller/Topseller.jsx";


const App = () => {
  return (
    <div>
      <Abovelink/>
      <Nav/>
      <Hero/>
      <Adverts/>
      <Topseller/>      
      <Footer/>
    </div>
  )
};



export default App