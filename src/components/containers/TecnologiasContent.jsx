import {  DiHtml5, DiCss3, DiSass, DiNodejsSmall, DiMysql, DiReact} from "react-icons/di";
import "/src/sass/app.scss";

const Technologias = [
  { id: "html", name: "html5", icon: <DiHtml5 />, description: "+1 ano" },
  { id: "css", name: "css3", icon: <DiCss3 />, description: "+1 ano"  },
  { id: "scss", name: "scss", icon: <DiSass />, description: "+3 meses" },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall />, description: "+3 meses" },  // Corrected icon name
  { id: "mysql", name: "MySql", icon: <DiMysql />, description: "+3 meses" }, 
  { id: "react", name: "React", icon: <DiReact />, description: "+2 meses" },
];

const TechnologiasContent = () => {
  return (
    <section className="technologias-container">
      <h2>Tecnologias</h2>      
      <div className="technologia-grid">
        {Technologias.map((tech) => (
          <div className="technologia-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technologia-info">
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>            
          </div>
        ))}
      </div>
    </section>
    )
};

export default TechnologiasContent