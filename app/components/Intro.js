import React from 'react';

export class Intro extends React.Component {
    render() {
        return (
            <div id="intro">
                <h2>{ this.props.info.title }</h2>
                {<img src={ `app/${this.props.info.pathPicture}` } alt="pic"/>}
           </div>
        )
    }
}