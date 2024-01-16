export const formatDateWithDay = (inputDate) => {
  const date = new Date(inputDate);
  const options = { weekday: 'long', month: 'short', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
};
