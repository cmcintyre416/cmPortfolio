import React, { Component } from 'react';
import './styles/App.scss';
import Main from './components/main';
import Nav from './components/nav';
import Overlay from './components/overlay';


class App extends Component {
  render() {
    return (
      <div className="outerWrapper">
          <Overlay />
          <div className="wrapper">
              <aside>
                   <Nav />
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
