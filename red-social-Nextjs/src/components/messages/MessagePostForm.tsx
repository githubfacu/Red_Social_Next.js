'use client'
import messagesApi from "@/services/messages/messages.service"
import { data } from "autoprefixer"
import Image from "next/image"
import { useEffect } from "react"
import { useForm } from "react-hook-form"

type MessagePostFormProps = {
    parentId?: string
}

type FormData = {
    message: string
}

const MessagePostForm = ({parentId}: MessagePostFormProps) => {

    const {register, handleSubmit, resetField, setFocus} = useForm<FormData>()

    useEffect(() => {
        setFocus('message')
    }, [])

    const onSubmit = async (data: FormData) => {
        const response = await messagesApi.postMessages(data.message, parentId)
        resetField('message')
        setFocus('message')
    }

  return (
    <div className="mb-4 grid grid-cols-12">

        <div className="w-full h-full mt-1 mb-4 text-center relative col-span-2 flex items-center justify-center">
            <Image
                className="rounded-full"
                src='/rocky_raccoon.jpg'
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
                    <button className="button-primary uppercase font-semibold w-fit">Postear</button>
                </div>                
            </form>

        </div>


    </div>
  )
}

export default MessagePostForm