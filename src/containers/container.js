import React from 'react';
import { Box } from '~/theme';

export default function Container({ children }) {
  return (
    <Box
      flex={1}
      backgroundColor="dark"
      justifyContent="center"
      alignItems="center">
      {children}
    </Box>
  );
}
