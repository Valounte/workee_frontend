import React from 'react';

import { Container, Box, Stack, Typography, Button } from '@ui-kit';

export const Product = () => (
  <Container maxWidth="md">
    <Box
      height="65vh"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={3}>
      <Stack direction="column" width="50vw" alignItems="flex-start">
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
      <Box width="50vw" height="50vh">
        Image
      </Box>
    </Box>
  </Container>
);
