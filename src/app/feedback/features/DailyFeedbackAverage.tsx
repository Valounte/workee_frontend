import React, { memo, useCallback } from 'react';

import { useSelector } from 'react-redux';

import { selectDailyFeedback } from '@entities/dailyFeedback/store/selectors/getDailyFeedback.selector';
import { Typography, Stack, Card, CardContent, CardHeader, styled } from '@ui-kit';

import { SatisfactionDegreeIcon } from './feedbackForm/SatisfactionDegree';
import { useAppDispatch } from '../../../store/useAppDispatch';
import { selectSelectedTeams } from '../store/selectors/getSelectedTeams';
import { addSelectedTeam, removeSelectedTeam } from '../store/slice';

interface DailyFeedbackAverageBoxProps {
  teamName?: string;
  teamId?: number;
  averageSatisfactionDegree?: number;
}

const StyledCard = styled(Card)`
  height: 25vh;
`;
const DailyFeedbackAverageBox = memo((props: DailyFeedbackAverageBoxProps) => {
  const dispatch = useAppDispatch();
  const { teamName, teamId, averageSatisfactionDegree } = props;
  const isSelectedTeam = useSelector(selectSelectedTeams).includes(teamName || '');
  const backgroundColor = isSelectedTeam ? undefined : 'hsl(20 76.68% 96.79%)';

  const handleClickCard = useCallback(() => {
    if (!isSelectedTeam) return dispatch(addSelectedTeam(teamName || ''));
    return dispatch(removeSelectedTeam(teamName || ''));
  }, [dispatch, isSelectedTeam, teamName]);

  return (
    <StyledCard
      key={teamId}
      sx={{ height: 150, width: 300, backgroundColor }}
      onClick={handleClickCard}>
      <CardHeader
        title={
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            justifyContent="space-between">
            <Typography variant="h5">{teamName}</Typography>
            <Stack direction="row" alignItems="flex-end">
              <Typography fontSize={28}>{averageSatisfactionDegree}</Typography>
              <Typography fontSize={16}>/5</Typography>
            </Stack>
          </Stack>
        }
      />
      <CardContent>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={4}
          pt={1}>
          <SatisfactionDegreeIcon
            value={averageSatisfactionDegree === 0 ? 0 : averageSatisfactionDegree}
          />
        </Stack>
      </CardContent>
    </StyledCard>
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
