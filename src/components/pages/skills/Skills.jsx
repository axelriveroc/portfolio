import "./skills.css";

import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiMercadopago } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiAxios } from "react-icons/si";
import { SiDotenv } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiNgrok } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { FaNpm } from "react-icons/fa";



const Skills = () => {
  return (
    <section id="Skills" className="skills_section">
      <h3 className="title_skills">Skills</h3>

      <div className="card_container">
        <article className="card">
          <SiHtml5 className="icon_tech" />
          <p>HTML</p>
        </article>
        <article className="card">
          <SiCss3 className="icon_tech" />
          <p>CSS</p>
        </article>
        <article className="card">
          <SiJavascript className="icon_tech" />
          <p>JAVASCRIPT</p>
        </article>
        <article className="card">
          <SiReact className="icon_tech" />
          <p>REACT</p>
        </article>
        <article className="card">
          <SiFirebase className="icon_tech" />
          <p>FIREBASE</p>
        </article>
        <article className="card">
          <SiMercadopago className="icon_tech" />
          <p>MERCADOPAGO API</p>
        </article>
        <article className="card">
          <SiNodedotjs className="icon_tech" />
          <p>NODEJS</p>
        </article>
        <article className="card">
          <SiMysql className="icon_tech" />
          <p>MYSQL</p>
        </article>
        <article className="card">
          <SiExpress className="icon_tech" />
          <p>EXPRESS</p>
        </article>
        <article className="card">
          <SiSequelize className="icon_tech" />
          <p>SEQUELIZE</p>
        </article>
        <article className="card">
          <SiMui className="icon_tech" />
          <p>MATERIALUI</p>
        </article>
        <article className="card">
          <SiRedux className="icon_tech" />
          <p>REDUX TOOLKIT</p>
        </article>
        <article className="card">
          <SiAxios className="icon_tech" />
          <p>AXIOS</p>
        </article>
        <article className="card">
          <FaNpm className="icon_tech" />
          <p>NPM</p>
        </article>
        <article className="card">
          <SiReactrouter className="icon_tech" />
          <p>REACT-ROUTER</p>
        </article>
        <article className="card">
          <SiDotenv className="icon_tech" />
          <p>DOTENV</p>
        </article>
        <article className="card">
          <SiGit className="icon_tech" />
          <p>GIT</p>
        </article>
        <article className="card">
          <SiVercel className="icon_tech" />
          <p>VERCEL</p>
        </article>
        <article className="card">
          <SiGithub className="icon_tech" />
          <p>GITHUB</p>
        </article>
        <article className="card">
          <SiNgrok className="icon_tech" />
          <p>NGROK</p>
        </article>
        <article className="card">
          <SiPostman className="icon_tech" />
          <p>POSTMAN</p>
        </article>
      </div>
    </section>
  );
};

export default Skills;
