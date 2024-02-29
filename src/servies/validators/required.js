export function required(value, options, data) {
  if (value === true || value > 0) {
    return true;
  }

  return value != null && value.length > 0
    ? true
    : "The :attribute field is required.";
}

//The field under validation must be present and not empty if the anotherfield field is equal to any value.
export function requiredIf(value, options, data) {
  let field = options?.field;
  let fieldExpectedValue = options?.value;
  let fieldCurrentValue =
    typeof data !== "undefined" ? data[field] : "undefined";

  if (typeof fieldCurrentValue !== "undefined") {
    if (Array.isArray(fieldExpectedValue)) {
      if (fieldExpectedValue.includes(fieldCurrentValue) === true) {
        return required(value, true, data) === true
          ? true
          : "The :attribute field is required when " +
              field +
              " is " +
              fieldExpectedValue.join(", ") +
              ".";
      }
    } else {
      if (fieldCurrentValue == fieldExpectedValue) {
        return required(value, true, data) === true
          ? true
          : "The :attribute field is required when " +
              field +
              " is " +
              fieldExpectedValue +
              ".";
      }
    }
  }
  return "";
}

export function requiredWith(value, options, data) {
  let fieldCurrentValue = data[options] ?? "";
  if (typeof fieldCurrentValue !== "undefined") {
    return value != null && value.length > 0
      ? true
      : "The :attribute field is required when " + options + " is present.";
  }
  return "";
}

export function requiredWithout(value, options, data) {
  let field = options?.field;
  let fieldExpectedValue = options?.value;
  let fieldCurrentValue = data[field] ?? "";

  if (typeof fieldCurrentValue !== undefined) {
    if (fieldExpectedValue !== undefined) {
      if (fieldCurrentValue !== fieldExpectedValue) {
        return value != null && value.length > 0
          ? true
          : "The :attribute field is required when " +
              field +
              " is " +
              fieldExpectedValue +
              " is not present.";
      }
    } else {
      if (fieldCurrentValue == null || fieldCurrentValue?.length === 0) {
        return value != null && value.length > 0
          ? true
          : "The :attribute field is required when " +
              field +
              " is not present.";
      }
    }
  }

  return "";
}

export default { required, requiredIf, requiredWith, requiredWithout };
