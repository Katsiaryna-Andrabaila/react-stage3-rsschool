import React from 'react';
import { NavLink } from 'react-router-dom';
import { LINK_COLORS, LINK_TITLES } from '../../constants/constants';

export default class Nav extends React.Component {
  render() {
    const setActive = ({ isActive }: { isActive: boolean }) => ({
      color: isActive ? LINK_COLORS.active : LINK_COLORS.base,
    });

    return (
      <nav className="header-nav">
        <NavLink className="header-link" to="/" style={setActive}>
          {LINK_TITLES.home}
        </NavLink>
        <NavLink className="header-link" to="/about" style={setActive}>
          {LINK_TITLES.about}
        </NavLink>
      </nav>
    );
  }
}
