import React from 'react';

import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  MugIcon,
  Stack,
  Typography,
} from '@ui-kit';

export const UserProfessional = () => {
  console.log('text');

  return (
    <Card>
      <CardHeader
        title={
          <Stack direction="row" alignItems="center" spacing={1}>
            <MugIcon fontSize="large" />
            <Typography variant="h5">Informations professionnelles</Typography>
          </Stack>
        }
      />
      <CardContent>
        <Stack direction="row">
          <Avatar sx={{ width: 56, height: 56 }}>WB</Avatar>
        </Stack>
      </CardContent>
    </Card>
  );
};
