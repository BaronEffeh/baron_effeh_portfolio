import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./contact.css";
import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import YouTubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/instagram.png";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_uemb07o', 'template_hhx1asm', form.current, 'YoqFAAnU66E6sEj5H')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert("Your Email has been sent!");
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <section id="contactPage">
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name="your_name" required />
                    <input type="email" className="email" placeholder="Your Email" name="your_email" required />
                    <textarea name="message" className="msg" rows="5" placeholder="Your Message" required ></textarea>
                    <button type="submit" value="Send" className="submitBtn">Submit</button>
                    <div className="links">
                        <Link to="https://web.facebook.com/baron.effeh.7"><img src={FacebookIcon} alt="FacebookIcon" className="link" /></Link>
                        <Link to="https://x.com/effeh_baron"><img src={TwitterIcon} alt="TwitterIcon" className="link" /></Link>
                        <Link><img src={YouTubeIcon} alt="YouTubeIcon" className="link" /></Link>
                        <Link><img src={InstagramIcon} alt="InstagramIcon" className="link" /></Link>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;