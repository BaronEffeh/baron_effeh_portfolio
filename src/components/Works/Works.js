import React from "react";
import { Link } from "react-router-dom";
import "./works.css"
import Portfolio1 from "../../assets/formComponent.gif"
import Portfolio2 from "../../assets/github-user-api-dark-mode.png"
import Portfolio3 from "../../assets/todo-app.png"
import Portfolio4 from "../../assets/notification-page.jpg"
import Portfolio5 from "../../assets/todo-app-dark-mode.png"
import Portfolio6 from "../../assets/github-user-api.png"

const Works = () => {
    return (
        <section id="works">
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="worksDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
            <div className="worksImgs">
                <Link to="https://baroneffeh.github.io/interactive-card-form/" target="_blank">
                    <h3>Checkout form with interactive card details</h3>
                    <img src={Portfolio1} alt="Portfolio1" className="worksImg" />
                </Link>
                <Link to="https://baroneffeh.github.io/github-user-api/" target="_blank">
                    <h3>Github user finder</h3>
                    <img src={Portfolio2} alt="Portfolio2" className="worksImg" />
                </Link>
                <Link to="https://baroneffeh.github.io/todo-app/" target="_blank">
                    <h3>Todo App</h3>
                    <img src={Portfolio3} alt="Portfolio4" className="worksImg" />
                </Link>
                <Link to="https://baroneffeh.github.io/notifications-page/" target="_blank">
                    <h3>Notifications page</h3>
                    <img src={Portfolio4} alt="Portfolio3" className="worksImg" />
                </Link>
                <Link to="https://baroneffeh.github.io/todo-app/" target="_blank">
                    <h3>Todo App</h3>
                    <img src={Portfolio5} alt="Portfolio5" className="worksImg" />
                </Link>
                <Link to="https://baroneffeh.github.io/github-user-api/" target="_blank">
                    <h3>Github user finder</h3>
                    <img src={Portfolio6} alt="Portfolio6" className="worksImg" />
                </Link>
            </div>
            <button className="workBtn">See More</button>
        </section>
    );
}

export default Works;