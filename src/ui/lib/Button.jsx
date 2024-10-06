import classes from './Button.module.scss'

const Button = ({ children, type = 'button', onClick, className = '' }) => {
  return (
    <button
      className={`${classes.button} ${className}`.trim()}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
