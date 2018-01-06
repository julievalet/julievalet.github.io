import React from 'react';

import selfie from '../img/selfie.jpeg';

import PropTypes from 'prop-types';

/**
 * Display what the user see when he lands on the site (title, pic, location & availability)
 */
export class Intro extends React.Component {
    render() {
        const title = this.props.info.title.split(' ').map((t, i) => <span key={i}>{t}</span>);
        return (
            <div id="intro">
                <div>
                    <div className="title">
                        {title}
                        <span className="location">
                            <i className="material-icons">location_on</i>
                            {this.props.info.location}
                        </span>
                    </div>
                    <div className="pic">
                        <img src={selfie} alt="pic" />
                    </div>
                </div>
                {/* <div>
                    <i className="material-icons">location_on</i>{ this.props.info.location }<br/>
                    Available : { this.props.info.available }
                </div> */}
            </div>
        );
    }
}

Intro.propTypes = {
    info: PropTypes.object.isRequired
};
