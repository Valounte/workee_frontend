import type { Alert } from '../alert/Alert';

export interface Luminosity {
  id: number;
  value: number;
  userId: number;
  alert: Alert;
  createdAt: Date;
}
