import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';



// Get the resume's data (JSON)
const resumeJSONPath = "./app/data_resume.json";
// Render only when the data has been fetched
fetch(resumeJSONPath)
    .then(blob => blob.json())
    .then(function(data) {
        // console.log(data);
        ReactDOM.render(<App resumeData={data} />, document.getElementById('app'));
    });


const menu = document.querySelector('#menu');
const anchorMenu = document.querySelector('#menu-toggle');

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

/* Event listeners */
anchorMenu.addEventListener('click', toggleMenu);