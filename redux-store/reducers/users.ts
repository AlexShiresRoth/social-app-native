import { Dispatch } from "react";
import { Action } from "redux";
import { AUTHENTICATE_USER, AUTHENTICATION_ERROR } from "../reduxTypes";

const initialState = {
  isUserThenticated: false,
  userLoading: true,
  loading: true,
  user: null,
  errors: null,
};

const userReducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case AUTHENTICATE_USER:
      return {
        ...state,
        user: payload,
        isUserAuthenticated: true,
        loading: false,
        userLoading: false,
        errors: null,
      };
    case AUTHENTICATION_ERROR:
      return {
        ...state,
        user: null,
        isUserAuthenticated: false,
        loading: false,
        userLoading: false,
        errors: payload,
      };
    default:
      return state;
  }
};

export default userReducer;
