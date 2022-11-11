import React from 'react';

import { useSelector } from 'react-redux';

import { selectCurrentHumidity } from '@entities/environment-metrics/humidity/current/store/selectors/selectCurrentHumidityselector';
import { Card, Grid, LinkedInIcon, Stack, styled } from '@ui-kit';

const StyledContainer = styled.div`
    margin-top: 44px;
    margin-left: 29px;
    margin-right: 29px;
`;

const StyledCard = styled(Card)`

`;

export const EnvironmentMetrics = () => {
    const currentHumidity = useSelector(selectCurrentHumidity);

    return (
        <StyledContainer>
            <Grid container spacing={3}>
                <Grid item md={3}>
                    <StyledCard>
                        <Stack direction="row">
                            <LinkedInIcon fontSize="large" width={30}/>
                        {currentHumidity.value ?? 'pas de données'}
                        </Stack>
                    </StyledCard>
                </Grid>
                <Grid item md={3}>
                <StyledCard>
                        <Stack direction="row">
                            <LinkedInIcon fontSize="large" width={30}/>
                        {currentHumidity.value ?? 'pas de données'}
                        </Stack>
                    </StyledCard>                </Grid>
                <Grid item md={3}>
                <StyledCard>
                        <Stack direction="row">
                            <LinkedInIcon fontSize="large" width={30}/>
                        {currentHumidity.value ?? 'pas de données'}
                        </Stack>
                    </StyledCard>                </Grid>
                <Grid item md={3}>
                <StyledCard>
                        <Stack direction="row">
                            <LinkedInIcon fontSize="large" width={30}/>
                        {currentHumidity.value ?? 'pas de données'}
                        </Stack>
                    </StyledCard>                </Grid>
            </Grid>
        </StyledContainer>
    );
}