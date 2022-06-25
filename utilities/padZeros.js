export default function padZeros(number) {
  let stringedNumber = number.toString();
  return "#" + stringedNumber.padStart(3, "0");
}
