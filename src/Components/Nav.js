import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import party from '../Assets/Dinner_logo.svg'
import party from '../Assets/SMS Jail Cafe.png'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';

function Nav1() {
    return (
        <>
            {['xxl'].map((expand) => (
                <Navbar key={expand} expand={expand} className='header bg-dark' >
                    <Container fluid>
                        <Navbar.Brand ><Link to="/"><img src={party} alt="#" className='logo' /></Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton className='bg-dark'>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    <Link to="/"><img src={party} alt="#" className='logo' /></Link>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body className='bg-dark'>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="#home" className='pe-5 text-light navtxt'>Home</Nav.Link>
                                    <Nav.Link href="#speciality" className='pe-5 text-light navtxt'>Speciality</Nav.Link>
                                    <Nav.Link href="#popular" className='pe-5 text-light navtxt'>Popular</Nav.Link>
                                    <Nav.Link href="#gallery" className='pe-5 text-light navtxt'>Gallery</Nav.Link>
                                    <Nav.Link href="#order" className='pe-5 text-light navtxt'>Order</Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>

            ))
            }
            <div className='d-md-none'>
                <img src='https://wallpaperaccess.com/full/6169319.jpg' alt="" className='img-fluid sms'/>
            </div>
        </>
    );
}

export default Nav1;