import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
// import styles from '../page.module.css';

interface HintProps {
  onHintClick: (showHint: boolean) => void;
  location: string;
}

export const Hint: React.FC<HintProps> = ({ onHintClick, location }) => {
  const [showHint, setShowHint] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hintShown, setHintShown] = useState(false);

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

  // Reset hintShown when location changes
  useEffect(() => {
    setHintShown(false);
  }, [location]);

  if (!showHint) {
    return null;
  }

  const handleHintClick = () => {
    onHintClick(true);
    setHintShown(true);
  };

  return (
    <Box 
      sx={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        borderRadius: '8px',
        padding: '16px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: '4px solid #4CAF50',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <Typography 
            variant="button" 
            sx={{ 
              lineHeight: 1,
              color: hintShown ? '#4CAF50' : 'inherit'
            }}
          >
            {hintShown ? 'Hints are shown' : 'Need a hint?'}
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              lineHeight: 1,
              mr: 2
              // color: hintShown ? '#4CAF50' : 'inherit'
            }}
          >
            {hintShown && location == "2"? 'Aspen trees, wide dirt road, yellow sign' : ' '}
            {hintShown && location == "1"? 'Muslim garb, camera quality, police car' : ' '}

          </Typography>
        </Box>
        <Button 
          variant="contained"
          color="primary"
          onClick={handleHintClick}
          disabled={hintShown}
          sx={{ 
            opacity: hintShown ? 0.5 : 1,
            transition: 'opacity 0.3s ease-in-out',
          }}
        >
          Yes
        </Button>
      </Box>
    </Box>
  );
}; 