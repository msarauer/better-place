export const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export const getPercentage = (bigNum, smallNum) => {
  return Math.round((smallNum / bigNum) * 100);
};

export const dateFormatter = (date) => {
  const newDate = new Date(date);
  return newDate.toString().split(" ").splice(0, 4).join(" ");
};
