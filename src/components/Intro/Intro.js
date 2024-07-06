import React from "react";
import "./intro.css";
import bg from "../../assets/baron-effeh-profile-image.png";
import btnImg from "../../assets/hire-me.png";
// import { Link } from "react-router-dom";

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Baron Effeh</span> <br />A Website Designer</span>
                <p className="introPara">I am a skilled and passionate web designer with experience in creating <br /> visually appealing and user-friendly websites.</p>
                <button className="btn" onClick={() => {
                    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }}><img src={btnImg} alt="Hireme btn" className="btnImg" />Hire Me</button>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}

export default Intro;