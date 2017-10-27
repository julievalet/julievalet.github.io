import React from 'react';

class Education extends React.Component {
    render() {
        const listEducation = this.props.data.map( (item, index) => {
            return (
                <li key={`educ-${index}`} >
                    <h5>{ `${ item.diploma } - ${ item.location } - ${ item.year }` }</h5>
                </li>
            );
        });
        return (
            <ul>
                { listEducation }
            </ul>
        );
    }
}

class Experience extends React.Component {
    render() {
        const listXP = this.props.data.map( (item, index) => {
            return (
                <li key={`xp-${index}`} >
                    <h5>{ item.title } - { item.companyName } - { item.location }</h5>
                    <h6>{ item.year }</h6>
                    {
                        item.desc.map( (desc, i) => <p key={`desc-${i}`} >{ desc }</p> )
                    }
                </li>
            );
        });

        return (
            <ul>
                { listXP }
            </ul>
        );
    }
}



export class About extends React.Component {
    render() {
        return (
            <div id="about">
                <h3>About</h3>
                <div className="experience">
                    <h4>Experience</h4>
                    <Experience data={this.props.data.workXP} />
                </div>
                <div className="education">
                    <h4>Education</h4>
                    <Education data={this.props.data.education} />
                </div>
            </div>
        );
    }
}

