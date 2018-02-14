import React from 'react';
import PropTypes from 'prop-types';
import Dico from '../lang/lang-multi';

const Contact = props => {
    const lang = props.lang;
    const dico = Dico[lang];
    return (
        <div className="main" id="contact">
            <h3>{dico.contact}</h3>
            <a href={`mailto:${props.info.email}?subject=Opportunity: Web Resume`}>{props.info.email}</a>
        </div>
    );
};

Contact.propTypes = {
    info: PropTypes.object.isRequired
};

export default Contact;
