import React from 'react';

class SkillLevel extends React.Component {
    render() {
        const level = this.props.level;
        const starMap = level.map( (star, index) => {
            return star===1 ? <i key={'star-'+index} className="material-icons">star</i> : <i  key={'star-'+index} className="material-icons">star_border</i>;
        });
        return (
            <li>
               { starMap } 
            </li>
        );
    }
}
export class ListSkillDev extends React.Component {
    render() {
        const item = this.props.item;
        return (
            <ul>
                <li>{ item.name }</li>
                <SkillLevel level={item.level}/>
                <li>{ item.time }</li>
            </ul>
        );
    }
}

