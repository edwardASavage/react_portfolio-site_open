import React from 'react';

export default function Resume(profileData) {
  const {
    cv: { education, experience, skills },
  } = profileData.profileData;

  const educationFirst = profileData.profileData.cv.education.shift();
  const courseModules = educationFirst.courseModules;

  return (
    <>
      <section id='resume' className='gutter-l gutter-r'>
        <main className='flex-container experience'>
          <section className='section-heading-wrapper three'>
            <h2>Experience</h2>
          </section>
          <section className='nine'>
            {experience.map((item, key) => {
              return (
                <dl className='exp-item' key={key}>
                  <div className='exp-info'>
                    <h3>{item.jobTitle}</h3>
                    <div>
                      <h4>{item.jobLocation}</h4>
                      <span>&bull;</span>{' '}
                      <em className='date'>
                        {item.dateStart} - {item.dateFinish}
                      </em>
                    </div>
                  </div>
                  <dt className='exp-details'>{item.jobDuties}</dt>
                  <dt className='exp-details'>Key duties included:</dt>
                  <ul className='exp-responsiblities'>
                    {item.jobResponsiblities.map((i, k) => {
                      return <li key={k}>{i.jobResItem}</li>;
                    })}
                  </ul>
                </dl>
              );
            })}
          </section>
        </main>

        <main className='flex-container skills'>
          <section className='section-heading-wrapper three'>
            <h2>Skills</h2>
          </section>

          <section className='nine'>
            <div className='skill-info'>
              <h5 className='inner-minor-header'>Core technologies</h5>
              <p>
                Generally speaking, <b>no stack/paradigm is restrictive</b>, I
                attempt to always use the best tools for the task at hand. I
                have self taught myself many technologies alongside my studies
                in an attempt to be versatile.
              </p>

              <p>
                <b>Hover/tap over a skill to view further details.</b>
              </p>
            </div>
            <dl className='skill-grid'>
              {skills.map((item, key) => {
                return (
                  <dt className='skill-item-wrapper three' key={key}>
                    <div className='skill-item backface flipped'>
                      <h1>{item.skillExperience}</h1>
                      <p>{item.skillDescription}</p>
                    </div>
                    <div className='skill-item frontface'>
                      <h1>{item.skillName}</h1>
                    </div>
                  </dt>
                );
              })}
            </dl>
          </section>
        </main>

        <main className='flex-container education'>
          <section className='section-heading-wrapper three'>
            <h2>Education</h2>
          </section>
          <section className='nine'>
            <dl className='flex-container education-item'>
              <dt className='education-info one'>
                <h3>{educationFirst.courseTitle}</h3>
                <section className='location-wrapper'>
                  <h4>{educationFirst.instututionName}</h4>
                  <span>&bull;</span>
                  <em className='date'>
                    {educationFirst.dateStart} {educationFirst.dateFinish}
                  </em>
                </section>
              </dt>
              <dt className='education-details'>
                {educationFirst.courseDetails}
              </dt>

              <dl className='modules-wrapper'>
                {courseModules.map((item, key) => (
                  <dt key={key} className='moduleList'>
                    <h4 className='moduleList-title'>
                      Year {item.moduleYear} ({item.yearGrade})
                    </h4>
                    <ul>
                      {item.modules.map((i, k) => {
                        return <li key={k}>{i.moduleTitle}</li>;
                      })}
                    </ul>
                  </dt>
                ))}
              </dl>
            </dl>
            <dt className='flex-container'>
              {education.map((item, key) => {
                return (
                  <dl className='education-item one' key={key}>
                    <dt className='education-info'>
                      <h3>{item.courseTitle}</h3>
                      <section className='location-wrapper'>
                        <h4>{item.instututionName}</h4>
                        <span>&bull;</span>
                        <em className='date'>
                          {item.dateStart} {item.dateFinish}
                        </em>
                      </section>
                      <p className='education-details'>{item.courseDetails}</p>
                    </dt>
                  </dl>
                );
              })}
            </dt>
          </section>
        </main>
      </section>
    </>
  );
}
