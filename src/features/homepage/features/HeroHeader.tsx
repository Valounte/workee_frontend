import React from 'react';

import { Box, Stack, Typography, Button } from '@ui-kit';

export const HeroHeader = () => (
  <Box
    sx={{
      height: '60vh',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
    <Stack direction="column">
      <Typography variant="h1">Workee</Typography>
      <Typography>se reconnecter à lessentiel</Typography>
      <Button variant="contained" color="secondary" size="small">
        En voir plus
      </Button>
    </Stack>
    <Box sx={{ backgroundColor: 'primary.main', width: '50vw', height: '50vh' }}>
      Image
    </Box>
  </Box>
);
