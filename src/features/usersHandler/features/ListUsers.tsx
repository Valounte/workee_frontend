import * as React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export const ListUsers = () => (
        <List dense sx={{ width: '100%', maxWidth: 360 }}>
            {[0, 1, 2, 3, 4].map((value) => {
                const labelId = `${value}`;
                return (
                    <ListItem key={value} disablePadding>
                        <ListItemButton>
                            <ListItemText id={labelId} primary={`John Doe ${value + 1}`} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
)
