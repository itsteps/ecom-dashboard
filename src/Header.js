import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom';

function Header() {
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('user-info'));
    function Logout()
    {
        localStorage.clear();
        history.push('/login');
    }
    return (

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <div className="container">
                    <Navbar.Brand href="#home">React Admin</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            {
                                localStorage.getItem('user-info')?
                                    <>
                                        <Link to="/add" className="nav-link">Add Product</Link>
                                        <Link to="/update" className="nav-link">Update Product</Link>
                                    </>
                                    :
                                    <>
                                        <Link to="/login" className="nav-link">Login</Link>
                                        <Link to="/register" className="nav-link">Register</Link>
                                    </>
                            }
                        </Nav>
                        {localStorage.getItem('user-info') ?
                            <Nav>
                                <NavDropdown title={user && user.name} id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Account Detail</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Change Password</NavDropdown.Item>
                                    <NavDropdown.Divider/>
                                    <NavDropdown.Item onClick={Logout}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            : null
                        }
                    </Navbar.Collapse>
                </div>
            </Navbar>

    )
}

export default Header