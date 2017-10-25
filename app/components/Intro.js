import React from 'react';

export class Intro extends React.Component {
    render() {
        return (
            <div id="intro">
                <div>
                    <h2>{ this.props.info.title }</h2>
                    <div className="pic"><img src={ `app/${this.props.info.pathPicture}` } alt="pic"/></div>
                </div>
                <div>
                    { this.props.info.location }<br/>
                    Available : { this.props.info.available }
                </div>
           </div>
        )
    }
}