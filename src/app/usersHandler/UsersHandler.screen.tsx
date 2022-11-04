import React from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAsync } from 'react-use';

import { selectToken } from '@entities/authentification/store/selectors/selectToken.selector';
import { getJobsThunk } from '@entities/jobs/store/thunks/getJobs.thunk';
import { getTeamsThunk } from '@entities/teams/store/thunks/getTeams.thunk';
import { getUsersThunk } from '@entities/users/store/thunks/getUsers.thunk';
import {
  Typography,
  Tabs,
  Tab,
  Box,
  TabPanel,
  Stack,
  styled,
  Container,
  TeamIcon,
} from '@ui-kit';

import { MainRoutesEnum } from '../../RoutesEnum';
import { useAppDispatch } from '../../store/useAppDispatch';
import { MainAppRoutesEnum } from '../MainAppRoutesEnum';
import { CreateJobForm } from './features/jobs/CreateJobForm';
import { DataGridJobs } from './features/jobs/DataGridJobs';
import { CreateTeamForm } from './features/teams/CreateTeamForm';
import { DataGridTeams } from './features/teams/DataGridTeams';
import { DataGridUsers } from './features/users/DataGridUsers';
import { InviteUserForm } from './features/users/InviteUserForm';

/* eslint-disable no-unused-vars */
enum TabsEnum {
  users = 'users',
  teams = 'teams',
  jobs = 'jobs',
}
/* eslint-enable no-unused-vars */

const StyledContainer = styled(Container)`
  margin: 0;
  background-color: #f3f3f3;
`;

const StyledTabs = styled(Tabs)`
  border-bottom: '1px solid grey';
`;

const StyledTab = styled(Tab)`
  margin: 2px 0 !important;
`;

const UsersHandlerScreen = () => {
  const [value, setValue] = React.useState(TabsEnum.users);
  const dispatch = useAppDispatch();
  const token = useSelector(selectToken);
  const navigate = useNavigate();

  if (!token) {
    // TODO: rediriger plutot sur la page "tu n'as pas access a cette page"
    navigate(`${MainRoutesEnum.app}${MainAppRoutesEnum.login}`);
  }

  const handleChangeTab = (event: React.SyntheticEvent, newValue: TabsEnum) => {
    setValue(newValue);
  };

  const { loading: loadingTeams, error: errorTeams } = useAsync(() =>
    dispatch(getTeamsThunk({ token }))
  );
  const { loading: loadingJobs, error: errorJobs } = useAsync(() =>
    dispatch(getJobsThunk({ token }))
  );
  const { loading: loadingUsers, error: errorUsers } = useAsync(() =>
    dispatch(getUsersThunk({ token }))
  );
  return (
    <StyledContainer>
      <Box height="15vh" p={2}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <TeamIcon fontSize="large" />
          <Typography variant="h4">Gestion</Typography>
        </Stack>
        <StyledTabs value={value} onChange={handleChangeTab}>
          <StyledTab disableRipple value={TabsEnum.users} label="Utilisateurs" />
          <StyledTab disableRipple value={TabsEnum.teams} label="Équipes" />
          <StyledTab disableRipple value={TabsEnum.jobs} label="Métiers" />
        </StyledTabs>
      </Box>
      <Box p={2}>
        <TabPanel value={value} index={TabsEnum.users}>
          <Stack direction="row" spacing={2}>
            <InviteUserForm />
            <DataGridUsers loading={loadingUsers} error={errorUsers} />
          </Stack>
        </TabPanel>
        <TabPanel value={value} index={TabsEnum.teams}>
          <Stack direction="row" spacing={2}>
            <CreateTeamForm />
            <DataGridTeams loading={loadingTeams} error={errorTeams} />
          </Stack>
        </TabPanel>
        <TabPanel value={value} index={TabsEnum.jobs}>
          <Stack direction="row" spacing={2}>
            <CreateJobForm />
            <DataGridJobs loading={loadingJobs} error={errorJobs} />
          </Stack>
        </TabPanel>
      </Box>
    </StyledContainer>
  );
};

export default UsersHandlerScreen;
