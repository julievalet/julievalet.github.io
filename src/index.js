import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import { Footer } from './components/Footer';
// import { ListSkillDev, ListSkillLang } from './components/ListSkillDev';

// Get the resume's data (JSON)
const resumeJSONPath = './app/data_resume.json';
// Render only when the data has been fetched
fetch(resumeJSONPath)
    .then(blob => blob.json())
    .then(data => {
        // console.log(data);
        ReactDOM.render(
            <App resumeData={data} />,
            document.getElementById('app')
        );

        ReactDOM.render(
            <Footer info={data.info} />,
            document.querySelector('footer')
        );
    })
    .catch(err => console.error(err));

/* *************************************************************************** */
/* *************************************************************************** */
/* *************************************************************************** */

/* Variables */
const menu = document.querySelector('#menu');
const anchorMenu = document.querySelector('#menu-toggle');
const btnScrollTop = document.querySelector('#scroll-top-btn');

/* Functions */
function toggleMenu() {
    // Toggle the class 'open', open/close the menu on mobile
    menu.classList.toggle('open');

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
    if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
    ) {
        btnScrollTop.style.display = 'block';
    } else {
        btnScrollTop.style.display = 'none';
    }
}

/* Event listeners */
anchorMenu.addEventListener('click', toggleMenu);
btnScrollTop.addEventListener('click', scrollToTop);
window.addEventListener('scroll', handleScroll);
