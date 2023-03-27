import React, { useState } from 'react';

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useSelector } from 'react-redux';

import { selectMe } from '@entities/authentification/store/selectors/selectMe.selector';
import { selectToken } from '@entities/authentification/store/selectors/selectToken.selector';
import { selectGoalsByUser } from '@entities/professional-development/store/selectors/getGoalsByUser.selector';
import { getGoalsByUserThunk } from '@entities/professional-development/store/thunks/getGoalsByUser.thunk';
import { getUsersByTeamService } from '@entities/teams/services/getUsersByTeam.service';
import { Team } from '@entities/teams/Team';
import { User } from '@entities/users/User';
import { Stack } from '@ui-kit';
import { useAppDispatch } from 'src/store/useAppDispatch';

import AddGoal from './AddGoal';
import MyGoals from './Goal';

const TeamGoals: React.FC = () => {
  const me = useSelector(selectMe);
  const myTeams = me?.teams ?? [];
  const [selectedTeam, setSelectedTeam] = useState<Team | undefined>(undefined);
  const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined);
  const [users, setUsers] = useState<User[] | undefined>(undefined);
  const token = useSelector(selectToken);
  const dispatch = useAppDispatch();

  let goals = useSelector(selectGoalsByUser);

  const handleTeamChange = (event: SelectChangeEvent<number>) => {
    const teamId = event.target.value as number;
    const team = myTeams.find(team => team.id === teamId);

    setSelectedTeam(team);
    if (team) {
      getUsersByTeamService({
        teamId: team.id,
        token,
      })
        .then(data => {
          setUsers(data.data);
        })
        .catch(error => {
          console.error(error);
        });
      setSelectedUser(undefined);
      goals = [];
    }
  };

  const handleUserChange = (event: SelectChangeEvent<number>) => {
    const userId = event.target.value as number;
    const user = users?.find(user => user.id === userId);
    if (!user) return;
    setSelectedUser(user);
    console.log(user);
    dispatch(
      getGoalsByUserThunk({
        userId,
        token,
      })
    )
      .then(() => console.log('ok'))
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <FormControl margin="normal" fullWidth>
        <InputLabel id="team-select-label" sx={{ marginTop: '-8px' }}>
          Selectionnez une équipe
        </InputLabel>
        <Select
          labelId="team-select-label"
          id="team-select"
          value={selectedTeam ? selectedTeam.id : ''}
          onChange={handleTeamChange}>
          {myTeams.map(team => (
            <MenuItem key={team.id} value={team.id}>
              {team.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl margin="normal" fullWidth>
        <InputLabel id="team-select-label" sx={{ marginTop: '-8px' }}>
          Selectionnez un utilisateur
        </InputLabel>
        <Select
          labelId="team-select-label"
          id="team-select"
          value={selectedUser ? selectedUser.id : ''}
          onChange={handleUserChange}>
          {users
            ? users.map(user => (
                <MenuItem key={user.id} value={user.id}>
                  {user.firstname} {user.lastname}
                </MenuItem>
              ))
            : ''}
        </Select>
      </FormControl>
      {selectedUser ? <AddGoal userId={selectedUser.id} /> : ''}
      <Stack direction={{ xs: 'column', md: 'column' }} spacing={2}>
        {goals && selectedUser
          ? goals.map(goal => (
              <MyGoals providedGoal={goal} userId={selectedUser.id} />
            ))
          : ''}
        {goals?.length === 0 && selectedUser && selectedTeam
          ? "Pas d'objectifs définis"
          : ''}
      </Stack>
    </div>
  );
};

export default TeamGoals;
