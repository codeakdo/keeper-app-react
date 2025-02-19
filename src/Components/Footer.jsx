import React from "react";


function Footer(){
    const currentYear = new Date().getFullYear();
    return (
        <footer>   
             <p>Copyright ⓒ {currentYear} <i>coded by EA</i></p>
        </footer>

   )
};
export default Footer;





