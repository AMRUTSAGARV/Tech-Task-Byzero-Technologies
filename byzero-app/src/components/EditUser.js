import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const { id } = useParams();

  const users = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // find() method returns the value of the first element that passes a test
  const currentUser = users.find(
    //parseint passes the value as astring and return the first integer
    (user) => user.id === parseInt(id)
  );
  //this depends on the currentUser , if the currentContact change our states will also change.
  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setEmail(currentUser.email);
      setNumber(currentUser.number);
    }
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = users.find(
      (user) => user.id !== parseInt(id) && user.email === email
    );
    const checkNumber = users.find(
      (user) => user.id !== parseInt(id) && user.number === parseInt(number)
    );

    if (!email || !number || !name) {
      return toast.warning("Please fill in all fields!");
    }
    if (checkEmail) {
      return toast.error("This email already exists!");
    }
    if (checkNumber) {
      return toast.error("This number alaready exists!");
    }
    const data = {
      id: parseInt(id),
      name,
      email,
      number,
    };

    dispatch({ type: "UPDATE_USER", payload: data });
    toast.success("User updated succesfully!");
    navigate("/");
  };

  return (
    <div className="container">
      {currentUser ? (
        <>
          <h1 className="display-3 my-5 text-center">Edit User {name}</h1>
          <div className="row">
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
                    type="email"
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
                    value="Update User"
                    className="btn btn-dark"
                  />
                  <Link to="/" className="btn btn-danger  ms-3 ">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <h1 className="display-3 my-5 text-center">
          User with id {id} not exists
        </h1>
      )}
    </div>
  );
};

export default EditUser;
