import { useEffect, useRef, useState } from 'react'
import ReactModal from '../../ui/lib/Modal.jsx'
import ReorderableScanList from './components/scanList/ScanList.jsx'
import { mockData } from './components/mockData.js'

const Home = () => {
  const modalRef = useRef(null)
  const [domain, setDomain] = useState('')
  const [scans, setScans] = useState(() => {
    const savedScans = localStorage.getItem('scans')
    return savedScans ? Array.isArray(JSON.parse(savedScans)) ? JSON.parse(
      savedScans) : [] : []
  })

  useEffect(() => {
    if (scans.length > 0)
      localStorage.setItem('scans', JSON.stringify(scans))
  }, [scans])

  const handleScan = () => {

    const mockScanResults = mockData.find(item => item.domainName === domain)

    if (mockScanResults) {
      setScans(prevResults => [...prevResults, mockScanResults])
    } else {
      const uniqueId = `invalid-${Date.now()}`

      setScans(prevResults => [
        ...prevResults, {
          id: uniqueId,
          name: 'Invalid Domain',
          result: 'No valid domain found',
          startTime: new Date().toISOString(),
          endTime: new Date().toISOString(),
          domainName: domain
        }])
    }

    modalRef.current.handleCloseModal()
  }

  return (
    <>
      <header style={{ marginBottom: '40px' }}>
        <button type={'button'} style={{ cursor: 'pointer', zIndex: '999' }}
                onClick={() => modalRef.current.handleOpenModal()}>
          Scan
        </button>
        <ReactModal ref={modalRef}>
          <input
            type="text"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            placeholder="Enter domain"
          />
          <button type={'button'}
                  onClick={() => modalRef.current.handleCloseModal()}>close
          </button>
          <button onClick={handleScan}>search</button>
        </ReactModal>
      </header>
      <main>

        <div>
          <ReorderableScanList scans={scans} setScans={setScans}/>
        </div>
      </main>
    </>
  )
}

export default Home