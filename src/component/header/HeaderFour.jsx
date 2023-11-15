import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {FiX, FiMenu, FiChevronUp} from "react-icons/fi";
import ScrollToTop from "react-scroll-up";


class HeaderFour extends Component{
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
       //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        window.addEventListener('load', function() {
            console.log('All assets are loaded')
        })
    }
    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }
    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open');
    }
    render(){
        var elements = document.querySelectorAll('.has-droupdown > a');
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }

        const { logo, color , headerPosition } = this.props;
        let logoUrl;
        if(logo === 'light'){
            logoUrl = <img src="/assets/images/logo/logo-light.png" alt="Trydo" />;
        }else if(logo === 'dark'){
            logoUrl = <img src="/assets/images/logo/logo-dark.png" alt="Trydo" />;
        }else if(logo === 'symbol-dark'){
            logoUrl = <img src="/assets/images/logo/logo-symbol-dark.png" alt="Trydo" />;
        }else if(logo === 'all-dark'){
            logoUrl = <img src="/assets/images/logo/logo-all-dark.png" alt="Trydo" />;
        } else if(logo === 'symbol-light'){
            logoUrl = <img src="/assets/images/logo/logo-symbol-light.png" alt="Trydo" />;
        }else{
            logoUrl = <img src="/assets/images/logo/logo.png" alt="Trydo" />;
        }

        return(
            <header className={`header-area formobile-menu ${headerPosition} ${color}`}>
                <div className="header-wrapper" id="header-wrapper">
                    <div className="header-left">
                        <nav className="mainmenunav d-lg-block">
                            <ul className="mainmenu">
                                <li><Link to="/" >Ben Levy</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header-right">
                        <nav className="mainmenunav d-lg-block">
                            <ul className="mainmenu">
                                <li className="has-droupdown"><Link to="/" >Abstracts</Link>
                                    <ul className="submenu">
                                        <li><a target="_blank" href="/assets/pdfs/Differences.pdf">Mental health differences</a></li>
                                        <li><a target="_blank" href="/assets/pdfs/Harassment.pdf">Cyber harassment effects</a></li>
                                    </ul>
                                </li>
                                <li><a style={{cursor: "pointer"}} onClick={_ => (document.getElementById("port")).scrollIntoView({behavior: "smooth"})}>
                                    Portfolio
                                </a></li>
                            </ul>
                        </nav>
                        {/* Start Humberger Menu  */}
                        <div className="humberger-menu d-block d-lg-none pl--20">
                            <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                        </div>
                        {/* End Humberger Menu  */}
                        <div className="close-menu d-block d-lg-none">
                            <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default HeaderFour;
