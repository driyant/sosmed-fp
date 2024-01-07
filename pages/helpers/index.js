export function formattedDate(inputDateString) {
  const date = new Date(inputDateString);
  const options = { day: "2-digit", month: "short", year: "numeric" };
  return date.toLocaleDateString("en-GB", options);
}
