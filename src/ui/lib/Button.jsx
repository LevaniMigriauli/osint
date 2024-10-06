import classes from './Button.module.scss'

const Button = ({ children, type = 'button', onClick, className = '' , disabled}) => {
  return (
    <button
      className={`${classes.button} ${className}`.trim()}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
