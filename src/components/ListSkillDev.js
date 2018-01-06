import React from 'react';
import PropTypes from 'prop-types';

/**
 * Star Rating Component
 * props : level (array with 5 binary elements)
 * return a rating of 5 stars
 */
class StarLevel extends React.Component {
    render() {
        const level = this.props.level;
        const starMap = level.map(
            (star, index) =>
                star === 1 ? (
                    <i key={'star-' + index} className="material-icons">
                        star
                    </i>
                ) : (
                    <i key={'star-' + index} className="material-icons">
                        star_border
                    </i>
                )
        );
        return <span>{starMap}</span>;
    }
}

StarLevel.propTypes = {
    level: PropTypes.array.isRequired
};

/**
 * List Dev Skills Component
 * props : skillType (string), skills (array)
 * return list of li with skill, star rating and time
 */
export class ListSkillDev extends React.Component {
    render() {
        const skillType = this.props.skillType;
        const skills = this.props.skills.map(skill => (
            <tr key={skill.name}>
                <td>{skill.name}</td>
                <td>
                    <StarLevel level={skill.level} />
                </td>
                <td>{skill.time}</td>
            </tr>
        ));

        return (
            <div className="dev-skills">
                <table>
                    <thead>
                        <tr>
                            <td colSpan="3">
                                <h3>{skillType}</h3>
                            </td>
                        </tr>
                    </thead>
                    <tbody>{skills}</tbody>
                </table>
            </div>
        );
    }
}

ListSkillDev.propTypes = {
    skillType: PropTypes.string.isRequired,
    skills: PropTypes.array.isRequired
};

/**
 * List languages Component
 * props : languages (array)
 * return a list of language and the level
 */
export class ListSkillLang extends React.Component {
    render() {
        const langs = this.props.languages.map(lang => (
            <tr key={lang.lang}>
                <td>{lang.lang}</td>
                <td>{lang.level}</td>
            </tr>
        ));

        return (
            <div className="lang-skills">
                <table>
                    <thead>
                        <tr>
                            <td colSpan="2">
                                <h3>Languages</h3>
                            </td>
                        </tr>
                    </thead>
                    <tbody>{langs}</tbody>
                </table>
            </div>
        );
    }
}

ListSkillLang.propTypes = {
    languages: PropTypes.array.isRequired
};
