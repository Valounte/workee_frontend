import React from 'react';

import { useSelector } from 'react-redux';

import { selectHumidityIsConform } from '@entities/environment-metrics/alert/store/selectors/selectHumidityIsConform.selector';
import { selectLuminosityIsConform } from '@entities/environment-metrics/alert/store/selectors/selectLuminosityIsConform.selector';
import { selectSoundIsConform } from '@entities/environment-metrics/alert/store/selectors/selectSoundIsConform.selector';
import { selectTemperatureIsConform } from '@entities/environment-metrics/alert/store/selectors/selectTemperatureIsConform.selector';
import { selectCurrentHumidity } from '@entities/environment-metrics/humidity/current/store/selectors/selectCurrentHumidityselector';
import { selectCurrentLuminosity } from '@entities/environment-metrics/luminosity/current/store/selectors/selectCurrentLuminosity.selector';
import { selectCurrentSound } from '@entities/environment-metrics/sound/current/store/selectors/selectCurrentSound.selector';
import { selectCurrentTemperature } from '@entities/environment-metrics/temperature/current/store/selectors/selectCurrentTemperature.selector';
import {
  Card,
  Grid,
  Box,
  LuminosityIcon,
  SoundIcon,
  ThermometerIcon,
  Stack,
  Typography,
  HumidityIcon,
  Divider,
  styled,
} from '@ui-kit';

const StyledBox = styled(Box)`
  width: 30%;
  display: flex;
  justify-content: center;
  padding: 16px;
  height: 100%;
  align-items: center;
`;

export const EnvironmentMetrics = () => {
  const currentHumidity = useSelector(selectCurrentHumidity);
  const currentTemperature = useSelector(selectCurrentTemperature);
  const currentLuminosity = useSelector(selectCurrentLuminosity);
  const currentSound = useSelector(selectCurrentSound);
  const isTemperatureConformValue = useSelector(selectTemperatureIsConform);
  const isHumidityConformValue = useSelector(selectHumidityIsConform);
  const isSoundConformValue = useSelector(selectSoundIsConform);
  const isLuminosityConformValue = useSelector(selectLuminosityIsConform);

  const conformColor = '#24b57a';
  const notConformColor = '#cc2d22';

  return (
    <Grid container item spacing={1} md={12} xs={12} mt={1} mb={4}>
      <Grid item md={3} xs={6}>
        <Card>
          <Stack
            direction="row"
            alignItems="center"
            alignContent="center"
            divider={<Divider orientation="vertical" flexItem />}
            height="100%">
            <StyledBox
              bgcolor={isTemperatureConformValue ? conformColor : notConformColor}>
              <ThermometerIcon fontSize="60" color="white" />
            </StyledBox>
            <Box width="70%" pl={2}>
              <Typography variant="h5" display={{ sm: 'flex', xs: 'none' }}>
                Température
              </Typography>
              {currentTemperature.value ? (
                <Typography
                  variant="h4"
                  color={isTemperatureConformValue ? conformColor : notConformColor}>
                  {currentTemperature.value}°C
                </Typography>
              ) : (
                <Typography variant="body2">pas de données</Typography>
              )}
            </Box>
          </Stack>
        </Card>
      </Grid>
      <Grid item md={3} xs={6}>
        <Card>
          <Stack
            direction="row"
            alignItems="center"
            alignContent="center"
            divider={<Divider orientation="vertical" flexItem />}
            height="100%">
            <StyledBox
              bgcolor={isHumidityConformValue ? conformColor : notConformColor}>
              <HumidityIcon fontSize="60" color="white" />
            </StyledBox>
            <Box width="70%" pl={2}>
              <Typography variant="h5" display={{ sm: 'flex', xs: 'none' }}>
                Humidité
              </Typography>
              <Typography variant="h4">
                {currentHumidity.value ? (
                  <Typography
                    variant="h4"
                    color={isHumidityConformValue ? conformColor : notConformColor}>
                    {currentHumidity.value}%
                  </Typography>
                ) : (
                  <Typography variant="body2">pas de données</Typography>
                )}
              </Typography>
            </Box>
          </Stack>
        </Card>
      </Grid>
      <Grid item md={3} xs={6}>
        <Card>
          <Stack
            direction="row"
            alignItems="center"
            alignContent="center"
            divider={<Divider orientation="vertical" flexItem />}
            height="100%">
            <StyledBox
              bgcolor={isSoundConformValue ? conformColor : notConformColor}>
              <SoundIcon fontSize="60" color="white" />
            </StyledBox>
            <Box width="70%" pl={2}>
              <Typography variant="h5" display={{ sm: 'flex', xs: 'none' }}>
                Son ambiant
              </Typography>
              <Typography variant="h4">
                {currentSound.value ? (
                  <Typography
                    variant="h4"
                    color={isSoundConformValue ? conformColor : notConformColor}>
                    {currentSound.value}dB
                  </Typography>
                ) : (
                  <Typography variant="body2">pas de données</Typography>
                )}
              </Typography>
            </Box>
          </Stack>
        </Card>
      </Grid>
      <Grid item md={3} xs={6}>
        <Card>
          <Stack
            direction="row"
            alignItems="center"
            alignContent="center"
            divider={<Divider orientation="vertical" flexItem />}
            height="100%">
            <StyledBox
              bgcolor={isLuminosityConformValue ? conformColor : notConformColor}>
              <LuminosityIcon fontSize="60" color="white" />
            </StyledBox>
            <Box width="70%" pl={2}>
              <Typography variant="h5" display={{ sm: 'flex', xs: 'none' }}>
                Luminosité
              </Typography>
              <Typography
                variant="h4"
                color={isLuminosityConformValue ? conformColor : notConformColor}>
                {currentLuminosity.value ? (
                  <Typography variant="h4">{currentLuminosity.value}lx</Typography>
                ) : (
                  <Typography variant="body2">pas de données</Typography>
                )}
              </Typography>
            </Box>
          </Stack>
        </Card>
      </Grid>
    </Grid>
  );
};
