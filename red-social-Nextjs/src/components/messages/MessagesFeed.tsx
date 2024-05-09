import InfiniteScroll from "react-infinite-scroll-component"
import Message from "./Message"
import useMessages from "@/contexts/MessageContent"


const MessageFeed = () => {

    const {messagePage, messages, fetchNextPage, refresh} = useMessages()

  return (
      <>
        <InfiniteScroll
            dataLength={messages.length}
            next={fetchNextPage}
            hasMore={!messagePage.pagination.last}
            loader={<h4>Cargando...</h4>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Ya! No hoy más mensajes.</b>
              </p>
            }
            refreshFunction={refresh}
            pullDownToRefresh={false}
            pullDownToRefreshThreshold={50}
            pullDownToRefreshContent={
              <h3 style={{ textAlign: 'center' }}>&#8595; Arrastra hacia abajo</h3>
            }
            releaseToRefreshContent={
              <h3 style={{ textAlign: 'center' }}>&#8593; Suelta</h3>
            }>

            {messages.map((message, index)=> 
                <Message key={`${index}`} message={message}/>)
            }
        </InfiniteScroll>
      </>
  )
}

export default MessageFeed