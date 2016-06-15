import React from 'react';
import ThemeProvider from './styles/ThemeProvider';
import AppFrame from './AppFrame';

export default function App(props) {
  return (
    <ThemeProvider>
      <AppFrame {...props} />
    </ThemeProvider>
  );
}
