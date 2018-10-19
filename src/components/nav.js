import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faProjectDiagram, faUser, faAddressCard, faPlus, faHome, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab, faProjectDiagram, faUser, faAddressCard, faPlus, faHome, faArrowRight);

class Nav extends Component {
    constructor(props) {
      super(props);
      this.state = {
        sideNavOpen: false,
        labelLinks: {
          open: 'Open Navigation!',
          close: 'Minimize Navigation!',
          home: 'Back Home',
          about: 'Learn more about me.',
          projects: 'Check out some projects.',
          contact: 'Get in touch.',
          more: 'Check out more fun stuff.'
        }
      };
    }

    toggleNavOpen = (e) => {
        e.preventDefault();

        //Nav Elements are here

        const navElements = {};
        navElements.navSection = document.querySelector('aside');
        navElements.navBar = document.querySelector('.aside__navWrapper');
        navElements.toggleButton = document.querySelector('.aside__openButton > svg');
        navElements.toggleWrapper = document.querySelector('.aside__openButton');
        navElements.sideLabels = document.querySelectorAll('.aside__label');
        navElements.sideIcons = document.querySelectorAll('.aside__navLink > svg');
 
        //Side widths are here

        const sideWidths = {};
        sideWidths.openSection = 25;
        sideWidths.closedSection = 10;
        sideWidths.openBar = 200;
        sideWidths.closedBar = 60;

        //On open and close of the sidebar
    
        if(!this.state.sideNavOpen){
    
          this.setState({
            sideNavOpen : true
          });
    
          navElements.navSection.style.width = `${sideWidths.openSection}%`;
          navElements.navBar.style.width = `${sideWidths.openBar}px`;
          navElements.navBar.style.backgroundColor = `rgba(0, 81, 255, 0.735)`;
          navElements.toggleButton.style.transform = `rotate(-180deg)`;
          navElements.toggleWrapper.style.left = `88%`;
          navElements.toggleButton.style.color = `white`;
          navElements.sideLabels.forEach( item => item.classList.add('aside__label--open'));
          navElements.sideIcons.forEach( item => item.style.color = 'white');
    
        } else {
          this.setState({
            sideNavOpen : false
          });
    
          navElements.navSection.style.width = `${sideWidths.closedSection}%`;
          navElements.navBar.style.width = `${sideWidths.closedBar}px`;
          navElements.toggleButton.style.transform = `rotate(-360deg)`;
          navElements.toggleWrapper.style.left = `50%`;
          navElements.navBar.style.backgroundColor = `white`;
          navElements.toggleButton.style.color = `black`;
          navElements.sideLabels.forEach( item => item.classList.remove('aside__label--open'));
          navElements.sideIcons.forEach( item => item.style.color = 'black');
        }
      };
    render() {
        return (
            <div>
                <div className="aside__navWrapper">
                    <a onClick={this.toggleNavOpen.bind(this)} className="aside__openButton">
                        <FontAwesomeIcon icon="arrow-right" />
                        <span className="aside__openLabel">
                        {!this.state.sideNavOpen ? `${this.state.labelLinks.open}` : `${this.state.labelLinks.close}`}
                        </span>
                    </a>
                    <nav className="aside__nav">
                        <Link className="aside__navLink" to="/">
                            <FontAwesomeIcon icon="home" />
                            <span className="aside__label">{this.state.labelLinks.home}</span>
                        </Link>
                        <Link className="aside__navLink" to="/aboutMe">
                            <FontAwesomeIcon icon="user" />
                            <span className="aside__label">{this.state.labelLinks.about}</span>
                        </Link>
                        <Link className="aside__navLink" to="/projects">
                            <FontAwesomeIcon icon="project-diagram" />
                            <span className="aside__label">{this.state.labelLinks.projects}</span>
                        </Link>
                        <Link className="aside__navLink" to="/contact">
                            <FontAwesomeIcon icon="address-card" />
                            <span className="aside__label">{this.state.labelLinks.contact}</span>
                        </Link>
                        <Link className="aside__navLink" to="/more">
                            <FontAwesomeIcon icon="plus" />
                            <span className="aside__label">{this.state.labelLinks.more}</span>
                        </Link>
                    </nav>
                </div>
                <div className="aside__hamburger">
                    <ul>
                    <Link to="/resume">Resume</Link>
                    <Link to="/aboutMe">About Me</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">More</Link>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Nav;