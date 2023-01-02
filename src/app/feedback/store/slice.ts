import { createSlice } from '@reduxjs/toolkit';

interface FeedbackFeatureSlice {
  selectedTeams: string[];
}

const initialState: FeedbackFeatureSlice = {
  selectedTeams: [],
};

export const feedbackFeatureSlice = createSlice({
  name: 'feedbackFeature',
  initialState,
  reducers: {
    setSelectedTeams: (state, { payload }: { payload: string[] }) => {
      state.selectedTeams = payload;
    },
    addSelectedTeam: (state, { payload }: { payload: string }) => {
      state.selectedTeams = [...state.selectedTeams, payload];
    },
    removeSelectedTeam: (state, { payload }: { payload: string }) => {
      state.selectedTeams = state.selectedTeams.filter(team => team !== payload);
    },
  },
});

export const { setSelectedTeams, addSelectedTeam, removeSelectedTeam } =
  feedbackFeatureSlice.actions;
