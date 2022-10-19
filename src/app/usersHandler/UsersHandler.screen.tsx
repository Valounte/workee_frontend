import React from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAsync } from 'react-use';

import { MainNavigation } from '@common-features/main-navigation/MainNavigation';
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
  Container,
  styled,
  Divider,
} from '@ui-kit';

import { MainRoutesEnum } from '../../RoutesEnum';
import { useAppDispatch } from '../../store/useAppDispatch';
import { MainAppRoutesEnum } from '../MainAppRoutesEnum';
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
  max-width: 100% !important;
  padding: 0 !important;
`;

const StyledTabs = styled(Tabs)`
  border-bottom: '1px solid grey';
`;

const StyledTab = styled(Tab)`
  margin: 6px 0 !important;
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
      <Stack direction="row" height="100vh" spacing={0}>
        <MainNavigation />
        <Box width="100vw">
          <StyledTabs value={value} onChange={handleChangeTab}>
            <StyledTab disableRipple value={TabsEnum.users} label="Users" />
            <Tab disableRipple value={TabsEnum.teams} label="Teams" />
            <Tab disableRipple value={TabsEnum.jobs} label="Jobs" />
          </StyledTabs>
          <Box p={4}>
            <TabPanel value={value} index={TabsEnum.users}>
              <Typography variant="h5" mb={2}>
                Inviter un nouvel utilisateur !
              </Typography>
              <Stack
                direction="row"
                spacing={2}
                divider={<Divider orientation="vertical" flexItem />}>
                <InviteUserForm />
                <DataGridUsers loading={loadingUsers} error={errorUsers} />
              </Stack>
            </TabPanel>
            <TabPanel value={value} index={TabsEnum.teams}>
              <Typography variant="h5" mb={2}>
                Teams
              </Typography>
              <CreateTeamForm />
              <DataGridTeams loading={loadingTeams} error={errorTeams} />
            </TabPanel>
            <TabPanel value={value} index={TabsEnum.jobs}>
              <Typography variant="h5" mb={2}>
                Jobs
              </Typography>
              <DataGridJobs loading={loadingJobs} error={errorJobs} />
            </TabPanel>
          </Box>
        </Box>
      </Stack>
    </StyledContainer>
  );
};

export default UsersHandlerScreen;
