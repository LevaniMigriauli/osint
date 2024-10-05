import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import classes from './ScanList.module.scss';

export const scanResults = [
  {
    id: '123',
    name: 'Scan 1',
    result: 'No issues found',
    startTime: '2024-10-05T09:30:00',
    endTime: '2024-10-05T09:45:00',
    domainName: 'example.com',
  },
  {
    id: '124',
    name: 'Scan 2',
    result: 'Vulnerabilities detected',
    startTime: '2024-10-05T10:00:00',
    endTime: '2024-10-05T10:15:00',
    domainName: 'vulnerable-site.com',
  },
  {
    id: '125',
    name: 'Scan 3',
    result: 'No issues found',
    startTime: '2024-10-05T10:30:00',
    endTime: '2024-10-05T10:45:00',
    domainName: 'secure-site.org',
  },
];

const ReorderableScanList = () => {
  const [scans, setScans] = useState(() => {
    const savedScans = localStorage.getItem('scans');
    return savedScans ? JSON.parse(savedScans) : scanResults;
  });

  useEffect(() => {
    localStorage.setItem('scans', JSON.stringify(scans));
  }, [scans]);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(scans);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setScans(items);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="scans">
        {(provided) => (
          <div
            className={classes['grid-container']}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {scans.map((scan, index) => (
              <Draggable key={scan.id} draggableId={scan.id.toString()} index={index}>
                {(provided) => (
                  <div
                    className={classes.draggable}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <h3>{scan.name}</h3>
                    <p>{scan.result}</p>
                    <p>Domain: {scan.domainName}</p>
                    <p>Start Time: {new Date(scan.startTime).toLocaleString()}</p>
                    <p>End Time: {new Date(scan.endTime).toLocaleString()}</p>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ReorderableScanList;
