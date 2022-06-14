export const isPositive = (value: number | null): boolean => {
  if (value && value >= 0) {
    return true;
  }
  return false;
};

export const getLocalStorage = (key: string): string[] => {
  const stringifiedList: string | null = localStorage.getItem(key);
  let list: string[] = [];
  if (stringifiedList) {
    list = JSON.parse(stringifiedList);
    if (list.length) {
      return list;
    }
  }

  return [];
};