/* eslint-disable no-unused-vars */
import React from 'react';

import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import { useSelector } from 'react-redux';

import { selectToken } from '@entities/authentification/store/selectors/selectToken.selector';
import { ChangeEnvironmentMetricsPreferenceParams } from '@entities/settings/services/changeEnvironmentMetricsPreference.service';
import { selectEnvironmentMetricsPreferences } from '@entities/settings/store/selectors/getEnvironmentMetricsPreferences.selector';
import { changeEnvironmentMetricsPreferenceThunk } from '@entities/settings/store/thunks/ChangeEnvironmentMetricsPreference.thunk';
import {
  Card,
  CardContent,
  CardHeader,
  MetricsIcon,
  Stack,
  Switch,
  Typography,
} from '@ui-kit';
import { useAppDispatch } from 'src/store/useAppDispatch';

enum MetricsType {
  TEMPERATURE = 'TEMPERATURE',
  HUMIDITY = 'HUMIDITY',
  SOUND = 'SOUND',
  LUMINOSITY = 'LUMINOSITY',
}

export const EnvironmentMetricsPreferences = () => {
  const token = useSelector(selectToken);
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const environmentMetricsPreferences = useSelector(
    selectEnvironmentMetricsPreferences
  );
  const soundPreference = environmentMetricsPreferences.find(
    environmentMetricsPreferences =>
      environmentMetricsPreferences.metricType === 'SOUND'
  );
  const temperaturePreference = environmentMetricsPreferences.find(
    environmentMetricsPreferences =>
      environmentMetricsPreferences.metricType === 'TEMPERATURE'
  );
  const humidityPreference = environmentMetricsPreferences.find(
    environmentMetricsPreferences =>
      environmentMetricsPreferences.metricType === 'HUMIDITY'
  );
  const luminosityPreference = environmentMetricsPreferences.find(
    environmentMetricsPreferences =>
      environmentMetricsPreferences.metricType === 'LUMINOSITY'
  );

  const handleChange =
    (metricType: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const isDesactivated = event.target.checked;
      const param: ChangeEnvironmentMetricsPreferenceParams = {
        token,
        metricType,
        isDesactivated,
      };

      const status = isDesactivated ? 'désactivés' : 'activés';

      dispatch(changeEnvironmentMetricsPreferenceThunk(param))
        .then(unwrapResult)
        .then(() => {
          enqueueSnackbar(`Collecte et conseils sur la donnée ${status} !`, {
            variant: 'success',
          });
        })
        .catch(() => {
          enqueueSnackbar('Une erreur est survenue', {
            variant: 'error',
          });
        });
    };

  return (
    <div>
      {soundPreference &&
        temperaturePreference &&
        humidityPreference &&
        luminosityPreference && (
          <Card>
            <CardHeader
              title={
                <Stack direction="row" alignItems="center" spacing={1}>
                  <MetricsIcon fontSize="large" />
                  <Typography variant="h5">Données d&apos;environnement</Typography>
                </Stack>
              }
            />
            <CardContent>
              <Typography variant="body1">
                Désactiver la collecte et les conseils sur les données sonores ?
                {soundPreference?.isDesactivated ? (
                  <Switch
                    defaultChecked
                    onChange={handleChange(MetricsType.SOUND)}
                    color="warning"
                  />
                ) : (
                  <Switch
                    onChange={handleChange(MetricsType.SOUND)}
                    color="warning"
                  />
                )}
              </Typography>
              <Typography variant="body1">
                Désactiver la collecte et les conseils sur les données de température
                ?
                {temperaturePreference?.isDesactivated ? (
                  <Switch
                    defaultChecked
                    onChange={handleChange(MetricsType.TEMPERATURE)}
                    color="warning"
                  />
                ) : (
                  <Switch
                    onChange={handleChange(MetricsType.TEMPERATURE)}
                    color="warning"
                  />
                )}
              </Typography>
              <Typography variant="body1">
                Désactiver la collecte et les conseils sur les données
                d&apos;humidité ?
                {humidityPreference?.isDesactivated ? (
                  <Switch
                    defaultChecked
                    onChange={handleChange(MetricsType.HUMIDITY)}
                    color="warning"
                  />
                ) : (
                  <Switch
                    onChange={handleChange(MetricsType.HUMIDITY)}
                    color="warning"
                  />
                )}
              </Typography>
              <Typography variant="body1">
                Désactiver la collecte et les conseils sur les données de luminosité
                ?
                {luminosityPreference?.isDesactivated ? (
                  <Switch
                    defaultChecked
                    onChange={handleChange(MetricsType.LUMINOSITY)}
                    color="warning"
                  />
                ) : (
                  <Switch
                    onChange={handleChange(MetricsType.LUMINOSITY)}
                    color="warning"
                  />
                )}
              </Typography>
            </CardContent>
          </Card>
        )}
    </div>
  );
};
