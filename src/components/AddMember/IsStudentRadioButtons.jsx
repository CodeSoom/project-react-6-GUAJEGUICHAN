import React from 'react';

import { FormControlLabel, Radio, RadioGroup } from '@mui/material';

export default function IsStudentRadioButtons({ name, onChange }) {
  return (
    <RadioGroup
      row
      aria-labelledby="demo-controlled-radio-buttons-group"
      defaultValue
      name={name}
      onChange={onChange}
    >
      <FormControlLabel value control={<Radio />} label="학생" />
      <FormControlLabel value={false} control={<Radio />} label="선생님" />
    </RadioGroup>
  );
}
