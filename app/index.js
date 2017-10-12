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