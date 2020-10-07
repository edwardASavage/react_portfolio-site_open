import React from 'react';
import Navbar from './Navbar';

export default function Header(profileData) {
  const {
    name,
    role: { title, roleStatus },
    socialLinks,
  } = profileData.profileData;
  return (
    <>
      <header>
        <nav id='nav-wrap'>
          <Navbar />
        </nav>

        <div className='flex-container h-full' id='home'>
          <section className='banner'>
            <h1 className='headline'>Hello, I'm {name}</h1>
            <h3>I am a {title}.</h3>
            <h4>{roleStatus}</h4>
            <ul className='social'>
              {socialLinks.map((item) => {
                return (
                  <li key={item.name}>
                    <a
                      href={item.url}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <i className={item.className}></i>
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </header>
    </>
  );
}
