import React from 'react';
import { Box, Typography, Button } from '@mui/material';

interface WelcomeBoxProps {
  location: string;
  setLocation: (location: string) => void;
  onLocationChange: (location: string, image: string) => void;
}

export const WelcomeBox: React.FC<WelcomeBoxProps> = ({ location, setLocation, onLocationChange }) => {
  return (
    <Box 
      sx={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        borderRadius: '8px',
        padding: '16px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}
    >
      <Box component="section" sx={{ pb: -2 }}>
        <Typography variant="overline">WELCOME TO</Typography>
        <Typography variant="h6">LocationSeeker</Typography>
      </Box>
      <Typography variant="body2">
        Inspect the image below. On the map, click to drop <br></br> a pin closest to the location shown in the image.
      </Typography>
      <Box sx={{ display: 'flex', gap: '8px', width: '100%' }}>
        <Button 
          variant={location === "1" ? "contained" : "outlined"}
          fullWidth
          color="primary"
          onClick={() => onLocationChange("1", "/may8_1.jpg")}
        >
          <Typography variant="body2">Location 1</Typography>
        </Button>
        <Button 
          variant={location === "2" ? "contained" : "outlined"}
          fullWidth
          color="primary"
          onClick={() => onLocationChange("2", "/may8_2.jpg")}
        >
          <Typography variant="body2">Location 2</Typography>
        </Button>
      </Box>
    </Box>
  );
}; 