// src/components/Background.jsx
import React from 'react';
import './Background.css';
import Moon from '../absolute/Moon.jsx'
import CloudsNStars from '../absolute/CloudsNStars.jsx';
import stars from '../../assets/stars.png';
import clouds from '../../assets/clouds.png';

const Background = () => {
window.onscroll = function () {
     window.scrollTo(0, window.scrollY);
}
  return (
    <div className="background">
    <Moon/>
    <CloudsNStars>

    <div className="post-cloud">
    hola    
    </div>
    </CloudsNStars>

      <div className="content">
        <h1>Bienvenido a mi portafolio</h1>
        <button>Ver proyectos</button>
      </div>
    </div>
  );
};

export default Background;

