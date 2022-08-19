import React from "react";
import { Link } from "react-router-dom";

const EditUser = () => {
  return (
    <div className="container">
      <>
        <h1 className="display-3 my-5 text-center"></h1>
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
        Student Contact with id not exists
      </h1>
      )
    </div>
  );
};

export default EditUser;
