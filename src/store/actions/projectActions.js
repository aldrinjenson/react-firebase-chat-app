// export const createProject = (project) => {
//     return {
//         type: 'ADD_PROJECT',
//         project:project
//     }
// }

// When using thunk

export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // MAke async call
    const fireStore = getFirestore();
    const profile = getState().firebase.profile
    const authorId = getState().firebase.auth.uid
    fireStore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorID: authorId,
        createdAt: new Date()
      })
      .then(() =>
        dispatch({
          type: "CREATE_PROJECT",
          project
        })
      )
      .catch(err =>
        dispatch({
          type: "CREATE_PROJECT_ERROR",
          err
        })
      );
  };
};
