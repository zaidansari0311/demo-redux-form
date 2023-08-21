import { ADD_USER } from "../Actions/ActionType";

const initialState = {
  users: {},
};

const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default registrationReducer;
