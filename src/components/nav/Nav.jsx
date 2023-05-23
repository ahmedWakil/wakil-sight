import { useState } from "react";
import "./nav.css";

function Nav() {

    function navOverlayHeight() {
        return -1 * (window.innerHeight - 132);
    }

    const [navToggle, setNavToggle] = useState(false);

    return (
        <nav className='nav'>
            <div className="nav-container">
                <div className="navbar">
                    <a className="logo" href="#">Wakil Ahmed</a>
                    <button className={navToggle ? "menu-toggle-open" : "menu-toggle"} onClick={() => setNavToggle(!navToggle)}>
                        <div className={navToggle ? "hamBox hamBoxOpen" : "hamBox"}>
                            <span className={navToggle ? "lineTop spin" : "lineTop"}></span>
                            <span className={navToggle ? "lineBottom spin" : "lineBottom"}></span>
                        </div>
                    </button>
                </div>
                <div className="nav-overlay" style={{
                    top: navToggle ? "0" : `${navOverlayHeight()}px`,
                    transitionDelay: navToggle ? "0s" : "0s",
                }}>
                    <Menu />
                </div>
            </div>
        </nav>
    );
}

function Menu() {

    return (
        <ul className="nav-links">
            <li className="nav-item">
                <div className="nav-item-wrapper">
                    <a href="#">Home</a>
                </div>
            </li>
            <li className="nav-item">

                <div className="nav-item-wrapper">
                    <a href="#About">About</a>
                </div>
            </li>
            <li className="nav-item">

                <div className="nav-item-wrapper">
                    <a href="#">Projects</a>
                </div>
            </li>
            <li className="nav-item">

                <div className="nav-item-wrapper">
                    <a href="#">Contact</a>
                </div>
            </li>
        </ul>
    )
}

export default Nav;