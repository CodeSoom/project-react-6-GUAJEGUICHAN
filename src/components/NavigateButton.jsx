import React from 'react';

import { useNavigate } from 'react-router-dom';

import { Button } from '@mui/material';
import { css } from '@emotion/react';

export default function NavigateButton({ sx, to, children }) {
  const navigate = useNavigate();

  const buttonCss = css`
  width:${'100%'};
  flex:1;
  font-size:5em;
  border: solid black 1px;
  ${sx}
`;

  function goto(destination) {
    navigate(destination);
  }

  return (
    <Button
      sx={buttonCss}
      variant="contained"
      onClick={() => goto(to)}
    >
      {children}
    </Button>
  );
}
