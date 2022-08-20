import { BrowserRouter } from "react-router-dom";
import AddUser from "./components/AddUser";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <AddUser />
        <UserList />
      </BrowserRouter>
    </div>
  );
}

export default App;
