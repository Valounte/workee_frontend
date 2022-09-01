import type { Company } from '../companies/Company';
import type { Job } from '../jobs/Job';
import type { Team } from '../teams/Team';

export interface User {
  id: number;
  email: string;
  lastname: string;
  firstname: string;
  company: Company;
  teams: Team[];
  job: Job;
}
