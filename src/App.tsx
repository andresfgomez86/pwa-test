import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <img src={logo} className="App-logo" alt="logo" />
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              --
            </Typography>
            <Typography variant="body2">
              Healthcare, meet the operating system
            </Typography>
            <Typography variant="body2">
              designed just for you.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="outlined">Learn More</Button>
          </CardActions>
        </Card>
      </header>
    </div>
  );
}

export default App;
