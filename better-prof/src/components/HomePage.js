import React from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";


import StudentsList from ".//StudentsList";

const Home = () => {
  return (
    <Container>
        <div className="main-content">
          <StudentsList/>
        </div>
    </Container>
  );
};

export default Home;