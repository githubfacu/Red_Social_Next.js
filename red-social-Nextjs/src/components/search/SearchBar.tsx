'use client'
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useForm } from "react-hook-form"

type FormData = {
    query: string;
}

type SearchBarProps = {
    initialQuery?: string;
}

const SearchBar = ({initialQuery}: SearchBarProps) => {
    
    const router = useRouter()
    const {register, handleSubmit, setValue} = useForm<FormData>({
        defaultValues: {
            query: initialQuery
        }
    })


    useEffect(() => {
        setValue('query', initialQuery ?? '')
    }, [initialQuery, setValue])

    const onSubmit = (data: FormData) => {
        router.push(`/?query=${data.query ?? ''}&type=hash`)
    }

  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)} className="flex w-full mb-4">
            <input
                {...register('query')}
                type='text'
                placeholder={'buscar por hash...'}
                className="flex-grow mr-4 px-3 py-2 rounded bg-gray-50 border border-gray-200"
            />
            <button type="submit" className="button-primary">BUSCAR</button>
        </form>
    </>
  )
}

export default SearchBar