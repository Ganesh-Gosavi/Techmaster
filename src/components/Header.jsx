import React from 'react'
import { Link } from 'react-router-dom';
import{HashLink} from "react-router-hash-link"



function Header() {
  return (
   <nav>
    <h1>Tech-Master</h1>
    <main>
    <HashLink to='/#Home'>Home</HashLink>
    <HashLink to='/Contact'>Contact</HashLink>
    <HashLink to='/#About'>About</HashLink>
    <HashLink to='/#Brands'>Brands</HashLink>
    <HashLink to='/Services'>Services</HashLink>
  
    </main>
   </nav>
  );
}  

export default Header;