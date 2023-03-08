import Contact from "./components/contact/Contact";
import Education from "./components/education/Education";
import Introduction from "./components/introduction/Introduction";
import Navbar from "./components/navbar/Navbar";
import Skills from "./components/skills/Skills";
import './app.scss'


function App() {
  return (
    <div className="app">
<Navbar/>
<div className="sections">
<Introduction/>
<Education/>
<Skills/>
  <Contact/>
</div>
    </div>
  );
}

export default App;
