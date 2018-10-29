import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faProjectDiagram, faUser, faAddressCard, faPlus, faHome, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab, faProjectDiagram, faUser, faAddressCard, faPlus, faHome, faBars);

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
        },
        name: {
            full: 'colin mcintyre',
            initials: 'cm'
        }
      };
    }

    toggleNavOpen = (e) => {
        e.preventDefault();

        //Nav Elements are here

        const navElements = {};
        navElements.navSection = document.querySelector('aside');
        navElements.navBar = document.querySelector('.aside__navWrapper');
        navElements.toggleButton = document.querySelector('.aside__openButton');
        navElements.sideLabels = document.querySelectorAll('.aside__label');
        navElements.sideIcons = document.querySelectorAll('.aside__navLink > svg');
 
        //Side widths are here

        const sideWidths = {};
        sideWidths.openBar = 200;
        sideWidths.closedBar = 60;

        //On open and close of the sidebar
    
        if(!this.state.sideNavOpen){
    
          this.setState({
            sideNavOpen : true
          });
    
          navElements.navSection.style.width = `${sideWidths.openBar}px`;
          navElements.navBar.style.width = `${sideWidths.openBar}px`;
          navElements.toggleButton.style.left = `${sideWidths.openBar / 2 - 15}px`;
          navElements.sideLabels.forEach( item => item.classList.add('aside__label--open'));
    
        } else {
          this.setState({
            sideNavOpen : false
          });
    
          navElements.navSection.style.width = `${sideWidths.closedBar}px`;
          navElements.navBar.style.width = `${sideWidths.closedBar}px`;
          navElements.toggleButton.style.left = `15px`;
          navElements.sideLabels.forEach( item => item.classList.remove('aside__label--open'));
        }
      };

      testing = () => {
          
      }

    render() {
        return (
            <div>
                <a href="/" onClick={this.toggleNavOpen.bind(this)} className="aside__openButton">
                        <FontAwesomeIcon icon="bars" />
                        <span className="aside__openLabel">
                        {!this.state.sideNavOpen ? `${this.state.labelLinks.open}` : `${this.state.labelLinks.close}`}
                        </span>
                </a>
                <div className="aside__navWrapper">
                    <nav className="aside__nav">
                        <div className="aside__nameWrapper aside__navLink">
                            <span className="aside__name">
                                {!this.state.sideNavOpen ? 
                                `${this.state.name.initials}` : 
                                    `${this.state.name.full}`
                                }
                            </span>
                        </div>
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