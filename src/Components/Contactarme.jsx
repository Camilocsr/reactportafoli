import React from "react";
import axios from 'axios';

const Contacto = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const nombre = document.getElementById('name').value;
    const correo = document.getElementById('email').value;
    let numero = document.getElementById('number-contac').value.toString();
    let whatsapp = document.getElementById("whatsapp").value.toString();
    const asunto = document.getElementById('asunto').value;
    const parrafo = document.getElementById('parrafo-formulario');

    let entrar = false;
    let texto = "";
    const validarEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,6})+$/;

    if (nombre.length < 4) {
      texto += `El nombre no es válido. <br>`;
      entrar = true;
    } else if (!validarEmail.test(correo)) {
      texto += `El email no es válido. <br>`;
      entrar = true;
    } else if (numero.length !== 10) {
      texto += `El número de celular no es válido. Debe tener 10 dígitos. <br>`;
      entrar = true;
    } else if (whatsapp.length !== 10) {
      texto += `El número de WhatsApp no es válido. Debe tener 10 dígitos. <br>`;
      entrar = true;
    } else if (asunto.length < 10) {
      texto += `El asunto debe tener al menos 10 caracteres. <br>`;
      entrar = true;
    } else {
      // Agregar prefijo "+57" a los números de teléfono
      numero = "+57" + numero;
      whatsapp = "+57" + whatsapp;
      entrar = true;
    }

    if (entrar) {
      parrafo.innerHTML = texto;
      
      if (texto === "") {
        const formData = {
          name: nombre,
          email: correo,
          number: numero,
          whatsapp: whatsapp,
          asunto: asunto
        };

        // Enviar datos del formulario en una solicitud POST utilizando Axios
        axios.post('http://3.144.250.142:80/InfoContacto', formData)
          .then(response => {
            console.log('Respuesta del servidor:', response.data);
            let textoparrafo = response.data;
            parrafo.innerHTML = textoparrafo;
          })
          .catch(error => {
            console.error('Error al enviar formulario:', error);
          });
      }
    }
  };

  return (
    <section id="contacto" className="container-fluid color-pantalla-contactos">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 container-principal-agradesimiento">
          <div className="contenedor-texto-agradesimiento wow animate__animated animate__shakeY">
            <p><span className="letra-agradecimiento">«</span>Estoy muy contento de saber que viste toda mi página, quiero darte las gracias por haberte tomado el tiempo, espero poder ayudarte en lo que necesites, conocerte y trabajar contigo.<span className="letra-agradecimiento">»</span></p>
          </div>
        </div>
        <div className="contenedor-formulario col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <form className="wow animate__animated animate-delay-2s animate__rotateOut" onSubmit={handleSubmit} id="form">
            <div className="form">
              <h1 className="titulo-contacto">Contactar.</h1>
              <div className="grupo">
                <input type="text" name="name" id="name" /><span className="barra"></span>
                <label className="">Nombre</label>
              </div>

              <div className="grupo">
                <input type="email" name="email" id="email" /><span className="barra"></span>
                <label>Email</label>
              </div>

              <div className="grupo">
                <input type="number" name="number" id="number-contac" /><span className="barra"></span>
                <label>Número</label>
              </div>

              <div className="grupo">
                <input type="number" name="whatsapp" id="whatsapp" /><span className="barra"></span>
                <label>WhatsApp</label>
              </div>

              <div className="grupo">
                <textarea type="text" name="asunto" placeholder="Te escribo por el motivo de..." id="asunto" rows="4"></textarea><span className="barra"></span>
                <label>Asunto</label>
              </div>
              <button className="btn-contacto" type="submit">Contactar</button>
              <p className="parrafo-form" id="parrafo-formulario"></p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contacto;