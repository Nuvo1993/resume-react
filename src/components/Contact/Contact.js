import React, { useState } from "react";
import { TextField, Button, Box, Paper, Container } from '@mui/material';

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    // Submit the form data to your backend API or send it via email
  };

  return (
    <div id="contactSection">
    <form onSubmit={handleSubmit}>
    <Container maxWidth="xs" >
    <Paper elevation={12} style={{maxWidth:"500px"}}>
      <Box display="flex" flexDirection="column" maxWidth={400} mx="auto">
        <TextField
          label="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          margin="normal"
          required
        />
        <TextField
          label="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          margin="normal"
          type="email"
          required
        />
        <TextField
          label="Message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          margin="normal"
          multiline
          rows={4}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
      </Paper>
      </Container>
    </form>
    </div>
  );
}
