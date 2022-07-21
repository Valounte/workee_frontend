import React from 'react';

import { Container, Box, Stack, Typography, Button } from '@ui-kit';

export const Product = () => (
  <Container maxWidth="md">
    <Stack
      direction={{ xs: 'column-reverse', sm: 'row' }}
      alignItems="center"
      py={3}
      spacing={3}>
      <Stack
        direction="column"
        alignItems="flex-start"
        width={{ xs: '100%', sm: '50%' }}
        mt={{ xs: 3 }}>
        <Typography variant="h3">Un avant-goût de Workee ?</Typography>
        <Typography>
          Cyprum itidem insulam procul a continenti discretam et portuosam inter
          municipia crebra urbes duae faciunt claram Salamis et Paphus, altera Iovis
          delubris altera Veneris templo insignis. tanta autem tamque multiplici
          fertilitate abundat rerum omnium eadem Cyprus ut nullius externi indigens
          adminiculi indigenis viribus a fundamento ipso carinae ad supremos usque
          carbasos aedificet onerariam navem omnibusque armamentis instructam mari
          committat.
        </Typography>
        <Button variant="contained" color="secondary">
          Pré-commandez le vôtre !
        </Button>
      </Stack>
      <Box width={{ xs: '100%', sm: '50%' }}>Image</Box>
    </Stack>
  </Container>
);
