import React from 'react';
import { Box, Typography } from '@mui/material';

interface CountdownTimerProps {
  initialTime?: number; // in seconds
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ initialTime = 90 }) => {
  const [timeLeft, setTimeLeft] = React.useState(initialTime);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 20,
        right: 20,
        zIndex: 1000,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: '8px 16px',
        borderRadius: '4px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}
    >
      <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block', textAlign: 'right' }}>
        Location 1
      </Typography>
      <Typography variant="h6" sx={{ color: 'black' }}>
        Time Left: {formatTime(timeLeft)}
      </Typography>
    </Box>
  );
}; 