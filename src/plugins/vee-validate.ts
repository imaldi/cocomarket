import { configure, defineRule } from "vee-validate";

export function initVeeValidate() {
  configure({
    validateOnBlur: true,
    validateOnChange: true,
    validateOnInput: true,
    validateOnModelUpdate: true,
  });
}

defineRule("checked", (value: any) => {
  if (value == false) {
    return "Please check first!";
  }
  return true;
});

defineRule("required", (value: any) => {
  if (!value || !value.length) {
    return "Please fill in first!";
  }
  return true;
});

defineRule("email", (value: any) => {
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    return "Invalid email";
  }
  return true;
});

defineRule("numeric", (value: any) => {
  if (!/^\d+$/.test(value)) {
    return "Please fill in numbers";
  }
  return true;
});

defineRule("minMax", (value: any, [min, max]: any[]) => {
  const numericValue = Number(value);
  if (numericValue < min) {
    return `Must be greater than ${min}`;
  }
  if (numericValue > max) {
    return `Must be smaller than ${max}`;
  }
  return true;
});

defineRule("minLength", (value: any, [limit]: any[]) => {
  if (value.length < limit) {
    return `At least it should ${limit} character`;
  }
  return true;
});

defineRule("maxLength", (value: any, [limit]: any[]) => {
  if (value.length > limit) {
    return `Maximum must ${limit} character`;
  }
  return true;
});
