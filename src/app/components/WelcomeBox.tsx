import React from 'react';
import { Box, Typography } from '@mui/material';

export const WelcomeBox: React.FC = () => {
  return (
    <Box 
      sx={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        borderRadius: '8px',
        padding: '16px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
      }}
    >
      <Box component="section" sx={{ pb: 1 }}>
        <Typography variant="overline">WELCOME TO</Typography>
        <Typography variant="h6">LocationSeeker</Typography>
      </Box>
      <Typography variant="body2">
        Inspect the image below. On the map, click to drop <br></br> a pin closest to the location shown in the image.
      </Typography>
    </Box>
  );
}; 