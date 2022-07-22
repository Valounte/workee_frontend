interface Company {
  id: number;
  name: string;
}

export interface Job {
  id: number;
  name: string;
  company: Company;
}
