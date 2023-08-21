import { ADD_USER } from './ActionType';

export const addUser = (data) => {
  return { type: ADD_USER, payload: data };
};
