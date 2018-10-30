import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import Particles from 'react-particles-js';

library.add(faArrowRight);

let particleOpt = {
    'number':{
        'value': 80,
        'density': {
            'enable': true,
            'value_area':800
        }
    },
    'color': {
        'value': '#ffffff'
    },
    'shape':{
        'type': 'polygon',
        'stroke': {
            'width': 10,
            'color': '#000000'
        },
        'polygon':{
            'nb_sides' :10
        },
    },
    'opacity':{
        'value': 1,
        'random': true,
        'anim': {
            'enable': true,
            'speed': 10,
            'opacity_min': 0.1,
            'sync': false
        }
    },
    'size':{
        'value': 3,
        'random': true,
        'anim': {
            'enable': true,
            'speed': 40,
            'size_min': 0.1,
            'sync': false
        }
    },
    'line_linked': {
        'enable': true,
        'distance': 150,
        'color': "#00abe6",
        'opacity': 1,
        'width': 1
    },
    'move':{
        'enable':true,
        'type': 'attract',
        'speed':6,
        'direction':"none",
        'random':true,
        'straight':true,
        'out_mode':"out",
        'bounce': true,
        'attract':{
            'enable':true,
            'rotateX':10000,
            'rotateY':10000
        }
    },
    'interactivity':{
        'detect_on': "canvas",
        'events':{
            'onhover':{
                'enable':true,
                'mode': 'bubble, repulse, grab'
            },
            'onclick':{
                'enable':true,
                'mode':"push"
            },
            'resize':true
        },
        'modes':{
            'grab':{
                'distance':180,
                'line_linked':{
                    'opacity':0.5
                }
            },
            'bubble':{
                'distance':130,
                'size':10,
                'duration':1,
                'opacity':8,
                'speed':2
            },
            'repulse':{
                'distance':150,
                'duration':0.2
            },
            'push':{
                'particles_nb':10
            },
            'remove':{
                'particles_nb':2
            }
        }
    },
    'retina_detect':true
};


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
                <div id="overlay__particles">
                    <Particles 
                        params = {particleOpt}
                    />
                </div>
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