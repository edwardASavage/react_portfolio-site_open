import React, { useState } from 'react';

export default function Portfolio(profileData) {
  const { portfolio } = profileData.profileData;
  let portfolioState = [...portfolio];
  portfolioState.active = false;

  const [projectGridState, setpPojectGridState] = useState(portfolioState);

  const handlPortfolioToggle = (key) => () => {
    setpPojectGridState((itemList) =>
      itemList.map((i, k) => ({
        ...i,
        // toggle active based on key match NAND current active state.
        active: key === k ? !i.active : i.active,
      }))
    );
  };

  return (
    <section id='portfolio' className='gutter-l gutter-r'>
      <main className='flex-container portfolio-wrapper'>
        <section className='section-heading-wrapper pb-0'>
          <h2 className='portfolio-header'>Check out some of my work.</h2>
        </section>

        <section className='portfolio-intro'>
          <p>
            Most of my work is hosted on GitHub, below are several that are open
            source. If you would like to see some of my private repos, just get
            in contact!
          </p>
          <p>
            <b>Click or tap on a tile to view more details about a project.</b>
          </p>
        </section>
        <dl className='work-grid'>
          {projectGridState.map((item, key) => {
            return (
              <dt
                className={`one work-grid-item ${
                  item.active ? 'expanded' : 'collapsed'
                }`}
                style={{ backgroundImage: `url(${item.imageUrl})` }}
                key={key}
                onClick={handlPortfolioToggle(key)}
              >
                <div className='item-wrapper'>
                  <section className='grid-item-title'>
                    <h1>{item.projectName}</h1>
                  </section>
                  <section className='grid-item-text'>
                    <p>
                      {' '}
                      {item.active
                        ? `${item.projectDescription.expandedDescription}`
                        : `${item.projectDescription.simpleDescription}`}
                    </p>
                  </section>
                  <section className='grid-item-link'>
                    <a
                      href={item.projectUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Link to Site/Source
                    </a>
                  </section>
                </div>
              </dt>
            );
          })}
        </dl>
      </main>
    </section>
  );
}
