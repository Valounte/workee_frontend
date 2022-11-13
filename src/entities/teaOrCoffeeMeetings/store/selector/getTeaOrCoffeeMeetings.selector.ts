import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../../store/store';
import { teaOrCoffeeMeetingAdapter } from '../slice';

const teaOrCoffeeAdapterSelectors = teaOrCoffeeMeetingAdapter.getSelectors();

export const selectTeaOrCoffeeMeetings = createSelector(
  (state: RootState) => state.teaOrCoffeeMeeting,
  entity => teaOrCoffeeAdapterSelectors.selectAll(entity)
);
