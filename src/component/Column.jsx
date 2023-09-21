import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { useSearch } from "./SearchContext";

const Column = ({ column, tasks, index }) => {
  // Access the search state from the SearchContext
  const { searchQuery } = useSearch();

  // Filter tasks based on the search query
  const filteredTasks = tasks.filter((task) =>
    task.tags.some((tag) =>
      tag.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );
  console.log(searchQuery);
  console.log("Search Query:", searchQuery);

  console.log(filteredTasks);

  return (
    <Draggable draggableId={column.id} isDragDisabled index={index}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps}>
          <Droppable droppableId={column.id} type="task">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {filteredTasks.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <div ref={provided.innerRef} {...provided.draggableProps}>
                        <div className="gallery-img container ">
                          <img
                            {...provided.dragHandleProps}
                            src={task.image}
                            alt=""
                          />
                        </div>
                        <div className="d-flex justify-content-center gap-2">{task.tags.map((tag) => (
                          <p key={tag}>{tag}</p>
                        ))}</div>
                      </div>
                    )}
                  </Draggable>
                ))}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default Column;
