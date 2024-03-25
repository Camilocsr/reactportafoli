import React from "react";

const Presentacion = () => {
    return (
        <section className="container-fluid imagen-principal">
            <div className="row">
                <div className="presentacion col-12">
                    <h1 className="centar-bienvenida">Bienvenidos</h1>
                    <h2 className="presentacion-h2">Soy <span className="nombre-span"> Camilo Solano</span>, Desarrollador Web.</h2>
                    <p className="descripcion-som">La creatividad nunca sale mal, todo lo que necesitas <br/> es motivación.</p>
                    <div className="btn-portafolio wow animate__animated animate__wobble"><a className="btn-img" href="#sobremi">Sobre mi</a></div>
                </div>
            </div>
        </section>
    )
}

export default Presentacion;