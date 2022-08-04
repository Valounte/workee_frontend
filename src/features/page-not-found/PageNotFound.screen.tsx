import React, { useCallback } from 'react';

import { useNavigate } from 'react-router-dom';

import { SimpleHeader } from '@common-features/simpleHeader/SimpleHeader';
import { Container, Stack, Typography, styled, Button } from '@ui-kit';
import { ReactComponent as PageNotFoundImage } from '@ui-kit/images/404-illustration.svg';

const StyledButton = styled(Button)`
  max-width: 200px;
`;

const PageNotFoundScreen = () => {
  const navigate = useNavigate();
  const handleClickRedirect = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <>
      <SimpleHeader />
      <Container maxWidth="md">
        <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center">
          <Stack
            direction="column"
            alignItems="flex-start"
            width={{ xs: '100%', sm: '50%' }}
            display={{ xs: 'none', sm: 'flex' }}>
            <PageNotFoundImage width="100%" />
          </Stack>
        </Stack>
        <Stack
          direction="column"
          alignItems={{ xs: 'center', sm: 'flex-start' }}
          width={{ xs: '100%', sm: '50%' }}
          mt={{ xs: 3 }}>
          <Typography variant="h2" fontWeight="500" paddingBottom={2}>
            Page introuvable
          </Typography>
          <Typography variant="subtitle1" fontSize="25px">
            Désolé, la page que vous recherchez n&apos;existe pas.
          </Typography>
          <StyledButton
            variant="contained"
            color="secondary"
            onClick={handleClickRedirect}>
            <Typography>Retourner à l&apos;accueil</Typography>
          </StyledButton>
        </Stack>
      </Container>
    </>
  );
};
export default PageNotFoundScreen;
