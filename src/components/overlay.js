import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Overlay extends Component {
    constructor(){
        super();
        this.state = {
            overlayOn: true,
            loading: false
        };
        this.loadAnimations = this.loadAnimations.bind(this);
    }

    removeOverlay = (e) => {
        e.preventDefault();

        this.setState({
            overlayOn: false,
            loading: true,
        }, 
            this.loadAnimations
        );  
    }

    loadAnimations = () => {
        if(!this.state.overlayOn && this.state.loading){
            document.querySelector('.overlay__wrapper').style.transform = 'translateX(120%)';
            document.querySelector('.overlay__content').style.opacity = 0;
            document.querySelector('.overlay__loader').style.opacity = 1;
        }
    }

    render() {
        return (
            <div className="overlay__wrapper">
                <div className="overlay__content">
                    <h1 className="overlay__title">Colin McIntyre</h1>
                    <h2 className="overlay__subTitle">Web Developer</h2>
                    <p className="overlay__continueText">
                        <a className="overlay__continueButton" href="/" onClick={this.removeOverlay.bind(this)}>
                            <span className="overlay__continueButtonText">Continue to portfolio app</span> 
                            <FontAwesomeIcon icon="arrow-right" />
                        </a>
                    </p>
                </div>
                <span className="overlay__loader">test</span>
            </div>
        );
    }
}

export default Overlay;