import React, { memo } from 'react';

import styled from '@emotion/styled';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { IconContainerProps, Rating, RatingProps } from '@mui/material';
import { IconBase } from 'react-icons';

import { Typography } from '@ui-kit';

const StyledRating = styled(Rating)(() => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: 'lightgrey',
  },
}));

const customIcons: {
  [index: string]: {
    icon: React.ReactElement;
    label: string;
  };
} = {
  0: {
    icon: <SentimentNeutralIcon color="disabled" fontSize="large" />,
    label: "Pas encore d'avis reçus",
  },
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" fontSize="large" />,
    label: "L'équipe n'est vraiment satisfaite",
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" fontSize="large" />,
    label: "L'équipe est insastisfaite",
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" fontSize="large" />,
    label: "L'équipe est neutre",
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" fontSize="large" />,
    label: "L'équipe est satisfaite",
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" fontSize="large" />,
    label: "L'équipe est très satisfaite",
  },
};

const IconContainer = memo((props: IconContainerProps) => {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
});

export const SatisfactionDegree = memo((props: RatingProps) => (
  <StyledRating
    IconContainerComponent={IconContainer}
    getLabelText={(value: number) => customIcons[value].label}
    highlightSelectedOnly
    {...props}
  />
));

interface SatisfactionDegreeIconProps {
  value: number | undefined;
}

export const SatisfactionDegreeIcon = memo(
  ({ value }: SatisfactionDegreeIconProps) => {
    if (value === undefined) {
      return null;
    }
    return (
      <>
        <IconBase size={80}>{customIcons[Math.round(value)].icon}</IconBase>
        <Typography>{customIcons[Math.round(value)].label}</Typography>
      </>
    );
  }
);
