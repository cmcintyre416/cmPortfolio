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

        let navSection = document.querySelector('aside');
        let navBar = document.querySelector('.aside__navWrapper');
        let toggleButton = document.querySelector('.aside__openButton');
        let sideLabels = document.querySelectorAll('.aside__label');
        // let sideIcons = document.querySelectorAll('.aside__navLink > svg');
        let initialName = document.querySelector('.aside__name--closed');
        let fullName = document.querySelector('.aside__name--open');
 
        //Side widths are here

        const sideWidths = {};
        sideWidths.openBar = 200;
        sideWidths.closedBar = 60;

        //On open and close of the sidebar
    
        if(!this.state.sideNavOpen){
    
          this.setState({
            sideNavOpen : true
          });
    
          navSection.style.width = `${sideWidths.openBar}px`;
          navBar.style.width = `${sideWidths.openBar}px`;
          toggleButton.style.left = `${sideWidths.openBar / 2 - 15}px`;
          sideLabels.forEach( item => item.classList.add('aside__label--open'));
          initialName.style.opacity = 0;
          fullName.style.opacity= 1;
    
        } else {
          this.setState({
            sideNavOpen : false
          });
    
          navSection.style.width = `${sideWidths.closedBar}px`;
          navBar.style.width = `${sideWidths.closedBar}px`;
          toggleButton.style.left = `15px`;
          sideLabels.forEach( item => item.classList.remove('aside__label--open'));
          initialName.style.opacity = 1;
          fullName.style.opacity= 0;
        }
      };

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
                            <span className="aside__name aside__name--closed">{this.state.name.initials}</span>
                            <span className="aside__name aside__name--open">{this.state.name.full}</span>
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