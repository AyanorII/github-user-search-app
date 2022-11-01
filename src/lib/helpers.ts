export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const formatDate = (date: Date): string => {
  return new Date().toLocaleDateString("en-uk", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
