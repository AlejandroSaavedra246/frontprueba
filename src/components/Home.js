import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function Home() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    //marginTop: '-40px',
    height: '100vh', // Esto hace que el contenedor ocupe toda la altura de la pantalla
    background: '#d9d9d9',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    color: 'Black', // Color del Texto
    padding: '10px', // Espaciado interior
  };

  const titleStyle = {
    textAlign: 'center', // Centrar el texto
  };

  const linkContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '100px', // Espaciado superior
  };

  const linkStyle = {
    background: 'linear-gradient(180deg, rgba(232, 55, 35, 0.80) 0%, rgba(244, 136, 34, 0.80) 100%)', // Fondo blanco
    padding: '20px', // Espaciado interior del recuadro de texto
    borderRadius: '8px', // Borde redondeado
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', // Sombra alrededor del recuadro de texto
    margin: '10px', // Margen entre los recuadros de texto
    color: 'black', // Color del texto dentro de los recuadros
  };

  const linkStyle2 = {
    background: 'linear-gradient(180deg, rgba(20, 122, 186, 0.80) 0%, rgba(86, 168, 218, 0.80) 100%)', // Fondo blanco
    padding: '20px', // Espaciado interior del recuadro de texto
    borderRadius: '8px', // Borde redondeado
    boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)', // Sombra alrededor del recuadro de texto
    margin: '10px', // Margen entre los recuadros de texto
    color: 'black', // Color del texto dentro de los recuadros
  };

  
  return (
    <div> <Navbar> </Navbar> 
    <div style={containerStyle}>
      <div style={titleStyle}>
        <h1>Elige el Evento Indicado</h1>
      </div>
      <div style={linkContainerStyle}>
        <div style={linkStyle}>
          <h2>Evento: Triatlon</h2>
          <h2>Fecha: dd/mm/aaaa</h2>
          <h2>Ubicacion: Lorem</h2>
          <Link to="/Pagina1" style={{ textDecoration: 'none', color: 'white', alignItems: 'center' }}>Ver Detalles</Link>
        </div>
        <div style={linkStyle2}>
          <h2>Evento 2</h2>
          <h2>Fecha: dd/mm/aaaa</h2>
          <h2>Ubicacion: Lorem</h2>
          <Link to="/Pagina2" style={{ textDecoration: 'none', color: 'white' }}>Ver Detalles</Link>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Home;




