import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { GiCrossedSabres } from 'react-icons/gi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { BsFillBrightnessHighFill, BsFillMoonStarsFill } from 'react-icons/bs';
import style from './Navbar.module.css';
import logo from '../../assets/asha-logo.png';

const Navbar = ({
  onHomeClick, onProjectsClick, onContactClick, onSkillsClick, toggleThemeMode, themeMode,
}) => {
  const [show, setShow] = React.useState(false);

  const lightModeStyles = {
    backgroundColor: '#f2efff',
    color: 'rgb(32 161 196)',
    opacity: '1',
  };

  const darkModeStyles = {
    backgroundColor: '#000000',
    color: '#81dafb',
  };

  const closemenu = () => {
    setShow(false);
  };
  const showmenu = () => {
    setShow(true);
  };

  return (
    <nav className={style.navbarContainer} style={themeMode === 'light' ? lightModeStyles : darkModeStyles}>
      <img src={logo} alt="logo" className={style.logo} />
      <div className={show ? `${style.navbarlink} ${style.navbarlinkmobile}` : `${style.navbarlink}`} style={themeMode === 'light' ? lightModeStyles : darkModeStyles}>
        <GiCrossedSabres onClick={closemenu} className={style.closeIcon} />
        <div className={style.navbarlinklist} style={themeMode === 'light' ? lightModeStyles : darkModeStyles}>
          <NavLink
            onClick={() => {
              closemenu();
              onHomeClick();
            }}
            to="/"
            className={({ isActive }) => (isActive ? `${style.isActive}` : '')}
          >
            About
          </NavLink>
          <NavLink
            onClick={() => {
              closemenu();
              onProjectsClick();
            }}
            to="/projects"
            className={({ isActive }) => (isActive ? `${style.isActive}` : '')}
          >
            Projects
          </NavLink>
          <NavLink
            onClick={() => {
              closemenu();
              onSkillsClick();
            }}
            to="/skills"
            className={({ isActive }) => (isActive ? `${style.isActive}` : '')}
          >
            Skills
          </NavLink>
          <NavLink
            onClick={() => {
              closemenu();
              onContactClick();
            }}
            to="/contact"
            className={({ isActive }) => (isActive ? `${style.isActive}` : '')}
          >
            Contact
          </NavLink>
          <button onClick={toggleThemeMode} type="button" style={themeMode === 'light' ? lightModeStyles : darkModeStyles}>
            {themeMode === 'light' ? <BsFillMoonStarsFill /> : <BsFillBrightnessHighFill />}
          </button>
        </div>

      </div>
      <div className={style.hamburger}>
        <RxHamburgerMenu onClick={showmenu} className={style.hamburgerIcon} />
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  onHomeClick: PropTypes.func.isRequired,
  onProjectsClick: PropTypes.func.isRequired,
  onContactClick: PropTypes.func.isRequired,
  onSkillsClick: PropTypes.func.isRequired,
  toggleThemeMode: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
};

export default Navbar;
