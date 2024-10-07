import { useEffect, useRef, useState, useMemo } from 'react'
import ReorderableScanList from './components/scanList/ScanList.jsx'
import Header from '../../layouts/Header.jsx'
import classes from "./Home.module.scss"
import { mockData } from './components/mockData.js'
import {
  showErrorToast,
  showSuccessToast,
  showWarningToast
} from '../../ui/lib/Toast.jsx'
import Loader from '../../ui/lib/Loader.jsx'

const getStoredScans = () => {
  const savedScans = localStorage.getItem('scans')
  return savedScans ? JSON.parse(savedScans) : []
}

const Home = () => {
  const modalRef = useRef(null)
  const [isLoading, setIsLoading] = useState(false)
  const [domain, setDomain] = useState('')
  const [scans, setScans] = useState(getStoredScans)

  useEffect(() => {
    if (scans.length > 0) {
      localStorage.setItem('scans', JSON.stringify(scans))
    }
  }, [scans])

  const mockScanResults = useMemo(
    () => mockData.find(item => item.domainName === domain),
    [domain]
  )

  const handleScan = () => {
    setIsLoading(true)

    setTimeout(() => {
      if (mockScanResults) {
        setScans(prevResults => {
          const isDuplicate = prevResults.some(
            scan => scan.domainName === mockScanResults.domainName
          )

          if (!isDuplicate) {
            showSuccessToast('Scan successful! Domain found.')
            return [...prevResults, mockScanResults]
          }

          showWarningToast('Domain already scanned.')
          return prevResults
        })
      } else {
        showErrorToast('Scan failed! Invalid domain.')
      }

      setIsLoading(false)
      modalRef.current.handleCloseModal()
    }, 2000)
  }

  return (
    <>
      {isLoading && <Loader/>}
      <Header
        ref={modalRef}
        domain={domain}
        setDomain={setDomain}
        handleScan={handleScan}
        isLoading={isLoading}
      />
      <main className={classes.main}>
        {scans?.length ? <ReorderableScanList scans={scans} setScans={setScans}/> :
          <p className={classes['no-domain-scanned']}>No Scanned Domains found</p>}
      </main>
    </>
  )
}

export default Home
