import React, { useEffect } from "react";
import styles from "../CSS/Home.module.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Municipios } from "../Prueba_store/actions";

export const Home = () => {
  const dispatch = useDispatch();
  let $municipios = useSelector((state) => state.municipios[0]);

  useEffect(() => {
    const handleMunicipios = async (e) => {
      let getMunicipios = await axios.post(
        "https://www.php.engenius.com.co/DatabaseIE.php",
        {
          User: "etraining",
          Password: "explorandoando2020%",
          option: "municipios",
        }
      );
      let data = await getMunicipios.data;

      dispatch(Municipios(data));
    };
    handleMunicipios();
  }, [dispatch, $municipios]);

  return (
    <section className={styles.contain}>
      <div className={styles.title}>
        <h4>MUNICIPIOS</h4>
      </div>
      <div className={styles.name}>Nombre del municipio</div>
      {$municipios &&
        $municipios.map((el, i) => (
          <div className={styles.element} key={i}>
            <Link className={styles.Link} to={`/detail/${el.dane}`}>
              {el.nombre}
            </Link>
          </div>
        ))}
    </section>
  );
};
