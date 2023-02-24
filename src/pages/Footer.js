import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Test</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/test/useeffect");
              }}
            >
              useEffect
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/test/useref");
              }}
            >
              useRef
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/test/usecontext");
              }}
            >
              useContext
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/test/usememo");
              }}
            >
              useMemo
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/test/usecallback");
              }}
            >
              useCallback
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/test/usereducer");
              }}
            >
              useReducer
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/test/usereducer2");
              }}
            >
              useReducer2
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/test/employee");
              }}
            >
              Employee
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/test/employee1");
              }}
            >
              Employee1
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

export default Footer;
