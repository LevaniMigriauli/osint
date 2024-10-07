import { Link, useParams } from 'react-router-dom'
import { mockData } from '../mockData.js'
import classes from './ScanDetails.module.scss'

const ScanDetails = () => {
  const { id } = useParams()
  const scan = mockData.find(scan => scan.id.toString() === id)

  return (
    <div className={classes.details}>
      <Link to={'/'}>Home Page</Link>
      <div>
        <h2>{scan.name}</h2>
        <p><strong>Domain Name:</strong> {scan.domainName}</p>
        <p><strong>Start Time:</strong> {new Date(
          scan.startTime).toLocaleString()}</p>
        <p><strong>End Time:</strong> {new Date(scan.endTime).toLocaleString()}
        </p>
        <p><strong>Result:</strong> {scan.result}</p>
        <p><strong>Scan Status:</strong> {scan.scanStatus}</p>
        <p><strong>Scan Type:</strong> {scan.scanType}</p>
        <p><strong>Severity:</strong> {scan.severity}</p>
      </div>
    </div>
  )
}

export default ScanDetails