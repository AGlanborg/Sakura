export default function removeZero(text) {
  if (text.charAt(0) == "0") {
    text.replace("0", "");
  }
  return text;
}