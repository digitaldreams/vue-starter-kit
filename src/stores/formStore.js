import { defineStore } from "pinia";
import { ref, reactive, computed } from "vue";
import required from "@/servies/validators/required";
import length from "@/servies/validators/length";
import others from "@/servies/validators/others";

const useFormStore = defineStore("form", () => {
  const data = reactive({});

  const errors = reactive({});
  const validators = { ...required, ...length, ...others };

  const hasError = (name) => {
    return errors?.[name]?.length > 0;
  };

  const setFormValue = (key, value) => {
    data[key] = value;
  };

  const setFormError = (key, error) => {
    errors[key] = error;
  };

  const handleValidation = (rules, name) => {
    let value = data[name] ?? "";
    for (let rule in rules) {
      let options = rules[rule];
      if (validators.hasOwnProperty(rule)) {
        let result = validators[rule](value, options, data);
        if (result !== true && result?.length > 0) {
          errors[key] = result;
        }
      }
    }
  };

  return {
    data,
    errors,
    hasError,
    setFormError,
    handleValidation,
    setFormValue,
  };
});

export default useFormStore;
