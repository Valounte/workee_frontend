import React from 'react';

import {Typography, Tabs, Tab } from "@ui-kit";

import { InviteUserForm } from './features/InviteUserForm';
import {ListUsers} from "./features/ListUsers";


const UsersHandlerScreen = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div>
            <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
                <Tab label="Users"/>
                <Tab label="Teams"/>
            </Tabs>
                <Typography>Ajouter un nouvel utilisateur</Typography>
                <InviteUserForm/>
                <ListUsers/>

        </div>
    );
}

export default UsersHandlerScreen;
