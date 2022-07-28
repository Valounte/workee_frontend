import { Company } from '../companies/Company';

export interface Job {
  id: number;
  name: string;
  company: Company;
}
