import React, { useState } from "react";
import { toast } from "react-toastify";
import UserList from "./UserList";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  //to get the state from redux store
  const users = useSelector((state) => state);
  //used to dispatch an action.
  const dispatch = useDispatch();
  //return a function that lets you navigate programmatically
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    //todo

    const checkEmail = users.find((user) => user.email === email && user);
    const checkNumber = users.find((user) => user.number === parseInt(number));

    if (!email || !number || !name) {
      //toast help us to trigger the ToastContainer

      return toast.warning("Please fill in all fields!");
    }
    if (checkEmail) {
      return toast.error("This email already exists!");
    }
    if (checkNumber) {
      return toast.error("This number laready exists!");
    }
    const data = {
      id: users[users.length - 1].id + 1,
      name,
      email,
      number,
    };
    dispatch({ type: "ADD_USER", payload: data });
    toast.success("User added succesfully");
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row  p-4">
        <div className="col-md-6 shadow mx-auto p-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group my-2">
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group my-2">
              <input
                type="text"
                placeholder="Email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group my-2">
              <input
                type="number"
                placeholder="Phone Number"
                className="form-control"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="form-group my-2">
              <input
                type="submit"
                value="Save"
                className="btn btn-block btn-dark"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
