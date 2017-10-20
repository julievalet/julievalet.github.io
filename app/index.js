import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
// import { ListSkillDev, ListSkillLang } from './components/ListSkillDev';



// Get the resume's data (JSON)
const resumeJSONPath = "./app/data_resume.json";
// Render only when the data has been fetched
fetch(resumeJSONPath)
    .then(blob => blob.json())
    .then(function(data) {
        // console.log(data);
        ReactDOM.render(<App resumeData={data} />, document.getElementById('app'));

        // // Intro
        // const intro = (
        //     <div id="intro">
        //         <h2>{ data.info.title }</h2>
        //         {<img src={ `app/${data.info.pathPicture}` } alt="pic"/>}
        //     </div>
        // );
        // ReactDOM.render(intro, document.querySelector('main'));

        // // Dev skills
        // const skillTypes = data.skills.dev;
        // const listSkills = Object
        //     .keys(skillTypes)
        //     .map( skillType => {
        //         return <ListSkillDev skillType={skillType} skills={skillTypes[skillType]} key={skillType} />;
        //     });
        // // Lang skills
        // const langSkills = <ListSkillLang languages={data.skills.languages} />;
        // const skills = (
        //     <div id="skills">
        //         { [langSkills, listSkills] }
        //     </div>
        // );
        // ReactDOM.render(skills, document.querySelector('main'));
    });

/*****************************************************************************/
/*****************************************************************************/
/*****************************************************************************/

/* Variables */
const menu = document.querySelector('#menu');
const anchorMenu = document.querySelector('#menu-toggle');
const btnScrollTop = document.querySelector('#scroll-top-btn');

/* Functions */
function toggleMenu() {
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
    } else {
        menu.classList.add('open');
    }

    // Calculate where the botton of anchorMenu is located
    const anchorBottom = anchorMenu.offsetHeight + anchorMenu.offsetTop + 3;
    // Position the top of the dropdown menu
    menu.style.top = `${anchorBottom}px`;
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}

function handleScroll() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        btnScrollTop.style.display = "block";
    } else {
        btnScrollTop.style.display = "none";
    }
}

/* Event listeners */
anchorMenu.addEventListener('click', toggleMenu);
btnScrollTop.addEventListener('click', scrollToTop);
window.addEventListener('scroll', handleScroll);