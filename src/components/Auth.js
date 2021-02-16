import React, { useState } from "react";

import { Container, Button, Paper, FormControl, Input, Typography } from "@material-ui/core";
import useStyles from "./styles.js";
import "./styles.js";

const Auth = () => {
  const classes = useStyles();
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleClick = () => {
    setIsSigningUp((prevState) => !prevState);
  };
  const handleChange = (e) => {
    setUser((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSigningUp) {
    } else {
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper className={classes.form}>
        <Typography variant="h2" classes={classes.title}>
          Hoot
        </Typography>
        <FormControl style={{ marginTop: "30px" }}>
          {isSigningUp && (
            <Input
              name="name"
              style={{ margin: "10px" }}
              placeholder="name"
              value={user.name}
              onChange={handleChange}
            />
          )}
          <Input
            name="email"
            style={{ margin: "10px" }}
            placeholder="email"
            value={user.email}
            onChange={handleChange}
          />
          <Input
            name="password"
            style={{ margin: "10px" }}
            placeholder="password"
            value={user.password}
            onChange={handleChange}
            type="password"
          />
          <Button style={{ margin: "10px" }} variant="outlined" size="small" type="submit" onSubmit={handleSubmit}>
            {isSigningUp ? "Signup" : "Login"}
          </Button>
          <Button variant="text" size="small" onClick={handleClick}>
            {isSigningUp ? "Already have an account? Sign in." : "Don't have an account? Sign up."}
          </Button>
        </FormControl>
      </Paper>
    </Container>
  );
};

export default Auth;
