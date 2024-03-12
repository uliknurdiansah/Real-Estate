import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


const Navmenu = () => {
  return (
    <Navbar  expand="md" bg="secondary" data-bs-theme="dark" >
    <Container className='fw-bold' >
      <Navbar.Brand  href="#home">Perum Lestari</Navbar.Brand>
      <Navbar.Toggle  aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className='text-center' id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className='active' href="/">Home</Nav.Link>
          <Nav.Link href="#abaut">Abaout</Nav.Link>
          <Nav.Link  href="#testimoni">Testimoni</Nav.Link>
          <Nav.Link  href="#galeri">Galeri</Nav.Link>
          </Nav>
            <Button className="btn-secondary btn-outline-warning  ms-4 fw-bold" href="#contact">Contact</Button>

      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navmenu