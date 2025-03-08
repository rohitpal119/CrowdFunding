import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Modal, Tab } from "react-bootstrap";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import Auth from "../utils/auth";

const AppNavBar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar
        variant="light"
        expand="lg"
        className="shadow-sm bg-white py-3"
      >
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img
              src="/logo-no-background.png"
              width="64"
              alt="The Goodness Gift Logo"
              className="me-2"
            />
            <span className="site-title fs-4 fw-bold" style={{ color: "#FFD1DC" }}>
              The Goodness Gift
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" className="border-0" />
          <Navbar.Collapse id="navbar" className="justify-content-end">
            <Nav className="align-items-center">
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link
                    as={Link}
                    to="/created"
                    className="nav-text me-3 fw-semibold text-dark"
                  >
                    My Fundraisers
                  </Nav.Link>
                  <Nav.Link
                    className="nav-text fw-semibold text-dark"
                    onClick={Auth.logout}
                  >
                    Logout
                  </Nav.Link>
                </>
              ) : (
                <Nav.Link
                  className="nav-text fw-semibold text-dark"
                  onClick={() => setShowModal(true)}
                >
                  Login/Sign Up
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="signup-modal"
        centered
      >
        <Tab.Container defaultActiveKey="login">
          <Modal.Header closeButton className="border-0 pb-0">
            <Modal.Title id="signup-modal" className="w-100 text-center">
              <Nav className="justify-content-center">
                <Nav.Item>
                  <Nav.Link
                    eventKey="login"
                    className="signup-button fs-5 fw-bold text-dark mx-3"
                  >
                    Login
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="signup"
                    className="signup-button fs-5 fw-bold text-dark mx-3"
                  >
                    Sign Up
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="px-5 py-4">
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey="signup">
                <SignupForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default AppNavBar;