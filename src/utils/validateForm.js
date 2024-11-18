import * as yup from 'yup';

let userSchema = yup.object({
  fullname: yup.string().required("El nombre es requerido"),
  phone: yup.mixed().required("El teléfono es requerido"),
  email: yup.string()
    .email("Formato de correo inválido")
    .required("El correo electrónico es requerido"),
  emailConfirmation: yup.string()
    .oneOf([yup.ref('email')], "El correo de confirmación debe coincidir con el correo electrónico")
    .required("El correo de confirmación es requerido")
});

const validateForm = async (dataForm) => {
  try {
    await userSchema.validate(dataForm);
    return { status: "success" };
  } catch (error) {
    return { status: "error", message: error.message };
  }
};

export default validateForm;