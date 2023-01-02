import React, { memo, useCallback } from 'react';

import { useSelector } from 'react-redux';

import { selectDailyFeedback } from '@entities/dailyFeedback/store/selectors/getDailyFeedback.selector';
import { Typography, Stack, Card, CardContent } from '@ui-kit';

import { useAppDispatch } from '../../../store/useAppDispatch';
import { selectSelectedTeams } from '../store/selectors/getSelectedTeams';
import { addSelectedTeam, removeSelectedTeam } from '../store/slice';
import { SatisfactionDegreeIcon } from './feedbackForm/SatisfactionDegree';

interface DailyFeedbackAverageBoxProps {
  teamName?: string;
  teamId?: number;
  averageSatisfactionDegree?: number;
}

const DailyFeedbackAverageBox = memo((props: DailyFeedbackAverageBoxProps) => {
  const dispatch = useAppDispatch();
  const { teamName, teamId, averageSatisfactionDegree } = props;
  const isSelectedTeam = useSelector(selectSelectedTeams).includes(teamName || '');
  const backgroundColor = isSelectedTeam ? 'grey.200' : undefined;

  const handleClickCard = useCallback(() => {
    if (!isSelectedTeam) return dispatch(addSelectedTeam(teamName || ''));
    return dispatch(removeSelectedTeam(teamName || ''));
  }, [dispatch, isSelectedTeam, teamName]);

  return (
    <Card
      key={teamId}
      sx={{ height: 150, width: 300, backgroundColor }}
      onClick={handleClickCard}>
      <CardContent>
        <Typography fontSize={20}>{teamName}</Typography>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={4}
          pt={1}>
          <SatisfactionDegreeIcon
            value={averageSatisfactionDegree === 0 ? 1 : averageSatisfactionDegree}
          />
          <Stack direction="row" alignItems="flex-end">
            <Typography fontSize={28}>{averageSatisfactionDegree}</Typography>
            <Typography fontSize={16}>/5</Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
});

export const DailyFeedbackAverage = () => {
  const dailyFeedbacks = useSelector(selectDailyFeedback);
  return (
    <Stack direction="row" spacing={4}>
      {dailyFeedbacks.map(feedback => {
        const { averageSatisfactionDegree, team } = feedback;
        return (
          <DailyFeedbackAverageBox
            teamName={team?.name}
            teamId={team?.id}
            averageSatisfactionDegree={averageSatisfactionDegree}
          />
        );
      })}
    </Stack>
  );
};
