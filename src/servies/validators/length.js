export function min(value, options, data) {
  if (value == null) {
    return "";
  }
  return Number.isInteger(parseInt(value)) && value >= options
    ? true
    : "The :attribute must be at least " + options;
}

export function max(value, options, data) {
  if (value == null || value.length === 0) {
    return "";
  }
  return Number.isInteger(parseInt(value)) && value <= options
    ? true
    : "The :attribute must not be greater than " + options;
}

export function minLength(val, options, data) {
  let value = val?.replace(/<(.|\n)*?>/g, "").trim() || null;
  if (value == null || value.length === 0) {
    return "";
  }

  return value.length >= options
    ? true
    : " The :attribute must be at least " + options + " characters";
}

export function maxLength(val, options, data) {
  let value = val?.replace(/<(.|\n)*?>/g, "").trim() || null;
  if (value == null || value.length === 0) {
    return "";
  }

  return value.length < options
    ? true
    : " The :attribute must not be greater than " + options + " characters.";
}

export default { min, max, minLength, maxLength };
