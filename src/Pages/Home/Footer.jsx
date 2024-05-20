/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin  } from "react-icons/fa"
import React from "react";

function Footer() {
  return (
    <>
        <footer className="footer footer-center grid p-10 bg-base-200 text-base-content rounded">
        <nav className="grid-flow-col gap-4">
            <a className="link link-hover">
                    <Link
                        activeClass="navbar-active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="heroSection"
                        className="text-md"
                    >
                        Home
                    </Link>
            </a>
            <a className="link link-hover">
                    <Link
                        activeClass="navbar-active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="MyPortfolio"
                        className="text-md"
                    >
                        Portfolio
                    </Link>
            </a>
            <a className="link link-hover">
                    <Link
                        activeClass="navbar-active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="AboutMe"
                        className="text-md"
                    >
                        About Me
                    </Link>
            </a>
            <a className="link link-hover">
                    <Link
                        activeClass="navbar-active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="mySkills"
                        className="text-md"
                    >
                        Services
                    </Link></a>
                    <a className="link link-hover">
                    <Link
                        activeClass="navbar-active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="Contact"
                        className="text-md"
                    >
                        Contact Me
                    </Link></a>
        </nav> 
  
    <div className="grid grid-flow-col gap-4">
      <a  href="https://github.com/rayfarandi" target="_blank" rel="noopener noreferrer">
        <FaGithub className="w-6 h-6" />
        </a>
      <a  href="www.linkedin.com/in/ray-farandi" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="w-6 h-6" />
      </a>
      <a></a>
    </div>
   
    <aside className="grid">
        <p>Copyright © 2024 - Ray Farandi</p>
    </aside>
</footer>
    </>
  );
}

export default Footer;
