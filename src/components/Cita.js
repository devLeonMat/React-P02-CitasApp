import React from "react";
import PropTypes from 'prop-types';

const Cita = ({cita, eliminarCita}) => (
    <div className="cita mb-2">
        <p>Mascota: <span>{cita.mascota}</span></p>
        <p>Dueño: <span>{cita.propietario}</span></p>
        <p>Fecha y Hora: <span>{cita.fecha} {cita.hora}</span></p>
        <p>Sintomas: <span>{cita.sintomas}</span></p>
        <button className="button eliminar u-full-width"
                onClick={() => eliminarCita(cita.id)}
        >Eliminar
        </button>
    </div>

);
Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
};

export default Cita;
