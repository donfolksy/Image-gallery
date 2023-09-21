import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { initialData } from "./InitialData";
import Column from "./Column";

const Board = () => {
  const [data, setData] = useState(initialData);

  const handleDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    // if user tries to drop in an unknown destination
    if (!destination) {
      toast.error("Image could not be moved");
      return;
    }

    // if the user drags and drop back in same position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      toast.success("Image dropped at same position");
      return;
    }

    // if user is dragging a column
    if (type === "column") {
      const newColumnOrder = Array.from(data.tasksOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newData = {
        ...data,
        tasksOrder: newColumnOrder,
      };
      setData(newData);
      return;
    }

    // if the user drops within same column but in different position
    const sourceCol = data.columns[source.droppableId];
    const destinationCol = data.columns[destination.droppableId];

    // Check if sourceCol and destinationCol exist
    if (!sourceCol || !destinationCol) {
      console.error("Source column or destination column not found.");
      return;
    }

    if (sourceCol === destinationCol) {
      const newTaskIds = Array.from(sourceCol.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...sourceCol,
        taskIds: newTaskIds,
      };

      const newData = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      };
      setData(newData);
      toast.success("Image dropped successfully");
      return;
    }

    // if the user movers from one column to another
    const startTaskIds = Array.from(sourceCol.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...sourceCol,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(destinationCol.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...destinationCol,
      taskIds: finishTaskIds,
    };

    const newColumnState = {
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    setData(newColumnState);
    toast.success("Image dropped successfully");
    return;
  };
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="gallery-content"
          >
            {data.tasksOrder.map((columnId, index) => {
              const column = data.columns[columnId];
              const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);
              return (
                <Column
                  key={column.id}
                  column={column}
                  tasks={tasks}
                  index={index}
                />
              );
            })}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Board;
