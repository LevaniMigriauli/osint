import { forwardRef } from 'react'
import ReactModal from '../ui/lib/Modal.jsx'
import classes from './Header.module.scss'
import ptImg from '../assets/images/favicon.png'
import Button from '../ui/lib/Button.jsx'
import Input from '../ui/lib/Input.jsx'

const Header = forwardRef(({ domain, setDomain, handleScan }, ref) => {

  const validationSchema = {
    domainName: {
      regex: /^(?!-)([A-Za-z0-9-]{1,63}\.)+[A-Za-z]{2,6}$/, // Domain name validation regex
      errorMessage: 'Please enter a valid domain name.'
    }
  }
  const isValidInput = (inputName, inputValue) => {
    const validationRule = validationSchema[inputName]

    if (!inputValue) {
      return {
        isValid: false,
        errorMessage: 'Input cannot be empty'
      }
    }

    if (!validationRule.regex.test(inputValue)) {
      return {
        isValid: false,
        errorMessage: validationRule.errorMessage
      }
    }

    return {
      isValid: true,
      message: ''
    }
  }

  const isValidDomain = isValidInput('domainName', domain)

  return (
    <header className={classes.header}>
      <img src={ptImg} alt={'ptBox logo'}/>
      <h1>OSINT</h1>
      <Button className={classes['header__btn-action']}
              onClick={() => ref.current.handleOpenModal()}>
        Scan
      </Button>
      <ReactModal ref={ref}>
        <div className={classes['header-modal']}>
          <Input className={classes['header-modal__input']}
                 name={'domainName'}
                 isValidInput={isValidDomain} value={domain}
                 onChange={(e) => setDomain(e.target.value)}
                 placeholder="Enter domain"/>
          <button className={classes['header-modal__btn-close']} type={'button'}
                  onClick={() => ref.current.handleCloseModal()}>Close
          </button>
          <Button onClick={handleScan} disabled={!isValidDomain.isValid}>Search</Button>
        </div>
      </ReactModal>
    </header>
  )
})

export default Header