function epochTimeFunction(num) {
  let output = new Date(num);
  let dateStamp =
    output.getMonth() + 1 + "/" + output.getDate() + "/" + output.getFullYear();
  return dateStamp;
}

export default epochTimeFunction;
