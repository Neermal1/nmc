export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const day = date.getDate();
  const suffix = day === 1 ? "st" : day === 2 ? "nd" : day === 3 ? "rd" : "th";
  return `${day}${suffix} ${new Intl.DateTimeFormat("en-US", {
    month: "long",
  }).format(date)}, ${date.getFullYear()}`;
}
