import classes from './Input.module.scss'

const Input = ({ value, onChange, placeholder, className = '' }) => {

  return <input className={`${classes.input} ${className}`.trim()} type={'text'}
                value={value} onChange={onChange}
                placeholder={placeholder}/>
}

export default Input