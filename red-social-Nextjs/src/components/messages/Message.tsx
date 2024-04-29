import { MessageType } from "@/types/message.types";
import Image from "next/image";
import Link from "next/link"

type MessageProps = {
    message: MessageType;
}

const Message = ({message} : MessageProps) => {

  return (

    <div className="flex">
              <div className="rounded-full p-5 bg-gray-400 w-16 text-center mb-4">
                <span className="font-semibold text-sm">RR</span>
              </div>
          
              <div className="flex flex-col ml-4 mt-2">
                  <div className="flex">
                      <h3>
                        {message.user}
                      </h3>
                      <div className="text-md ml-2 text-gray-600 cursor-pointer">
                        @<Link href={`/users/${message.username}`}>{message.username}</Link>
                      </div>
                  </div>

                  <p>{message.message}</p>

                  <div>
                    <Image
                      src='https://vignette.wikia.nocookie.net/raccoons/images/0/06/Rocky_Raccoon.png/revision/latest?cb=20190524130645'
                      alt="Imagen remota"
                      width={300}
                      height={300}
                    />
                  </div>
              </div>

          </div>
  )
}

export default Message