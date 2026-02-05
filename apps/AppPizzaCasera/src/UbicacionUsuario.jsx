import React, { useState } from 'react';

const UbicacionUsuario = () => {
  const [ubicacion, setUbicacion] = useState(null);
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(false);

  const pedirUbicacion = () => {
    setCargando(true);
    setError(null);
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUbicacion({
            latitud: position.coords.latitude,
            longitud: position.coords.longitude,
          });
          setCargando(false);
        },
        (err) => {
          setError('No se pudo obtener la ubicación: ' + err.message);
          setCargando(false);
        }
      );
    } else {
      setError('La geolocalización no está soportada en este navegador.');
      setCargando(false);
    }
  };

  return (
    <div style={{ margin: '1em 0' }}>
      <button onClick={pedirUbicacion} disabled={cargando}>
        {cargando ? 'Obteniendo ubicación...' : 'Obtener mi ubicación'}
      </button>
      {ubicacion && (
        <div>
          <p>Latitud: {ubicacion.latitud}</p>
          <p>Longitud: {ubicacion.longitud}</p>
        </div>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default UbicacionUsuario;
