import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import { Intro } from './Intro';
import { About } from './About';
import { Skills } from './Skills';
import { Work } from './Work';
import { Contact } from './Contact';


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
                    <Route path="/about" render={()=><About data={resumeData}/>}/>
                    <Route path="/skills" render={()=><Skills skills={resumeData.skills}/>}/>
                    <Route path="/work" render={()=><Work work={resumeData.workXP}/>}/>
                    <Route path="/contact" render={()=><Contact info={resumeData.info}/>}/>
                </div>
            </Router>
        );
    }
}