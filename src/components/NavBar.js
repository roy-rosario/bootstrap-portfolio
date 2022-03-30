import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import logo from '../logo.png'
import '../App.css'


const NavBar = () =>{
    return(
        <div>
            <Navbar bg="dark"  expand="lg" >
                <Container fluid>
                    <Navbar.Brand href="#home"><img className='logo' src={logo} alt="logo..."/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className="ms-2 n-link" href="#home">about</Nav.Link>
                        <Nav.Link className="ms-2 n-link" href="#link">services</Nav.Link>
                        <Nav.Link className="ms-2 n-link" href="#link">work</Nav.Link>
                        <Nav.Link className="ms-2 n-link" href="#link">portfolio</Nav.Link>
                        <Nav.Link className="ms-2 n-link" href="#link">contacts</Nav.Link>
                        {/* <NavDropdown className="n-link" title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar