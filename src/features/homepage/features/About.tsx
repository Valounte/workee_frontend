import React from 'react';

import { Box, Stack, Typography, Button } from '@ui-kit';
import { ReactComponent as WorkeeFriendImage } from '@ui-kit/images/home-animal-illustration.svg';

export const About = () => (
  <Box
    height="65vh"
    display="flex"
    justifyContent="space-between"
    alignItems="center">
    <Box width="50vw" height="50vh">
      <WorkeeFriendImage height="100%" />
    </Box>
    <Stack direction="column" width="50vw" height="50vh" alignItems="flex-start">
      <Typography variant="h2">
        Workee, un animal robotique à votre service
      </Typography>
      <Typography>
        Cyprum itidem insulam procul a continenti discretam et portuosam inter
        municipia crebra urbes duae faciunt claram Salamis et Paphus, altera Iovis
        delubris altera Veneris templo insignis. tanta autem tamque multiplici
        fertilitate abundat rerum omnium eadem Cyprus ut nullius externi indigens
        adminiculi indigenis viribus a fundamento ipso carinae ad supremos usque
        carbasos aedificet onerariam navem omnibusque armamentis instructam mari
        committat.
      </Typography>
      <Button variant="contained" color="secondary" size="small">
        En voir plus
      </Button>
    </Stack>
  </Box>
);
