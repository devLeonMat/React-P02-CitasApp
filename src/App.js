import React, {Fragment, useState, useEffect} from 'react';
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";
import Footer from "./components/Footer";


function App() {

    // citas en localStorage
    let citasInciales = JSON.parse(localStorage.getItem('citas'));
    if (!citasInciales) {
        citasInciales = [];
    }

    // Areeglo de citas
    const [citas, guardarCitas] = useState(citasInciales);

    // use useEfect para realizar ciertas operaciones cuando el state cambia
    useEffect(() => {
        if (citasInciales) {
            localStorage.setItem('citas', JSON.stringify(citas));
        } else {
            localStorage.setItem('citas', JSON.stringify([]));
        }

    }, [citas, citasInciales]);


    // Funcion que tome las citas actuales y agregue la nueva
    const crearCita = cita => {
        guardarCitas([
            ...citas, cita
        ])
    };

    // Funcion que elimina una cita por su ID
    const eliminarCita = id => {
        const nuevasCitas = citas.filter(cita => cita.id !== id);
        guardarCitas(nuevasCitas);
    };

    // mensaje condicional
    const titulo = citas.length === 0 ? 'no hay citas' : 'Administra tus Citas';

    return (
        <Fragment>
            <h1>Administrador de Pacientes</h1>
            <div className="container">
                <div className="row">
                    <div className="one-half column">
                        <Formulario crearCita={crearCita}/>
                    </div>
                    <div className="one-half column">
                        <h2>{titulo}</h2>
                        {citas.map(cita => (
                            <Cita
                                key={cita.id}
                                cita={cita}
                                eliminarCita={eliminarCita}
                            />
                        ))}
                    </div>
                </div>


            <Footer />
            </div>
        </Fragment>
    );
}

export default App;
