import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { CSSTransitionGroup } from "react-transition-group";

import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import More from './more';

//Stateless component

const Main = ({location}) => {
    const currentKey = location.pathname.split('/')[1] || '/';
    const timeout = { enter: 300, exit: 200 };
    
    return (
        <CSSTransitionGroup key={currentKey} timeout={timeout} transitionName="fadeIn" transitionEnterTimeout={1000} transitionLeaveTimeout={700}>
            <div className="main__wrapper">
                <Switch location={location}>
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/aboutMe" component={AboutMe} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/more" component={More} />
                </Switch>
            </div>
        </CSSTransitionGroup>
)};

export default withRouter(Main);