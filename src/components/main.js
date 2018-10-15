import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import More from './more';

//Stateless component

const Main = () => (
    <div className="main__wrapper">
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/aboutMe" component={AboutMe} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/more" component={More} />
    </Switch>
    </div>
)

export default Main;