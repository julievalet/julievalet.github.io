import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import { ListSkillDev, ListSkillLang } from './ListSkillDev';

// Intro
class Intro extends React.Component {
    render() {
        return (
            <div id="intro">
                <h2>{ this.props.info.title }</h2>
                {<img src={ `app/${this.props.info.pathPicture}` } alt="pic"/>}
           </div>
        )
    }
}
// ReactDOM.render(intro, document.querySelector('main'));

class Skills extends React.Component {
    render() {
        // Dev skills
        const skillTypes = this.props.skills.dev;
        const listSkills = Object
            .keys(skillTypes)
            .map( skillType => {
                return <ListSkillDev skillType={skillType} skills={skillTypes[skillType]} key={skillType} />;
            });
        // Lang skills
        const langSkills = <ListSkillLang languages={this.props.skills.languages} key="lang" />;
        
        return (
            <div id="skills">
                { [langSkills, listSkills] }
            </div>
        );
    }
}
// ReactDOM.render(skills, document.querySelector('main'));

export class App extends React.Component {
    render() {
        const resumeData = this.props.resumeData; // All the data of the resume
        
        // Dev skills
        // const skillTypes = resumeData.skills.dev;
        // const listSkills = Object
        //     .keys(skillTypes)
        //     .map( skillType => {
        //         return <ListSkillDev skillType={skillType} skills={skillTypes[skillType]} key={skillType} />;
        //     });
        // // Lang skills
        // const langSkills = <ListSkillLang key="lang" languages={resumeData.skills.languages} />;
        
        // console.log(listSkills);
        // return (
        //     <div>
        //         <div id="intro">
        //             <h2>{ resumeData.info.title }</h2>
        //             {<img src={ `app/${resumeData.info.pathPicture}` } alt="pic"/>}
        //         </div>
        //         <div id="about">
        //             <p>{ resumeData.info.about }</p>
        //         </div>
        //         <div id="skills">
        //             { [langSkills, listSkills] }
        //         </div>
        //         <div id="work"></div>
        //         <div id="contact"></div>
        //     </div>
        // );

        return (
            <Router>
                <div>
                    <Route exact path="/" render={()=><Intro info={resumeData.info}/>}/>
                    <Route path="/skills" render={()=><Skills skills={resumeData.skills}/>}/>
                </div>
            </Router>
        );
    }
}