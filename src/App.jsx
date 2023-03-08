import Contact from "./components/contact/Contact";
import Education from "./components/education/Education";
import Introduction from "./components/introduction/Introduction";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Works";
import './app.scss'


function App() {
  return (
    <div className="app">
<Navbar/>
<div className="sections">
<Introduction/>
<Education/>
  <Portfolio/>
  <Work/>
  <Skills/>
  <Contact/>
</div>
    </div>
  );
}

export default App;
