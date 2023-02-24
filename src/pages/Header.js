import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Hooks Practice</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/useeffect");
              }}
            >
              useEffect
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/useref");
              }}
            >
              useRef
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/usecontext");
              }}
            >
              useContext
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/usememo");
              }}
            >
              useMemo
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/usecallback");
              }}
            >
              useCallback
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/usereducer");
              }}
            >
              useReducer
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/usereducer2");
              }}
            >
              useReducer2
            </Nav.Link>
            <Nav.Link
              style={{ color: "white" }}
              onClick={() => {
                console.clear();
              }}
            >
              Clear
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
