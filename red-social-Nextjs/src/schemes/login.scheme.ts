import * as yup from "yup"

const LoginSchema = yup.object({
    username: yup.string().required(),
    password: yup.string().required(),
}).required()


export default LoginSchema