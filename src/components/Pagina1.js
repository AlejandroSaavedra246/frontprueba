import React from 'react';
import Navbar from './Navbar';

function Pagina1() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    //marginTop: '-40px',
    height: '100vh', // Esto hace que el contenedor ocupe toda la altura de la pantalla
    background: '#d9d9d9',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    color: 'Black', // Color del Texto
    padding: '10px', // Espaciado interior
  };

  return (
    <div> <Navbar> </Navbar>
    <div style={containerStyle}>
    <div>
      <h2>Triatlon</h2>
      <p>Contenido de la página 1.</p>
    </div>
   </div> 
   </div>
  );
}

export default Pagina1;
