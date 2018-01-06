import React from 'react';
import PropTypes from 'prop-types';

const Contact = props => {
    return (
        <div id="contact">
            <h3>Contact</h3>
            <a href={`mailto:${props.info.email}?subject=Opportunity: Web Resume`}>{props.info.email}</a>
        </div>
    );
};

Contact.propTypes = {
    info: PropTypes.object.isRequired
};

export default Contact;
