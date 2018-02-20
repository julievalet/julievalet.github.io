import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-snapshot';
import App from './components/App';

import './css/index.css';

render(<App />, document.querySelector('#app'));

/* *************************************************************************** */
/* *************************************************************************** */
/* *************************************************************************** */

/* Variables */
const menu = document.querySelector('#menu');
const anchorMenu = document.querySelector('#menu-toggle');
const btnScrollTop = document.querySelector('#scroll-top-btn');

/* Functions */
function toggleMenu(e) {
    e.stopPropagation();
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
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        btnScrollTop.style.display = 'block';
    } else {
        btnScrollTop.style.display = 'none';
    }
}

/* Event listeners */
anchorMenu.addEventListener('click', toggleMenu);
btnScrollTop.addEventListener('click', scrollToTop);
window.addEventListener('scroll', handleScroll);
window.addEventListener('click', function() {
    // Close the menu if it's open
    if (menu.classList.contains('open')) menu.classList.remove('open');
});
