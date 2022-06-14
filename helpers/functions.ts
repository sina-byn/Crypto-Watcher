export const isPositive = (value: number | null): boolean => {
    if (value && value >= 0) {
      return true;
    }
  return false;
};