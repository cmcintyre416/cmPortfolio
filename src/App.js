import React, { Component } from 'react';
import './styles/App.scss';
import Main from './components/main';
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="outerWrapper">
          <div className="wrapper">
              <aside>
                    <div className="aside__navWrapper">
                      <nav className="aside__nav">
                          <h1 className="aside__title">Colin McIntyre</h1>
                          <span className="aside__subTitle">Web Developer</span>
                          <Link className="aside__navLink" to="/aboutMe">About Me</Link>
                          <Link className="aside__navLink" to="/projects">Projects</Link>
                          <Link className="aside__navLink" to="/contact">Contact</Link>
                          <Link className="aside__navLink" to="/more">More</Link>
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
