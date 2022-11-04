import type { Company } from '../companies/Company';

/* eslint-disable no-unused-vars */
enum PermissionContextEnum {
  user = 'USER',
  team = 'TEAM',
  job = 'JOB',
}

enum PermissionNameEnum {
  teamCreate = 'CREATE_TEAM',
  jobCreate = 'CREATE_JOB',
  userCreate = 'CREATE_USER',
}
/* eslint-enable no-unused-vars */

interface Permission {
  id: number;
  name: PermissionNameEnum;
  context: PermissionContextEnum;
}

export interface Job {
  id: number;
  name: string;
  company: Company;
  permissions: Permission[];
  description: string;
}
