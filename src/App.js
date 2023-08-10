import logo from './logo.svg';
import './App.css';
import './page.css'
import Header from './Header';
import Bio from './Bio';
import LanguagesKnown from './LanguagesKnown';
import Projects from './Projects';
import Contact from './ContactMe';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
        <Bio/>
        <LanguagesKnown/>
        <Projects/>
        <Contact/>
    </div>
  );
}

export default App;
