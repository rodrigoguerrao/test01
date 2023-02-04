//import react from 'react';
import '../css/Testimonio.css';

function Testimonio(props) {
  return(
    <div className='Contenedor-testimonio'>
      <img
        className='imagen-testimonio'
        src={require(`../images/testimonio-${props.imagen}.bmp`)}
        alt='Foto de Emma' 
      />
      <div className='contenedor-texto-testimonio'>
      <p className='nombre-testimonio'><strong>{props.nombre}</strong> en {props.pais}</p>
      <p className='cargo-testimonio'>{props.cargo} en <strong>{props.empresa}</strong></p>
      <p className='testimonio-testimonio'>{props.testimonio}</p>
      </div>  
    </div> 
  );
}

export default Testimonio;

