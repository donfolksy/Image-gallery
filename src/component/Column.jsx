import React, { useEffect, useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { useSearch } from "./SearchContext";
import { Blurhash } from "react-blurhash";

const Column = ({ column, tasks, index }) => {
  // Access the search state from the SearchContext
  const { searchQuery } = useSearch();
  const [blur, setBlur] = useState(true);

  useEffect(() => {
    const imgPromises = tasks.map((task) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          resolve();
        };
        img.src = task.image;
      });
    });

    // Wait for all images to load
    Promise.all(imgPromises).then(() => {
      setBlur(false); // All images have loaded, so turn off blur
    });
  }, [tasks]); // Ensure useEffect runs whenever tasks change

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
                          {blur ? (
                            <Blurhash
                              hash={task.blur}
                              width="100%"
                              height="250px"
                              resolutionX={32}
                              resolutionY={32}
                              punch={1}
                            />
                          ) : (
                            <img
                              {...provided.dragHandleProps}
                              src={task.image}
                              alt=""
                            />
                          )}
                        </div>

                        <div className="d-flex justify-content-center gap-2">
                          {task.tags.map((tag) => (
                            <p key={tag}>{tag}</p>
                          ))}
                        </div>
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
