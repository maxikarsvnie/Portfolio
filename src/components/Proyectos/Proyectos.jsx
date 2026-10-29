
const proyectos = [
  {
    id: 1,
    titulo: "Sistema de gestión de biblioteca",
    descripcion:
      "Proyecto académico de Programación 3 orientado a la gestión de una biblioteca.",
    tecnologias: ["C#", ".NET"],
    github:
      "https://github.com/maxikarsvnie/Tarea_gestiondebiblioteca",
  },
  {
    id: 2,
    titulo: "Acceso a datos con ADO.NET",
    descripcion:
      "Práctica de acceso a datos que trabaja con tres motores de bases de datos.",
    tecnologias: ["C#", "ADO.NET", "MySQL", "SQL Server", "PostgreSQL"],
    github: "https://github.com/maxikarsvnie/ADO.NET-",
  },
];

function Proyectos() {
  return (
    <div className="row g-4 mt-2">
      {proyectos.map((proyecto) => (
        <div className="col-12 col-md-6" key={proyecto.id}>
          <article className="proyecto-card h-100">
            <div className="proyecto-numero">
              PROYECTO 0{proyecto.id}
            </div>

            <h3>{proyecto.titulo}</h3>

            <p>{proyecto.descripcion}</p>

            <div className="d-flex flex-wrap gap-2 mb-4">
              {proyecto.tecnologias.map((tecnologia) => (
                <span className="tecnologia" key={tecnologia}>
                  {tecnologia}
                </span>
              ))}
            </div>

            <a
              href={proyecto.github}
              target="_blank"
              rel="noreferrer"
              className="enlace-proyecto"
            >
              Ver código en GitHub ↗
            </a>
          </article>
        </div>
      ))}
    </div>
  );
}

export default Proyectos;
