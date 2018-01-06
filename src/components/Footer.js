import React from 'react';
import PropTypes from 'prop-types';

const Footer = props => {
    return (
        <div>
            <ul className="social">
                {props.info.social.map(social => (
                    <li key={`link-${social.name}`}>
                        <a href={social.link} target="_blank" className={`btn btn-${social.name}`}>
                            {social.name}
                        </a>
                    </li>
                ))}
            </ul>
            Julie Valet - built with <i className="material-icons md-18">favorite</i> & ReactJS.
        </div>
    );
};

Footer.propTypes = {
    info: PropTypes.object.isRequired
};

export default Footer;
