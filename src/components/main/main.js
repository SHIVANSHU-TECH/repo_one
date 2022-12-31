import React from 'react';
import "./main.css"
import three from "../assets/3.jpg";
import four from "../assets/4.jpg";
const main = () => {
  return (
    <div classname="main">
      <h1 className='titleone'>About</h1>
      
      <div className='first-des'>
        <div className='destxt'>
          <h2 className='titlee'>About section</h2>
          <p className='ourtext'>Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit.
             Praesent nec pharetra lorem.
              Ut vel augue lacinia, aliquam lectus non,
               cursus tellus. Proin hendrerit, mi dictum auctor
                dignissim, nisi ipl
                  ,nulla lacus maximus nibh, in tristique urna ligula eu ex.
                  Lorem ipsum dolor sit amet, 
              Ut vel augue lacinia, aliquam lectus non,
               cursus tellus. Proin hendrerit, mi dictum auctor
                dignissim, nisi ipl
                  ,nulla lacus maximus nibh, in tristique urna ligula eu ex.
                  ,nulla lacus maximus nibh, in tristique urna ligula eu ex.
                  Lorem ipsum dolor sit amet, 
              Ut vel augue lacinia, aliquam lectus non,
               cursus tellus. Proin hendrerit, mi dictum auctor
                dignissim, nisi ipl
          </p>
        </div>
        <div className='images'>
          <img src={three} alt='img'/>
          <img src={four} alt='img'/>
        </div>
      </div>
    </div>
  );
}

export default main;
