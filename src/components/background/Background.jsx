// src/components/Background.jsx
import React from 'react';
import './Background.css';
import Moon from '../absolute/Moon.jsx'
import CloudsNStars from '../absolute/CloudsNStars.jsx';
import Content from '../absolute/Content.jsx';
import Xp from '../sections/Xp.jsx';
import stars from '../../assets/stars.png';
import clouds from '../../assets/clouds.png';

const Background = () => {
// window.onscroll = function () {
//      window.scrollTo(0, window.scrollY);
// }
  return (
    <div className="background">
    <Moon/>
    <CloudsNStars>

    <Xp/>
    </CloudsNStars>
    <Content/>

    </div>
  );
};

export default Background;

