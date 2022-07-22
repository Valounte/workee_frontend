import React from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAsync } from 'react-use';

import {getJobsThunk} from "@entities/jobs/store/thunks/getAllJobs.thunk";
import { RoutesEnum } from '@entities/RoutesEnum';
import { getTeamsThunk } from '@entities/teams/store/thunks/getAllTeams.thunk';
import { selectToken } from '@entities/user/store/selectors/selectToken.selector';
import { Typography, Tabs, Tab, Box, TabPanel } from '@ui-kit';

import { useAppDispatch } from '../../store/useAppDispatch';
import { CreateTeamForm } from './features/CreateTeamForm';
import { DataGridJobs } from './features/DataGridJobs';
import { DataGridTeams } from './features/DataGridTeams';
import { InviteUserForm } from './features/InviteUserForm';

/* eslint-disable no-unused-vars */
enum TabsEnum {
  users = 'users',
  teams = 'teams',
  jobs = 'jobs',
}
/* eslint-enable no-unused-vars */

const UsersHandlerScreen = () => {
    const [value, setValue] = React.useState(TabsEnum.users);
    const dispatch = useAppDispatch();
    const token = useSelector(selectToken);
    const navigate = useNavigate();

    if (!token) {
        // TODO: rediriger plutot sur la page "tu n'as pas access a cette page"
        navigate(RoutesEnum.login);
    }

    const handleChangeTab = (event: React.SyntheticEvent, newValue: TabsEnum) => {
        setValue(newValue);
    };

    const {loading: loadingTeams, error: errorTeams} = useAsync(() =>
        dispatch(getTeamsThunk({token: token as string}))
    );
    const {loading: loadingJobs, error: errorJobs} = useAsync(() =>
        dispatch(getJobsThunk({token: token as string}))
    );
    // TODO: ajouter le getUsersThunk"
    // TODO: ajouter le getJobsThunk"

    return (
        <div>
            <Box display="flex" justifyContent="center">
                <Tabs value={value} onChange={handleChangeTab} variant="scrollable">
                    <Tab disableRipple value={TabsEnum.users} label="Users"/>
                    <Tab disableRipple value={TabsEnum.teams} label="Teams"/>
                    <Tab disableRipple value={TabsEnum.jobs} label="Jobs"/>
                </Tabs>
            </Box>
            <TabPanel value={value} index={TabsEnum.users}>
                <Typography>Utilisateurs</Typography>
                <Typography>Ajouter un nouvel utilisateur</Typography>
                <InviteUserForm/>
            </TabPanel>
            <TabPanel value={value} index={TabsEnum.teams}>
                <Typography>Teams</Typography>
                <CreateTeamForm/>
                <DataGridTeams loading={loadingTeams} error={errorTeams}/>
            </TabPanel>
            <TabPanel value={value} index={TabsEnum.jobs}>
                <Typography>Jobs</Typography>
                <DataGridJobs loading={loadingJobs} error={errorJobs}/>
                {/* TODO: créer CreateJobs */}
            </TabPanel>
        </div>
    );
};

export default UsersHandlerScreen;
