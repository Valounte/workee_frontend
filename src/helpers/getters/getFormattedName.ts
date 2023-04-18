import upperFirst from 'lodash.upperfirst';

export const getFormattedName = (name?: string | null) =>
  upperFirst(name?.replaceAll('_', ' '));
