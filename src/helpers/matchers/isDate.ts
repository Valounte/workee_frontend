/* istanbul ignore file */
export const isDate = (date: any): date is Date => {
  try {
    Date.parse(date);
    return true;
  } catch {
    return false;
  }
};
