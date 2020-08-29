const SET_USERS = "SET_USERS";

let initialState = {
  users: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    
    default:
      return state;
  }
};

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

export default usersReducer;
