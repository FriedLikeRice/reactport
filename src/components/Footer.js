//Needs links to my Github, Linkedin, and a Third Platform?

import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>My Full Stack Development Portfolio</strong> - a React site by{" "}
          <a href="https://github.com/friedlikerice" target="_blank" rel="noreferrer">
            Jacob
          </a>
          .
          <hr />
          <a
            href="https://www.linkedin.com/in/jacob-ferraro-108a44b7/"
            target="_blank" rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          |{" "}{" "}
      
        </p>
      </div>
    </footer>
  );
}

export default Footer;
