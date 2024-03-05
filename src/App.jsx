import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './App.css';
import Companies from "./components/Companies/Companies";
import { Residencies } from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import GetStart from "./components/GetStart/GetStart";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div>     {/* nth-child(1) as wrapper */}
        <div className="white-gradient"/>
        <Header/>
        <Hero/>
      </div>
      <Companies/>
      <Residencies/>
      <Value/>
      <Contact/>
      <GetStart/>
      <Footer/>
    </div>
  );
} 

export default App;
