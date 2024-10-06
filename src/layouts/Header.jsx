import { forwardRef } from 'react'
import ReactModal from '../ui/lib/Modal.jsx'
import ptImg from '../assets/images/favicon.png'
import classes from './Header.module.scss'
import Button from '../ui/lib/Button.jsx'

const Header = forwardRef(({ domain, setDomain, handleScan }, ref) => {

  return (
    <header className={classes.header}>
      <img src={ptImg} alt={'ptBox logo'}/>
      <h1>OSINT</h1>
      <Button className={classes['header__btn-action']} onClick={() => ref.current.handleOpenModal()}>
        Scan
      </Button>
      <ReactModal ref={ref}>
        <input
          type="text"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          placeholder="Enter domain"
        />
        <button type={'button'}
                onClick={() => ref.current.handleCloseModal()}>close
        </button>
        <button onClick={handleScan}>search</button>
      </ReactModal>
    </header>
  )
})

export default Header