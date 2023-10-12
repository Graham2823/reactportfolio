import logo from './logo.svg';
import './App.css';
import './page.css'
import Header from './components/Header';
import Bio from './components/Bio';
import LanguagesKnown from './components/LanguagesKnown';
import Projects from './components/Projects';
import Contact from './components/ContactMe';
import TopNav from './components/TopNav';


function App() {
  return (
    <>
    
    <div className="App">
      <TopNav/>
      <header className="App-header">
        <Header />
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
