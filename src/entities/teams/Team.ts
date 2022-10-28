import type { Company } from '../companies/Company';

export interface Team {
  id: number;
  name: string;
  company: Company;
  description: string;
}
