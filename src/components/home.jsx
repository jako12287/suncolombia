import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getName} from "../Prueba_store/actions";
import styles from "../CSS/Home.module.css";


export const Home = () => {
  // let dispatch = useDispatch();
  // let $name = useSelector((state) => state.name);


  // const [change, setChange] = useState({
  //   image: imagenOne,
  //   hobie: hobie1,
  // });

  // const [form, setForm] = useState({
  //   name: "",
  // });

  // useEffect(() => {
  //   dispatch(getName());
  // }, [dispatch]);

  // const handleChange = (event) => {
  //   if (event.target.name && change.image === imagenOne) {
  //     setChange({
  //       image: imagenTwo,
  //       hobie: hobie2,
  //     });
  //   } else {
  //     setChange({
  //       image: imagenOne,
  //       hobie: hobie1,
  //     });
  //   }
  // };

  // const handleChangeForm = (e) => {
  //   e.preventDefault();
  //   setForm({
  //     name: e.target.value,
  //   });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // dispatch(postName(form));
  //   let post =await fetch('http://localhost:5000/name',{
  //           method: 'POST',
  //           headers: {
  //               Accep: 'application/jason',
  //               'Content-Type': 'application/json',
  //           },
  //           body: JSON.stringify(form)
  //       })
  //     setForm({
  //       name:''
  //     })

  //       return post
  // };

  return (
    <main>
        home
    </main> 
  );
};
