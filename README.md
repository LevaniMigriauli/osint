
# OSINT Domain Scan App

## Overview
This is an OSINT (Open Source Intelligence) domain scanning application that allows users to scan domain names.

## Technologies Used
- **Vite** for front-end development
- **React** for building the user interface
- **Docker** for containerization

## Running the Project with Docker

### 1. Pull the Docker Image
You can directly pull the pre-built Docker image from Docker Hub:
```bash
docker pull qsmrkhef16/osint:version1.0.0
```

2. Run the Docker Container
```bash
docker run -p 3000:3000 qsmrkhef16/osint:version1.0.0
```

**SCAN** according to domain names:

- example.com
- vulnerable-site.com
- secure-site.org
- example-secure.com
- test-domain.com
- riskysite.net
- good-site.com

Mock Data
```javascript
export const mockData = [
{
id: '123',
name: 'Scan 1',
result: 'No issues found',
startTime: '2024-10-05T09:30:00',
endTime: '2024-10-05T09:45:00',
domainName: 'example.com',
scanType: 'Full Scan',
scanStatus: 'Completed',
severity: 'Low',
},
{
id: '124',
name: 'Scan 2',
result: 'Vulnerabilities detected',
startTime: '2024-10-05T10:00:00',
endTime: '2024-10-05T10:15:00',
domainName: 'vulnerable-site.com',
scanType: 'Quick Scan',
scanStatus: 'Completed',
severity: 'High',
},
{
id: '125',
name: 'Scan 3',
result: 'No issues found',
startTime: '2024-10-05T10:30:00',
endTime: '2024-10-05T10:45:00',
domainName: 'secure-site.org',
scanType: 'Full Scan',
scanStatus: 'Completed',
severity: 'Low',
},
{
id: '126',
name: 'Scan 4',
result: 'Few warnings detected',
startTime: '2024-10-05T11:00:00',
endTime: '2024-10-05T11:20:00',
domainName: 'example-secure.com',
scanType: 'Quick Scan',
scanStatus: 'Completed',
severity: 'Medium',
},
{
id: '127',
name: 'Scan 5',
result: 'No issues found',
startTime: '2024-10-05T11:30:00',
endTime: '2024-10-05T11:45:00',
domainName: 'test-domain.com',
scanType: 'Full Scan',
scanStatus: 'Completed',
severity: 'Low',
},
{
id: '128',
name: 'Scan 6',
result: 'Vulnerabilities detected',
startTime: '2024-10-05T12:00:00',
endTime: '2024-10-05T12:30:00',
domainName: 'riskysite.net',
scanType: 'Full Scan',
scanStatus: 'Completed',
severity: 'Critical',
},
{
id: '129',
name: 'Scan 7',
result: 'No issues found',
startTime: '2024-10-05T12:45:00',
endTime: '2024-10-05T13:00:00',
domainName: 'good-site.com',
scanType: 'Quick Scan',
scanStatus: 'Completed',
severity: 'Low',
},
];
```

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
