import React from 'react';

export default function Contact(profileData) {
  let { email } = profileData.profileData;
  return (
    <>
      <section id='contact'>
        <main className='contact-wrapper'>
          <p>Feel free to drop me an email regarding positions!</p>
          <h4>{email}</h4>
        </main>
      </section>
    </>
  );
}
