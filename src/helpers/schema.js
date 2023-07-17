import * as yup from "yup";

export const registerUserSchema = yup
  .object()
  .shape({
    name: yup.string().required("this field is required"),
    email: yup.string().nullable().email().required("this field is required"),
    password: yup.string().min(8).max(16).required("this field is required"),
  })
  .required();

export const loginUserSchema = yup
  .object()
  .shape({
    email: yup.string().nullable().email().required("This field is required"),
    password: yup.string().min(8).required("This field is required"),
  })
  .required();
