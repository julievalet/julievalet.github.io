import React from 'react';

import PropTypes from 'prop-types';

export class Contact extends React.Component {
    render() {
        return (
            <div id="contact">
                <h3>Contact</h3>
                <a href={`mailto:${this.props.info.email}?subject=Opportunity: Web Resume`}>{this.props.info.email}</a>
            </div>
        );
    }
}

Contact.propTypes = {
    info: PropTypes.object.isRequired
};
