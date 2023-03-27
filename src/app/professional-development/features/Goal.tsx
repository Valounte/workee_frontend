import React from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import format from 'date-fns/format';

import { Goal } from '@entities/professional-development/Goal';
import {
  Box,
  Typography,
  LinearProgress,
  ExpandMoreIcon,
  Chip,
  Divider,
} from '@ui-kit';

import AddSubgoal from './AddSubGoal';
import EditSubGoal from './EditSubGoal';

interface MyGoalsProps {
  providedGoal: Goal;
  userId?: number;
}

const MyGoals = ({ providedGoal, userId }: MyGoalsProps) => {
  let colorClass;
  if (providedGoal.progression < 35) {
    colorClass = '227,38,54';
  } else if (providedGoal.progression >= 35 && providedGoal.progression < 75) {
    colorClass = '251,164,66';
  } else {
    colorClass = '118,238,198';
  }

  const getFormattedStatus = (nonFormattedStatus: string): string => {
    switch (nonFormattedStatus) {
      case 'IN_PROGRESS':
        return 'En cours';
      case 'DONE':
        return 'Terminé';
      case 'TO_DO':
        return 'A faire';
      default:
        return 'Inconnu';
    }
  };

  const getChipColor = (
    nonFormattedStatus: string
  ): 'warning' | 'success' | 'error' | 'info' => {
    switch (nonFormattedStatus) {
      case 'IN_PROGRESS':
        return 'warning';
      case 'DONE':
        return 'success';
      case 'TO_DO':
        return 'error';
      default:
        return 'info';
    }
  };

  const startDate = format(new Date(providedGoal.startDate), 'dd MMM yyyy');
  const endDate = format(new Date(providedGoal.endDate), 'dd MMM yyyy');

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Box display="flex" flexDirection="column">
          <Typography variant="h6">{providedGoal.goal}</Typography>
          <Box py={1}>
            <Typography variant="body2">
              {`${providedGoal.progression}% terminé (${startDate} - ${endDate})`}
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={providedGoal.progression}
            sx={{
              '& .MuiLinearProgress-bar': {
                backgroundColor: `rgb(${colorClass})`,
              },
            }}
          />
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Box display="flex" flexDirection="column">
          {providedGoal.subGoals.map((subGoal, index) => (
            <React.Fragment key={subGoal.id}>
              <Box
                key={subGoal.id}
                display="flex"
                alignItems="center"
                sx={{ marginBottom: 0.5 }}>
                <Box flexGrow={1}>
                  <Typography variant="body2">{subGoal.subGoal}</Typography>
                </Box>
                <Chip
                  label={getFormattedStatus(subGoal.status)}
                  color={getChipColor(subGoal.status)}
                  variant="outlined"
                />
                <EditSubGoal
                  subGoalName={subGoal.subGoal}
                  status={subGoal.status}
                  subGoalId={subGoal.id}
                  userId={userId}
                />
              </Box>
              {index !== providedGoal.subGoals.length - 1 && (
                <Divider sx={{ my: 0.5 }} />
              )}
            </React.Fragment>
          ))}
        </Box>
        <AddSubgoal goalId={providedGoal.id} />
      </AccordionDetails>
    </Accordion>
  );
};

export default MyGoals;
