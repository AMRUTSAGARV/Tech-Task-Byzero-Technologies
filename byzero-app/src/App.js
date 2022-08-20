import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddUser from "./components/AddUser";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import UserList from "./components/UserList";
import EditUser from "./components/EditUser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={[
              <ToastContainer />,
              <Navbar />,
              <AddUser />,
              <UserList />,
            ]}
          />
          <Route path="/edit/:id" element={<EditUser />} />
          {/* <EditUser /> */}
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
