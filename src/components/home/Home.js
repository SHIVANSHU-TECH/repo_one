import React from 'react';
import social from '../assets/social.mp4';
import Main from '../main/main';
const Home = () => {
  return (
    <>
    <div className='mainB'>
     <video src={social} autoPlay loop muted />
     <div className='content'>
      <h2> hello this is our world</h2>
      <p>welcome to our web site </p>
       <input type='button' value="button" />
     </div>
     </div>
         <Main/>
            

    </>
  );
}

export default Home;