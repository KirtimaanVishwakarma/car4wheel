/* eslint-disable react/prop-types */
const Button = ({type='button',name='Submit', btnClass='primary',className}) => {
    const btnStyle=btnClass==='primary'?' bg-blue-b1 text-white-0 hover:bg-blue-500':'btn-outline text-blue-b1'
  return (
    <button className={`btn ${btnStyle} w-full ${className}`} type={type}>{name}</button>
  )
}

export default Button;