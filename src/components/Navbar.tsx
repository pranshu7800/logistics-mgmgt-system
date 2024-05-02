import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../redux/actions';

const Navbar: React.FC = () => {
    const email = useSelector((state: any) => state.auth.email);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log(email);

    const handleLogout = () => {
        dispatch(authActions.logout());
        navigate("/")
    }

    return (
        <>
            <AppBar position="static" color='primary'>
                <Toolbar>
                    <div style={{ flexGrow: 1 }}>
                        <Link to="/">
                            <img src={"/logo.png"} alt="glologistics logo" width={130} />
                        </Link>
                    </div>
                    <Button color="inherit" component={Link} to="#">Investors</Button>
                    {email && <Button color="inherit" component={Link} to="/services/shipments">Services</Button>}
                    <Button color="inherit" component={Link} to="/about">About Us</Button>
                    <Button color="inherit" component={Link} to="/contact">Contact Us</Button>
                    {email && <Button color="inherit" component={Button} onClick={handleLogout}>Logout</Button>}
                </Toolbar>
            </AppBar>
            <Outlet />
            <Footer />
        </>
    );
};

export default Navbar;