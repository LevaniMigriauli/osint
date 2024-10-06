import { useState } from 'react'
import classes from './Input.module.scss'

const Input = ({
  value,
  onChange,
  placeholder,
  className = '',
  isValidInput,
  name
}) => {
  const [isTouched, setIsTouched] = useState(false)

  const showError = isTouched && !isValidInput.isValid

  return (
    <div className={`${classes['input-container']} ${className}`.trim()}>
      <label className={classes.label}>Domain name</label>
      <input className={`${classes.input} ${showError
        ? classes['err-border']
        : ''}`}
             name={name}
             type={'text'}
             value={value}
             onChange={onChange}
             onBlur={() => setIsTouched(true)}
             placeholder={placeholder}/>
      {showError && <p className={classes.err}>{isValidInput.errorMessage}</p>}
    </div>
  )
}

export default Input