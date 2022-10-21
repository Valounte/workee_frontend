import React, { memo } from 'react';

import {
  Box,
  LinearProgress as MuiLinearProgress,
  LinearProgressProps,
  styled,
} from '@mui/material';

const StyledLinearProgress = styled(MuiLinearProgress)``;

export const LinearProgress = memo((props: LinearProgressProps) => (
  <Box width="100%">
    <StyledLinearProgress {...props} />
  </Box>
));
