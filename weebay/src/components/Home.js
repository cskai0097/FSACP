import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

function Home() {
  const { isAuthenticated, username } = useContext(AuthContext);
    return (
      <div style={{textAlign:'center'}}>
        <div style={{ float: 'left'}}>
          {isAuthenticated && <p>Hello {username}!</p>}

        </div>
        <h1 style={{fontSize:"300%"}}>Weebay</h1>
        <p>Welcome to Weebay. Our finest selection of fake clothing and accessories.</p>
      </div>
    );
  }
  export default Home;