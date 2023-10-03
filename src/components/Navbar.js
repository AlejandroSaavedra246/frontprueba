import React from "react";

function Navbar() {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        //marginTop: '-20px',
        //height: '100vh', // Esto hace que el contenedor ocupe toda la altura de la pantalla
        background: 'linear-gradient(90deg, #147ABA 0%, #EBC500 100%)',
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        color: 'White', // Color del Texto
        padding: '10px', // Espaciado interior
      };

    return (
       <div style={containerStyle}>
        <nav class="navbar navbar-expand-lg bg-body-tertiary d-flex justify-content-center">
        <div class="container-md">
        <p class="navbar-brand" >ASOCIACIÓN DE TRIATLÓN DEL GUADIANA A.C.</p>
        </div>
        </nav>
       </div> 
    )
}



export default Navbar;