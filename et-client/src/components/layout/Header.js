import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export const Header = () => {
  const [userobj, setUserObj] = useState({});
  useEffect(() => {
    const userObj = JSON.parse(sessionStorage.getItem("user"));
    setUserObj(userObj);
  }, []);

  const handleOnClick = () => {
    sessionStorage.removeItem("user");
  };
  return (
    <Navbar bg="primary" expand="md" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {userobj?._id ? (
              <>
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
                <Link onClick={handleOnClick} className="nav-link" to="/">
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link className="nav-link" to="/">
                  Login
                </Link>
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
