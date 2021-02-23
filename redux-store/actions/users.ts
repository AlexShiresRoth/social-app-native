import api from "../../../utils/api";
import { AUTHENTICATE_USER, AUTHENTICATION_ERROR } from "../reduxTypes";

export const loginUser = (data: object) => async (dispatch: any) => {
  try {
    const res = await api.post("/auth", data);

    dispatch({ type: AUTHENTICATE_USER, payload: res.data });
  } catch (error) {
    console.error(error);
    dispatch({
      type: AUTHENTICATION_ERROR,
      payload: error,
    });
  }
};
