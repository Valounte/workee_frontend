import React, { SyntheticEvent, useState } from 'react';

import { CircularProgress } from '@mui/material';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { useSelector } from 'react-redux';
import { useAsync } from 'react-use';

import { selectToken } from '@entities/authentification/store/selectors/selectToken.selector';
import { getDailyFeedbackThunk } from '@entities/dailyFeedback/store/thunks/getDailyFeedback.thunk';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  TabPanel,
  Stack,
  Card,
  CardContent,
} from '@ui-kit';
import { useAppDispatch } from 'src/store/useAppDispatch';

import { DailyFeedbackAverage } from './features/DailyFeedbackAverage';
import { DailyFeedbackDataGrid } from './features/DailyFeedbackDataGrid';
import { FeedbackForm } from './features/feedbackForm/FeedbackForm';

const FeedbackScreen = () => {
  const dispatch = useAppDispatch();
  const token = useSelector(selectToken);

  const [tabValue, setTabValue] = useState('view');

  const dateToday = format(new Date(), 'dd MMMM yyyy', { locale: fr });

  const { loading, error } = useAsync(() =>
    dispatch(getDailyFeedbackThunk({ token }))
  );

  if (error) {
    return <Typography>Error - Try again</Typography>;
  }

  const handleChangeTab = (event: SyntheticEvent, newTabValue: string) => {
    setTabValue(newTabValue);
  };

  return (
    <Box maxWidth="100%" pt={2}>
      <Typography variant="h4">Avis du jour</Typography>
      <Typography variant="subtitle1">
        Parlez nous de votre journée du {dateToday}
      </Typography>
      <Tabs
        value={tabValue}
        onChange={handleChangeTab}
        indicatorColor="secondary"
        sx={{ paddingY: 2 }}>
        <Tab
          label="Voir les avis par équipe"
          value="view"
          disableRipple
          sx={{ textTransform: 'none' }}
        />
        <Tab
          label="Envoyer un avis"
          value="send"
          disableRipple
          sx={{ textTransform: 'none' }}
        />
      </Tabs>

      <TabPanel value={tabValue} index="view">
        {loading ? (
          <CircularProgress color="secondary" />
        ) : (
          <Stack direction="column" spacing={3}>
            <DailyFeedbackAverage />
            <DailyFeedbackDataGrid />
          </Stack>
        )}
      </TabPanel>
      <TabPanel value={tabValue} index="send">
        <Card
          sx={{
            maxWidth: '350px',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <CardContent>
            <FeedbackForm />
          </CardContent>
        </Card>
      </TabPanel>
    </Box>
  );
};

export default FeedbackScreen;
