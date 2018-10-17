import React, { Component } from 'react';
import './styles/App.scss';
import Main from './components/main';
import { Link } from 'react-router-dom';

//Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faProjectDiagram, faUser, faAddressCard, faPlus, faHome, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab, faProjectDiagram, faUser, faAddressCard, faPlus, faHome, faArrowRight);

class App extends Component {
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
        more: 'Check out more fun stuff.',
        test: 'test'
      }
    };
  }

  handleNavOpen = (e) => {
    e.preventDefault();
    console.log(e.value);
  };

  render() {
    return (
      <div className="outerWrapper">
          <div className="wrapper">
              <aside>
                    <div className="aside__navWrapper">
                    <a onClick={this.handleNavOpen.bind(this)} className="aside__openButton aside__openButton--closed">
                      <FontAwesomeIcon icon="arrow-right" />
                      <span className="label">{this.state.labelLinks.open}</span>
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
              </aside>
              <main>
                <div className="main__contentWrapper">
                  <Main />
                </div>
              </main>
          </div>
      </div>
    );
  }
}

export default App;
