import React from 'react';
import Dico from '../lang/lang-multi';

const Work = props => {
    const lang = props.lang;
    const dico = Dico[lang];
    return (
        <div className="main">
            <h3>{dico.work}</h3>
        </div>
    );
};

export default Work;
