import {  DiHtml5, DiCss3, DiSass, DiNodejsSmall, DiMysql, DiReact} from "react-icons/di";
import "/src/sass/app.scss";

const Tecnologias = [
  { id: "html", name: "html5", icon: <DiHtml5 /> },
  { id: "css", name: "css3", icon: <DiCss3 />},
  { id: "scss", name: "scss", icon: <DiSass />},
  { id: "node", name: "Node.js", icon: <DiNodejsSmall />},  // Corrected icon name
  { id: "mysql", name: "MySql", icon: <DiMysql />}, 
  { id: "react", name: "React", icon: <DiReact />},
];

const TecnologiasContent = () => {
  return (
    <section className="technologias-container">
      <h2>Tecnologias</h2>      
      <div className="technologia-grid">
        {Tecnologias.map((tech) => (
          <div className="technologia-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technologia-info">
              <h3>{tech.name}</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>            
          </div>
        ))}
      </div>
    </section>
    )
};

export default TecnologiasContent