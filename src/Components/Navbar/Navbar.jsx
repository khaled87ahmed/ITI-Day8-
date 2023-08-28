import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand >Navbar</Navbar.Brand>
          <Nav className="ms-auto">
            <Link className='text-decoration-none mx-2' to="/">Title</Link>
            <Link className='text-decoration-none mx-2 ' to="/aboutme">About</Link>
            <Link className='text-decoration-none mx-2' to="/skills">Skills</Link>
            <Link className='text-decoration-none mx-2 ' to="/portfolio">Portfolio</Link>

            
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

