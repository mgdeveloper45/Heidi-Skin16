import React from 'react';

const Banner = () => {
  const animateThat = () => {
    const animatedTHIS = document.querySelector('#animateLeft');
    animatedTHIS.classList.add('leftBox');
    animatedTHIS.style.marginRight = '420px';
  };

  return (
    <div
      className='Banner'
      style={{
        display: 'flex',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'pink',
          width: '100%',
          height: '750px',
          position: 'absolute',
          borderRadius: '10px',
        }}
        className='sectionBanner'
      >
        <div
          style={{ marginTop: '10px', borderRadius: '10px 0 0 0' }}
          className='box left'
          id='animateLeft'
        ></div>
        <div
          style={{ marginTop: '10px', borderRadius: '0 10px 0 0' }}
          className='box right'
          id='animateRight'
        ></div>
      </div>
      <button
        style={{
          width: '200px',
          height: '75px',
          backgroundColor: 'rgb(56, 130, 143, .9)',
          color: 'white',
          fontSize: '24px',
          fontWeight: '600',
          borderRadius: '10px',
          borderColor: 'lightgrey',
        }}
        className='centerButton'
        onClick={() => {
          animateThat();
        }}
      >
        CLICK ME
      </button>
    </div>
  );
};

export default Banner;
