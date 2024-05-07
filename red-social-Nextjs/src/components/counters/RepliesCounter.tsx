
type RepliesCounterProps = {
    count: number;
    onClick?: () => void;
}

const RepliesCounter = ({count, onClick}: RepliesCounterProps) => {

    const label = count === 1 ? 'Respuesta' : 'Respuestas'

  return (
    <div className="link-primary" onClick={onClick}>
        {count} {label}
    </div>
  )
}

export default RepliesCounter