import React, { memo } from 'react';

import { Checkbox as MuiCheckbox, CheckboxProps, styled } from '@mui/material';

const StyledCheckbox = styled(MuiCheckbox)``;
export const Checkbox = memo((props: CheckboxProps) => (
  <StyledCheckbox {...props} />
));
