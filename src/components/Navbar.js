import React, { useLayoutEffect, useCallback, useState, useRef } from 'react';
import { Link } from 'react-scroll';

export default function Navbar() {
  const [scroll, setScroll] = useState(true);
  const [navbar, setNavbar] = useState(true);
  const navRef = useRef();
  const checkboxRef = useRef();

  const handleNavToggle = useCallback(() => {
    setNavbar(!navbar);
    navbar
      ? (checkboxRef.current.checked = true)
      : (checkboxRef.current.checked = false);
  }, [navbar]);

  useLayoutEffect(() => {
    const handleScroll = (_) => {
      setScroll(window.scrollY < window.innerHeight * 0.2);
    };
    const handleResize = (_) => {
      setNavbar(window.innerWidth < 768);
      checkboxRef.current.checked = false;
    };

    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <aside id='hamburger' onClick={handleNavToggle}>
        {' '}
        <input type='checkbox' id='navBtn' ref={checkboxRef}></input>
        <span></span>
        <span></span>
        <span></span>
      </aside>

      <ul
        className={
          (navbar ? 'sidebar-closed' : ' sidebar-open') +
          (scroll && window.innerWidth > 768
            ? ' transition-translucent'
            : ' transition-opaque')
        }
        id='nav'
        ref={navRef}
      >
        <li>
          <Link
            activeClass='current'
            to='home'
            spy={true}
            smooth={true}
            offset={-170}
            duration={500}
          >
            {' '}
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClass='current'
            to='about'
            spy={true}
            smooth={true}
            offset={-170}
            duration={500}
          >
            {' '}
            About
          </Link>
        </li>

        <li>
          <Link
            activeClass='current'
            to='portfolio'
            spy={true}
            smooth={true}
            offset={-170}
            duration={500}
          >
            {' '}
            portfolio
          </Link>
        </li>
        <li>
          <Link
            activeClass='current'
            to='resume'
            spy={true}
            smooth={true}
            offset={-160}
            duration={500}
          >
            {' '}
            CV
          </Link>
        </li>
        <li>
          <Link
            activeClass='current'
            to='contact'
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
          >
            {' '}
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
}
