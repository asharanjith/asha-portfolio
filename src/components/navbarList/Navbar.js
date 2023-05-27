import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { GiCrossedSabres } from 'react-icons/gi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { BsFillBrightnessHighFill, BsFillMoonStarsFill } from 'react-icons/bs';
import style from './Navbar.module.css';

const Navbar = ({
  onHomeClick, onProjectsClick, onContactClick, onSkillsClick,
}) => {
  const [show, setShow] = React.useState(false);
  const [themeMode, setThemeMode] = React.useState('dark');
  const lightModeStyles = {
    backgroundColor: '#f2eded',
    color: '#61dafb',
    opacity: '1',
  };

  const darkModeStyles = {
    backgroundColor: '#000000',
    color: '#81dafb',
  };

  const toggleThemeMode = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };
  const closemenu = () => {
    setShow(false);
  };
  const showmenu = () => {
    setShow(true);
  };

  return (
    <nav className={style.navbarContainer} style={themeMode === 'light' ? lightModeStyles : darkModeStyles}>
      <img src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="logo" />
      <div className={show ? `${style.navbarlink} ${style.navbarlinkmobile}` : `${style.navbarlink}`} style={themeMode === 'light' ? lightModeStyles : darkModeStyles}>
        <GiCrossedSabres onClick={closemenu} className={style.closeIcon} />
        <div className={style.navbarlinklist} style={themeMode === 'light' ? lightModeStyles : darkModeStyles}>
          <NavLink
            onClick={() => {
              closemenu();
              onHomeClick();
            }}
            exact
            to="/"
            className={({ isActive }) => (isActive ? `${style.isActive}` : '')}
            style={themeMode === 'light' ? lightModeStyles : darkModeStyles}
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => {
              closemenu();
              onSkillsClick();
            }}
            exact
            to="/skills"
            className={({ isActive }) => (isActive ? `${style.isActive}` : '')}
          >
            Skills
          </NavLink>
          <NavLink
            onClick={() => {
              closemenu();
              onProjectsClick();
            }}
            exact
            to="/projects"
            className={({ isActive }) => (isActive ? `${style.isActive}` : '')}
          >
            Projects
          </NavLink>
          <NavLink
            onClick={() => {
              closemenu();
              onContactClick();
            }}
            exact
            to="/contact"
            className={({ isActive }) => (isActive ? `${style.isActive}` : '')}
          >
            Contact
          </NavLink>
          <button onClick={toggleThemeMode} type="button">
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
};

export default Navbar;
