import type { Alert } from '../alert/Alert';

export interface Temperature {
  id: number;
  value: number;
  userId: number;
  alert: Alert;
  createdAt: Date;
}
