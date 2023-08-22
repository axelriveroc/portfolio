import "./MyProjects.css";
import foto_prueba from "../../../assets/fondoHeader.png";
import audioDesktop from "../../../assets/projects/audio_dektop.jpeg";
import toDoDesktop from "../../../assets/projects/toDo_desktop.jpeg";
import tarotDesktop from "../../../assets/projects/oraculo_desktop_2 (2).jpeg";
import hallowenDesktop from "../../../assets/projects/hallow_desktop.jpeg";

const MyProjects = () => {
  return (
    <section id="myProjects" className="prueba">
      
      <article className="card_project">
        <h4>Titulo project</h4>
        <img src={audioDesktop} alt="" className="img_project" />
        <ul className="listado_ul_tecs">
          <li>React</li>
          <li>Material UI</li>
          <li>Firebase</li>
          <li> API Mercado Pago </li>
        </ul>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
          molestiae quo exercitationem dolorem nobis aliquam harum aperiam
          aspernatur sunt enim iusto distinctio repellat accusantium earum
          pariatur, tempora ad quaerat consectetur.
        </p>
        <div>
          <button>+</button>
        </div>
      </article>
      <article className="card_project">
        <h4>Titulo project</h4>
        <img src={hallowenDesktop} alt="" className="img_project" />
        <ul className="listado_ul_tecs">
          <li>React</li>
          <li>Material UI</li>
          <li>Firebase</li>
          <li> API Mercado Pago </li>
        </ul>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
          molestiae quo exercitationem dolorem nobis aliquam harum aperiam
          aspernatur sunt enim iusto distinctio repellat accusantium earum
          pariatur, tempora ad quaerat consectetur.
        </p>
        <div>
          <button>+</button>
        </div>
      </article>
      <article className="card_project">
        <h4>Titulo project</h4>
        <img src={toDoDesktop} alt="" className="img_project" />
        <ul className="listado_ul_tecs">
          <li>React</li>
          <li>Material UI</li>
          <li>Firebase</li>
          <li> API Mercado Pago </li>
        </ul>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
          molestiae quo exercitationem dolorem nobis aliquam harum aperiam
          aspernatur sunt enim iusto distinctio repellat accusantium earum
          pariatur, tempora ad quaerat consectetur.
        </p>
        <div>
          <button>+</button>
        </div>
      </article>
      <article className="card_project">
        <h4>Titulo project</h4>
        <img src={tarotDesktop} alt="" className="img_project" />
        <ul className="listado_ul_tecs">
          <li>React</li>
          <li>Material UI</li>
          <li>Firebase</li>
          <li> API Mercado Pago </li>
        </ul>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
          molestiae quo exercitationem dolorem nobis aliquam harum aperiam
          aspernatur sunt enim iusto distinctio repellat accusantium earum
          pariatur, tempora ad quaerat consectetur.
        </p>
        <div>
          <button>+</button>
        </div>
      </article>
      <article className="card_project">
        <h4>Titulo project</h4>
        <img src={foto_prueba} alt="" className="img_project" />
        <ul>
          <li>React</li>
          <li>Material UI</li>
          <li>Firebase</li>
          <li> API Mercado Pago </li>
        </ul>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
          molestiae quo exercitationem dolorem nobis aliquam harum aperiam
          aspernatur sunt enim iusto distinctio repellat accusantium earum
          pariatur, tempora ad quaerat consectetur.
        </p>
        <div>
          <button>+</button>
        </div>
      </article>
      
    </section>
  );
};

export default MyProjects;
