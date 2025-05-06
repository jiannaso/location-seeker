'use client';
// https://medium.com/@elanaolson/integrating-material-ui-into-a-react-nextjs-app-55a95e15d767
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
    
  },
  spacing: 8,
});

export default theme;