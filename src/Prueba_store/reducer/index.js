import { MUNICIPIOS, INSTITUCIONES, SEDE, GRUPO } from "../actions/types";

let initialState = {
  municipios: [],
  instituciones: [],
  sede: [],
  grupo: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MUNICIPIOS:
      return {
        ...state,
        municipios: [action.payload.data],
      };
    case INSTITUCIONES:
      return {
        ...state,
        instituciones: [action.payload.data.data],
      };
    case SEDE:
      return {
        ...state,
        sede: [action.payload],
      };
    case GRUPO:
      return {
        ...state,
        grupo: [action.payload],
      };

    default:
      return state;
  }
};
