

import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import NavBar from "./components/NavBar/navbar";
import Skills from "./components/Skills/Skills";
import Work from "./components/Works/Work";


function App(){
  return(

      <div className="App">
        <NavBar/>
        <Intro/>
        <Skills/>
        <Work/>
        <Contact/>
        <Footer/>
        
    </div>
  );
}

export default App;
