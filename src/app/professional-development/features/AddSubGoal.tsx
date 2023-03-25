import React, { useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import InputBase from '@mui/material/InputBase/InputBase';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import { useSelector } from 'react-redux';

import { selectToken } from '@entities/authentification/store/selectors/selectToken.selector';
import { addSubGoalThunk } from '@entities/professional-development/store/thunks/addSubGoal.thunk';
import { getGoalsThunk } from '@entities/professional-development/store/thunks/getGoals.thunk';
import { styled, Tooltip } from '@ui-kit';
import { useAppDispatch } from 'src/store/useAppDispatch';

const StyledDiv = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const StyledAddIcon = styled(AddIcon)({
  color: 'orange',
  marginRight: '8px',
});

const StyledInput = styled(InputBase)({
  flexGrow: 1,
  marginLeft: '8px',
  marginRight: '8px',
});

interface InputProps {
  goalId: number;
}

function AddSubgoal(props: InputProps): JSX.Element {
  const { goalId } = props;
  const { enqueueSnackbar } = useSnackbar();
  const [subgoal, setSubgoal] = useState('');
  const token = useSelector(selectToken);
  const dispatch = useAppDispatch();

  const handleSubgoalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubgoal(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      console.log(subgoal);
      console.log(goalId);
      dispatch(
        addSubGoalThunk({
          subGoal:subgoal,
          goalId,
          token,
        })
      )
        .then(unwrapResult)
        .then(() => {
          enqueueSnackbar('Sous-objectif crée', {
            variant: 'success',
          });
          dispatch(getGoalsThunk({ token }))
          .then(() => unwrapResult)
          .catch(() => {
            console.error('error');
          });
        })
        .catch(() => {
          enqueueSnackbar('Erreur', {
            variant: 'error',
          });
        });

        setSubgoal('');
    }
  };

  return (
    <StyledDiv>
      <Tooltip title="Ajouter un sous-objectif">
        <span>
          <StyledAddIcon />
        </span>
      </Tooltip>
      <StyledInput
        placeholder="Ajouter un sous-objectif"
        value={subgoal}
        onChange={handleSubgoalChange}
        onKeyPress={handleKeyPress}
      />
    </StyledDiv>
  );
}

export default AddSubgoal;