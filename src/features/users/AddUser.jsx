import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router-dom";
import { useState, Fragment } from "react";
import { userAdded } from "./usersSlice";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export function AddUser() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState(null);

  const handlefName = (e) => {
    if (e.target.value.length >= 8 && e.target.value.length >= 4) {
      alert("Please enter min 4 and 8 max characters");
    }
    setfName(e.target.value);
  };

  const handlelName = (e) => {
    if (e.target.value.length >= 8 && e.target.value.length >= 4) {
      alert("Please enter min 4 and 8 max characters");
    }
    setlName(e.target.value);
  };
  const handleEmail = (e) => setEmail(e.target.value);
  const handlephone = (e) => setPhone(e.target.value);
  const handlegender = (e) => setGender(e.target.value);

  const usersAmount = useSelector((state) => state.users.entities.length);

  const handleClick = () => {
    if (fname && lname && email) {
      dispatch(
        userAdded({
          id: usersAmount + 1,
          name,
          fname,
          lname,
          email,
          phone,
          gender
        })
      );

      setError(null);
      history.push("/");
    } else {
      setError("Fill in all fields");
    }

    setName("");
    setfName("");
    setlName("");
    setEmail("");
    setPhone("");
    setGender("");
  };

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <h1>Add user</h1>
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
      <FormControl>
        {error && error}
        <Button
          variant="contained"
          onClick={handleClick}
          className="button-primary pull-right"
        >
          Add user
        </Button>
      </FormControl>
    </Fragment>
  );
}
