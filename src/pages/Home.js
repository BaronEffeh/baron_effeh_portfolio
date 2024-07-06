import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Intro from "../components/Intro/Intro";
import Skills from "../components/Skills/Skills";
import Works from "../components/Works/Works";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const Home = () => {
   return (

      <div className="home">
         <Navbar />
         <Intro />
         <Skills />
         <Works />
         <Contact />
         <Footer />
      </div>

   );
}

export default Home;