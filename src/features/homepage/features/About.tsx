import React from 'react';

import { Container, Box, Stack, Typography, Button } from '@ui-kit';
import { ReactComponent as WorkeeFriendImage } from '@ui-kit/images/home-animal-illustration.svg';

export const About = () => (
  <Box bgcolor="#FDFBFB">
    <Container maxWidth="md">
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        alignItems="center"
        py={3}
        spacing={3}>
        <Box width={{ xs: '100%', sm: '50%' }} height={{ xs: '100%', sm: '50vh' }}>
          <WorkeeFriendImage height="100%" />
        </Box>
        <Stack
          direction="column"
          alignItems="flex-start"
          width={{ xs: '100%', sm: '50%' }}
          mt={{ xs: 3 }}>
          <Typography variant="h2">
            Workee, un animal robotique à votre service
          </Typography>
          <Typography>
            Cyprum itidem insulam procul a continenti discretam et portuosam inter
            municipia crebra urbes duae faciunt claram Salamis et Paphus, altera
            Iovis delubris altera Veneris templo insignis. tanta autem tamque
            multiplici fertilitate abundat rerum omnium eadem Cyprus ut nullius
            externi indigens adminiculi indigenis viribus a fundamento ipso carinae
            ad supremos usque carbasos aedificet onerariam navem omnibusque
            armamentis instructam mari committat.
          </Typography>
          <Button variant="contained" color="secondary" size="small">
            En voir plus
          </Button>
        </Stack>
      </Stack>
    </Container>
  </Box>
);
