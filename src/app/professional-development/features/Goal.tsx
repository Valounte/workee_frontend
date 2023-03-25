import React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import format from 'date-fns/format';

import { Goal } from "@entities/professional-development/Goal";
import { Box, Typography, LinearProgress, ExpandMoreIcon } from "@ui-kit";


interface MyGoalsProps {
    providedGoal: Goal;
  }

const MyGoals = ({ providedGoal } : MyGoalsProps) => {

  let colorClass;
  if (providedGoal.progression < 35) {
    colorClass = '227,38,54';
  } else if (providedGoal.progression >= 35 && providedGoal.progression < 75) {
    colorClass = '251,164,66';
  } else {
    colorClass = '118,238,198';
  }

  const getFormattedStatus = (nonFormattedStatus: string): string => {
    let status;
    switch (nonFormattedStatus) {
      case 'IN_PROGRESS':
        status = 'En cours';
        break;
      case 'DONE':
        status = 'Terminé';
        break;
      case 'TO_DO':
        status = 'A faire';
        break;
      default:
        status = nonFormattedStatus;
        break;
    }
    return status;
  }

  const startDate = format(new Date(providedGoal.startDate), 'dd MMM yyyy');
  const endDate = format(new Date(providedGoal.endDate), 'dd MMM yyyy');

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Box display="flex" flexDirection="column">
          <Typography variant="h6">{providedGoal.goal}</Typography>
          <Typography variant="body2">
  {`${providedGoal.progression}% complet (${startDate} - ${endDate})`}
</Typography>
<LinearProgress
            variant="determinate"
            value={providedGoal.progression}
            sx={{
              "& .MuiLinearProgress-bar": {
                backgroundColor: `rgb(${colorClass})`
              }
            }}
          />
      </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Box display="flex" flexDirection="column">
          {providedGoal.subGoals.map((subGoal) => (
            <Box key={subGoal.id} display="flex" alignItems="center">
              <Box flexGrow={1}>
                <Typography variant="body2">{subGoal.subGoal}</Typography>
              </Box>
              <Typography variant="body2">{getFormattedStatus(subGoal.status)}</Typography>
            </Box>
          ))}
        </Box>
      </AccordionDetails>
    </Accordion>
);};

export default MyGoals;
