import React from 'react';

import { Box, Tabs, Tab } from '@ui-kit';

export const Header = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
      <Box display="flex" flexDirection="column" maxWidth="50vh">
        <Box textAlign="center">
          <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
            <Tab label="Users" />
            <Tab label="Teams" />
          </Tabs>
        </Box>
      </Box>
  );
};
