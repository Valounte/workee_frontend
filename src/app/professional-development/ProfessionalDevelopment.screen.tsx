import React, { useEffect } from 'react';

import { unwrapResult } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { selectToken } from '@entities/authentification/store/selectors/selectToken.selector';
import { selectGoals } from '@entities/professional-development/store/selectors/getGoals.selector';
import { getGoalsThunk } from '@entities/professional-development/store/thunks/getGoals.thunk';
import { useAppDispatch } from 'src/store/useAppDispatch';
import { Box } from 'src/ui-kit/components/Box/Box';
import { Stack } from 'src/ui-kit/components/Stack/Stack';
import { Typography } from 'src/ui-kit/components/Typography/Typography';
import { SettingsIcon } from 'src/ui-kit/icons/Settings/Settings';

import MyGoals from './features/Goal';

const ProfessionalDevelopmentScreen = () => {
  const dispatch = useAppDispatch();
  const token = useSelector(selectToken);
  const goals = useSelector(selectGoals);

  useEffect(() => {
  dispatch(getGoalsThunk({ token }))
    .then(() => unwrapResult)
    .catch(() => {
      console.error('error');
    });
  }, [dispatch, token]);

  return (
    <div>
      <Box height="8vh" p={2}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <SettingsIcon fontSize="large" />
          <Typography variant="h4">Développement professionel</Typography>
        </Stack>
        <Typography variant="body1">
          Définissez vos objectifs professionels et suivez votre évolution
        </Typography>
      </Box>
    <Box mt={2} style={{width: '50%'}}>  
      {goals.map((goal) => (
        <MyGoals providedGoal={goal} />
      ))}
    </Box>
    </div>
  );
};

export default ProfessionalDevelopmentScreen;
