export const createProject = (project) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    //make async calls
    const firestore = getFirestore();
    firestore.collection('projects').add({
      ...project,
      authorFirstName : 'John',
      authorLastName : 'Snow',
      authorId : 12345,
      createdAt : new Date()
    }).then(() => {
      dispatch({type : "CREATE_PROJECT", project});
    }).catch((err) => {
      dispatch({type : "CREATE_PROJECT_ERR", err});
    })

  }
}