const useLocalStorage = (key: string): string[] => {
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

export default useLocalStorage;
