import React from 'react';

import { Typography, Tabs, Tab, Box, TabPanel } from '@ui-kit';

import { InviteUserForm } from './features/InviteUserForm';
import { ListUsers } from './features/ListUsers';

/* eslint-disable no-unused-vars */
enum TabsEnum {
  users = 'users',
  teams = 'teams',
}
/* eslint-enable no-unused-vars */

const UsersHandlerScreen = () => {
  const [value, setValue] = React.useState(TabsEnum.users);

  const handleChange = (event: React.SyntheticEvent, newValue: TabsEnum) => {
    setValue(newValue);
  };

  // faire l'appel de service pour récupérer la liste des utilisateurs et teams

  return (
    <div>
      <Box display="flex" justifyContent="center">
        <Tabs value={value} onChange={handleChange} variant="scrollable">
          <Tab disableRipple value={TabsEnum.users} label="Users" />
          <Tab disableRipple value={TabsEnum.teams} label="Teams" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={TabsEnum.users}>
        <Typography>Utilisateurs</Typography>
        <Typography>Ajouter un nouvel utilisateur</Typography>
        <InviteUserForm />
        <ListUsers />
      </TabPanel>
      <TabPanel value={value} index={TabsEnum.teams}>
        <Typography>Teams</Typography>
        {/* <ListTeams /> */}
      </TabPanel>
    </div>
  );
};

export default UsersHandlerScreen;
