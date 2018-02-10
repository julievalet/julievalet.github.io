import React from 'react';
import dico from '../lang/lang-multi';

class Work extends React.Component {
    render() {
        return (
            <div>
                <h3>{dico.work}</h3>
            </div>
        );
    }
}

export default Work;
