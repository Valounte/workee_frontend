import axios from 'axios';

import { TeaOrCoffeeMeeting } from '../TeaOrCoffeeMeeting';

export interface getTeaOrCoffeeMeetingParams {
  token: string;
}

export const getTeaOrCoffeeMeetingService = ({
  token,
}: getTeaOrCoffeeMeetingParams) =>
  axios.get<TeaOrCoffeeMeeting[]>('api/tea-or-coffee-meeting', {
    headers: {
      Authorization: `${token}`,
    },
  });
