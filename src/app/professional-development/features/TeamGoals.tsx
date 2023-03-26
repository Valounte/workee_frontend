import React, { useState } from "react";

import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useSelector } from "react-redux";

import { selectMe } from "@entities/authentification/store/selectors/selectMe.selector";
import { selectToken } from "@entities/authentification/store/selectors/selectToken.selector";
import { getUsersByTeamService } from "@entities/teams/services/getUsersByTeam.service";
import { Team } from "@entities/teams/Team";
import { User } from "@entities/users/User";


const TeamGoals: React.FC = () => {
  const me = useSelector(selectMe);
  const myTeams = me?.teams ?? [];
  const [selectedTeam, setSelectedTeam] = useState<Team | undefined>(undefined);
  const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined);
  const [users, setUsers] = useState<User[] | undefined>(undefined);
  const token = useSelector(selectToken);

  const handleTeamChange = (event: SelectChangeEvent<number>) => {
    const teamId = event.target.value as number;
    const team = myTeams.find((team) => team.id === teamId);

    setSelectedTeam(team);
    if (team) {
      getUsersByTeamService({
        teamId: team.id,
        token
    })
    .then(data => {
        setUsers(data.data);
    })
    .catch(error => {
        console.error(error);
    })
    }
  };

  const handleUserChange = (event: SelectChangeEvent<number>) => {
    const userId = event.target.value as number;
    const user = users?.find((user) => user.id === userId);
    setSelectedUser(user);
    console.log(user);
  };

  return (
    <div>
    <FormControl margin="normal" fullWidth>
      <InputLabel id="team-select-label" sx={{ marginTop: "-8px" }}>
        Selectionnez une équipe
      </InputLabel>
      <Select
        labelId="team-select-label"
        id="team-select"
        value={selectedTeam ? selectedTeam.id : ""}
        onChange={handleTeamChange}
      >
        {myTeams.map((team) => (
          <MenuItem key={team.id} value={team.id}>
            {team.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
        <FormControl margin="normal" fullWidth>
        <InputLabel id="team-select-label" sx={{ marginTop: "-8px" }}>
          Selectionnez un utilisateur
        </InputLabel>
        <Select
          labelId="team-select-label"
          id="team-select"
          value={selectedUser ? selectedUser.id : ""}
          onChange={handleUserChange}
        >
          { users ? users.map((user) => (
            <MenuItem key={user.id} value={user.id}>
              {user.firstname} {user.lastname}
            </MenuItem>
          )) : ''}
        </Select>
      </FormControl>
      </div>
  );
};

export default TeamGoals;