import { INSTITUCIONES, MUNICIPIOS, SEDE, GRUPO } from "./types";

export const Municipios = (value) => {
  return async (dispatch) => {
    dispatch({
      type: MUNICIPIOS,
      payload: value,
    });
  };
};

export const Instituciones = (value) => {
  return async (dispatch) => {
    dispatch({
      type: INSTITUCIONES,
      payload: value,
    });
  };
};

export const Sedes = (value) => {
  return async (dispatch) => {
    dispatch({
      type: SEDE,
      payload: value,
    });
  };
};

export const GrupoI = (value) => {
  return async (dispatch) => {
    dispatch({
      type: GRUPO,
      payload: value,
    });
  };
};
