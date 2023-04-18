export const isAnArrayWithoutUndefinedValues = <Values>(
  array: (Values | undefined)[]
): array is Values[] => !array.includes(undefined);
