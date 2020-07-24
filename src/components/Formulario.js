import React, {Fragment, useState} from "react";
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {

    // Crear state de citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    //state de error
    const [error, atualizarError] = useState(false);

    // Funcion que ejecuta cada que el usuario escribe dentro del input
    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })

    };

    // Extraer los valores
    const {mascota, propietario, fecha, hora, sintomas} = cita;


    // cuando el usuario presiona enviar cita
    const submitCita = e => {
        e.preventDefault();

        //validar
        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            atualizarError(true);
            return;
        }
        // eliminar e mensaje previo
        atualizarError(false);

        // asiganr id
        cita.id = uuid();

        // crear la cita
        crearCita(cita);

        // reiniciar el form
        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        });

    };
    return (
        <Fragment>
            <h2>Crear Cita</h2>
            {error ?
                <p className="alerta-error">Todos los campos son obligarorios</p> : null
            }

            <form
                onSubmit={submitCita}
            >
                <label htmlFor="namePet">Nombre Mascota</label>
                <input type="text"
                       id="namePet"
                       name="mascota"
                       className="u-full-width"
                       placeholder="Nombre Mascota"
                       onChange={actualizarState}
                       value={mascota}
                />

                <label htmlFor="nameAmo">Nombre Dueño</label>
                <input type="text"
                       id="nameAmo"
                       name="propietario"
                       className="u-full-width"
                       placeholder="Nombre Dueño"
                       onChange={actualizarState}
                       value={propietario}
                />

                <label htmlFor="date">Fecha</label>
                <input type="date"
                       id="date"
                       name="fecha"
                       className="u-full-width"
                       onChange={actualizarState}
                       value={fecha}
                />

                <label htmlFor="time">Hora</label>
                <input type="time"
                       id="time"
                       name="hora"
                       className="u-full-width"
                       onChange={actualizarState}
                       value={hora}
                />

                <label>Sintomas</label>
                <textarea name="sintomas"
                          className="u-full-width"
                          onChange={actualizarState}
                          value={sintomas}
                ></textarea>

                <button className="u-full-width button-primary">Agregar Cita</button>
            </form>
        </Fragment>

    )
};
Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default Formulario;
