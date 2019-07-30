import React from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";


const Home = () => {
  return (
    <Container>
        <div className="main-content">
          <div className="welcome-section">
            <h2>Welcome to Better Professor</h2>
              <p>Please <Link to="/register">Register</Link> or <Link to="/login">Login</Link> to unlock your Better!</p>
          </div>
          <div>
            <img class="homepage-image" alt="Rochelle Nicole on Unsplash" src="https://images.unsplash.com/photo-1461039088886-b5c863279a0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"/>
          </div>
        </div>
    </Container>
  );
};

export default Home;