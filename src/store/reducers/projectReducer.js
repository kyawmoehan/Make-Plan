const initState = {
  projects: [
    { id: "1", title: "hello", content: "testing kjdfjdjkdjkdsjkldfsj" },
    { id: "2", title: "world", content: "testing kjdfjdjkdjkdsjkldfsj" },
    { id: "3", title: "hi", content: "testing kjdfjdjkdjkdsjkldfsj" },
    { id: "4", title: "testing", content: "testing kjdfjdjkdjkdsjkldfsj" },
  ],
};
const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("create", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.error);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
