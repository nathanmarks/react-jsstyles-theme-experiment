import React from 'react';
import ThemeProvider from './styles/ThemeProvider';
import Demo from './components/Demo';

export default function App(props) {
  return (
    <ThemeProvider {...props}>
      <Demo />
    </ThemeProvider>
  );
}
