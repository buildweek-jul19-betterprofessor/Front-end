import React from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";


import StudentsList from ".//StudentsList";

const Home = () => {
  return (
    <Container>
      <AppBar>
        <div className="app-bar">
          <h1>Better Professor</h1>
            <div className="menu-buttons">
              <Link to="/login">
                <Button>Login</Button>
              </Link>
              <Link to="/register">
                <Button>Register</Button>
              </Link>
            </div>
        </div>
      </AppBar>
      <div className="main-content">
        <StudentsList/>
      </div>
    </Container>
  );
};

export default Home;