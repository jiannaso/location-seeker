import { Box, Button, Typography } from '@mui/material';

interface LandingPageProps {
  onStartGame: () => void;
}

export function LandingPage({ onStartGame }: LandingPageProps) {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundImage: 'url("/world-map.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          zIndex: 1
        }
      }}
    >
      <Box
        sx={{
          maxWidth: '600px',
          backgroundColor: 'white',
          padding: '40px',
          borderRadius: '10px',
          // boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2
        }}
      >
        <Typography variant="h4" sx={{ mb: 3 }}>
          Welcome to LocationSeeker
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Get ready to test your geographical knowledge! You will be shown a 360° view of a location,
          and your task is to identify where it is on the map.
        </Typography>
        <Button
          variant="contained"
          size="small"
          onClick={onStartGame}
          sx={{
            padding: '10px 20px',
            fontSize: '1.1rem'
          }}
        >
          Start Game
        </Button>
      </Box>
    </Box>
  );
} 