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
    default:
      return state;
  }
};
export default userReducer;
