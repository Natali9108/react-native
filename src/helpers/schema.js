import * as yup from "yup";

const requiredMessage = "This field is required";

export const registerUserSchema = yup
  .object()
  .shape({
    name: yup.string().required(requiredMessage),
    email: yup.string().nullable().email().required(requiredMessage),
    password: yup.string().min(8).max(16).required(requiredMessage),
  })
  .required();

export const loginUserSchema = yup
  .object()
  .shape({
    email: yup.string().nullable().email().required(requiredMessage),
    password: yup.string().min(8).required(requiredMessage),
  })
  .required();

export const photoParamsSchema = yup.object().shape({
  name: yup.string().max(20).required(requiredMessage),
  location: yup.string().required(requiredMessage),
});
