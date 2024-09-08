import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

/* GLOBAL VARIABLES */

window.$primaryLanguage = 'en';
window.$secondaryLanguage = 'fr';
window.$primaryLanguageIconId = 'secondary-lang-icon';
window.$secondaryLanguageIconId = 'primary-lang-icon';

ReactDOM.render(<App />, document.getElementById('root'));