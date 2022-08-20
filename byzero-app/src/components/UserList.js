import React from "react";
import { Link } from "react-router-dom";
import AddUser from "./AddUser";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const UserList = () => {
  const users = useSelector((state) => state);
  const dispatch = useDispatch();

  const deleteUser = (id) => {
    dispatch({ type: "DELETE_USER", payload: id });
    toast.success("User deleted successfully!");
  };

  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-12 my-4 text-right">{/* <AddUser /> */}</div>
        <div className="col-md-10 mx-auto my-4">
          <table className="table table-hover">
            <thead className="text-white bg-dark text-center">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Number</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, id) => (
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.number}</td>
                  <td>
                    <Link
                      to={`/edit/${user.id}`}
                      className="btn btn-small btn-primary mx-2"
                    >
                      Edit
                    </Link>
                    <button
                      type="button"
                      onClick={() => deleteUser(user.id)}
                      className="btn btn-small btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>{" "}
        </div>
      </div>
    </div>
  );
};

export default UserList;
