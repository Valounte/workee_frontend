import React, { memo } from 'react';

import { useSelector } from 'react-redux';

import { selectDailyFeedback } from '@entities/dailyFeedback/store/selectors/getDailyFeedback.selector';
import { Typography, Stack, Card, CardContent } from '@ui-kit';

import { SatisfactionDegreeIcon } from './feedbackForm/SatisfactionDegree';

interface DailyFeedbackAverageBoxProps {
  teamName?: string;
  teamId?: number;
  averageSatisfactionDegree?: number;
}

const DailyFeedbackAverageBox = memo((props: DailyFeedbackAverageBoxProps) => {
  const { teamName, teamId, averageSatisfactionDegree } = props;
  return (
    <Card key={teamId} sx={{ height: 150, width: 300 }}>
      <CardContent>
        <Typography fontSize={20}>{teamName}</Typography>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={4}
          pt={1}>
          <SatisfactionDegreeIcon value={averageSatisfactionDegree} />
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
