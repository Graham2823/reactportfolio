import logo from './logo.svg';
import './App.css';
import './page.css'
import Header from './Sections/Header';
import Bio from './Sections/Bio';
import LanguagesKnown from './Sections/LanguagesKnown';
import Projects from './Sections/Projects';
import Contact from './Sections/ContactMe';
import TopNav from './Sections/TopNav';
import CanvasArt from './Sections/Canvas';


function App() {
  return (
    <>
    
    <div className="App">
      <TopNav/>
      <header className="App-header">
        <CanvasArt className="canvasArt"/>
        {/* <Header /> */}
      </header>
      <section id="bio">
        <Bio />
      </section>
      <section id="languages">
        <LanguagesKnown />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
    </>
  );
}

export default App;
