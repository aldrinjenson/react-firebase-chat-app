const INIT_STATE = {
  projects: [
    {
      id: 1,
      title: "Yoshi gets a banana",
      content: "How legendary Yoshi discovered banana"
    },
    {
      id: 2,
      title: "Lami's coconut adventure",
      content: "Cocounuts are fun, especially when old Lami is around"
    },
    {
      id: 3,
      title: "Dingo meets babyJumbo",
      content: "Story of the immortal friendhip of Dingo and babYjumboo"
    }
  ]
};

const projectReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project:", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create preoject error", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
