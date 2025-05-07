import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
// import styles from '../page.module.css';

interface HintProps {
  onHintClick: (showHint: boolean) => void;
}

export const Hint: React.FC<HintProps> = ({ onHintClick }) => {
  const [showHint, setShowHint] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(true);
      // Start fade in after a small delay
      setTimeout(() => {
        setIsVisible(true);
      }, 50);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!showHint) {
    return null;
  }

  return (
    <Box 
      sx={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '8px',
        padding: '16px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: '4px solid #4CAF50',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out'
      }}
    >
      <Typography variant="button" sx={{ lineHeight: 1 }}>Need a hint?</Typography>
      <Button 
        variant="contained"
        color="primary"
        onClick={() => onHintClick(true)}
      >
        Yes
      </Button>
    </Box>
  );
}; 