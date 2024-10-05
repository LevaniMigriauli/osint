import { useRef } from 'react'
import ReactModal from '../../ui/lib/Modal.jsx'
import classes from './Home.module.scss'
import ReorderableScanList from './components/ScanList.jsx'

const Home = () => {
  const modalRef = useRef(null)

  return (
    <>
      <header>
        <button type={'button'}
                onClick={() => modalRef.current.handleOpenModal()}>
          Scan
        </button>
        <ReactModal ref={modalRef}>
          <input/>
          <button type={'button'}
                  onClick={() => modalRef.current.handleCloseModal()}>close
          </button>
          <button>search</button>
        </ReactModal>
      </header>
      <main>

        <div>
          <ReorderableScanList/>
        </div>
      </main>
    </>
  )
}

export default Home