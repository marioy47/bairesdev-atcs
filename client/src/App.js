import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";

import Home from "./components/home";
import Aircrafts from "./components/aircrafts";
import Queue from "./components/queue";

function App() {
  return (
    <Router>
      <Navbar bg="dark" expand="lg" variant="dark">
        <LinkContainer to="/">
          <Navbar.Brand>ATCS</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer exact to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/aircrafts">
              <Nav.Link>Aircrafts</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/queue">
              <Nav.Link>Queue</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Container className="pt-5">
          <Route exact path="/" component={Home} />
          <Route exact path="/aircrafts" component={Aircrafts} />
          <Route exact path="/queue" component={Queue} />
        </Container>
      </Switch>
    </Router>
  );
}

export default App;
