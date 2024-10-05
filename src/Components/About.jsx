import React from 'react';
import spotifyImage from '../assets/images/spotify.jpg';

const About = () => {
  return (

        <div className="container text-center mt-5">
        <h1>Spotify Music</h1>
        <p className="lead">Spotify Music es una plataforma que te permite descubrir y disfrutar de música en línea.</p>
        <img src={spotifyImage} alt="Imagen spotify" className="img-fluid w-50" />

        </div>
  );
};

export default About;
