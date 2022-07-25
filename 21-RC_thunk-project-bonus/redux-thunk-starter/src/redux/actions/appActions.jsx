import { CLEAR_LOADING, SET_LOADING } from "../types/appTypes";

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload
});

export const clearLoading = (payload) => ({
  type: CLEAR_LOADING,
  payload
})

