import { fetchUsers, userDeleted } from "./usersSlice";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export function UserList() {
  const dispatch = useDispatch();

  const { entities } = useSelector((state) => state.users);
  const loading = useSelector((state) => state.loading);

  const handleDelete = (id) => {
    dispatch(userDeleted({ id }));
  };

  return (
    <div className="container">
      <div className="row">
        <h1></h1>
      </div>
      <div className="row">
        <div className="two columns">
          <Link to="/add-user">
            <Button variant="contained">Add user</Button>
          </Link>
        </div>
        {/* <div className="two columns"> */}

        {/* </div> */}
      </div>
      <div className="row">
        {loading ? (
          "Loading..."
        ) : (
          <table className="u-full-width">
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone number</th>
                <th>Gender</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {entities.length &&
                entities.map(
                  ({ id, fname, lname, phone, email, gender }, i) => (
                    <tr key={i}>
                      <td>{id}</td>
                      <td>{fname}</td>
                      <td>{lname}</td>
                      <td>{email}</td>
                      <td>{phone}</td>
                      <td>{gender}</td>
                      <td>
                        <Button
                          variant="contained"
                          onClick={() => handleDelete(id)}
                        >
                          Delete
                        </Button>
                        &nbsp;&nbsp;&nbsp;
                        <Link to={`/edit-user/${id}`}>
                          <Button variant="contained">Edit</Button>
                        </Link>
                      </td>
                    </tr>
                  )
                )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
