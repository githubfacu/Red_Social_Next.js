
type PostCounter = {
    count: number
}

const PostsCounter = ({count}: PostCounter) => {

    const label = count > 1 ? 'Posteos' : 'Posteo'

  return (
    <div>
        {count} {label}
    </div>
  )
}

export default PostsCounter