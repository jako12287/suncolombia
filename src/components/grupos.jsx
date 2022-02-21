import React, { useEffect } from "react";
import styles from "../CSS/grupos.module.css";
import axios from "axios";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GrupoI } from "../Prueba_store/actions/index";

export const Grupos = () => {
  const dispacth = useDispatch();
  let $grupo = useSelector((state) => state.grupo[0]);
  let idG = useParams().id;

  useEffect(() => {
    const Grupos = async () => {
      let get = await axios.post(
        "https://www.php.engenius.com.co/DatabaseIE.php",
        {
          User: "etraining",
          Password: "explorandoando2020%",
          option: "grupos",
          CodSede: `${idG}`,
        }
      );
      let data = get.data.data;
      dispacth(GrupoI(data));
    };
    Grupos();
  }, [dispacth, idG]);

  return (
    <main>
      <Link to={"/"}>
        <button className={styles.btn_home}>Home</button>
      </Link>
      <section className={styles.contain}>
        <div className={styles.title}>
          <h4>GRUPOS</h4>
        </div>

        <div className={styles.containInfo}>
          {$grupo &&
            $grupo.map((el, i) => (
              <div className={styles.subcontain} key={i}>
                <div className={styles.grupo}>{`Grupo # ${el.numGrupo}`}</div>
                <div className={styles.nombreGrupo}>{el.nombre}</div>
              </div>
            ))}
        </div>
      </section>
    </main>
  );
};
