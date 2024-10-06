import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import classes from './ScanList.module.scss'
import { Link } from 'react-router-dom'

const ReorderableScanList = ({ scans, setScans }) => {

  const handleOnDragEnd = (result) => {
    if (!result.destination) return

    const items = Array.from(scans)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    setScans(items)
  }

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
              <Draggable key={scan.id} draggableId={scan.id.toString()}
                         index={index}>
                {(provided) => (
                  <div
                    className={classes.draggable}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <h3>{scan.name}</h3>
                    <p>{scan.result}</p>
                    <p
                      className={classes['draggable__domain']}>Domain: <span>{scan.domainName}</span>
                    </p>
                    <p>Start Time: {new Date(
                      scan.startTime).toLocaleString()}</p>
                    <p>End Time: {new Date(scan.endTime).toLocaleString()}</p>
                    <Link to={`/scan/${scan.id}`}>Details Page</Link>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default ReorderableScanList
