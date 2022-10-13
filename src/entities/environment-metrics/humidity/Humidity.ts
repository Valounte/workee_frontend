import type { Alert } from '../alert/Alert';

export interface Humidity {
  id: number;
  value: number;
  userId: number;
  humidityAlert: Alert;
  createdAt: Date;
}
