import React from 'react';

import {
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
  SelectProps,
  SelectChangeEvent as MuiSelectChangeEvent,
} from '@mui/material';

export interface SelectInputProps extends SelectProps {
  errorMessage?: string;
}

export type SelectChangeEvent<T> = MuiSelectChangeEvent<T>;

export const SelectInput = (props: SelectInputProps) => {
  const { label, children, errorMessage, ...otherSelectProps } = props;
  return (
    <FormControl fullWidth>
      <InputLabel> {label}</InputLabel>
      <Select label={label} {...otherSelectProps}>
        {children}
      </Select>
      <FormHelperText error>
        {errorMessage != null ? errorMessage : ' '}
      </FormHelperText>
    </FormControl>
  );
};
