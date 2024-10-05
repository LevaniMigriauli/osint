import { Link, useParams } from 'react-router-dom'
import { mockData } from '../mockData.js'

const ScanDetails = () => {
  const { id } = useParams();
  const scan = mockData.find(scan => scan.id.toString() === id);

  return (
    <div>
      <Link to={'/'}>Home Page</Link>
      {scan ? (
        <div>
          <h2>{scan.name}</h2>
          <p><strong>Result:</strong> {scan.result}</p>
          <p><strong>Start Time:</strong> {new Date(scan.startTime).toLocaleString()}</p>
          <p><strong>End Time:</strong> {new Date(scan.endTime).toLocaleString()}</p>
          <p><strong>Domain Name:</strong> {scan.domainName}</p>
        </div>
      ) : (
        <p>Scan not found</p>
      )}
    </div>
  );
};

export default ScanDetails