import dateFormat from "dateformat";

export const formatDate = date => {
  if (!(date instanceof Date)) {
    return date;
  }
  return dateFormat(date, "dd mmm yyyy");
};
