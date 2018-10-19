import React, { Component } from 'react';
import './styles/App.scss';
import Main from './components/main';
import Nav from './components/nav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      }
  };

  render() {
    return (
      <div className="outerWrapper">
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
