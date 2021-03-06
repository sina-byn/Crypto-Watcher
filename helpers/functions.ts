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

export const formatDate = (entryDate: string): string => {
  if (entryDate) {
    const date: Date = new Date(entryDate);
    const day: number = date.getDay();
    const month: number = date.getMonth();
    const year: number = date.getFullYear();
    let monthName: string;

    switch (month) {
      case 0:
        monthName = "January";
        break;
      case 1:
        monthName = "February";
        break;
      case 2:
        monthName = "March";
        break;
      case 3:
        monthName = "April";
        break;
      case 4:
        monthName = "May";
        break;
      case 5:
        monthName = "June";
        break;
      case 6:
        monthName = "July";
        break;
      case 7:
        monthName = "August";
        break;
      case 8:
        monthName = "September";
        break;
      case 9:
        monthName = "October";
        break;
      case 10:
        monthName = "November";
        break;
      default:
        monthName = "December";
        break;
    }

    return monthName + day + "," + year;
  }
  return "";
};