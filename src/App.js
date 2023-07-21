import "./App.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, Route, BrowserRouter as Router , Routes } from "react-router-dom";

import Home from "./Home.js";
import About from "./About";
import Users from "./Users";

function App() {
  return (
    <Router>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand >Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/users">Users</Link></Nav.Link>
            <Nav.Link><Link to="/about">About</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <Routes>
      <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/" element={<Home />} />
      </Routes>

    </Router>
  );
}

export default App;
