import { useEffect, useRef, useState } from 'react'
import ReorderableScanList from './components/scanList/ScanList.jsx'
import Header from '../../layouts/Header.jsx'
import { mockData } from './components/mockData.js'
import { showErrorToast, showSuccessToast } from '../../ui/lib/Toast.jsx'
import Loader from '../../ui/lib/Loader.jsx'

const Home = () => {
  const modalRef = useRef(null)
  const [isLoading, setIsLoading] = useState(false)
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
    setIsLoading(true)
    const mockScanResults = mockData.find(item => item.domainName === domain)

    setTimeout(() => {
      if (mockScanResults) {
        setScans(prevResults => [...prevResults, mockScanResults])
        showSuccessToast('Scan successful! Domain found.')
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
          }
        ])
        showErrorToast('Scan failed! Invalid domain.')
      }

      setIsLoading(false)
      modalRef.current.handleCloseModal()
    }, 3000)
  }

  return (
    <>
      {!isLoading && <Loader/>}
      <Header ref={modalRef} domain={domain} setDomain={setDomain}
              handleScan={handleScan} isLoading={isLoading}/>
      <main>
          <ReorderableScanList scans={scans} setScans={setScans}/>
      </main>
    </>
  )
}

export default Home