import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import NextLink from "next/link";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg" sticky="top" variant="dark" className="header-full">
        <Container>
          <Navbar.Brand href="/" className="text-white logo">
            Fashion Blog
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="" />
          <Navbar.Collapse id="">
            <Nav className="mx-auto my-2 my-lg-0 text-dark" style={{ maxHeight: "100px" }}>
              <NextLink href="/" className="nav-items">
                Home
              </NextLink>
              {/* <Nav.Link
                className="nav-items"
                to="/"passHref
                // style={({ isActive }) => (isActive ? navStyle : null)}
              >
                Home
              </Nav.Link> */}
              {/* <Nav.Link
                className="nav-items"
                to="/"
                // style={({ isActive }) => (isActive ? navStyle : null)}
              >
                Home
              </Nav.Link> */}
              {/* <NavLink
                className="nav-items"
                to="/"
                style={({ isActive }) => (isActive ? navStyle : null)}
              >
                About Me
              </NavLink>
              <NavLink
                className="nav-items"
                to="/"
                style={({ isActive }) => (isActive ? navStyle : null)}
              >
                Contact Me
              </NavLink> */}
            </Nav>
            <Nav>
              <NextLink href="/cart">Cart</NextLink>
              <NextLink href="/login">Login</NextLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
