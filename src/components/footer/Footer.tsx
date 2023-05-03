import { GITHUB_NAME, YEAR_OF_CREATION } from '../../constants/constants';
import React from 'react';
import './Footer.css';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <a
          href="https://github.com/Katsiaryna-Andrabaila"
          target="_blank"
          rel="noreferrer"
          className="github-link"
        >
          {GITHUB_NAME}
        </a>
        <p>{YEAR_OF_CREATION}</p>
        <a href="https://rs.school/react/" target="_blank" rel="noreferrer" className="rss-link">
          <img src="https://rs.school/images/rs_school_js.svg" />
        </a>
      </footer>
    );
  }
}
