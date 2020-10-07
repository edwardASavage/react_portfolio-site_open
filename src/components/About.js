import React from 'react';

export default function About(profileData) {
  const { about, profilePicture } = profileData.profileData;
  return (
    <section id='about' className='gutter-l gutter-r'>
      <main className='flex-container'>
        <section className='profile-pic-container four'>
          <img
            className='profile-pic'
            src={profilePicture}
            alt='A self-portrait of me.'
          />
        </section>

        <section className='nine'>
          <dl>
            <dt className='about-intro'>
              <h2>About Me</h2>
              <h4>{about.aboutIntro}</h4>
              <p>{about.aboutTagline}</p>
              <p>{about.aboutDetails}</p>
            </dt>
            <dt className='about-interests'>
              <h5 className='inner-minor-header'>Interests</h5>
              <p>{about.aboutInterestsIntro}</p>
              <p>{about.aboutInterestsOutro}</p>
            </dt>
          </dl>
        </section>
      </main>
    </section>
  );
}
