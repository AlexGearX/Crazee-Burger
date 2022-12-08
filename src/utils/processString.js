export default function truncate(str, length, useWordBoundary) {
  if (str.length <= length) {
    return str;
  }
  const subString = str.slice(0, length - 1); // the original check
  return (useWordBoundary ? subString.slice(0, subString.lastIndexOf(" ")) : subString) + "...";
}
