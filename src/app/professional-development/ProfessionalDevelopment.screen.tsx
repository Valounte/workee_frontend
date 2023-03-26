import React, { useEffect } from 'react';

import { unwrapResult } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { selectToken } from '@entities/authentification/store/selectors/selectToken.selector';
import { selectGoals } from '@entities/professional-development/store/selectors/getGoals.selector';
import { getGoalsThunk } from '@entities/professional-development/store/thunks/getGoals.thunk';
import { styled, Tab, TabPanel, Tabs, TargetIcon } from '@ui-kit';
import { useAppDispatch } from 'src/store/useAppDispatch';
import { Box } from 'src/ui-kit/components/Box/Box';
import { Stack } from 'src/ui-kit/components/Stack/Stack';
import { Typography } from 'src/ui-kit/components/Typography/Typography';

import AddGoal from './features/AddGoal';
import MyGoals from './features/Goal';
import TeamGoals from './features/TeamGoals';

/* eslint-disable no-unused-vars */
enum TabsEnum {
  myGoals = 'myGoals',
  teamGoals = 'teamGoals',
}

const StyledTabs = styled(Tabs)`
  border-bottom: '1px solid grey';
`;

const StyledTab = styled(Tab)`
  margin: 2px 0 !important;
`;

const ProfessionalDevelopmentScreen = () => {
  const [value, setValue] = React.useState(TabsEnum.myGoals);
  const dispatch = useAppDispatch();
  const token = useSelector(selectToken);
  const goals = useSelector(selectGoals);

  const handleChangeTab = (event: React.SyntheticEvent, newValue: TabsEnum) => {
    setValue(newValue);
  };

  useEffect(() => {
    dispatch(getGoalsThunk({ token }))
      .then(() => unwrapResult)
      .catch(() => {
        console.error('error');
      });
  }, [dispatch, token]);

  useEffect(() => {}, [goals]);

  return (
    <div>
      <Box height="8vh" p={2} mb={5}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <TargetIcon fontSize="large" />
          <Typography variant="h4">Développement professionel</Typography>
        </Stack>
        <Typography variant="body1">
          Définissez vos objectifs professionels et suivez votre évolution
        </Typography>
      </Box>
      <StyledTabs
        value={value}
        onChange={handleChangeTab}
        indicatorColor="secondary">
        <StyledTab disableRipple value={TabsEnum.myGoals} label="Mes objectifs" />
        <StyledTab
          disableRipple
          value={TabsEnum.teamGoals}
          label="Objectifs de mon équipe"
        />
      </StyledTabs>
      <Box p={2}>
        <TabPanel value={value} index={TabsEnum.myGoals}>
          <Stack direction={{ xs: 'column', md: 'column' }} spacing={2}>
            <AddGoal />
            <Box mt={2} style={{ width: '40%' }}>
              {goals.map(goal => (
                <MyGoals providedGoal={goal} />
              ))}
            </Box>
          </Stack>
        </TabPanel>
        <TabPanel value={value} index={TabsEnum.teamGoals}>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} >
            <TeamGoals />
          </Stack>
        </TabPanel>
      </Box>
    </div>
  );
};

export default ProfessionalDevelopmentScreen;
