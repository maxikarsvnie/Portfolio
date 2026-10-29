
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contacto() {
  const formulario = useRef(null);
  const [estado, setEstado] = useState("inicial");

  async function enviarMensaje(evento) {
    evento.preventDefault();
    setEstado("enviando");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formulario.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setEstado("enviado");
      formulario.current.reset();
    } catch (error) {
        console.error("Error de EmailJS:", error);
        console.error("Detalle:", error?.text ?? error);
        setEstado("error");
        }
  }

  return (
    <div className="contacto-grid">
      <div className="contacto-info">
        <div className="contacto-redes">
            <p className="etiqueta">HABLEMOS</p>
            <h3>¿Tenés una propuesta?</h3>
            <p>
            Estoy abierto a oportunidades laborales,
            proyectos y nuevas experiencias de aprendizaje.
            Mandame un mensaje y me pondré en contacto.
            </p>

            <a
            href="https://github.com/maxikarsvnie"
            target="_blank"
            rel="noreferrer"
            >
            <i className="bi bi-github"></i>
            <span>
                GitHub ↗
            </span> 
            </a>

            <a
            href="https://www.linkedin.com/in/maxikarsvnie/"
            target="_blank"
            rel="noreferrer"
            >
            <i className="bi bi-linkedin"></i>
            LinkedIn ↗
            </a>

            <a
                href="https://wa.me/qr/ZJCBB4VQGGBBI1"
                target="_blank"
                rel="noreferrer"
            >
            <i className="bi bi-whatsapp"></i>
            WhatsApp ↗
            </a>
        </div>      
      </div>

      <form
        ref={formulario}
        onSubmit={enviarMensaje}
        className="contacto-form"
      >
        <label htmlFor="user_name">Nombre</label>
        <input
          id="user_name"
          type="text"
          name="user_name"
          placeholder="Tu nombre"
          required
          maxLength={100}
        />

        <label htmlFor="user_email">Correo electrónico</label>
        <input
          id="user_email"
          type="email"
          name="user_email"
          placeholder="tu@email.com"
          required
          maxLength={200}
        />

        <label htmlFor="subject">Asunto</label>
        <input
          id="subject"
          type="text"
          name="subject"
          placeholder="Motivo del contacto"
          required
          maxLength={150}
        />

        <label htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="Escribí tu mensaje..."
          required
          maxLength={3000}
        />

        <button
          type="submit"
          className="btn btn-violeta"
          disabled={estado === "enviando"}
        >
          {estado === "enviando"
            ? "Enviando..."
            : "Enviar mensaje ↗"}
        </button>

        {estado === "enviado" && (
          <p className="mensaje-exito" role="status">
            ¡Mensaje enviado correctamente!
          </p>
        )}

        {estado === "error" && (
          <p className="mensaje-error" role="alert">
            No se pudo enviar el mensaje. Intentá nuevamente.
          </p>
        )}
      </form>
    </div>
  );
}

export default Contacto;
