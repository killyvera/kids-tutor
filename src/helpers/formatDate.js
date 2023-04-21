const formatFecha = (fechaStr) => {
    const fecha = new Date(fechaStr);
    const opciones = { day: 'numeric', month: 'long', year: 'numeric' };
    return fecha.toLocaleDateString('es-ES', opciones);
  };

  export default formatFecha;
  