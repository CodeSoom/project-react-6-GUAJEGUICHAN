import React from 'react';

import { TextField } from '@mui/material';

export default function AddMembeTextField({
  type, value, name, onChange, error, children,
}) {
  const helperText = () => {
    if (error.length > 0) {
      if (error.includes('duplicated')) {
        return 'duplicated';
      }

      const blank = `${name} blank`;

      if (error.includes(blank)) {
        return '입력해주세요';
      }
    }
    return '';
  };

  return (
    <TextField
      error={!!helperText()}
      helperText={helperText()}
      type={type}
      sx={{ margin: '0.5em 0' }}
      value={value}
      name={name}
      label={children}
      onChange={onChange}
      variant="outlined"
    />
  );
}
