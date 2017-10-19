import React from 'react';

class SkillLevel extends React.Component {
    render() {
        const level = this.props.level;
        const starMap = level.map( (star, index) => {
            return star===1 ? <i key={'star-'+index} className="material-icons">star</i> : <i  key={'star-'+index} className="material-icons">star_border</i>;
        });
        return (
            <span>
               { starMap } 
            </span>
        );
    }
}
export class ListSkillDev extends React.Component {
    render() {
        const skillType = this.props.skillType;
        const skills = this.props.skills.map( skill => {
            return (
                <li key={ skill.name }>
                    <span>{ skill.name }</span> 
                    <SkillLevel level={skill.level}/>
                    <span>{ skill.time }</span>
                </li>
            );
        });

        return (
            <div className="dev-skills" >
                <h3>{ skillType }</h3>
                <ul>
                    { skills }
                </ul>
            </div>
        );
    }
}

