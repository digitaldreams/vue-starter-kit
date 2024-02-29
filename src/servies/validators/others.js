export function email(value, options, data) {
  if (value == null || value.length === 0) {
    return "";
  }
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  return emailPattern.test(value) === false
    ? "The :attribute must be a valid email address."
    : true;
}

export function within(value, options, data) {
  if (value == null || value.length === 0) {
    return "";
  }
  return array.includes(value) !== true
    ? "The selected :attribute is invalid."
    : true;
}

export function numberBetween(value, options, data) {
  return Number.isInteger(parseInt(value)) &&
    Number(value) >= options[0] &&
    Number(value) <= options[1]
    ? true
    : "The :attribute must be between " + options[0] + " and " + options[1];
}
export function numeric(value, options, data) {
  if (value == null || value.length === 0) {
    return "";
  }
  return Number.isInteger(parseInt(value))
    ? true
    : "The :attribute must be a number.";
}

export function url(value, options, data) {
  if (value == null || value.length === 0) {
    return "";
  }
  let urlPattern =
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

  return urlPattern.test(value) === false
    ? "The :attribute format is invalid."
    : true;
}

export function date(value, options, data) {
  if (value == null || value.length === 0) {
    return "";
  }
  return typeof Date.parse(value) !== "NaN"
    ? true
    : "The :attribute is not a valid date.";
}

export function boolean(value, options, data) {
  return typeof value === "boolean";
}

export default { email, within, numberBetween, numeric, url, date, boolean };
