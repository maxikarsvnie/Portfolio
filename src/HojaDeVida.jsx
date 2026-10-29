
import "./App.css";

function HojaDeVida() {
  const rutaCV = "/CV-Maximiliano-Karsvnie.pdf";

  return (
    <main className="portfolio pagina-cv">
      <div className="container py-4">
        <a href="/" className="marca">
          MK<span>.</span>
        </a>

        <div className="cv-encabezado">
          <p className="etiqueta">CURRÍCULUM VITAE</p>
          <h1>Mi hoja de vida</h1>
          <p>
            Maximiliano Agustín Karsvnie
          </p>

          <div className="d-flex flex-wrap gap-3 mt-4">
            <a href="/" className="btn btn-outline-light">
              ← Volver al portfolio
            </a>

            <a
              href={rutaCV}
              download="CV-Maximiliano-Karsvnie.pdf"
              className="btn btn-violeta"
            >
              Descargar CV ↓
            </a>
          </div>
        </div>

        <div className="cv-visor">
          <iframe
            src={rutaCV}
            title="Currículum de Maximiliano Karsvnie"
            width="100%"
            height="750"
          />
        </div>
      </div>
    </main>
  );
}

export default HojaDeVida;
