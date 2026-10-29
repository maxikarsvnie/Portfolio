
const tecnologias = [
  {
    nombre: "HTML5",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    nombre: "CSS3",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    nombre: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    nombre: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    nombre: "Bootstrap",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
  },
  {
    nombre: "C#",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
  },
  {
    nombre: ".NET",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
  },
  {
    nombre: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
  {
    nombre: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    nombre: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    nombre: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
];

function Tecnologias() {
  return (
    <div className="row g-3 mt-3">
      {tecnologias.map((tecnologia) => (
        <div
          className="col-6 col-sm-4 col-md-3 col-lg-2"
          key={tecnologia.nombre}
        >
          <article className="tecnologia-card">
            <img
              src={tecnologia.logo}
              alt={`Logo de ${tecnologia.nombre}`}
              className="tecnologia-logo"
              loading="lazy"
            />
            <h3>{tecnologia.nombre}</h3>
          </article>
        </div>
      ))}
    </div>
  );
}

export default Tecnologias;
