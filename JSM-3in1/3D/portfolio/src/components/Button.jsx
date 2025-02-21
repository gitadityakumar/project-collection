
const Button = ({name,isBeam=false,contaienrClass}) => {
  return (
    <button className={`btn ${contaienrClass}`}>
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className='btn-ping'>
            <span className='btn-ping_dot'></span>
          </span>
        </span>
      )}
      {name}</button>
  )
}

export default Button