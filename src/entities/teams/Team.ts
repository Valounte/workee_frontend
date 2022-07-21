// TODO: a deplacer dans un fichier dans entity/company
interface Company {
  id: number;
  name: string;
}

export interface Team {
  id: number;
  name: string;
  company: Company;
}
