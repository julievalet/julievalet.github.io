import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';




const resumeJSONPath = "./app/data_resume.json";

fetch(resumeJSONPath)
    .then(blob => blob.json())
    .then(function(data) {
        console.log(data);
        ReactDOM.render(<App title={data.info.title} />, document.getElementById('app'));
    });