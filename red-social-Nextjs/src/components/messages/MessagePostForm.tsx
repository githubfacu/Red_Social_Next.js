'use client'
import useMessages from "@/contexts/MessageContent"
import { UserType } from "@/types/user.types"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useForm } from "react-hook-form"

type MessagePostFormProps = {
    parentId?: string,
    currentUser?: UserType
}

type FormData = {
    message: string
}

const MessagePostForm = ({parentId, currentUser}: MessagePostFormProps) => {
    const router = useRouter()
    const {postMessages} = useMessages()
    const {register, handleSubmit, resetField, setFocus} = useForm<FormData>()

    useEffect(() => {
        setFocus('message')
    }, [setFocus])

    const onSubmit = async (data: FormData) => {
        await postMessages(data.message, parentId)
        resetField('message')
        setFocus('message')
    }

    const goToLogin = () => {
        router.push('/login')
        router.refresh()
    }

    if (!currentUser) {
        return <div className="mb-4 flex flex-col items-center">
            <h3>Iniciá sesión para escribir un mensaje</h3>
            <button onClick={goToLogin} className="button-primary mt-4 w-fit">Iniciar sesión</button>
        </div>
    }

  return (
    <div className="mb-4 grid grid-cols-12">

        <div className="w-full h-full mt-1 mb-4 text-center relative col-span-2 flex items-center justify-center">
            <Image
                className="rounded-full"
                src={currentUser.photoUrl}
                alt=''
                priority
                width={60}
                height={60}
            />
        </div>
        <div className="flex flex-col ml-4 mt-2 col-span-10">

            <form onSubmit={handleSubmit(onSubmit)}>
                <textarea
                    rows={4}
                    placeholder="Escribe un Post"
                    className="mb-4 px-3 py-2 resize-none w-full rounded bg-gray-50 border border-gray-200"
                    {...register('message', {
                        required: true
                    })}
                />

                <div className="flex justify-end">
                    <button type="submit" className="button-primary font-semibold w-fit">POSTEAR</button>
                </div>                
            </form>

        </div>


    </div>
  )
}

export default MessagePostForm