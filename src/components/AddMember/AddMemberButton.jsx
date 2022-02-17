import React from 'react';

import { Button } from '@mui/material';

export default function AddMemberButton({ children, onClick }) {
  return (
    <Button
      variant="contained"
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
