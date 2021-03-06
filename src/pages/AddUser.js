/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import { makeStyles } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUsers } from '../redux/actions';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 100,
        "& > *": {
            margin: theme.spacing(1),
            width: "45ch",
        },
    },
}));
const AddUser = () => {
    const classes = useStyles();
    const [state, setState] = useState({
        name: "",
        email: "",
        contact: "",
        address: "",
    });

    const [error, setError] = useState("");

    let history = useHistory();
    let dispatch = useDispatch();
    const { name, email, contact, address } = state;

    const handleInputChange = (e) => {
        let {name, value} = e.target;
        setState({...state, [name]: value })
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if(!name || !address || !email || !contact) {
        setError("Plese input all input Field");
      } else {
         dispatchEvent(addUsers(state));
         history.push("/");
         setError("");
        }
    };

    return (
        <div>
          <Button
            style={{width: "100px", marginTop: "20px" }}
            variant="contained" 
            color="secondary" 
            onClick={() => history.push("/")}
          >
            Go Back
          </Button>
          <h2>Add User</h2>
          {error && <h3 style={{color: "red" }}>{error}</h3>}
          <Box className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField id="standard-basic" label="Name" value={name} type="text" />
            <br />
            <TextField
                  id="standard-basic"  
                  label="Name" 
                  value={name} 
                  name="name"
                  type="text" 
                  onChange={handleInputChange}
                />
                <br />
                <TextField 
                  id="standard-basic" 
                  label="Email" 
                  name="email"
                  value={email} 
                  type="email" 
                  onChange={handleInputChange}
                />
                <br />
                <TextField 
                  id="standard-basic" 
                  label="Contact" 
                  value={contact} 
                  name="contact"
                  type="number" 
                  onChange={handleInputChange}
                />
                <br />
                <TextField 
                  id="standard-basic" 
                  label="Address" 
                  value={address} 
                  name="address"
                  type="text" 
                  onChange={handleInputChange}
                />
                <br />
                <Button
                  style={{width: "100px"}}
                  variant="contained" 
                  color="primary" 
                  type="submit"
                  onChange={handleInputChange}
                >
                  Submit
                </Button>
           </Box>
        </div>
    );
};

export default AddUser;