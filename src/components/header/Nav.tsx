import React from 'react';
import { NavLink } from 'react-router-dom';
import { LINK_COLORS, LINK_TITLES } from 'constants/constants';

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="header-nav">
        <NavLink
          className="header-link"
          to="/"
          style={({ isActive }) => ({ color: isActive ? LINK_COLORS.active : LINK_COLORS.base })}
        >
          {LINK_TITLES.home}
        </NavLink>
        <NavLink
          className="header-link"
          to="/about"
          style={({ isActive }) => ({ color: isActive ? LINK_COLORS.active : LINK_COLORS.base })}
        >
          {LINK_TITLES.about}
        </NavLink>
      </nav>
    );
  }
}
