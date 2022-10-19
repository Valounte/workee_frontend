import type { Alert } from '../alert/Alert';

export interface Humidity {
  id: number;
  value: number;
  userId: number;
  alert: Alert;
  createdAt: Date;
}
