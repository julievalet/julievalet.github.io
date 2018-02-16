import React from 'react';
import PropTypes from 'prop-types';
import Dico from '../lang/lang-multi';

class Work extends React.Component {
    constructor() {
        super();

        this.renderExemple = this.renderExemple.bind(this);
    }

    renderExemple(ex, index) {
        return (
            <div key={index} className="portfolio-example-item">
                <div className="portfolio-example-medias">
                    {ex.medias.map((media, i) => (
                        <a key={i} className="portfolio-example-img" href={media.link} target="_blank">
                            <img src={media.src} alt={`portolio-img-${index}-${i}`} />
                        </a>
                    ))}
                </div>
                <h5 className="portfolio-example-title">{ex.title}</h5>
                <p className="portfolio-example-desc">{ex.desc}</p>
                <span className="portfolio-example-tech">Tech : {ex.tech}</span>
            </div>
        );
    }

    render() {
        const lang = this.props.lang;
        const dico = Dico[lang];
        return (
            <div className="main" id="portfolio">
                <h3>{dico.work}</h3>
                <div className="portfolio-examples">
                    {this.props.portfolio.map((ex, index) => this.renderExemple(ex, index))}
                </div>
            </div>
        );
    }
}

Work.propTypes = {
    portfolio: PropTypes.array.isRequired
};

export default Work;
