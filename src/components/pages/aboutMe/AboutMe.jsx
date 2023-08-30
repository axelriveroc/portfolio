import "./AboutMe.css";
import yo from "../../../assets/yo1.png";

const AboutMe = () => {
  return (
    <section id="AboutMe" className="section_aboutMe">
      <div className="box_aboutMe">
        <div className="box_img_aboutMe">
          <img src={yo} alt="yo" className="foto_aboutMe" />
        </div>
        <div className="box_h2_description_aboutMe">
          <h2>About Me</h2>
          <div className="text_description_aboutMe">
            <p>
              Soy desarrollador web full stack especializado en el desarrollo
              frontend. Proveniente del campo de la psicología y la educación.
            </p>
            <p>
              He trabajado en equipo para idear soluciones de mejora de un
              producto y desarrollar webs consistentes. Soy un investigador
              incansable y siempre estoy buscando nuevas formas de mejorar mis
              habilidades.
            </p>
            <p>
              Mi enfoque se centra en fortalecer mi habilidad de comunicación
              efectiva, agilidad en el aprendizaje y capacidad constante para
              resolver problemas de manera creativa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
