export default class Validator {
  constructor(rules) {
    this.rules = rules;
    this.data = {};
    this.errors = {};
  }

  required(value, required, name) {
    if (value === true || value > 0) {
      return true;
    }

    if (
      name &&
      this.rules[name] &&
      Object.keys(this.rules[name]).includes("numeric")
    ) {
      return this.numeric(value) === true
        ? true
        : "The :attribute field is required.";
    }

    return value != null && value.length > 0
      ? true
      : "The :attribute field is required.";
  }

  //The field under validation must be present and not empty if the anotherfield field is equal to any value.
  requiredIf(value, options, name) {
    let field = options?.field;
    let fieldExpectedValue = options?.value;
    let fieldCurrentValue =
      typeof this.data !== "undefined" ? this.data[field] : "undefined";

    if (typeof fieldCurrentValue !== "undefined") {
      if (Array.isArray(fieldExpectedValue)) {
        if (fieldExpectedValue.includes(fieldCurrentValue) === true) {
          return this.required(value, true, name) === true
            ? true
            : "The :attribute field is required when " +
                field +
                " is " +
                fieldExpectedValue.join(", ") +
                ".";
        }
      } else {
        if (fieldCurrentValue == fieldExpectedValue) {
          return this.required(value, true, name) === true
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

  requiredWith(value, field) {
    let fieldCurrentValue =
      typeof this.data !== "undefined" ? this.data[field] : "";
    if (typeof fieldCurrentValue !== "undefined") {
      return value != null && value.length > 0
        ? true
        : "The :attribute field is required when " + field + " is present.";
    }
    return "";
  }

  requiredWithout(value, options) {
    let field = options?.field;
    let fieldExpectedValue = options?.value;
    let fieldCurrentValue =
      typeof this.data !== "undefined" ? this.data[field] : "";

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

  email(value, boolean) {
    if (value == null || value.length === 0) {
      return "";
    }
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return emailPattern.test(value) === false
      ? "The :attribute must be a valid email address."
      : true;
  }

  in(value, array) {
    if (value == null || value.length === 0) {
      return "";
    }
    return array.includes(value) !== true
      ? "The selected :attribute is invalid."
      : true;
  }

  numberBetween(value, between = [0, 1]) {
    return Number.isInteger(parseInt(value)) &&
      Number(value) >= between[0] &&
      Number(value) <= between[1]
      ? true
      : "The :attribute must be between " + between[0] + " and " + between[1];
  }
  numeric(value, boolean) {
    if (value == null || value.length === 0) {
      return "";
    }
    return Number.isInteger(parseInt(value))
      ? true
      : "The :attribute must be a number.";
  }

  url(value, boolean) {
    if (value == null || value.length === 0) {
      return "";
    }
    let urlPattern =
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

    return urlPattern.test(value) === false
      ? "The :attribute format is invalid."
      : true;
  }

  date(value, format) {
    if (value == null || value.length === 0) {
      return "";
    }
    return typeof Date.parse(value) !== "NaN"
      ? true
      : "The :attribute is not a valid date.";
  }

  boolean(value, param) {
    return typeof value === "boolean";
  }

  check(name, value, data) {
    if (typeof this.rules[name] !== undefined) {
      this.data = data;
      let rules = this.rules[name];
      for (let method in rules) {
        if (rules.hasOwnProperty(method)) {
          let param = rules[method];
          let result = method in this ? this[method](value, param, name) : true;

          if (result !== true) {
            if (Array.isArray(result)) {
              if (rules.hasOwnProperty("multipleFiles")) {
                return result;
              } else {
                return result[0];
              }
            } else if (result?.hasOwnProperty("message")) {
              return result?.message;
            }
            return result;
          }
        }
      }
      return true;
    }

    return "";
  }

  checkAll(data) {
    let errors = {};
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        let result = this.check(key, data[key], data);
        if (result !== true && result?.length > 0) {
          errors[key] = result;
        }
      }
    }

    return Object.keys(errors).length === 0 ? true : errors;
  }
}
