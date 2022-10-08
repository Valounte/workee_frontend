import type { Alert } from '../alert/Alert';

export interface Sound {
  id: number;
  value: number;
  userId: number;
  alert: Alert;
  createdAt: Date;
}
