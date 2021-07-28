import React, { useContext } from "react";
import Context from "./../Auth";

function About() {
  const logger = useContext(Context);
  return (
    <div>
      <h2>
        {logger.loggedIn
          ? "Logged in! Visit your profile and dashboard"
          : "Logged out! Login to continue"}
      </h2>
    </div>
  );
}

export default About;