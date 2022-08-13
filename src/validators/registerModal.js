import * as yup from "yup"

export const formSchema = yup.object().shape({
    title: yup.string()
    .required("Nome obrigatório")
    .min(3, "Deve conter no mínimo 3 caracteres")
    .max(15, "Deve conter no máximo 15 caracteres"),
    status: yup.string().required("Status obrigatório"),
});