import React from 'react';
import ThemeProvider from '~/theme';
import Router from '~/router';

export default function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}
