import React, { Component } from "react";
import "../App.css"

// MUI
import { Typography, Button, Paper, Stack, Box } from '@mui/material';

class Homepage extends Component {
  render() {
    return (
      <Stack className="home_body" style={{backgroundColor:"#292525"}} spacing={4} justifyContent="center">
        <Paper elevation={3} style={{padding:20, backgroundColor:"#f2f2f2"}}>
          <img src="/Images/logo.png" alt="logo"/>
        </Paper>
        <Button variant="outlined" href="/step0">
          Get Started
        </Button>
      </Stack>
    );
  }
}

export default Homepage;