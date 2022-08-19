import { BrowserRouter } from "react-router-dom";
import AddUser from "./components/AddUser";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <AddUser />
      </BrowserRouter>
    </div>
  );
}

export default App;
