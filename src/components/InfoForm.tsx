import { useNavigate } from "react-router-dom";
import { Button, Container, TextField } from "@mui/material";
import React, { useState } from "react";

interface IState {
  userDetail: {
    name: string;
    email: string;
    phone: string;
  };
}
const InfoForm: React.FC = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState<IState>({
    userDetail: {
      name: "",
      email: "",
      phone: "",
    },
  });

  //handle input function
  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUser({
      userDetail: {
        ...user.userDetail,
        [e.target.name]: e.target.value,
      },
    });
  };

  // form submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    localStorage.setItem("UserData", JSON.stringify(user.userDetail));
    navigate("/fetch-api-detail");
    window.location.reload();
    console.log(user.userDetail);
  };

  return (
    <div>
       <h1>From for saving the user <br /> detail in localStorage</h1>
      <Container maxWidth="sm">
       
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            label="Name"
            name="name"
            value={user.userDetail.name}
            onChange={handleInputs}
            fullWidth
            required
          />
          <TextField
            variant="outlined"
            margin="normal"
            type="email"
            label="email"
            name="email"
            value={user.userDetail.email}
            onChange={handleInputs}
            fullWidth
            required
          />
          <TextField
            variant="outlined"
            margin="normal"
            type="number"
            label="number"
            name="phone"
            value={user.userDetail.phone}
            onChange={handleInputs}
            fullWidth
            required
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Next Page
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default InfoForm;
