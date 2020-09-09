const initState = {
  projects: [
    { id: "1", title: "hello", content: "testing kjdfjdjkdjkdsjkldfsj" },
    { id: "2", title: "world", content: "testing kjdfjdjkdjkdsjkldfsj" },
    { id: "3", title: "hi", content: "testing kjdfjdjkdjkdsjkldfsj" },
    { id: "4", title: "testing", content: "testing kjdfjdjkdjkdsjkldfsj" },
  ],
};
const projectReducer = (state = initState, action) => {
  return state;
};

export default projectReducer;
