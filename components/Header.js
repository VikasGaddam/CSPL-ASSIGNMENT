import React from 'react';
import {Container,Form,Nav,Navbar} from 'react-bootstrap';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import EmailIcon from '@mui/icons-material/Email';
import SearchIcon from '@mui/icons-material/Search';


const Header = () => {
  return (
    <div>
        <Navbar sticky='top' collapseOnSelect expand="lg" bg="success" variant="dark">
      <Container className='m-2'>
      <Navbar.Brand  href='#' className='text-white fw-bold'>
              <img src='https://www.shutterstock.com/image-vector/aircraft-airplane-airline-logo-label-260nw-1144866683.jpg' alt='' 
              height="40" 
              width="70"
              />
              {/* for spacing between logo n text */}
              &nbsp; 
            DENSO
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <AddIcCallIcon className='mt-2'/>
            <Nav.Link href="#contact" className='me-5'>CALL US : +011234567890</Nav.Link>
            <EmailIcon className='mt-2'/>
            <Nav.Link href="#gmail">demo@gmail.com</Nav.Link>
          </Nav>
          <Nav>
            
          <Form className="d-flex">
          
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            
            
          </Form>
          <SearchIcon className='mt-2'/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Navbar collapseOnSelect expand="lg" className='bg-black'>
      <Container className='text-white'>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="#features" className='me-5 text-white'>HOME</Nav.Link>
            <Nav.Link href="#features" className='me-5 text-white'>ABOUT</Nav.Link>
            <Nav.Link href="#features" className='me-5 text-white'>TRANSPORT</Nav.Link>
            <Nav.Link href="#features" className='me-5 text-white'>NEWSCLIENTS</Nav.Link>
            <Nav.Link href="#features" className='me-5 text-white'>CLIENTS</Nav.Link>
            <Nav.Link href="#features" className='me-5 text-white'>CONTACT US</Nav.Link>
            <Nav.Link href="#features" className='me-5 text-white'>LOGIN</Nav.Link>
            <Nav.Link href="#pricing" className='me-5 text-white'>REGISTER</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header