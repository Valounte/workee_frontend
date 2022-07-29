import React, { useCallback } from 'react';

import { useNavigate } from 'react-router-dom';

import { SimpleHeader } from '@common-features/simpleHeader/SimpleHeader';
import { Grid, Box, Typography, styled, Button } from '@ui-kit';
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
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Box
            minHeight="90vh"
            minWidth="50vw"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center">
            <PageNotFoundImage width="80%" />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box minHeight="90vh" minWidth="50vw">
            <Box
              display="flex"
              flexDirection="column"
              minHeight="90vh"
              justifyContent="center">
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
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default PageNotFoundScreen;
