import * as yup from "yup"

const RegisterSchema = yup.object({
    username: yup.string().required(),
    password: yup.string().required(),
    name: yup.string().required(),
    photoUrl: yup.string().required(),
}).required()


export default RegisterSchema