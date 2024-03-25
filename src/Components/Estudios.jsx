import React from "react";

const Estudios = () => {
    return (
        <section id="estudios" className="container-fluid degradado-estudios">
            <div className="titulo-portafolio">
                <h1 className="text-estudio">Estudios</h1>
            </div>
            <div className="row wow animate__animated animate__bounceInLeft animate-delay-2s">
                <div className="container-primaria col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div className="primaria">
                        <h1 className="titulo-estudios-">Primaria.</h1>
                        <h3 className="h-primaria">Institución: <span className="respuesta-estudio">COLEGIO NUEVA VIDA - FECI</span></h3>
                        <h3 className="h-primaria">Fecha: <span className="respuesta-estudio">2014</span></h3>
                        <h3 className="h-primaria">Telefono de Contacto: <span className="respuesta-estudio">(601) 7905139 - 3123766295</span></h3>
                    </div>
                </div>

                <div className="container-primaria col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div className="primaria">
                        <h1 className="titulo-estudios-">Bachiller.</h1>
                        <h3 className="h-primaria">Institución: <span className="respuesta-estudio">Externado Simon Bolivar.</span></h3>
                        <h3 className="h-primaria">Rector: <span className="respuesta-estudio">Eduin Mauricio Cantor.</span></h3>
                        <h3 className="h-primaria">Fecha: <span className="respuesta-estudio">08/08/2020</span></h3>
                        <h3 className="h-primaria">Telefono de Contacto: <span className="respuesta-estudio">+57 3143747450</span></h3>
                    </div>
                </div>

                <div className="container-primaria col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div className="primaria">
                        <h1 className="titulo-estudios-">Cursos.</h1>
                        <h3 className="h-diseñar">Diseñar páginas web con html y JavaScript</h3>
                        <h3 className="h-primaria">Institución: <span className="respuesta-estudio">El Sena</span></h3>
                        <h3 className="h-primaria">Subdirectora: <span className="respuesta-estudio">Doris C. Guevara A.</span></h3>
                        <h3 className="h-primaria">Fecha: <span className="respuesta-estudio">24/05/2022</span></h3>
                        <h3 className="h-primaria">Telefono de Contacto: <span className="respuesta-estudio">(57 1) 3430111</span></h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Estudios;