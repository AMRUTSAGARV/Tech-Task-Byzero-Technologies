import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const EditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const { id } = useParams();

  const users = useSelector((state) => state);
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

  return (
    <div className="container">
      {currentUser ? (
        <>
          <h1 className="display-3 my-5 text-center">Edit User {id}</h1>
          <div className="row">
            <div className="col-md-6 shadow mx-auto p-5">
              <from>
                <div className="form-group my-2">
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                  />
                </div>
                <div className="form-group my-2">
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>
                <div className="form-group my-2">
                  <input
                    type="number"
                    placeholder="Phone Number"
                    className="form-control"
                  />
                </div>
                <div className="form-group my-2">
                  <input
                    type="submit"
                    value="Update Student"
                    className="btn btn-dark"
                  />
                  <Link to="/" className="btn btn-danger ml-3">
                    Cancel
                  </Link>
                </div>
              </from>
            </div>
          </div>
        </>
      ) : (
        <h1 className="display-3 my-5 text-center">
          Student Contact with id {id} not exists
        </h1>
      )}
    </div>
  );
};

export default EditUser;
