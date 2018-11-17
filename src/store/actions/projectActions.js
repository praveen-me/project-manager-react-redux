export const createProject = (project) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    //make async calls
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const id = getState().firebase.auth.uid;

    firestore.collection('projects').add({
      ...project,
      authorFirstName : profile.firstName,
      authorLastName : profile.lastName,
      authorId : id,
      createdAt : new Date()
    }).then(() => {
      dispatch({type : "CREATE_PROJECT", project});
    }).catch((err) => {
      dispatch({type : "CREATE_PROJECT_ERR", err});
    })

  }
}