
type RepliesCounterProps = {
    count: number;
    onClick?: () => void;
}

const RepliesCounter = ({count, onClick}: RepliesCounterProps) => {

  if (!count || count == 0) {
    return <div className="link-primary" onClick={onClick}>
        Se quién responda primero
    </div>
  }

    const label = count > 1 ? 'Respuestas' : 'Respuesta'

  return (
    <div className="link-primary" onClick={onClick}>
        {count} {label}
    </div>
  )
}

export default RepliesCounter