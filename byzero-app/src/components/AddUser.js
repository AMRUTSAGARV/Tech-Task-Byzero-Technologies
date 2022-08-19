import React, { useState } from "react";
import { toast } from "react-toastify";
import UserList from "./UserList";

// Margin
// Margin top: mt-value
// Margin right: me-value
// Margin bottom: mb-value
// Margin left: ms-value

// Padding
// Padding top: pt-value
// Padding right: pe-value
// Padding bottom: pb-value
// Paddig left: ps-value.
// Where the range for the value is 0 to 5
const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    //todo

    if (!email || !number || !name) {
      return toast.warning("Please fill in all fields!");
    }
  };

  return (
    <div className="container">
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
                type="text"
                placeholder="email"
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
