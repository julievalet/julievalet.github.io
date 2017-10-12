import React from 'react';
import { ListSkillDev } from './ListSkillDev';

export class App extends React.Component {
    render() {
        const resumeData = this.props.resumeData;
        const listSkill = resumeData.skills.dev.frontEnd
            .map( (skillType, index) => {
                console.log(skillType);
                return <ListSkillDev item={skillType} key={index} />;
            });

        console.log(listSkill);
        return (
            <div>
                <h1>{ resumeData.info.title }</h1>
                <div>{ listSkill }</div>
            </div>
        );
    }
}