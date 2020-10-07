import React from 'react';

export default function Footer(profileData) {
  const { socialLinks } = profileData.profileData;
  return (
    <footer>
      <main className='footer-container'>
        <section className='footer-item'>
          <ul className='social'>
            {socialLinks.map((item) => {
              return (
                <li key={item.name}>
                  <a href={item.url} target='_blank' rel='noopener noreferrer'>
                    <i className={item.className}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
        <section className='footer-item'>
          <div className='footer-item-container'>
            <h2>Design List</h2>
            <ul className='design-list'>
              <li>
                <a
                  href='https://i.imgur.com/Ur81VeJ.png'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Initial design
                </a>
              </li>
              <li>
                <a
                  href='https://i.imgur.com/HFJKUMJ.png'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Lo - Hi fidelity designs
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className='footer-item'>
          <div className='footer-item-container'>
            <h2>Github Repo for this site</h2>
            <a
              href='https://github.com/edwardASavage'
              target='_blank'
              rel='noopener noreferrer'
            >
              Click/Tap here
            </a>
          </div>
        </section>
      </main>
      <section className='footer-watermark'>
        <p>Designed, Developed, and Tested by Edward Savage - Sep 2020.</p>
      </section>
    </footer>
  );
}
