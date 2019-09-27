import React from 'react';
import Responsive from 'react-responsive';

const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

const Gmaps = (props) => {
  return (
    <div>
    <Default>
    <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220448.69812909307!2d-97.89383000847441!3d30.307982343844536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1569524349823!5m2!1sen!2sus" 
    width="600" 
    height="450" 
    frameborder="0" 
    style={{border:"0"}} 
    allowfullscreen=""></iframe>
    </Default>
    <Mobile>
      <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220448.69812909307!2d-97.89383000847441!3d30.307982343844536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1569524349823!5m2!1sen!2sus" 
    width="100%" 
    frameborder="0" 
    style={{border:"0"}} 
    allowfullscreen="">
    </iframe>
    </Mobile>
    </div>
  );
};

export default Gmaps;