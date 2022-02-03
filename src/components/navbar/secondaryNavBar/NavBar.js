import * as React from "react";
import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import { Container, Typography, Button } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import PrimaryNavBar from '../primaryNavBar/PrimaryNavBar'
import logo from '../../../assets/images/logo-print-hd-transparent-removebg-preview.png';
import logoOnScroll from '../../../assets/images/on-scroll-logo.png';
import './navBar.css';

const NavBar = () => {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY > 100);
        })
    })
    return (
        <>
            <AppBar className={scroll ? "navbar-background" : "bg-royal-transparent"}>
                <div className={scroll ? "hide-primary-navbar" : ""}>
                    <PrimaryNavBar/>
                </div>
                <Container maxWidth="lg" className="secondary-navbar">
                    <Toolbar>
                        <img
                            src={scroll ? `${logo}` : `${logoOnScroll}`}
                            height="100%"
                            width="234px"
                        />
                    </Toolbar>
                </Container>
            </AppBar>
            below code is for scroll checking purpose only
            hey
            <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                hey
                kshiuh
            
        </>
    )
}
export default NavBar;