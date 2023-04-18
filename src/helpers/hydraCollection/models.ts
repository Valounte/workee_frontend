export type HydraMember<DataModel, Type extends string = string> = {
  '@context'?: string;
  '@id': string;
  '@type': Type;
} & DataModel;

export type HydraCollection<DataModel> = {
  '@context': string;
  '@id': string;
  '@type': string;
  'hydra:member': HydraMember<DataModel>[];
  'hydra:totalItems': number;
  'hydra:view': {
    '@id': string;
    '@type': string;
    'hydra:first': string;
    'hydra:last': string;
    'hydra:previous': string;
    'hydra:next': string;
  };
};

export type HydraError = {
  '@context': string;
  '@type': string;
  'hydra:description': string;
  'hydra:title': string;
  violations: string[];
};
