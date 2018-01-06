import React from 'react';
import PropTypes from 'prop-types';

class Social extends React.Component {
    render() {
        const socials = this.props.social;
        // console.log(socials);
        const socialLinks = socials.map(social => (
            <li key={`link-${social.name}`}>
                <a href={social.link} target="_blank" className={`btn btn-${social.name}`}>
                    {social.name}
                </a>
            </li>
        ));

        return <ul className="social">{socialLinks}</ul>;
    }
}

Social.propTypes = {
    social: PropTypes.array.isRequired
};

export class Footer extends React.Component {
    render() {
        return (
            <div>
                <Social social={this.props.info.social} />
                Julie Valet - built with <i className="material-icons md-18">favorite</i> & ReactJS.
            </div>
        );
    }
}

Footer.propTypes = {
    info: PropTypes.object.isRequired
};
