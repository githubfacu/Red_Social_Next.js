import { useFormContext } from "react-hook-form"

type InputTextProps = {
    label: string
    fieldName: string
    placeholder?: string
    styles?: string
    type: 'text' | 'password'
}

const InputText = ({label, fieldName, type, placeholder, styles}: InputTextProps) => {

    const {register, formState: {errors}} = useFormContext()

    return (
        <div className={`flex flex-col ${styles ?? ''}`}>
            <label>{label}: </label>
            <input
            {...register(fieldName)}
            type={type}
            placeholder={placeholder ?? ''}
            className="px-3 py-2 rounded bg-gray-50 border border-gray-200"
            />
            {errors && errors[fieldName] && <div className="text-red-600 mt-1 text-sm">Este campo es obligatorio</div>}
        </div>
    )
}

export default InputText