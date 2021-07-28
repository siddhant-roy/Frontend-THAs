import React, { useContext } from "react";
import Context from "./../Auth";

function Home() {
  const logger = useContext(Context);

  return (
    <div>
      <h1>Home</h1>
      <div>
        <h2>Login to access Profile and Dashboard</h2>
      </div>
      {
        logger.loading ? (
          "Loading..."
        ) : (
            <button onClick={logger.toggleLogin} className="btn">
              {logger.loggedIn ? "Logout" : "Login"}
            </button>
          )
      }
    </div>
  );
}

export default Home;