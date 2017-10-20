import React from 'react';

/**
 * Star Rating Component
 * props : level (array with 5 binary elements)
 * return a rating of 5 stars
 */
class StarLevel extends React.Component {
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

/**
 * List Dev Skills Component
 * props : skillType (string), skills (array)
 * return list of li with skill, star rating and time
 */
export class ListSkillDev extends React.Component {
    render() {
        const skillType = this.props.skillType;
        const skills = this.props.skills.map( skill => {
            return (
                <li key={ skill.name }>
                    <span>{ skill.name }</span> 
                    <StarLevel level={skill.level}/>
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

/**
 * List languages Component
 * props : languages (array)
 * return a list of language and the level
 */
export class ListSkillLang extends React.Component {
    render() {
        const langs = this.props.languages.map( lang => {
            return (
                <ul key={ lang.lang } >
                    <li>{ lang.lang }</li>
                    <li>{ lang.level }</li>
                </ul>
            );
        });

        return (
            <div>
                { langs }
            </div>
        );
    }
}

