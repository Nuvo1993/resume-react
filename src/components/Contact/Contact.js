import React from 'react';
import { Box, Typography, Container } from '@mui/material';

export default function Contact() {
  return (
    <div id="contactSection" className="section">
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom align="center" sx={{ mb: 6 }}>
          Get In Touch
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" sx={{ mb: 4 }}>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out to me.
        </Typography>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="body1">
            Or email me directly at: <a href="mailto:austinneveau93@gmail.com">austinneveau93@gmail.com</a>
          </Typography>
        </Box>
      </Container>
    </div>
  );
}