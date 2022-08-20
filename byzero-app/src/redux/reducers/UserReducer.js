const initialState = [
  {
    id: 0,
    name: "Amrut Sagar",
    number: 8848236156,
    email: "amrutsagar06@gmail.com",
  },
  {
    id: 1,
    name: "Arun Raj",
    number: 7012612789,
    email: "arunvadekekara@gmail.com",
  },
];

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      state = [...state, action.payload];
      return state;
    case "UPDATE_USER":
      const updateState = state.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
      state = updateState;
      return state;
    case "DELETE_USER":
      const filterUsers = state.filter(
        (user) => user.id !== action.payload && user
      );
      state = filterUsers;
      return state;
    default:
      return state;
  }
};
export default userReducer;
