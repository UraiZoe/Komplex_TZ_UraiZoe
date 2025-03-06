import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import navbarKep from "../public/img/oktatas-01.jpg"
import "../src/Navbar.css"

function Navbar() {

  return (
    <>
    <div>
        <Container>
        <img id="navbarKep" src="{navbarKep}" alt="Fejléc"/>
        </Container>
    </div>
    </>
  )
}

export default Navbar
