// Recent Photo or Avatar
// Short Biography
import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">ABA and Something-of-a Full Stack Developer</p>
      <hr />
      <img className="my-pic" src={process.env.PUBLIC_URL + 'public\img\selfie1.jpg'} alt="Jacob"/>
      <p className="content is-italic mt-4">
        I'm Jacob, an ABA studying the full stack to better my work
        as a technical writer in the tech and SaaS fields.
      </p>
      <p className="content">
    
      </p>
    </div>
  );
}

export default About;
