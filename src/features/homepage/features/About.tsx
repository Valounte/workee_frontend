import React from 'react';

import { Box, Stack, Typography } from '@ui-kit';

export const About = () => (
  <Box
    sx={{
      height: '65vh',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
    <Box sx={{ backgroundColor: 'primary.main', width: '50vw', height: '50vh' }}>
      Image
    </Box>
    <Stack direction="column" sx={{ width: '50vw', height: '50vh' }}>
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
    </Stack>
  </Box>
);
