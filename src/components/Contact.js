import React from 'react';

export class Contact extends React.Component {
    render() {
        return (
            <div id="contact">
                <h3>Contact</h3>
                <a href={`mailto:${this.props.info.email}?subject=Opportunity: Web Resume`}>{ this.props.info.email }</a>
            </div>
        );
    }
}