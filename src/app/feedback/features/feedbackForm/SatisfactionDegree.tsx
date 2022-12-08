import React, { memo } from 'react';

import styled from '@emotion/styled';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { IconContainerProps, Rating, RatingProps } from '@mui/material';
import { IconBase } from 'react-icons';

const StyledRating = styled(Rating)(() => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: 'grey',
  },
}));

const customIcons: {
  [index: string]: {
    icon: React.ReactElement;
    label: string;
  };
} = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" fontSize="large" />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" fontSize="large" />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" fontSize="large" />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" fontSize="large" />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" fontSize="large" />,
    label: 'Very Satisfied',
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
    return <IconBase size={80}>{customIcons[Math.round(value)].icon}</IconBase>;
  }
);
