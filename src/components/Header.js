import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Dico from '../lang/lang-multi';

const Header = props => {
    const lang = props.lang;
    const dico = Dico[lang];
    return (
        <nav id="header">
            <Link to="/" className="item-logo anchor-link">
                {`${props.info.firstname} ${props.info.lastname}`}
            </Link>
            <div className="item-lang anchor-link">
                <a onClick={() => props.changeLang('fr')}>FR</a>
                |
                <a onClick={() => props.changeLang('en')}>EN</a>
            </div>
            <a id="menu-toggle" className="anchor-link">
                <i className="material-icons">menu</i>
            </a>
            <ul id="menu" className="simple-toggle">
                <li className="item item-logo">
                    <Link to="/">{`${props.info.firstname} ${props.info.lastname}`}</Link>
                </li>
                <li className="item">
                    <Link to="/about">{dico.about}</Link>
                </li>
                <li className="item">
                    <Link to="/skills">{dico.skills}</Link>
                </li>
                <li className="item">
                    <Link to="/work">{dico.work}</Link>
                </li>
                <li className="item">
                    <Link to="/contact">{dico.contact}</Link>
                </li>
                <li className="item item-lang">
                    <a onClick={() => props.changeLang('fr')}>FR</a>
                    |
                    <a onClick={() => props.changeLang('en')}>EN</a>
                </li>
            </ul>
        </nav>
    );
};

Header.propTypes = {
    info: PropTypes.object.isRequired
};

export default Header;
