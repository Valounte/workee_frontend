import React, {useCallback} from 'react';

import {MenuItem} from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';
import {unwrapResult} from "@reduxjs/toolkit";
import {useFormik} from 'formik';
import {useSnackbar} from "notistack";
import {useSelector} from "react-redux";
import {useAsync} from "react-use";
import {array as yupArray, object as yupObject, string as yupString} from 'yup';

import {selectToken} from "@entities/authentification/store/selectors/selectToken.selector";
import {sendNotificationThunk} from "@entities/notifications/store/thunks/sendNotification.thunk";
import {selectTeams} from "@entities/teams/store/selectors/getTeams.selector";
import {getTeamsThunk} from "@entities/teams/store/thunks/getTeams.thunk";
import {selectUsers} from "@entities/users/store/selectors/getUsers.selector";
import {getUsersThunk} from "@entities/users/store/thunks/getUsers.thunk";
import {Box, Button, SelectChangeEvent, SelectInput, TextField, Typography} from '@ui-kit';

import {useAppDispatch} from "../../../store/useAppDispatch";

const validationSchema = yupObject({
    teamsId: yupArray(),
    usersId: yupArray(),
    alertLevel: yupString().required('Status Obligatoire'),
    message: yupString().required('Message Obligatoire'),
});

const statusLevel = [
    "NORMAL_ALERT", "IMPORTANT_ALERT", "URGENT_ALERT"
]



export const NotificationManagerForm = () => {
    const token = useSelector(selectToken);
    let usersFromStore = useSelector(selectUsers);
    let teamsFromStore = useSelector(selectTeams);
    const dispatch = useAppDispatch();
    const {enqueueSnackbar} = useSnackbar();
    const formik = useFormik({
        initialValues: {
            teamsId: [],
            usersId: [],
            alertLevel: '',
            message: '',
        },
        validationSchema,
        onSubmit: values => {
            const sendNotifValues = {
                teamsId: values.teamsId,
                usersId: values.usersId,
                alertLevel: values.alertLevel,
                message: values.message,
                token,
            };
            if (values.teamsId === [] && values.usersId === []) {
                enqueueSnackbar('You need to add at least !', {
                    variant: 'error',
                });
                return;
            }

            console.log(sendNotifValues);
            dispatch(sendNotificationThunk(sendNotifValues))
                .then(unwrapResult)
                .then(() => {
                    enqueueSnackbar('Notification successfully sent !', {
                        variant: 'success',
                    });
                })
                .catch(() => {
                    enqueueSnackbar('Error notification !', {
                        variant: 'error',
                    });
                });
        },
    });

    const {error: errorUsers} = useAsync(() =>
        dispatch(getUsersThunk({token}))
    );
    if (errorUsers) {
        usersFromStore = [];
    }
    const {error: errorTeams} = useAsync(() =>
        dispatch(getTeamsThunk({token}))
    );
    if (errorTeams) {
        teamsFromStore = [];
    }
    const handleLevelChange = useCallback(
        (event: SelectChangeEvent<unknown>) => {
            formik.setFieldValue('alertLevel', event.target.value).catch(() => {
            });
        },
        [formik]
    );
    
    return (
        <form onSubmit={formik.handleSubmit}>
            <Box width="50%" margin="0 auto" padding="30px">
                <Box display="flex" flexDirection="column" maxWidth="70%" margin="0 auto">
                    <Autocomplete
                        key="teamsId"
                        multiple
                        id="teamsId"
                        options={teamsFromStore.map(team => `${team.name}`)}
                        renderInput={(params) => <TextField key="team" style={{marginBottom: 25}} {...params} label="Equipe(s) à notifier"/>}
                    />
                    <Autocomplete
                        key="usersId"
                        multiple
                        id="usersId"
                        disablePortal
                        options={usersFromStore.map(user => `${user.firstname   } ${  user.lastname}`)}
                        renderInput={(params) => <TextField key="user" style={{marginBottom: 25}} {...params} label="Personne(s) à notifer"/>}
                    />
                    <SelectInput
                        key="status"
                        id="status"
                        name="status"
                        label="Niveau d'importance"
                        value={formik.values.alertLevel}
                        error={formik.touched.alertLevel && Boolean(formik.errors.alertLevel)}
                        onChange={handleLevelChange}
                        errorMessage={
                            formik.touched.alertLevel && formik.errors.alertLevel != null ? formik.errors.alertLevel : ' '
                        }>
                        {statusLevel.map(level => (
                            <MenuItem key={`item${  level}`} value={level}>
                                {level}
                            </MenuItem>
                        ))}
                    </SelectInput>
                    <TextField
                        variant="outlined"
                        key="message"
                        id="message"
                        name="message"
                        label="Message"
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        error={formik.touched.message && Boolean(formik.errors.message)}
                        helperText={
                            formik.touched.message && formik.errors.message != null
                                ? formik.errors.message
                                : ' '
                        }
                        InputLabelProps={{style: {fontSize: 15}}}
                    />

                    <Button key="submit" variant="contained" type="submit">
                        <Typography textAlign="center">Envoyer la notification</Typography>
                    </Button>
                </Box>
            </Box>
        </form>
    );
};
