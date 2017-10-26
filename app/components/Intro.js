import React from 'react';

/**
 * Display what the user see when he lands on the site (title, pic, location & availability)
 */
export class Intro extends React.Component {
    render() {
        return (
            <div id="intro">
                <div>
                    <div className="title">
                        <h2>{ this.props.info.title }</h2>
                        <h4><i className="material-icons">location_on</i>{ this.props.info.location }</h4>
                    </div>
                    <div className="pic"><img src={ `app/${this.props.info.pathPicture}` } alt="pic"/></div>
                </div>
                {/* <div>
                    <i className="material-icons">location_on</i>{ this.props.info.location }<br/>
                    Available : { this.props.info.available }
                </div> */}
           </div>
        )
    }
}