import React, { useEffect } from "react";
import styles from "../CSS/detailinstitucion.module.css";
import axios from "axios";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Sedes } from "../Prueba_store/actions";

export const DetailIntitucion = () => {
  const dispatch = useDispatch();
  let $sedes = useSelector((state) => state.sede[0]);
  let idI = useParams().id;

  useEffect(() => {
    const sede = async () => {
      let getInstituciones = await axios.post(
        "https://www.php.engenius.com.co/DatabaseIE.php",
        {
          User: "etraining",
          Password: "explorandoando2020%",
          option: "sedes",
          CodInst: `${idI}`,
        }
      );
      let data = getInstituciones.data.data;
      dispatch(Sedes(data));
    };
    sede();
  }, [dispatch, idI]);

  return (
    <main>
      <Link to={"/"}>
        <button className={styles.btn_home}>Home</button>
      </Link>
      <section className={styles.contain}>
        <div className={styles.title}>
          <h4>SEDES</h4>
        </div>
        {$sedes &&
          $sedes.map((el, i) => (
            <div className={styles.element} key={i}>
              <Link className={styles.Link} to={`/grupo/${el.dane}`}>
                {" "}
                {el.nombre}
              </Link>
            </div>
          ))}
      </section>
    </main>
  );
};
