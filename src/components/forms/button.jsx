/* eslint-disable react/prop-types */
const Button = ({type='button',name='Submit', btnClass='primary',className,onClick,icon}) => {
    const btnStyle=btnClass==='primary'?' bg-blue-b1 text-white-0 hover:bg-blue-500':'btn-outline text-blue-b1'
  return (
    <button className={`btn ${btnStyle} normal-case w-full ${className}`} type={type} onClick={onClick}>
      <div>
        {icon}
      </div>
      <div>
      {name}
      </div>
      </button>
  )
}

export default Button;