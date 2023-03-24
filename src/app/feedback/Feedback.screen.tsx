import React, { SyntheticEvent, useEffect, useState } from 'react';

import { CircularProgress } from '@mui/material';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { uniq } from 'lodash';
import { useSelector } from 'react-redux';
import { useAsync } from 'react-use';

import { selectToken } from '@entities/authentification/store/selectors/selectToken.selector';
import { selectDailyFeedback } from '@entities/dailyFeedback/store/selectors/getDailyFeedback.selector';
import { getDailyFeedbackThunk } from '@entities/dailyFeedback/store/thunks/getDailyFeedback.thunk';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  TabPanel,
  Card,
  CardContent,
  styled,
  Stack,
  TeamIcon,
} from '@ui-kit';
import { useAppDispatch } from 'src/store/useAppDispatch';

import { DailyFeedbackAverage } from './features/DailyFeedbackAverage';
import { DailyFeedbackDataGrid } from './features/DailyFeedbackDataGrid';
import { FeedbackForm } from './features/feedbackForm/FeedbackForm';
import { setSelectedTeams } from './store/slice';

const StyledTabs = styled(Tabs)`
  border-bottom: '1px solid grey';
`;

const StyledTab = styled(Tab)`
  margin: 2px 0 !important;
`;

const FeedbackScreen = () => {
  const dispatch = useAppDispatch();
  const token = useSelector(selectToken);

  const dailyFeedbacks = useSelector(selectDailyFeedback);

  const [tabValue, setTabValue] = useState('view');

  const dateToday = format(new Date(), 'dd MMMM yyyy', { locale: fr });

  const allTeams = uniq(
    dailyFeedbacks.map(feedback => {
      if (feedback.team?.name) {
        return feedback.team?.name;
      }
      return '';
    })
  );

  useEffect(() => {
    dispatch(setSelectedTeams(allTeams));
  }, [dispatch, allTeams]);

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
    <>
      <Box height="15vh" p={2}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <TeamIcon fontSize="large" />
          <Typography variant="h4">Avis de la semaine - {dateToday}</Typography>
        </Stack>
        <StyledTabs
          value={tabValue}
          onChange={handleChangeTab}
          indicatorColor="secondary">
          <StyledTab
            label="Voir les avis par équipe"
            value="view"
            disableRipple
            sx={{ textTransform: 'none' }}
          />
          <StyledTab
            label="Envoyer un avis"
            value="send"
            disableRipple
            sx={{ textTransform: 'none' }}
          />
        </StyledTabs>
      </Box>
      <Box p={2}>
        <TabPanel value={tabValue} index="view">
          {loading ? (
            <CircularProgress color="secondary" />
          ) : (
            <Stack direction="column" spacing={2}>
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
    </>
  );
};

export default FeedbackScreen;
