export const initialData = {
  // Define individual tasks with their properties
  tasks: {
    1: {
      id: "1",
      image: "/img-1.jpg",
      blur: "L36JOiX.01z-hfiam+T000pJ_NOF",
      tags: ["art", "design"],
    },
    2: {
      id: "2",
      image: "/img-2.jpg",
      blur: "L36JOiX.01z-hfiam+T000pJ_NOF",
      tags: ["art", "design", "paint"],
    },
    3: {
      id: "3",
      image: "/img-3.jpg",
      blur: "L36JOiX.01z-hfiam+T000pJ_NOF",
      tags: ["art", "design"],
    },
    4: {
      id: "4",
      image: "/img-4.jpg",
      blur: "L36JOiX.01z-hfiam+T000pJ_NOF",
      tags: ["art", "design", "paint"],
    },

    5: {
      id: "5",
      image: "/img-5.jpg",
      blur: "L36JOiX.01z-hfiam+T000pJ_NOF",
      tags: ["art", "design"],
    },
    6: {
      id: "6",
      image: "/img-6.jpg",
      blur: "L36JOiX.01z-hfiam+T000pJ_NOF",
      tags: ["art", "design"],
    },
    7: {
      id: "7",
      image: "/img-7.jpg",
      blur: "L36JOiX.01z-hfiam+T000pJ_NOF",
      tags: ["art", "design"],
    },
    8: {
      id: "8",
      image: "/img-8.jpg",
      blur: "L36JOiX.01z-hfiam+T000pJ_NOF",
      tags: ["art", "design", "paint"],
    },
    9: {
      id: "9",
      image: "/img-9.jpg",
      blur: "L36JOiX.01z-hfiam+T000pJ_NOF",
      tags: ["exterior", "design", "house"],
    },
  },
  // Define columns with associated task
  columns: {
    "column-1": {
      id: "column-1",
      title: "column-1",
      taskIds: ["1", "2", "3"],
    },
    "column-2": {
      id: "column-2",
      //   title: "column-2",
      taskIds: ["4", "5", "6"],
    },
    "column-3": {
      id: "column-3",
      //   title: "column-3",
      taskIds: ["7", "8", "9"],
    },
  },
  // Define the order of columns
  tasksOrder: ["column-1", "column-2", "column-3"],
};
