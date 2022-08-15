import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import { useState, Fragment } from "react";
import { userUpdated } from "./usersSlice";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export function EditUser() {
  const { pathname } = useLocation();
  const userId = parseInt(pathname.replace("/edit-user/", ""));

  const user = useSelector((state) =>
    state.users.entities.find((user) => user.id === userId)
  );

  const dispatch = useDispatch();
  const history = useHistory();

  // const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [fname, setfName] = useState(user.fname);
  const [lname, setlName] = useState(user.lname);
  const [phone, setPhone] = useState(user.phone);
  const [gender, setGender] = useState(user.gender);
  const [error, setError] = useState(null);

  // const handleName = (e) => setName(e.target.value);
  const handlefName = (e) => setfName(e.target.value);
  const handlelName = (e) => setlName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlephone = (e) => setPhone(e.target.value);
  const handlegender = (e) => setGender(e.target.value);

  const handleClick = () => {
    if (fname && lname) {
      dispatch(
        userUpdated({
          id: userId,
          fname,
          lname,
          phone,
          email,
          gender
        })
      );

      setError(null);
      history.push("/");
    } else {
      setError("Fill in all fields");
    }
  };

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <h1>Edit user</h1>
        </div>
      </div>

      <FormControl size="small">
        <TextField
          label="First Name"
          id="fnameInput"
          onChange={handlefName}
          value={fname}
          variant="standard"
        />
      </FormControl>
      <br />

      <FormControl size="small">
        <TextField
          label="Last Name"
          id="lnameInput"
          onChange={handlelName}
          value={lname}
          variant="standard"
        />
      </FormControl>
      <br />

      <FormControl>
        <TextField
          label="Email"
          id="emailInput"
          onChange={handleEmail}
          value={email}
          variant="standard"
        />
      </FormControl>
      <br />

      <FormControl>
        <TextField
          label="Phone Number"
          id="phoneInput"
          onChange={handlephone}
          value={phone}
          variant="standard"
        />
      </FormControl>
      <br />

      <FormControl fullWidth>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          <FormControlLabel
            onChange={handlegender}
            value="female"
            control={<Radio />}
            label="Female"
          />
          <FormControlLabel
            onChange={handlegender}
            value="male"
            control={<Radio />}
            label="Male"
          />
        </RadioGroup>
      </FormControl>
      <br />
      {error && error}
      <Button
        variant="contained"
        onClick={handleClick}
        className="button-primary"
      >
        Update user
      </Button>
    </Fragment>
  );
}
