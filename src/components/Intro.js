import React from 'react';
import selfie from '../img/selfie.jpeg';
import PropTypes from 'prop-types';

/**
 * Display what the user see when he lands on the site (title, pic, location & availability)
 */
const Intro = props => {
    return (
        <div className="main" id="intro">
            <div>
                <div className="title">
                    {props.info.title.split(' ').map((t, i) => <span key={i}>{t}</span>)}
                    <span className="location">
                        <i className="material-icons">location_on</i>
                        {props.info.location}
                    </span>
                </div>
                <div className="pic">
                    <img src={selfie} alt="pic" />
                </div>
            </div>
        </div>
    );
};

Intro.propTypes = {
    info: PropTypes.object.isRequired
};

export default Intro;
