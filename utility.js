let stringifyNumber = (originalNumber) =>
  originalNumber < 10
    ? `000${originalNumber}`
    : originalNumber < 100
    ? `00${originalNumber}`
    : originalNumber < 1000
    ? `0${originalNumber}`
    : originalNumber.toString();

exports.stringifyNumber = stringifyNumber;
