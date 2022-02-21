import React, { useEffect } from "react";
import styles from "../CSS/detail.module.css";
import axios from "axios";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Instituciones } from "../Prueba_store/actions";

export const Detail = () => {
  const dispatch = useDispatch();
  let $instituciones = useSelector((state) => state.instituciones[0]);

  let idM = useParams().id;

  useEffect(() => {
    const detailMunicipio = async () => {
      let getInstituciones = await axios.post(
        "https://www.php.engenius.com.co/DatabaseIE.php",
        {
          User: "etraining",
          Password: "explorandoando2020%",
          option: "instituciones",
          CodMun: `${idM}`,
        }
      );
      let dataInstituciones = await getInstituciones;
      dispatch(Instituciones(dataInstituciones));
    };
    detailMunicipio();
  }, [dispatch, idM]);

  return (
    <main>
      <Link to={"/"}>
        <button className={styles.btn_home}>Home</button>
      </Link>

      <section className={styles.contain}>
        <div className={styles.title}>
          <h4>INSTITUCIONES</h4>
        </div>

        {$instituciones &&
          $instituciones.map((el) => (
            <div className={styles.element} key={el.dane}>
              <Link className={styles.Link} to={`/institucion/${el.dane}`}>
                {el.nombre}
              </Link>
            </div>
          ))}
      </section>
    </main>
  );
};
